import { useState } from "react";
import { useEth } from "../../contexts/EthContext";
// import KiloToken from "../../contracts/KiloToken.json";
// import KiloTokenSale from "../../contracts/KiloTokenSale.json";
// import KYCContract from "../../contracts/KYCContract.json";



const InputWhitelist = (props) => {
  const [enteredAddress, setEnteredAddress] = useState("");

  const {
    state: { KYCContract, accounts },
  } = useEth();

  const addressInputChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredAddress);
  };

  const handleKYCSubmit = async () => {
    await KYCContract.methods
      .setKYCCompleted(enteredAddress)
      .send({ from: accounts[0] });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="address">Your ETH Address</label>
        <input
          type="text"
          name="addressToKYC"
          id="addressToKYC"
          value={enteredAddress}
          onChange={addressInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button onClick={handleKYCSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default InputWhitelist;
