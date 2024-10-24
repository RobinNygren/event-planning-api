import { Router, Request, Response, NextFunction } from "express";
import Event, { IEvent } from "../models/Event";

const router = Router();

// POST /events - Create a new event
router.post(
  "/",
  async (req: Request<any, any, IEvent>, res: Response, next: NextFunction) => {
    try {
      const newEvent = new Event(req.body);
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent);
    } catch (err) {
      next(err);
    }
  }
);

// GET /events - Retrieve all events
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    next(err);
  }
});

// GET /events/:id - Retrieve a specific event by ID
router.get(
  "/:id",
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) return res.status(404).json({ message: "Event not found" });
      res.json(event);
    } catch (err) {
      next(err);
    }
  }
);

// PUT /events/:id - Update a specific event
router.put(
  "/:id",
  async (
    req: Request<{ id: string }, any, IEvent>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const updatedEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedEvent)
        return res.status(404).json({ message: "Event not found" });
      res.json(updatedEvent);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE /events/:id - Delete a specific event
router.delete(
  "/:id",
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const deletedEvent = await Event.findByIdAndDelete(req.params.id);
      if (!deletedEvent)
        return res.status(404).json({ message: "Event not found" });
      res.json(deletedEvent);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
