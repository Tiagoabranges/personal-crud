import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = ({ target }) => {
    const { name, value } = target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Scrim Shop</h1>
        <input
          onChange={handleChangeValues}
          type="text"
          name="name"
          className="register-input"
          placeholder="Name"
        />
        <input
          onChange={handleChangeValues}
          type="text"
          name="cost"
          className="register-input"
          placeholder="Cost"
        />
        <input
          onChange={handleChangeValues}
          type="text"
          name="category"
          className="register-input"
          placeholder="Category"
        />
        <button
          type="button"
          onClick={() => handleClickButton()}
          className="register-button"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default App;
