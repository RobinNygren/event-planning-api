import mongoose, { Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  location: string;
  organizer: string;
  maxParticipants: number;
}

const eventSchema = new mongoose.Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  organizer: { type: String, required: true },
  maxParticipants: { type: Number, required: true },
});

export default mongoose.model<IEvent>("Event", eventSchema);
