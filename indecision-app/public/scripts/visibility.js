'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Enter choices and I\'ll make one for you',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // stops full page refresh, e = event object
  var option = e.target.elements.option.value; //gets what's typed in text field
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

// rendering in DOM element with id 'app
var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var template =
  // wrapper div - all elements must be in a container element
  React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? React.createElement(
        'button',
        { onClick: onRemoveAll, 'class': 'mdc-button mdc-button--unelevated' },
        React.createElement(
          'span',
          { 'class': 'mdc-button__label' },
          'Remove All'
        )
      ) : 'Add an option'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision, 'class': 'mdc-button mdc-button--unelevated' },
      React.createElement(
        'span',
        { 'class': 'mdc-button__label' },
        'What should I do?'
      )
    ),
    React.createElement(
      'ul',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: 'option' },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement(
        'div',
        { 'class': 'mdc-text-field mdc-text-field--outlined mdc-text-field--no-label' },
        React.createElement('input', { type: 'text', 'class': 'mdc-text-field__input', 'aria-label': 'Label', name: 'option' }),
        React.createElement(
          'div',
          { 'class': 'mdc-notched-outline' },
          React.createElement('div', { 'class': 'mdc-notched-outline__leading' }),
          React.createElement('div', { 'class': 'mdc-notched-outline__trailing' })
        )
      ),
      React.createElement('br', null),
      React.createElement(
        'button',
        { 'class': 'mdc-button mdc-button--unelevated' },
        React.createElement(
          'span',
          { 'class': 'mdc-button__label' },
          'Add Option'
        )
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
