import { IMessage } from "./message.interface";
import { Message } from "./message.models";


const createMessage = async (data: IMessage): Promise<IMessage> => {
  const message = new Message(data);
  return await message.save();
};

const getMessagesByUserId = async (userId: string): Promise<IMessage[]> => {
  return await Message.find({ $or: [{ sender: userId }, { receiver: userId }] });
};

const getAllMessages = async (): Promise<IMessage[]> => {
  return await Message.find();
};

const markMessageAsSeen = async (id: string): Promise<IMessage | null> => {
  return await Message.findByIdAndUpdate(id, { seen: true }, { new: true });
};

export const MessageService = {
  createMessage,
  getMessagesByUserId,
  getAllMessages,
  markMessageAsSeen,
};
