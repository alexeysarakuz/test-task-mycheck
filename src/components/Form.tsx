import React from "react";

interface FormProps {
  inputValue: string;
  handleInputChange: Function;
  submit: Function;
}

const Form = ({ inputValue, handleInputChange, submit }: FormProps) => {
  return (
    <form onSubmit={(e) => submit(e)}>
      <input type="text" value={inputValue} onChange={(e) => handleInputChange(e.target.value)}/>
      <button>Calculate Prime</button>
    </form>
  );
};

export default Form;
