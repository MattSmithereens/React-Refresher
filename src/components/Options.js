import React from 'react';
import Option from './Option.js';

const Options = (props) => {
  return (
    // passing in "option" props and creating a custom key (optionText)
    <div>
      {props.options.map((option) =>
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />)}
      <button
        onClick={props.handleDeleteOptions}
        className="mdc-button mdc-button--unelevated">
        <span className="mdc-button__label">remove all</span>
      </button>
      {props.options.length === 0 && <p>Add an option to get started</p>}
    </div>
  );
}

export default Options;