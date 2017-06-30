import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
    return (<div><div>TodoApp</div></div>);
  }
}

class InputLine extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
    return (<div><div>InputLine</div></div>);
  }
}

class TodoList extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
    return (<div><div>TodoList</div></div>);
  }
}

class Todo extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
    return (<div><div>Todo</div></div>);
  }
}

ReactDOM.render(<p>React lives!</p>,
   document.getElementById('root'));