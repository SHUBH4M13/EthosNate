// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Campaign.sol";

contract CampaignFactory {
    address[] public deployedCampaigns;

    event CampaignCreated(address campaignAddress, address owner, string title, uint goal, uint deadline);

    function createCampaign(string memory title, uint goal, uint durationInDays) external {
        Campaign newCampaign = new Campaign(msg.sender, title, goal, durationInDays);
        deployedCampaigns.push(address(newCampaign));

        emit CampaignCreated(address(newCampaign), msg.sender, title, goal, block.timestamp + (durationInDays * 1 days));
    }

    function getAllCampaigns() external view returns (address[] memory) {
        return deployedCampaigns;
    }
}
