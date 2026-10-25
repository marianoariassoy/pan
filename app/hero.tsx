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

  return (
    <section
      className="h-screen w-screen relative fade-in"
      style={{ animation: "fadeIn 0.8s ease-out" }}
      id="hero"
    >
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <Slide
          autoplay={true}
          duration={4000}
          infinite={true}
          pauseOnHover={false}
          arrows={false}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="h-screen w-screen bg-center bg-cover"
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
