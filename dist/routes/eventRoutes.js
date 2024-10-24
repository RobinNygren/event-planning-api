"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Event_1 = __importDefault(require("../models/Event")); // Import Event model and type
const router = (0, express_1.Router)();
// POST /events - Create a new event
router.post("/", async (req, res, next) => {
    try {
        const newEvent = new Event_1.default(req.body);
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    }
    catch (err) {
        next(err);
    }
});
// GET /events - Retrieve all events
router.get("/", async (req, res, next) => {
    try {
        const events = await Event_1.default.find();
        res.json(events);
    }
    catch (err) {
        next(err);
    }
});
// GET /events/:id - Retrieve a specific event by ID
router.get("/:id", async (req, res, next) => {
    try {
        const event = await Event_1.default.findById(req.params.id);
        if (!event)
            return res.status(404).json({ message: "Event not found" });
        res.json(event);
    }
    catch (err) {
        next(err);
    }
});
// PUT /events/:id - Update a specific event
router.put("/:id", async (req, res, next) => {
    try {
        const updatedEvent = await Event_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent)
            return res.status(404).json({ message: "Event not found" });
        res.json(updatedEvent);
    }
    catch (err) {
        next(err);
    }
});
// DELETE /events/:id - Delete a specific event
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedEvent = await Event_1.default.findByIdAndDelete(req.params.id);
        if (!deletedEvent)
            return res.status(404).json({ message: "Event not found" });
        res.json(deletedEvent);
    }
    catch (err) {
        next(err);
    }
});
exports.default = router;
