import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        className="mdc-button mdc-button--unelevated"
        disabled={!props.hasOptions}>
        <span className="mdc-button__label">make decision</span>
      </button>
    </div>
  );
}

export default Action;