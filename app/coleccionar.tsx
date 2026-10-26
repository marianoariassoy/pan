"use client";

import Container from "@/components/container";
import Galeria from "@/components/galeria";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

type Data = {
  title: string;
  image: string;
  category: string;
};

type Text = {
  title: string;
  text: string;
};

const Coleccionar = ({ text }: { text: Text[] }) => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://marianoarias.soy/works/pan/api/coleccionar";

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
    <section className="scroll-m-20" id="coleccionar">
      <Container>
        <h1 className="text-2xl md:text-5xl font-bold text-red">
          Coleccionar Arte
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data
            .filter((item) => item.category === "1")
            .map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt=""
                className="w-full aspect-4/5 object-center object-cover"
              />
            ))}
        </div>
        <div className="md:pl-14">
          <h2 className="text-xl font-extrabold">Asesoramiento</h2>
          <p>{text[3].text}</p>
        </div>

        <div className="flex overflow-hidden bg-green/50">
          <div className="flex w-10 shrink-0">
            <div className="w-1/2 bg-green" />
            <div className="w-1/2 bg-green/40" />
          </div>

          <div className="flex-1 px-8 py-4">
            <h3 className="font-extrabold text-xl">
              ¿Querés iniciar tu colección?
            </h3>
            <p>{text[4].text}</p>
          </div>
        </div>

        <div className="flex overflow-hidden bg-pink-2/50">
          <div className="flex w-10 shrink-0">
            <div className="w-1/2 bg-pink-2" />
            <div className="w-1/2 bg-pink-2/40" />
          </div>

          <div className="flex-1 px-8 py-4">
            <h3 className="font-extrabold text-xl">¿Placer o inversión?</h3>
            <p>{text[5].text}</p>
          </div>
        </div>

        <Galeria data={data.filter((item) => item.category === "2")} />
      </Container>
    </section>
  );
};

export default Coleccionar;
