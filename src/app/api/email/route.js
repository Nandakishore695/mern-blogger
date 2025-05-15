import connectDb from "@/library/config/db";
import { UserEmail } from "@/library/model/Email_Model";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        await connectDb();
        const { isEmailId } = await request.json();
        console.log(isEmailId,"backend");
        
        const emailId = await UserEmail.create({isEmailId});
            return NextResponse.json({message: "New Subscribe",emailId},{ status: 201 });
    } catch (error) {
        return NextResponse.json({"message": error.message})
    }
}