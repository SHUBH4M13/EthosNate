import mongoose, { Schema } from "mongoose";

const DonorLogScehma = new Schema(
  {
    Walletaddress: {
      type: String,
      required: true,
    },
    DonatedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    AmountDonated: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DonorLogs = mongoose.model("DonorLogs" , DonorLogScehma );

module.exports = DonorLogs