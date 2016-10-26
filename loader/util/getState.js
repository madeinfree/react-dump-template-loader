module.exports = function getState(state) {
  if (!state) return {}
  var mapState = state.split(',')
  var StateObj = {}
  mapState.forEach(function(s) {
    Object.assign(StateObj, { [s.split('=')[0].trim()]: s.split('=')[1].replace(/\'/g, '') })
  })
  return StateObj
}
