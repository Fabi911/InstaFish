import dbConnect from "@/db/connect";
import Catch from "@/db/models";
import {getServerSession} from "next-auth/next";
import {authOptions} from "../../auth/[...nextauth]";

export default async function handler(request, response) {
    await dbConnect();
    const {id} = request.query;
    const session = await getServerSession(request, response, authOptions);
    if (!session) {
        return response
            .status(401)
            .json({status: "Unauthorized: Session is required"});
    }

    if (request.method === "GET") {
        const catchItem = await Catch.findById(id);

        if (!catchItem) {
            return response.status(404).json({status: "Not Found"});
        }

        response.status(200).json(catchItem);
    }
    if (request.method === "POST") {
        try {
            const catchData = request.body;
            const catchItem = new Product(catchData);
            await catchItem.save();
            return response.status(201).json({status: "Catch created."});
        } catch (error) {
            console.error(error);
            return response.status(400).json({error: error.message});
        }
    }
    if (request.method === "PUT") {
        const updatedCatch = request.body;

        await Catch.findByIdAndUpdate(id, updatedCatch);

        return response.status(200).json({status: `Catch successfully updated.`});
    }

    if (request.method === "DELETE") {
        await Catch.findByIdAndDelete(id);
        response.status(200).json({status: `Catch successfully deleted.`});
    }
}
