import React, { Component, cloneElement } from 'react'
import shallowEqual from '../utils/shallowEqual'

class PureRenderFilter extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    if (!shallowEqual(nextProps, this.props)) {
      this.haveOwnPropsChanged = true
    }
  }
  shouldComponentUpdate() {
    return this.haveOwnPropsChanged
  }
  componentWillUnmount() {
    this.clearCache()
  }
  clearCache() {
    this.haveOwnPropsChanged = true
    this.renderedElement = null
  }
  render() {
    this.haveOwnPropsChanged = false

    this.renderedElement = cloneElement(this.props.children, this.props)

    return this.renderedElement
  }
}

PureRenderFilter.displayName = `PureRenderFilter`
PureRenderFilter.propTypes = {
	children: React.PropTypes.node
}

export default PureRenderFilter

