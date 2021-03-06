import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Notes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => this.setState({ joke: json }))
      .catch(error => alert(error.message));
  }

  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }))
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div className="center">
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Want ten new jokes?</h3>
        <button  type="button" class="btn btn-outline-primary" onClick={this.fetchJokes}>Click me!</button>
        {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
      </div>
    )
  }
}

export default Notes;