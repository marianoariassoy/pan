"use client";

import { useState, useEffect } from "react";
import ItemLibro from "@/components/item-libro";
import Loader from "@/components/loading";

type images = {
  id: number;
  image: string;
  title?: string;
  category?: number;
};

type Data = {
  title: string;
  text: string;
  image: string;
  pdf: string;
  images: images[];
};

const Libros = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://marianoarias.soy/works/pan/api/libros";

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
    <div className="flex flex-col gap-y-8">
      {data.map((item, index) => (
        <ItemLibro key={index} data={item} />
      ))}
    </div>
  );
};

export default Libros;
