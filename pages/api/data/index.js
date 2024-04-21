import dbConnect from "../../../db/connect";
import Catches from "@/db/models/index";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const catches = await Catches.find({
      //author: session.user.email,
    });
    return response.status(200).json(catches);
    //} //else {
    //const catches = await Catches.find({ author: "default" });
    // return response.status(200).json(catches);
    // }
  } else if (request.method === "POST") {
    try {
      const catchData = request.body;
      const snap = new Catches({ ...catchData });
      await snap.save();
      return response.status(201).json({ status: "catch created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
