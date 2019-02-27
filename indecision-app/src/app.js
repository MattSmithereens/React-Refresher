class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['thing 1', 'thing 2', 'thing 4']

    return (
      // pass in props here in kvp to allow components access to props
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick} class="mdc-button mdc-button--unelevated">
          <span class="mdc-button__label">Add Option</span>
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  // fix/bind broken "this" keyword.  
  //Passing props same as calling this.props
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    alert('remove all clicked');
  }

  render() {
    return (
      // passing in "option" props and creating a custom key (optionText)
      <div>
        {this.props.options.map((option) => <Option key={option} optionText={option} />)}
        <button onClick={this.handleRemoveAll} class="mdc-button mdc-button--unelevated">
          <span class="mdc-button__label">remove all</span>
        </button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault(); // stops full page refresh, e = event object

    const option = e.target.elements.option.value.trim(); //gets what's typed in text field
    if (option) {
      alert(option);
      // e.option.value = '';
      // alert('enter something');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label">
            <input type="text" class="mdc-text-field__input" aria-label="Label" name='option'></input>
            <div class="mdc-notched-outline">
              <div class="mdc-notched-outline__leading"></div>
              <div class="mdc-notched-outline__trailing"></div>
            </div>
          </div>
          <br></br>
          <button class="mdc-button mdc-button--unelevated">
            <span class="mdc-button__label">Add Option</span>
          </button>
        </form>
      </div>
    );
  }
}

// render arguments: what you're rendering and where you're rendering it
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));