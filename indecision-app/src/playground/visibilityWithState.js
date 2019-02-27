class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      isVisible: false
    };
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <h3>Click the button to show more content</h3>
        <button onClick={this.toggleVisibility} class="mdc-button mdc-button--unelevated">
          <span class="mdc-button__label">{this.state.isVisible ? 'hide' : 'show'}</span>
        </button>
        <p>{this.state.isVisible ? 'You made me visible!  Click again to hide me' : ''}</p>
      </div>
    )
  }
}

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

ReactDOM.render(<Visibility />, document.getElementById('app'));