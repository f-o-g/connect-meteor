import React from 'react'
import PureRenderFilter from './PureRenderFilter'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const wrapWithConnectMeteor = (WrappedComponent, doSubscribe, getData) => {
  const ConnectMeteor = React.createClass({
    mixins: [ReactMeteorData], // eslint-disable-line no-undef
    getMeteorData() {
      const subscriptions = doSubscribe(this.props)
      return getData(this.props, subscriptions)
    },
    render() {
      return (
        <PureRenderFilter {...this.data} {...this.props}>
          <WrappedComponent/>
        </PureRenderFilter>
      )
    }
  })

  ConnectMeteor.displayName = `ConnectMeteor(${getDisplayName(WrappedComponent)})`
  ConnectMeteor.WrappedComponent = WrappedComponent

  return ConnectMeteor
}

export default function connectMeteor(doSubscribe, getData) {
  return (WrappedComponent) => {
    return wrapWithConnectMeteor(WrappedComponent, doSubscribe, getData)
  }
}