"use client";

import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "@/components/loading";
import Link from "next/link";

interface data {
  id: number;
  image: string;
  text: string;
  slug: string;
}

export default function Hero() {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://marianoarias.soy/works/pan/api/comunidad";

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
      <div className="bg-white w-2 h-2 rounded-full cursor-pointer hover:bg-black"></div>
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
          autoplay={true}
          infinite={true}
          transitionDuration={500}
          arrows={true}
          indicators={indicators}
          prevArrow={
            <span className="absolute -bottom-8 hover:text-black text-white transition-opacity duration-200 fa-solid fa-chevron-left z-40"></span>
          }
          nextArrow={
            <span className="absolute -bottom-8 left-8 hover:text-black text-white transition-opacity duration-200 fa-solid fa-chevron-right"></span>
          }
        >
          {data.map((item, index) => (
            <div key={index} className="h-full w-full flex flex-col gap-y-4">
              <Link href={`/comunidad/${item.slug}`}>
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full aspect-square md:aspect-5/3 object-cover hover:opacity-80 transition-opacity duration-200"
                />
              </Link>
              <div className="flex gap-4 text-base text-brown-dark md:w-4/5">
                <div className="w-130 h-2 bg-red translate-y-1 text-medium" />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Slide>
      )}
    </section>
  );
}
