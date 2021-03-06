var React = require('react');

let chain = (a,b) => (...args) => {
  a && a(...args)
  b && b(...args)
}

class Dismiss extends React.Component {

  static propTypes = {
    component:  React.PropTypes.oneOfType([
                  React.PropTypes.string,
                  React.PropTypes.func
                ])
  }

  static defaultProps = {
    component: 'button',
  }

  // static contextTypes = {
  //   onModalHide: React.PropTypes.func
  // }

  parentContext(){
    return this._reactInternalInstance._context
  }

  render() {
    let {
        component: Tag
      , children
      , ...props } = this.props

    return (
      <Tag {...props} onClick={chain(props.onClick, this.parentContext().onModalHide)}>
        { children }
      </Tag>
    );
  }
}

module.exports = Dismiss