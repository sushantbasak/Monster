import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

import { Searchbox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // Arrow Function automatically binds off this
  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchbox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
