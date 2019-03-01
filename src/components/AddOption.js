import React from 'react';

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault(); // stops full page refresh, e = event object

    const option = e.target.elements.option.value.trim();   //gets what's typed in text field.  
    // trim() deletes leading and trailing spaces
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label">
            <input type="text" className="mdc-text-field__input" aria-label="Label" name='option'></input>
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
          <br></br>
          <button className="mdc-button mdc-button--unelevated">
            <span className="mdc-button__label">Add Option</span>
          </button>
        </form>
      </div>
    );
  }
}

export default AddOption;