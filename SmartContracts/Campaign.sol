// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Campaign {
    address public owner;
    string public title;
    uint public goal;
    uint public raised;
    uint public deadline;
    bool public isCompleted;

    address[] public donors;

    event DonationReceived(address donor, uint amount);
    event FundsTransferred(address to, uint amount);

    constructor(address _owner, string memory _title, uint _goal, uint durationInDays) {
        owner = _owner;
        title = _title;
        goal = _goal;
        deadline = block.timestamp + (durationInDays * 1 days);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier activeCampaign() {
        require(!isCompleted, "Campaign already completed");
        _;
    }

    function donate() external payable activeCampaign {
        require(block.timestamp <= deadline, "Deadline passed");
        require(msg.value > 0, "No ETH sent");

        donors.push(msg.sender);
        raised += msg.value;

        emit DonationReceived(msg.sender, msg.value);
    }

    function completeCampaign() external onlyOwner activeCampaign {
        require(block.timestamp >= deadline || raised >= goal, "Cannot complete yet");

        isCompleted = true;
        uint amount = address(this).balance;
        payable(owner).transfer(amount);

        emit FundsTransferred(owner, amount);
    }

    function getDonors() external view returns (address[] memory) {
        return donors;
    }

    function getDetails() external view returns (
        string memory, uint, uint, uint, address, bool, address
    ) {
        return (
            title,
            goal,
            raised,
            deadline,
            owner,
            isCompleted,
            address(this)
        );
    }
}
