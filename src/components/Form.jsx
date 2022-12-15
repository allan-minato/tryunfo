import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <label htmlFor="name-input">
          <p>Nome:</p>
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="name-input"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>
        <hr />
        <label htmlFor="description-input">
          <p>Descrição:</p>
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description-input"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <hr />
        <label htmlFor="attr1-input">
          <p>Attr01:</p>
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <hr />
        <label htmlFor="attr2-input">
          <p>Attr02:</p>
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <hr />
        <label htmlFor="attr3-input">
          <p>Attr03:</p>
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <hr />
        <label htmlFor="image-input">
          <p>Imagem:</p>
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <hr />
        <label htmlFor="rare-input">
          <p>Raridade:</p>
          <select
            data-testid="rare-input"
            name={ cardRare }
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <hr />
        <label htmlFor="cardTrunfo">
          Super Trunfo:
          { hasTrunfo ? <h3>Você já tem um Super Trunfo em seu baralho</h3> : <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            value={ cardTrunfo }
          />}
        </label>
        <hr />
        <button
          data-testid="save-button"
          type="button"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          checked={ cardTrunfo }
        >
          Salvar

        </button>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
