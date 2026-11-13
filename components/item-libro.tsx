"use client";

import { useState } from "react";
import ImageGalleryModal from "./ImageGalleryModal";

type images = {
  id: number;
  image: string;
  title?: string;
  category?: number;
};

type ItemLibro = {
  title: string;
  text: string;
  image: string;
  pdf: string;
  images: images[];
};

const Libro = ({ data }: { data: ItemLibro }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <img
          src={data.images[0].image}
          className="w-full cursor-pointer"
          onClick={() => setCurrentIndex(1)}
        />
      </div>

      {/* Modal de galería */}
      <ImageGalleryModal
        images={data.images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <div className="flex flex-col-reverse md:flex-row justify-between gap-4 mt-4">
        <div className="flex gap-4 text-base text-red md:w-4/5">
          <div className="w-12 md:w-24 h-2 bg-red translate-y-1 text-medium shrink-0" />
          <p className="whitespace-break-spaces leading-snug text-base">
            {data.text}
          </p>
        </div>

        {data.pdf && (
          <div className="shrink-0">
            <a
              href={data.pdf}
              target="_blank"
              rel=""
              className="text-sm hover:text-red flex items-center gap-1"
            >
              <span className="font-medium">Descargar PDF</span>
              <i className="fa-solid fa-chevron-right text-brown-dark"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Libro;
