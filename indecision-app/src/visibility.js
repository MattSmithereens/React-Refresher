

// let app = {
//   title: 'Visibility',
//   subtitle: 'The Subtitle',
//   options: []
// };

// const onFormSubmit = (e) => {
//   e.preventDefault(); // stops full page refresh, e = event object
//   const option = e.target.elements.option.value; //gets what's typed in text field
//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     renderApp();
//   }
// }

// const onRemoveAll = () => {
//   app.options = [];
//   renderApp();
// };

// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   alert(option);
// }

// // rendering in DOM element with id 'app
// const appRoot = document.getElementById('app');

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>{app.options.length > 0 ? <button onClick={onRemoveAll}>Remove All</button> : 'Add an option'}</p>
//       <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
//       <ul>
//         {app.options.map((option) => <li key='option'>{option}</li>)}
//       </ul>
//       <form onSubmit={onFormSubmit}>
//         <input type='text' name='option'></input>
//         <button>Add Option</button>
//       </form>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderApp();

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? <button onClick={onRemoveAll}>Remove All</button> : 'Add an option'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <ul>
        {app.options.map((option) => <li key='option'>{option}</li>)}
      </ul>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'></input>
        <button>Add Option</button>
      </form>
      <p>boof</p>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

// renderApp();