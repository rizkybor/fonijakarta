"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Map as MapIcon,
  Maximize,
  Clock,
  FileText,
  Lock,
  User2Icon,
  X,
  ZoomIn,
} from "lucide-react";

type AppMap = {
  id: string;
  name: string;
  region: string;
  scale: string;
  contour_interval: string;
  year: string;
  norm: string;
  area_size: string;
  status: string;
  image: string;
  software: string | null;
  notes: string | null;
  contact_name: string | null;
  contact_phone: string | null;
  contact_email: string | null;
  contact_instagram: string | null;
  contact_twitter: string | null;
  contact_facebook: string | null;
};

export default function MapCard({ mapItem }: { mapItem: AppMap }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="cursor-pointer min-w-[320px] md:min-w-[400px] w-[85vw] md:w-[400px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200 flex flex-col hover:border-foni-navy transition-colors duration-300 group">
        {/* Image Thumbnail */}
        <div
          className="relative h-48 bg-slate-100 overflow-hidden rounded-t-2xl"
          onClick={() => setShowModal(true)}
        >
          <Image
            src={mapItem.image}
            alt={mapItem.name}
            fill
            unoptimized
            className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
              <ZoomIn className="w-5 h-5 text-slate-800" />
            </div>
          </div>

          <div className="absolute top-3 left-3">
            <div
              className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white rounded shadow-sm ${
                mapItem.status === "Active" ? "bg-foni-navy" : "bg-amber-500"
              }`}
            >
              {mapItem.status === "Active" ? "AKTIF" : "UPDATE"}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="inline-block px-2 py-1 rounded bg-foni-orange/10 text-foni-orange font-bold text-[10px] uppercase tracking-widest mb-3 w-fit">
            {mapItem.norm}
          </div>

          <h3 className="text-xl font-bold text-slate-900 leading-tight mb-6 line-clamp-2">
            {mapItem.name}
          </h3>

          {/* Technical Specs */}
          <div className="space-y-3 mb-8 mt-auto">
            <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
              <span className="text-slate-500 flex items-center gap-2">
                <MapIcon className="w-4 h-4" /> Skala
              </span>
              <span className="font-bold text-slate-900">{mapItem.scale}</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
              <span className="text-slate-500 flex items-center gap-2">
                <FileText className="w-4 h-4" /> Interval Kontur
              </span>
              <span className="font-bold text-slate-900">
                {mapItem.contour_interval}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
              <span className="text-slate-500 flex items-center gap-2">
                <Maximize className="w-4 h-4" /> Area
              </span>
              <span className="font-bold text-slate-900">
                {mapItem.area_size}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
              <span className="text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Tahun Pembuatan
              </span>
              <span className="font-bold text-slate-900">{mapItem.year}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 flex items-center gap-2">
                <User2Icon className="w-4 h-4" /> Mapper
              </span>
              <span className="font-bold text-slate-900">
                {mapItem.contact_name ?? "-"}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          {mapItem.contact_phone ? (
            <a
              href={`https://wa.me/${mapItem.contact_phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg font-bold text-sm bg-slate-100 text-slate-700 hover:bg-foni-navy hover:text-white transition-colors flex items-center justify-center gap-2"
            >
               Minta Akses Peta
            </a>
          ) : (
            <button
              disabled
              className="w-full py-3 rounded-lg font-bold text-sm bg-slate-100 text-slate-400 cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" /> Akses Tidak Tersedia
            </button>
          )}
        </div>
      </div>

      {/* Modal Preview */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <h3 className="font-black text-slate-900 text-lg">
                  {mapItem.name}
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  {mapItem.region} · {mapItem.scale} · {mapItem.year}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full h-[60vh] bg-slate-50">
              <Image
                src={mapItem.image}
                alt={mapItem.name}
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex gap-4 text-sm text-slate-500">
                <span>
                  <span className="font-bold text-slate-900">Norm:</span>{" "}
                  {mapItem.norm}
                </span>
                <span>
                  <span className="font-bold text-slate-900">Area:</span>{" "}
                  {mapItem.area_size}
                </span>
                {mapItem.notes && (
                  <span>
                    <span className="font-bold text-slate-900">Catatan:</span>{" "}
                    {mapItem.notes}
                  </span>
                )}
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-foni-navy text-white rounded-lg font-bold text-sm hover:bg-foni-navy/90 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
