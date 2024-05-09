import dbConnect from "@/db/connect";
import Catch from "@/db/models";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const catches = await Catch.find();
    return response.status(200).json(catches);
  }
  if (request.method === "POST") {
    const catchData = request.body;
    const catchItem = new Catch({ ...catchData, author: "fabian@doez.info" });
    await catchItem.save();
    return response.status(201).json({ status: "Catch added" });
  } else {
    return response.status(405).json({ message: "Methode nicht erlaubt" });
  }
}
