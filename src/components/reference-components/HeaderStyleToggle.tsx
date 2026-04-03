"use client";

import { useState } from "react";
import { EnhancedHeaderPreview, CreativeHeaderPreview } from "./EnhancedPreviews";
import { Sparkles, Grid } from "lucide-react";

export function HeaderStyleToggle({ content }: any) {
  const [useCreativeStyle, setUseCreativeStyle] = useState(false); // Start with traditional

  // Force CTAs to show in header for both previews
  const contentWithCTAs = {
    ...content,
    showCtasInHeader: true
  };

  return (
    <div className="space-y-4">
      {/* Style Toggle */}
      <div className="flex items-center justify-center gap-2 p-2 bg-[#040619]/50 border border-[#65D6C8]/20 rounded-lg">
        <button
          onClick={() => setUseCreativeStyle(false)}
          className={`flex items-center gap-2 px-4 py-2 rounded text-xs transition-all duration-400 ${
            !useCreativeStyle 
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Grid className="w-4 h-4" />
          Traditional Buttons
        </button>
        
        <button
          onClick={() => setUseCreativeStyle(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded text-xs transition-all duration-400 ${
            useCreativeStyle 
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Constellation Nodes
        </button>
      </div>

      {/* Render Selected Style */}
      {useCreativeStyle ? (
        <CreativeHeaderPreview content={contentWithCTAs} />
      ) : (
        <EnhancedHeaderPreview content={contentWithCTAs} />
      )}
    </div>
  );
}