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

ReactDOM.render(<Visibility />, document.getElementById('app'));