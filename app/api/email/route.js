import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/Email.model";
import { NextResponse } from "next/server";

const LoadDb = async () => {
  await ConnectDB();
};

LoadDb();

export async function POST(request) {
  try {
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

    // Save new email
    await EmailModel.create({ email });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to blog",
    });
  } catch (error) {
    console.error("Email subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Error subscribing  to blog " },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const emails = await EmailModel.find({});
    return NextResponse.json(emails);
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request) {
  try {
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
      { success: false, message: "Failed to delete email" },
      { status: 500 }
    );
  }
}
