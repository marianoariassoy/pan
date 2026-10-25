type ItemLibro = {
  title: string;
  description: string;
  image: string;
};

const itemLibro = ({ data }: { data: ItemLibro }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="aspect-5/4 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex justify-between gap-20">
        <div className="flex gap-4 text-sm text-red w-4/5">
          <div className="w-130 h-2 bg-red translate-y-1 text-medium" />
          <p> {data.description}</p>
        </div>
        <div className="shrink-0">
          <a
            href="#"
            className="text-sm hover:text-red flex items-center gap-1"
          >
            <span>VER EL LIBRO</span>
            <i className="fa-solid fa-chevron-right text-brown-dark"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default itemLibro;
