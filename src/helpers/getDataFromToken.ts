import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface DecodedToken {
    id: string;
    // add other properties if needed
}

export const getDataFromToken = (request : NextRequest) =>  {
    try {
        const token = request.cookies.get("token")?.value || ''
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as DecodedToken
        return decodedToken.id

    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
}