import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("Uploading audio");
  try {
    const blob = await req.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const file = new File([arrayBuffer], "recording.mp3", {
      type: "audio/mpeg",
    });

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.audio.transcriptions.create({
      file: file,
      model: "whisper-1",
    });

    console.log(response);
    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Error processing audio:", error);
    return NextResponse.json(
      { error: "Error processing audio" },
      { status: 500 }
    );
  }
}
