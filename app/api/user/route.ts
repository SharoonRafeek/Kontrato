import { connectMongoDB } from "@/lib/mongo";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await connectMongoDB();
    const { name, email } = await req.json();
    await User.create({ name, email });
    return NextResponse.json({message: `User created`},{status: 201});
}