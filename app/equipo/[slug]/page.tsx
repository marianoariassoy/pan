import Container from "@/components/container";

const page = () => {
  const data = {
    name: "Pía Dalessón",
    ig: "https://www.instagram.com/p.dalesson/",
    image:
      "https://images.pexels.com/photos/11202887/pexels-photo-11202887.jpeg",
  };

  return (
    <section className="mt-24 scroll-m-20">
      <Container>
        <h1 className="text-2xl md:text-4xl font-bold text-red">Somos PAN</h1>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="aspect-square overflow-hidden w-36">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <a href={data.ig} target="_blank" rel="noopener noreferrer">
                <i
                  className="fa-brands fa-instagram text-red hover:text-brown-dark transition-colors duration-200"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div>
              <h2 className="text-xl text-red">{data.name}</h2>
            </div>
          </div>
          <div>
            <p className="text-base">
              Licenciada en Artes, cree que la difusión de artistas y procesos
              creativos expanden límites y mejoran el engranaje social. Es la
              fundadora y directora de la plataforma PAN. Vive en Buenos Aires,
              Argentina, donde se desarrolla como gestora cultural.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
