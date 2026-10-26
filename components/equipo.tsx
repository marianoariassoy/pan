"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

type Data = {
  title: string;
  slug: string;
  url: string;
  image: string;
};

export default function Equipo() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://marianoarias.soy/works/pan/api/equipo";

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

  if (loading) return <Loader />;

  return (
    <div className="flex justify-center md:justify-between gap-8 mt-4 flex-wrap">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex gap-2">
            <Link
              href={`/equipo/${item.slug}`}
              className="aspect-square overflow-hidden w-44 bg-brown"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-center object-cover hover:scale-102 transition-all duration-200"
                />
              )}
            </Link>

            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <i
                className="fa-brands fa-instagram text-red hover:text-brown-dark transition-colors duration-200"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="flex flex-col mt-2">
            <h2 className="text-xl text-red">{item.title}</h2>
            <Link
              href={`/equipo/${item.slug}`}
              className="hover:underline text-sm"
            >
              +INFO
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
