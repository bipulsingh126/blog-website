import connectDB from "@/lib/db";
import EmailModel from "@/lib/models/Email.model";
import { NextResponse } from "next/server";

const LoadDb = async () => {
  await connectDB();
};

LoadDb();

export async function POST(request) {
  try {
    await LoadDb(); // Ensure DB is connected for each request
    const formData = await request.formData();
    const email = formData.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEmail = await EmailModel.findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { success: false, message: "Email already subscribed" },
        { status: 400 }
      );
    }

    // Create new subscription
    const newEmail = await EmailModel.create({ email });
    
    return NextResponse.json(
      { success: true, message: "Subscription successful", data: newEmail },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await LoadDb(); // Ensure DB is connected for each request
    const emails = await EmailModel.find({});
    return NextResponse.json(emails);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await LoadDb(); // Ensure DB is connected for each request
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Email ID is required" },
        { status: 400 }
      );
    }
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Email Deleted" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
