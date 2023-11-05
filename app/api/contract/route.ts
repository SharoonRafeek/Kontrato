import { connectMongoDB } from "@/lib/mongo";
import Contract from "@/model/contract";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await connectMongoDB();
    const { projectName, agreement,clientName,clientAddress,clientPhone,clientEmail,agencyName,agencyAddress,agencyPhone,agencyEmail,paymentSchedule,paymentTimeline } = await req.json();
    await Contract.create({projectName, agreement,clientName,clientAddress,clientPhone,clientEmail,agencyName,agencyAddress,agencyPhone,agencyEmail,paymentSchedule,paymentTimeline });
    return NextResponse.json({message: `User created`},{status: 201});
}