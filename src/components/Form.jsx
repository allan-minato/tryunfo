import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name-input">
          <p>Nome:</p>
          <input data-testid="name-input" type="text" name="" id="" />
        </label>
        <hr />
        <label htmlFor="description-input">
          <p>Descrição:</p>
          <textarea
            data-testid="description-input"
            name=""
            id=""
            cols="30"
            rows="10"
          />
        </label>
        <hr />
        <label htmlFor="attr1-input">
          <p>Attr01:</p>
          <input data-testid="attr1-input" type="number" name="" id="" />
        </label>
        <hr />
        <label htmlFor="attr2-input">
          <p>Attr02:</p>
          <input data-testid="attr2-input" type="number" name="" id="" />
        </label>
        <hr />
        <label htmlFor="attr3-input">
          <p>Attr03:</p>
          <input data-testid="attr3-input" type="number" name="" id="" />
        </label>
        <hr />
        <label htmlFor="image-input">
          <p>Imagem:</p>
          <input data-testid="image-input" type="text" name="" id="" />
        </label>
        <hr />
        <label htmlFor="rare-input">
          <p>Raridade:</p>
          <select data-testid="rare-input" name="rare-input" id="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <hr />
        <label htmlFor="trunfo-input">
          <p>Super trunfo!</p>
          <input data-testid="trunfo-input" type="checkbox" name="" id="" />
        </label>
        <hr />
        <button data-testid="save-button" type="submit" id="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
