import { useState } from "react";

const InputWhitelist = (props) => {
  const [enteredAddress, setEnteredAddress] = useState("");

  const addressInputChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredAddress);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="address">Your ETH Address</label>
        <input
          type="text"
          id="addressToKYC"
          onChange={addressInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default InputWhitelist;
