import React from 'react'
import PureRenderFilter from './PureRenderFilter'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const wrapWithConnectMeteor = (WrappedComponent, subscribe, mapCollectionsToProps, pure) => {
  const ConnectMeteor = React.createClass({
    mixins: [ReactMeteorData], // eslint-disable-line no-undef
    getMeteorData() {
      const subscriptions = subscribe(this.props)
      return mapCollectionsToProps(this.props, subscriptions)
    },
    render() {
			return pure === true ?
				<PureRenderFilter>
					<WrappedComponent {...this.data} {...this.props}/>
				</PureRenderFilter>
				:
				<WrappedComponent {...this.data} {...this.props}/>
		}
  })

  ConnectMeteor.displayName = `ConnectMeteor(${getDisplayName(WrappedComponent)})`
  ConnectMeteor.WrappedComponent = WrappedComponent

  return ConnectMeteor
}

export default function connectMeteor(subscribe, mapCollectionsToProps, pure = true) {
  return (WrappedComponent) => {
    return wrapWithConnectMeteor(WrappedComponent, subscribe, mapCollectionsToProps, pure)
  }
}