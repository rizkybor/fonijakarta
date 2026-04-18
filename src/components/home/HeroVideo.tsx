"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

const VIDEO_ID = "Q1NdZ25IMpg";

export default function HeroVideo() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendYouTubeCommand = (func: "playVideo" | "pauseVideo") => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args: [],
      }),
      "*",
    );
  };

  const videoSrc = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: soundEnabled ? "0" : "1",
      controls: soundEnabled ? "1" : "0",
      loop: "1",
      playlist: VIDEO_ID,
      playsinline: "1",
      rel: "0",
      modestbranding: "1",
      enablejsapi: "1",
    });

    return `https://www.youtube.com/embed/${VIDEO_ID}?${params.toString()}`;
  }, [soundEnabled]);

  useEffect(() => {
    sendYouTubeCommand(isPlaying ? "playVideo" : "pauseVideo");
  }, [isPlaying]);

  return (
    <div className="relative w-full aspect-4/3 md:aspect-21/9 rounded-3xl md:rounded-[3rem] overflow-hidden bg-slate-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-4 md:border-[6px] lg:border-8 border-white/80 ring-1 ring-slate-200 group">
      <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-1000 scale-[1.3] md:scale-[1.1] group-hover:scale-[1.15]">
        <iframe
          ref={iframeRef}
          key={soundEnabled ? "sound-on" : "sound-off"}
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title="Video profil FONI Pengprov DKI Jakarta"
          onLoad={() => {
            if (!isPlaying) {
              sendYouTubeCommand("pauseVideo");
            }
          }}
          className={`absolute top-1/2 left-1/2 w-[150%] h-[150%] md:w-[120%] md:h-[120%] -translate-x-1/2 -translate-y-1/2 object-cover ${
            soundEnabled ? "pointer-events-auto" : "pointer-events-none"
          }`}
        />
      </div>

      <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)] pointer-events-none rounded-[2.2rem] md:rounded-[2.6rem]" />

      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 pointer-events-none">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/45 backdrop-blur-md text-white px-3 py-2 text-[10px] sm:text-xs font-bold tracking-wide border border-white/10 shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-foni-orange opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-foni-orange"></span>
          </span>
          Autoplay muted by browser policy
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-3 pointer-events-none">
        <div className="pointer-events-none hidden sm:flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md text-white px-4 py-2 border border-white/10">
          {soundEnabled ? (
            <>
              <div className="flex items-end gap-1 h-4">
                <span className="w-1 rounded-full bg-emerald-400 animate-[pulse_1s_ease-in-out_infinite]" style={{ height: "35%" }}></span>
                <span className="w-1 rounded-full bg-emerald-400 animate-[pulse_1.2s_ease-in-out_infinite]" style={{ height: "75%" }}></span>
                <span className="w-1 rounded-full bg-emerald-400 animate-[pulse_0.9s_ease-in-out_infinite]" style={{ height: "55%" }}></span>
              </div>
              <span className="text-xs font-bold text-emerald-300">Audio Aktif</span>
            </>
          ) : (
            <span className="text-xs font-bold text-slate-300">Mode Senyap</span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pointer-events-none">
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            className="pointer-events-auto inline-flex items-center justify-center gap-3 rounded-full bg-slate-900/80 backdrop-blur-md text-white px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold shadow-lg border border-white/10 hover:bg-slate-900 transition-all"
            aria-pressed={isPlaying}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 text-white" />
                Pause Video
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-white" />
                Putar Video
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setSoundEnabled((prev) => !prev)}
            className="pointer-events-auto inline-flex items-center justify-center gap-3 rounded-full bg-white/90 backdrop-blur-md text-slate-900 px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold shadow-lg border border-white/50 hover:bg-white transition-all"
            aria-pressed={soundEnabled}
            aria-label={soundEnabled ? "Matikan suara video" : "Aktifkan suara video"}
          >
            {soundEnabled ? (
              <>
                <VolumeX className="w-4 h-4 text-foni-navy" />
                Matikan Suara
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-foni-orange" />
                Aktifkan Suara
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
