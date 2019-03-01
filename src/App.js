import React, { Component } from 'react';
import './App.css';
import AddOption from './components/AddOption.js';
import Options from './components/Options.js';
import Header from './components/Header.js';
import Action from './components/Action.js';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  // lifecycle methods: only works in class based objects
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing
    }
  }

  // using JSON for local storage
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }

  }

  componentWillUnmount() {
    console.log('compoinent will unmount');
  }

  handlePick() {
    this.setState(() => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    })
  }

  // shorthand arrow function implicitly returning object
  handleDeleteOptions() { this.setState(() => ({ options: [] })) }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return 'enter a value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this option already exists'
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  // previous explicit code; wrap everything after arrow in parenthesis to make it an object
  //   this.setState((prevState) => {
  //     return {
  //       options: prevState.options.concat([option])
  //     }
  //   })
  // }

  render() {
    const subTitle = 'Put your life in the hands of a computer';

    return (
      // pass in props here in kvp to allow components access to props
      <div className='padding40'>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions} //passes method from parent to Options component
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

Header.defaultProps = {
  title: 'Indecision'
};

export default IndecisionApp;
