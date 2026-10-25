"use client";

import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "@/components/loading";

interface data {
  id: number;
  image: string;
}

export default function Hero() {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/home";

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Error al obtener datos de productos");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [apiURL]);

  const indicators = () => {
    return (
      <div className="bg-brown-dark w-2 h-2 rounded-full cursor-pointer hover:bg-black"></div>
    );
  };

  return (
    <section>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
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
              className="h-full w-full bg-center bg-cover aspect-5/3"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
          ))}
        </Slide>
      )}
    </section>
  );
}
