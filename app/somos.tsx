import Container from "@/components/container";
import Equipo from "@/components/equipo";
import Evolucion from "@/components/evolucion";

const somospan = () => {
  return (
    <section className="scroll-m-20" id="somos">
      <Container>
        <div>
          <h1 className="text-2xl md:text-5xl font-bold text-red">Somos PAN</h1>
          <p className="md:pl-14">
            PAN es una plataforma de gestión cultural enfocada en
            comercialización, curaduría y educación de arte contemporáneo.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xl ">
          <div className="flex flex-col gap-y-4 border-l-2 border-r-2 border-brown border-dotted px-14">
            <h2 className="font-extrabold text-lg">¿Qué hacemos?</h2>
            <p className="font-bold text-green">
              Asesoramiento y venta de obras de arte
            </p>
            <p className=" font-bold text-brown">
              Acompañamiento profesional para artistas
            </p>
            <p className=" font-bold text-green">Curaduría</p>
            <p className=" font-bold text-brown">Charlas de arte</p>
          </div>
          <div className="flex flex-col gap-y-4 pt-13 px-14 border-r-2 border-brown border-dotted">
            <p className="font-bold text-brown">Open Studios</p>
            <p className="font-bold text-green">
              Mediación Cultural y Educación
            </p>
            <p className=" font-bold text-brown">
              Archivo, Gestión de colecciones, Legado
            </p>
          </div>
        </div>
        <div className="md:pl-14">
          <h2 className="text-lg font-extrabold">Nuestro propósito</h2>
          <p>
            Contribuir a un ecosistema del arte contemporáneo más conectado,
            profesional y dinámico, acompañando a coleccionistas y artistas en
            sus recorridos, articulando agentes culturales y creando
            oportunidades que amplíen el impacto del arte en la sociedad.
          </p>
        </div>

        <Equipo />
      </Container>

      <Evolucion />
    </section>
  );
};

export default somospan;
