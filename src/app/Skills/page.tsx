"use client";

import React, { useState, useEffect } from "react";
import { Dock } from "@/components/dock/dock";
import SkillTree from "@/components/post/SkillTree";
import { TextGenerateEffect } from "@/components/post/text-generate-effect";
import Preloader from "@/components/pre-loader";


const words = `My Tech Stack 👩‍💻`;

export default function Poeta() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="pb-20">
          <TextGenerateEffect
            className="text-4xl md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 text-white"
            words={words}
          />
          <SkillTree />
          <Dock />
          
        </div>
      )}

    </div>
  );
}
