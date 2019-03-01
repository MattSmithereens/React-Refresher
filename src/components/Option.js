import React from 'react';

const Option = (props) => {
  return (
    <div>
      {props.optionText}&nbsp;
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}

        className="mdc-button mdc-button--unelevated">
        <span className="mdc-button__label">delete</span>
      </button>
    </div>
  );
}

export default Option;