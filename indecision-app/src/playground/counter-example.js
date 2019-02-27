class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  };

  handleSubtractOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  };

  handleRemoveAll() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne} class="mdc-button mdc-button--unelevated">
          <span class="mdc-button__label">+1</span>
        </button>&nbsp;
        <button onClick={this.handleSubtractOne} class="mdc-button mdc-button--unelevated">
          <span class="mdc-button__label">-1</span>
        </button>&nbsp;
        <button onClick={this.handleRemoveAll} class="mdc-button mdc-button--unelevated">
          <span class="mdc-button__label">reset</span>
        </button>
      </div>
    )
  }
};

ReactDOM.render(<Counter />, document.getElementById('app'));

// // counter app
// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// // rendering in DOM element with id 'app
// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {

//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} class="mdc-button mdc-button--outlined" id='plus'>
//         <span class="mdc-button__label">+1</span>
//       </button>
//       &nbsp;
//       <button onClick={minusOne} class="mdc-button mdc-button--outlined" id='plus'>
//         <span class="mdc-button__label">-1</span>
//       </button>
//       &nbsp;
//       <button onClick={reset} class="mdc-button mdc-button--outlined" id='plus'>
//         <span class="mdc-button__label">reset</span>
//       </button>
//       &nbsp;
//     </div>
//   );

//   // 1st argument is variable, 2nd is where you're rendering to
//   ReactDOM.render(template2, appRoot);
// }

// renderCounterApp();
