import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    const { value, name, checked, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
