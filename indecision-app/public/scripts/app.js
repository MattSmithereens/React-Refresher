"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visibility = function (_React$Component) {
  _inherits(Visibility, _React$Component);

  function Visibility(props) {
    _classCallCheck(this, Visibility);

    var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

    _this.toggleVisibility = _this.toggleVisibility.bind(_this);
    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _createClass(Visibility, [{
    key: "toggleVisibility",
    value: function toggleVisibility() {
      this.setState(function (prevState) {
        return {
          isVisible: !prevState.isVisible
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Visibility"
        ),
        React.createElement(
          "h3",
          null,
          "Click the button to show more content"
        ),
        React.createElement(
          "button",
          { onClick: this.toggleVisibility, "class": "mdc-button mdc-button--unelevated" },
          React.createElement(
            "span",
            { "class": "mdc-button__label" },
            this.state.isVisible ? 'hide' : 'show'
          )
        ),
        React.createElement(
          "p",
          null,
          this.state.isVisible ? 'You made me visible!  Click again to hide me' : ''
        )
      );
    }
  }]);

  return Visibility;
}(React.Component);

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOne = this.handleAddOne.bind(this);
//     this.handleSubtractOne = this.handleSubtractOne.bind(this);
//     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     this.state = {
//       count: 0
//     };
//   }

// render() {
//   return (
//     <div>
//       <h1>Count: {this.state.count}</h1>
//       <button onClick={this.handleAddOne} class="mdc-button mdc-button--unelevated">
//         <span class="mdc-button__label">+1</span>
//       </button>&nbsp;
//       <button onClick={this.handleSubtractOne} class="mdc-button mdc-button--unelevated">
//         <span class="mdc-button__label">-1</span>
//       </button>&nbsp;
//       <button onClick={this.handleRemoveAll} class="mdc-button mdc-button--unelevated">
//         <span class="mdc-button__label">reset</span>
//       </button>
//     </div>
//   )
// }

var IndecisionApp = function (_React$Component2) {
  _inherits(IndecisionApp, _React$Component2);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = 'Indecision';
      var subTitle = 'Put your life in the hands of a computer';
      var options = ['thing 1', 'thing 2', 'thing 4'];

      return (
        // pass in props here in kvp to allow components access to props
        React.createElement(
          "div",
          null,
          React.createElement(Header, { title: title, subTitle: subTitle }),
          React.createElement(Action, null),
          React.createElement(Options, { options: options }),
          React.createElement(AddOption, null)
        )
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));
