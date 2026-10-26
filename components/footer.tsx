"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/loading";

type data = {
  title: string;
  image: string;
};

const Footer = () => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://marianoarias.soy/works/pan/api/logos";

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
    <footer>
      <div className="w-full px-4 md:px-12 flex flex-col items-center md:flex-row justify-between gap-8 text-brown-dark text-sm py-8">
        <div className="flex items-center justify-center gap-8 md:gap-4 flex-wrap">
          {data.map((item, index) => (
            <div key={index} className="">
              <img src={item.image} alt={item.title} className="h-24" />
            </div>
          ))}
        </div>
        <div>
          <p>Pan. Arte Contemporáneo 2026 © Todos los derechos reservados.</p>
          <p>
            Diseño:{" "}
            <a
              href="https://fabianmuggeri.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Fabián Muggeri
            </a>{" "}
            / Desarrollo web: Mariano Arias
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
