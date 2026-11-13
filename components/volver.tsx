import Link from "next/link";

const Volver = ({ url }: { url: string }) => {
  return (
    <Link
      href={url}
      className="absolute right-4 md:right-14 text-sm flex items-center gap-1 hover:text-red"
    >
      <i className="fa-solid fa-chevron-left text-brown-dark"></i>
      <span className="font-medium uppercase">Volver</span>
    </Link>
  );
};

export default Volver;
