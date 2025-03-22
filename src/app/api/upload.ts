import cloudinary from 'cloudinary';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false, // Disables Next.js default bodyParser
  },
};

export default async function handler(req : NextRequest) {
  if (req.method === 'POST') {
    const form = new IncomingForm();
    form.uploadDir = "./public/uploads"; // Temporary storage (optional)
    form.keepExtensions = true;

    form.parse(req, async (err: Error, fields:any, files:any) => {
      if (err) return NextResponse.json({ error: 'Error parsing the file' });

      const file = files.file;
      const filePath = file.filepath || file.path;

      try {
        // Upload to Cloudinary
        const uploadedImage = await cloudinary.v2.uploader.upload(filePath, {
          folder: 'nextjs_uploads',
        });

        // Delete the local file after upload
        fs.unlinkSync(filePath);

        return NextResponse.json({ url: uploadedImage.secure_url });
      } catch (error) {
        return NextResponse.json({ error: 'Cloudinary upload failed' });
      }
    });
  } else {
    NextResponse.json({ error: 'Method not allowed' });
  }
}
