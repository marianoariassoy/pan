const footer = () => {
  const data = [
    {
      title: "Fundación Santender",
      url: "#",
      image: "/temp/Logo Mecenazgo 2021 negro.png",
    },
    {
      title: "Fundación Santender",
      url: "#",
      image: "/temp/Logo Mecenazgo 2021 negro.png",
    },
    {
      title: "Fundación Santender",
      url: "#",
      image: "/temp/Logo Mecenazgo 2021 negro.png",
    },
    {
      title: "Fundación Santender",
      url: "#",
      image: "/temp/Logo Mecenazgo 2021 negro.png",
    },
  ];
  return (
    <footer>
      <div className="w-full px-4 md:px-12 flex justify-between gap-4 text-brown-dark text-sm py-8">
        <div className="flex gap-4">
          {data.map((item, index) => (
            <div key={index} className="">
              <img src={item.image} alt={item.title} className="h-8" />
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

export default footer;
