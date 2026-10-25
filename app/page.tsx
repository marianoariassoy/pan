import Hero from "./hero";
import SomosPan from "./somos";
import Coleccionar from "./coleccionar";
import Artistas from "./artistas";
import Comunidad from "./comunidad";
import Contacto from "./contacto";
import Curaduria from "./curaduria";

const page = () => {
  return (
    <>
      <Hero />
      <SomosPan />
      <Coleccionar />
      <Curaduria />
      <Artistas />
      <Comunidad />
      <Contacto />
    </>
  );
};

export default page;
