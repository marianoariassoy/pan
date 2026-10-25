import Link from "next/link";

const equipo = () => {
  const data = [
    {
      name: "Pía Dalessón",
      slug: "pía-dalesson",
      ig: "https://www.instagram.com/p.dalesson/",
      image:
        "https://images.pexels.com/photos/11202887/pexels-photo-11202887.jpeg",
    },
    {
      name: "Rita Maschwitz",
      slug: "rita-maschwitz",
      ig: "https://www.instagram.com/p.dalesson/",
      image:
        "https://images.pexels.com/photos/11202887/pexels-photo-11202887.jpeg",
    },
    {
      name: "Estefanía Radnic",
      slug: "estefanía-radnic",
      ig: "https://www.instagram.com/p.dalesson/",
      image:
        "https://images.pexels.com/photos/11202887/pexels-photo-11202887.jpeg",
    },
  ];
  return (
    <div className="flex justify-between gap-8 mt-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex gap-2">
            <Link
              href={`/equipo/${item.slug}`}
              className="aspect-square overflow-hidden w-36"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-center object-cover hover:scale-102 transition-all duration-200"
              />
            </Link>

            <a href={item.ig} target="_blank" rel="noopener noreferrer">
              <i
                className="fa-brands fa-instagram text-red hover:text-brown-dark transition-colors duration-200"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="flex flex-col mt-2">
            <h2 className="text-xl text-red">{item.name}</h2>
            <Link href="/artistas" className="hover:underline text-sm">
              +INFO
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default equipo;
