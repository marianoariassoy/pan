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

const Coleccionar = () => {
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
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapi- bus. Vivamus elementum
            semper nisi.
          </p>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt.
            </p>
          </div>
        </div>

        <div className="flex overflow-hidden bg-pink-2/50">
          <div className="flex w-10 shrink-0">
            <div className="w-1/2 bg-pink-2" />
            <div className="w-1/2 bg-pink-2/40" />
          </div>

          <div className="flex-1 px-8 py-4">
            <h3 className="font-extrabold text-xl">¿Placer o inversión?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt.
            </p>
          </div>
        </div>

        <Galeria data={data.filter((item) => item.category === "2")} />
      </Container>
    </section>
  );
};

export default Coleccionar;
