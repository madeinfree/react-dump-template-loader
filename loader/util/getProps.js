module.exports = function getProps(props) {
  if (!props) return {}
  var mapProps = props.split(',')
  var PropsObj = {}
  mapProps.forEach(function(p) {
    switch(p.split(':')[1]) {
      case 'string':
        Object.assign(PropsObj, { [p.split(':')[0]]: 'React.PropTypes.string' })
        break;
    }
  })
  return PropsObj
}
