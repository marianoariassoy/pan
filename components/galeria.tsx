"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

type Data = {
  title: string;
  image: string;
  category?: string;
};

export default function Hero({ data }: { data: Data[] }) {
  const indicators = () => {
    return (
      <div className="bg-brown-dark w-2 h-2 rounded-full cursor-pointer hover:bg-black"></div>
    );
  };

  return (
    <section>
      <Slide
        autoplay={false}
        infinite={true}
        transitionDuration={500}
        arrows
        indicators={indicators}
        prevArrow={
          <span className="absolute -bottom-8 hover:text-black text-brown-dark transition-opacity duration-200 fa-solid fa-chevron-left"></span>
        }
        nextArrow={
          <span className="absolute -bottom-8 left-8 hover:text-black text-brown-dark transition-opacity duration-200 fa-solid fa-chevron-right"></span>
        }
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="h-full w-full bg-center bg-cover aspect-square md:aspect-5/3"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></div>
        ))}
      </Slide>
    </section>
  );
}
