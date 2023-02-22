// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KiloToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Kilo Protocol", "KILO" ) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
    function decimals() override public pure returns (uint8) {
        return 8;
    }
}