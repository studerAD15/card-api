import express from "express";
import Card from "../models/Card.js";

const router = express.Router();


// GET all cards
router.get("/", async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});


// POST new card
router.post("/", async (req, res) => {
  const newCard = new Card(req.body);
  const savedCard = await newCard.save();
  res.status(201).json(savedCard);
});


// PUT update card
router.put("/:id", async (req, res) => {
  const updatedCard = await Card.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedCard);
});


// DELETE card
router.delete("/:id", async (req, res) => {
  await Card.findByIdAndDelete(req.params.id);
  res.json({ message: "Card deleted successfully" });
});

export default router;
