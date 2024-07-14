import mongoose, { Schema } from "mongoose";
import { IMessage } from "./message.interface";

const messageSchema: Schema<IMessage> = new mongoose.Schema({
    text: { type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    seen: { type: Boolean, default: false },
});

export const Message = mongoose.model<IMessage>("message", messageSchema);
