import React, { useEffect, useCallback } from "react";

type images = {
  id: number;
  image: string;
};

interface ImageModalProps {
  images: images[];
  currentIndex: number | null;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ImageGalleryModal = ({
  images,
  currentIndex,
  setCurrentIndex,
}: ImageModalProps) => {
  const isOpen = currentIndex !== null;

  // Funciones de navegación
  const handlePrevious = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  }, [currentIndex, images.length, setCurrentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  }, [currentIndex, images.length, setCurrentIndex]);

  // Manejo de eventos de teclado (Escape y Flechas)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCurrentIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrevious, handleNext, setCurrentIndex]);

  if (!isOpen || currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 fade-in-fast"
      onClick={() => setCurrentIndex(null)}
    >
      {/* Contenedor principal que frena el cierre al hacer clic dentro */}
      <div
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen actual */}
        <img
          src={images[currentIndex].image}
          alt={`Imagen ${currentIndex + 1} de ${images.length}`}
          className="max-w-[92vw] max-h-[92vh] w-auto h-auto object-contain shadow-2xl  pointer-events-auto"
        />

        {/* Botón de Cierre (Arriba a la derecha) */}
        <button
          onClick={() => setCurrentIndex(null)}
          className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/90 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition cursor-pointer shadow-lg pointer-events-auto z-10"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* Botón Izquierda (Anterior) - Solo si hay más de 1 imagen */}
        {images.length > 1 && (
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/90 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition cursor-pointer shadow-lg pointer-events-auto z-10"
            aria-label="Imagen anterior"
          >
            ‹
          </button>
        )}

        {/* Botón Derecha (Siguiente) - Solo si hay más de 1 imagen */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/90 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition cursor-pointer shadow-lg pointer-events-auto z-10"
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        )}

        {/* Indicador de posición (ej. 3 / 10) abajo en el centro */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 bg-black/60 px-3 py-1 rounded-full text-sm font-medium shadow pointer-events-auto">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGalleryModal;
