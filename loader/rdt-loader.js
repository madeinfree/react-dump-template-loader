var template = require('./react-template/template')

var source_reg = /\[.*\]/g
var scope_reg = /\(.*\)/g
var replace_render_reg = /(?!\w)\s+(?!\w)/g

module.exports = function(source, map) {
  source = source.replace(replace_render_reg, '').replace(/\]\[/g, ']\n[').match(source_reg)
  var default_options = ['displayname$', 'state$', 'props$', 'render$']
  var setting = {}
  source.forEach(function(key) {
    var set = default_options.forEach(function(option) {
      if (!~key.indexOf(option)) return
      if (~key.indexOf('render')) {
        setting[option.toLowerCase()] = '<' + key.match(scope_reg)[0].split('(<')[1].split('>)')[0] + '>'
      } else if(!~key.indexOf('render')) {
        setting[option.toLowerCase()] = key.match(scope_reg)[0].split('(')[1].split(')')[0]
      }
    })
  })
  return template(setting)
}
