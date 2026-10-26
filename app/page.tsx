"use client";

import { useState, useEffect } from "react";
import Hero from "./hero";
import SomosPan from "./somos";
import Coleccionar from "./coleccionar";
import Artistas from "./artistas";
import Comunidad from "./comunidad";
import Contacto from "./contacto";
import Curaduria from "./curaduria";
import Loader from "@/components/loading";

type Data = {
  id: number;
  title: string;
  text: string;
};

const Page = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://marianoarias.soy/works/pan/api/textos";

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Error al obtener datos");
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

  if (loading)
    return (
      <div className="h-screen w-screen">
        <Loader />
      </div>
    );

  return (
    <>
      <Hero />
      <SomosPan text={data} />
      <Coleccionar text={data} />
      <Curaduria text={data} />
      <Artistas text={data} />
      <Comunidad text={data} />
      <Contacto />
    </>
  );
};

export default Page;
