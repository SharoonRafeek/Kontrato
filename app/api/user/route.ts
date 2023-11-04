import { connectMongoDB } from "@/lib/mongo";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await connectMongoDB();
    const { name, email } = await req.json();
    const user = await User.create({ name, email });
    // return NextResponse.redirect(`/api/user/${user._id}`);
    return NextResponse.json({message: `User ${user._id} created`},{status: 201});
}