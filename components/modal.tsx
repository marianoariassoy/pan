import React, { useEffect } from "react";

const Modal = ({
  activeImage,
  setActiveImage,
}: {
  activeImage: string | null;
  setActiveImage: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  // Cerrar el modal al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setActiveImage]);

  if (!activeImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center p-8 sm:p-4 fade-in-fast"
      onClick={() => setActiveImage(null)}
    >
      {/* Contenedor estricto que evita que el clic en la imagen cierre el modal */}
      <div
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={activeImage}
          alt="Vista previa ampliada"
          className="max-w-[96vw] max-h-[96vh] w-auto h-auto object-contain shadow-2xl pointer-events-auto"
        />

        <button
          onClick={() => setActiveImage(null)}
          className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/90 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition cursor-pointer shadow-lg pointer-events-auto"
          aria-label="Cerrar modal"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
