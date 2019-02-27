let app = {
  title: 'Indecision App',
  subtitle: 'Enter choices and I\'ll make one for you',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); // stops full page refresh, e = event object
  const option = e.target.elements.option.value; //gets what's typed in text field
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

// rendering in DOM element with id 'app
const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    // wrapper div - all elements must be in a container element
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ?
        <button onClick={onRemoveAll} class="mdc-button mdc-button--unelevated">
          <span class="mdc-button__label">Remove All</span>
        </button> : 'Add an option'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision} class="mdc-button mdc-button--unelevated">
        <span class="mdc-button__label">What should I do?</span>
      </button>
      <ul>
        {app.options.map((option) => <li key='option'>{option}</li>)}
      </ul>
      <form onSubmit={onFormSubmit}>
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

  ReactDOM.render(template, appRoot);
};

renderApp();