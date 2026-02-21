import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  suit: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  cardCollection: {   // ← renamed
    type: String,
    required: true
  }
});

const Card = mongoose.model("Card", cardSchema);
export default Card;
