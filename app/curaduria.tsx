"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Container from "@/components/container";
import Galeria from "@/components/galeria";

type Data = {
  title: string;
  image: string;
};

type Text = {
  title: string;
  text: string;
};

const Curaduria = ({ text }: { text: Text[] }) => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://marianoarias.soy/works/pan/api/curaduria";

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
    <div className="flex flex-col gap-y-4 border-brown border-t-2 ">
      <Container>
        <div className="md:pl-14 ">
          <h2 className="text-xl font-extrabold">Curaduría</h2>
          <p>{text[6].text}</p>
        </div>

        <Galeria data={data} />
      </Container>
    </div>
  );
};

export default Curaduria;
