var getState = require('../util/getState')
var getProps = require('../util/getProps')

module.exports = function(setting) {
  return `
    import React from 'react'
    const ${setting['displayname$']} = React.createClass({
      propTypes: ${JSON.stringify(getProps(setting['props$']), null, 4)},
      getInitialState () {
        return ${JSON.stringify(getState(setting['state$']), null, 4)}
      },
      render() {
        return ${setting['render$']}
      }
    })
    module.exports = ${setting['displayname$']}
  `
}
