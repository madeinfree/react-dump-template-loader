# [Proposal] React Dump Template

[Proposal] easily react basic dump template with webpack loader

input: [see](https://github.com/madeinfree/react-dump-template/blob/master/src/rdt/Button.rdt)

```javascript
[displayname$=(Button)]
[state$=(
  author='Whien',
  twitter='https://twitter.com/Wn_Boy',
  github='https://github.com/madeinfree/'
)]
[render$=(
<div>
  <div>
    <h1>Author: { this.state.author }</h1>
    <h2>Twitter: <a href={ this.state.twitter }>Link</a></h2>
    <h2>Github: <a href={ this.state.github }>github</a></h2>
  </div>
  <div>
    <button
      style={{ color: 'red' }}
      onClick={ () => { console.log('awesome click') } }>
      Click me
    </button>
  </div>
</div>
)]
```

output:

```javascript
var Button = _react2.default.createClass({
  displayName: "Button",

  propTypes: {},
  getInitialState: function getInitialState() {
    return {
      "author": "Whien",
      "twitter": "https://twitter.com/Wn_Boy",
      "github": "https://github.com/madeinfree/"
    };
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          null,
          "Author:",
          this.state.author
        ),
        _react2.default.createElement(
          "h2",
          null,
          "Twitter:",
          _react2.default.createElement(
            "a",
            { href: this.state.twitter },
            "Link"
          )
        ),
        _react2.default.createElement(
          "h2",
          null,
          "Github:",
          _react2.default.createElement(
            "a",
            { href: this.state.github },
            "github"
          )
        )
      ),
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "button",
          { style: { color: 'red' }, onClick: function onClick() {
              console.log('awesome click');
            } },
          " Click me"
        )
      )
    );
  }
});
```
