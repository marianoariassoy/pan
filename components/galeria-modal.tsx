"use client";

import { useState } from "react";
import Modal from "./modal";

type Images = {
  id: number;
  image: string;
};

const GaleriaModal = ({
  images,
  image,
}: {
  images: Images[];
  image: string;
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="h-full w-full aspect-square md:aspect-5/3">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-center"
            // onClick={() => setActiveImage(image)}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {images.map((item, index) => (
            <div
              key={index}
              className="h-full w-full aspect-square md:aspect-5/3 cursor-pointer hover:opacity-90 transition-all"
              onClick={() => setActiveImage(item.image)}
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <Modal activeImage={activeImage} setActiveImage={setActiveImage} />
      )}
    </>
  );
};

export default GaleriaModal;
