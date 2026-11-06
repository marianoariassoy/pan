import Container from "@/components/container";
import { getDataBySlug } from "@/lib/api";
import Link from "next/link";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Un componente interno que lee los params y hace el fetch
async function TeamMemberContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getDataBySlug("equipo", slug);

  return (
    <div className="flex flex-col md:flex-row gap-x-12 gap-y-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="aspect-square overflow-hidden w-44">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <i
              className="fa-solid fa-earth-americas text-xl text-red hover:text-brown-dark transition-colors duration-200"
              aria-hidden="true"
            />
          </a>
        </div>
        <div>
          <h2 className="text-xl text-red">{data.title}</h2>
        </div>
      </div>
      <div>
        <p className="text-base">{data.text}</p>
      </div>
    </div>
  );
}

// 2. Componente principal de la página (ya no lee params directamente)
export default function Page({ params }: PageProps) {
  return (
    <section className="mt-18 md:mt-24 scroll-m-20">
      <Container>
        <Link
          href="/"
          className="absolute right-4 md:right-14 text-sm flex items-center gap-1 hover:text-red"
        >
          <i className="fa-solid fa-chevron-left text-brown-dark"></i>
          <span className="font-medium">VOLVER</span>
        </Link>
        <h1 className="text-2xl md:text-4xl font-bold text-red mb-6">
          Somos PAN
        </h1>

        {/* 3. Envolvemos el componente que usa params/fetch dentro de Suspense */}
        <Suspense
          fallback={
            <p className="text-gray-500">Cargando información del equipo...</p>
          }
        >
          <TeamMemberContent params={params} />
        </Suspense>
      </Container>
    </section>
  );
}
