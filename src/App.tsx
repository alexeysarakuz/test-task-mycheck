import React, { useState } from "react";
import styled from "styled-components";
import {
  isPrime,
  getCachedValues,
  setCachedValues,
  checkIfValueCached,
} from "./helpers/App.helpers";

import Form from "./components/Form";

interface SyntheticEvent {
  preventDefault: Function;
}

const App = () => {
  const [value, changeValue] = useState<string>("");
  const [resultMesage, changeResultMessage] = useState<string>("");

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();

    const cached = JSON.parse(getCachedValues());

    const successMessage = `This number (${value}) is prime`;
    const rejectMessage = `This number (${value}) is NOT prime`;

    if (!Number.isInteger(parseInt(value))) {
      changeResultMessage("Enter a number");
      return false;
    }

    if (parseInt(value) <= 1 || parseInt(value) >= 1e6) {
      changeResultMessage("Enter a number greater 1 and less 1 000 000");
      return false;
    }

    const number = parseInt(value);
    const cachedValue = checkIfValueCached(number, cached);

    if (cachedValue.length > 0) {
      cachedValue[0].value
        ? changeResultMessage(`${successMessage} GOT FROM CACHE`)
        : changeResultMessage(`${rejectMessage} GOT FROM CACHE`);
    } else {
      const resultTemp = isPrime(number);
      resultTemp
        ? changeResultMessage(`${successMessage}`)
        : changeResultMessage(`${rejectMessage}`);

      setCachedValues(cached, number, resultTemp);
    }
  };

  return (
    <div className="App">
      <Title>Enter a number</Title>
      <Form
        inputValue={value}
        handleInputChange={changeValue}
        submit={submitForm}
      />
      <div>{resultMesage}</div>
    </div>
  );
};

const Title = styled.h2`
  font-size: 25px;
`;

export default App;
