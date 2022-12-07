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
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onSaveButtonClick = () => {
    const maxValue = 90;
    const sumValue = 210;
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const validationCard = cardName.length > 0;
    const validationDescription = cardDescription.length > 0;
    const validationImage = cardImage.length > 0;
    const validationAttr1 = parseInt(cardAttr1, 10)
    <= maxValue && parseInt(cardAttr1, 10) >= 0;
    const validationAttr2 = parseInt(cardAttr2, 10)
    <= maxValue && parseInt(cardAttr2, 10) >= 0;
    const validationAttr3 = parseInt(cardAttr3, 10)
    <= maxValue && parseInt(cardAttr3, 10) >= 0;
    const sum = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10) <= sumValue;

    this.setState({ isSaveButtonDisabled: !(validationCard
      && validationDescription && validationImage
      && validationAttr1 && validationAttr2 && validationAttr3 && sum) });
  };

  onInputChange = ({ target }) => {
    const { value, name, checked, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.onSaveButtonClick());
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form 
          { ...this.state }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
