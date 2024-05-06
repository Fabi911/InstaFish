import dbConnect from "@/db/connect";
import Catch from "@/db/models";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const catches = await Catch.find();
    return response.status(200).json(catches);
  } else {
    return response.status(405).json({ message: "Methode nicht erlaubt" });
  }
}
