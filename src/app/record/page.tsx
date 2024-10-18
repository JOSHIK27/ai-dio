"use client";

import { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { Button } from "@/components/ui/button";
import { Mic, StopCircle } from "lucide-react";

export default function Record() {
  const recorderControls = useAudioRecorder();
  const [isUploading, setIsUploading] = useState(false);

  const handleRecordingComplete = async (blob: Blob) => {
    setIsUploading(true);

    try {
      const response = await fetch("/api/upload-audio", {
        method: "POST",
        body: blob,
        headers: {
          "Content-Type": "audio/mpeg",
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error uploading audio:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F4F6]">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#1E3A8A]">
            Record Your Task
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Speak your task and let our AI analyze and remind you.
          </p>
          <br />
          <div className="space-y-4 flex flex-col items-center">
            <AudioRecorder
              onRecordingComplete={handleRecordingComplete}
              recorderControls={recorderControls}
            />
            <div className="flex justify-center space-x-4">
              <Button
                onClick={recorderControls.startRecording}
                className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white"
              >
                <Mic className="mr-2 h-4 w-4" /> Start Recording
              </Button>
              <Button
                onClick={recorderControls.stopRecording}
                variant="outline"
                className="border-[#1E3A8A] text-[#1E3A8A]"
              >
                <StopCircle className="mr-2 h-4 w-4" /> Stop Recording
              </Button>
            </div>
          </div>
          {isUploading && (
            <p className="text-[#0D9488] font-semibold">Uploading...</p>
          )}
        </div>
      </div>
    </section>
  );
}
