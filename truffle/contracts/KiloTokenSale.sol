// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./Crowdsale.sol";
// import "./KycContract.sol";

contract KiloTokenSale is Crowdsale {

    // KYCContract kyc;
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        ERC20 token
        // KYCContract _kyc
    )
        Crowdsale(rate, wallet, token)
        
    {
        // kyc = _kyc;
    }

    function _preValidatePurchase(address _beneficiary, uint256 weiAmount) internal pure override {
        super._preValidatePurchase(_beneficiary, weiAmount);
    }

}
