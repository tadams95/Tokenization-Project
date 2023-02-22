// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract KYCContract is Ownable {
    //maps an address to a boolean
    mapping(address => bool) allowed;

    function setKYCCompleted(address _addr) public onlyOwner {
        //an address is allowed to purchase tokens
        allowed[_addr] = true;
    }

    function setKYCRevoked(address _addr) public onlyOwner {
        allowed[_addr] = false;
    }

    function kycCompleted(address _addr) public view returns(bool) {
        return allowed[_addr];
    }
}