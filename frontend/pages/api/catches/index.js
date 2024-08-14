import dbConnect from "@/db/connect";
import Catch from "@/db/models";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  if (request.method === "GET") {
    if (session) {
      const catches = await Catch.find({ author: session.user.email });
      return response.status(200).json(catches);
    }
  } else if (request.method === "POST") {
    try {
      if (session) {
        const catchData = request.body;
        const catchItem = new Catch({
          ...catchData,
          author: session.user.email,
        });
        console.log(catchData);
        await catchItem.save();
        return response.status(201).json({ status: "Catch added" });
      } else {
        return response.status(405).json({ message: "Methode nicht erlaubt" });
      }
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
