"use client";
import { useState } from "react";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import axios, { AxiosError } from "axios";
import BeatLoader from "react-spinners/BeatLoader";

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return <div className="mt-2 text-primary">{error.message}</div>;
};

const Form = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    setSending(true);
    const sender = {
      to: "",
      from: " ",
      from_name: "Pan. Arte Contemporáneo",
      subject: "Contacto",
    };

    try {
      const response = await axios.post(" ", { ...data, ...sender });
      if (response?.data?.error) {
        setError(response.data.message);
        setSending(false);
      } else {
        setSended(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        setError(axiosError.response.data?.message || "Error desconocido");
      } else {
        setError("Error de conexión");
      }
      setSending(false);
    }
  };

  const errorMessage = "Completar este dato.";

  if (sended) {
    return (
      <section>
        <p className="text-center pb-8 text-white text-3xl">
          ¡Gracias por contactarte! <br />
          Te responderemos lo antes posible.
        </p>
      </section>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 w-full text-base"
    >
      <div className="flex gap-2 justify-between">
        <div className="w-full">
          <input
            type="text"
            placeholder="Poner tu nombre"
            className="bg-white text-brown h-12 px-4 w-full focus:outline-none focus:ring-0"
            {...register("name", { required: errorMessage })}
          />
          <Error error={errors.name} />
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Tu mail"
            className="bg-white text-brown h-12 px-4 w-full focus:outline-none focus:ring-0"
            {...register("email", {
              required: errorMessage,
              maxLength: 50,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Dirección de correo electrónico inválida",
              },
            })}
          />
          <Error error={errors.email} />
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Subject"
          className="bg-white text-brown h-12 px-4 w-full focus:outline-none focus:ring-0"
          {...register("subject", { required: errorMessage })}
        />
        <Error error={errors.subject} />
      </div>
      <div>
        <textarea
          className="h-30 bg-white text-brown px-4 py-4 focus:outline-none focus:ring-0 w-full"
          placeholder="Tu mensaje aquí"
          id="message"
          {...register("message", { required: errorMessage })}
        ></textarea>
        <Error error={errors.message} />
      </div>
      <div className="w-full flex items-end justify-end">
        {sending ? (
          <BeatLoader color="white" />
        ) : (
          <button
            type="submit"
            className="cursor-pointer font-bold hover:text-black"
          >
            ENVIAR
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
