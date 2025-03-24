import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  
});

export async function POST(req: Request) {
  try {
    const { publicId } = await req.json();
    if (!publicId) return NextResponse.json({ error: "No publicId provided" }, { status: 400 });

    const result = await cloudinary.v2.uploader.destroy(publicId);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete image", details: error }, { status: 500 });
  }
}
