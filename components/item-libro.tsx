import Galeria from "./galeria";

type images = {
  id: number;
  image: string;
  title?: string;
  category?: string;
};

type ItemLibro = {
  title: string;
  text: string;
  image: string;
  pdf: string;
  images: images[];
};

const itemLibro = ({ data }: { data: ItemLibro }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Galeria data={data.images} />

      <div className="flex flex-col-reverse md:flex-row justify-between gap-4 mt-4">
        <div className="flex gap-4 text-base text-red md:w-4/5">
          <div className="w-24 h-2 bg-red translate-y-1 text-medium shrink-0" />
          <p className="whitespace-break-spaces leading-snug text-base">
            {data.text}
          </p>
        </div>

        {data.pdf && (
          <div className="shrink-0">
            <a
              href={data.pdf}
              target="_blank"
              rel=""
              className="text-sm hover:text-red flex items-center gap-1"
            >
              <span className="font-medium">Descargar PDF</span>
              <i className="fa-solid fa-chevron-right text-brown-dark"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default itemLibro;
