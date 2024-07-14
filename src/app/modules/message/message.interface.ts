export interface IMessage {
    text: string;
    sender: string;
    receiver: string;
    timestamp?: Date;
    seen: boolean;
  }
  