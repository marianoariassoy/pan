import Container from "@/components/container";
import Form from "@/components/form";
import Social from "@/components/social-footer";

const Contacto = () => {
  return (
    <section className="bg-brown text-white" id="contacto">
      <Container>
        <h1 className="text-2xl md:text-4xl font-bold text-white">Contacto</h1>
        <div className="flex gap-8">
          <div className="flex flex-col items-center justify-between pb-10 pt-10">
            <img src="/assets/logo-redondo.svg" alt="Logo" className="w-34" />
            <a
              href="mailto:holapan@gmail.com"
              target="_blank"
              className="font-medium hover:underline"
            >
              holapan@gmail.com
            </a>
            <Social />
          </div>
          <div className="flex flex-col gap-y-4 flex-1">
            <div>
              <h2 className="font-medium">¡HABLEMOS!</h2>
              <p className="font-medium">
                Envianos un mensaje y nos pondremos en contacto a la brevedad.
              </p>
            </div>
            <Form />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacto;
