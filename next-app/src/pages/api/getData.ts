import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/mongodb";
import { Document, Model, Schema } from "mongoose";

interface modelDocument extends Document {
  name: string;
  userAddress: string;
  email: string;
  mobileNumber: string;
}

const YourModel: Model<modelDocument> = db.model<modelDocument>(
  "YourModel",
  new Schema<modelDocument>({
    name: String,
    userAddress: String,
    email: String,
    mobileNumber: String,
  }),
  "contacts"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await YourModel.find({});

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
