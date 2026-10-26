"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Social from "@/components/social";
import { mainMenu } from "@/config/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrollScrolled, setScrollScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // El header estará minimizado si NO estamos en la home, O si se hizo scroll en la home.
  // ¡Esto se calcula en tiempo de render sin necesidad de efectos ni setState síncronos!
  const isScrolled = pathname !== "/" || scrollScrolled;

  // Solo necesitamos un efecto para escuchar el scroll de la ventana
  useEffect(() => {
    const handleScrollState = () => {
      if (window.scrollY > 20) {
        setScrollScrolled(true);
      } else {
        setScrollScrolled(false);
      }
    };

    // Comprobar posición inicial al montar
    handleScrollState();

    window.addEventListener("scroll", handleScrollState);
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  const toggle = () => setOpen(!open);

  const handleNavigation = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        setOpen(false);
      } else {
        e.preventDefault();
        setOpen(false);
        router.push("/");
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 flex justify-center`}
      style={{ animation: "slideDown 0.5s ease-out 0.6s backwards" }}
    >
      <div
        className={`flex flex-col p-4 pb-4transition-all  ${
          isScrolled
            ? pathname.includes("/artistas")
              ? "bg-green/70 backdrop-blur-sm text-brown-dark"
              : "bg-white/70 backdrop-blur-sm text-brown-dark"
            : "bg-multiply text-white"
        }`}
      >
        {/* Logo con tamaño dinámico */}
        <div className="px-2 pt-2 flex justify-center">
          <button
            className="cursor-pointer hover:opacity-80 transition-opacity "
            onClick={(e) => handleNavigation(e, "#hero")}
          >
            <img
              src={isScrolled ? "/assets/logo-brown.svg" : "/assets/logo.svg"}
              alt="logo"
              className={`transition-all ${isScrolled ? "h-10 md:h-14" : "h-14 md:h-20"}`}
            />
          </button>
        </div>

        {/* Botón dinámico */}
        <div className="flex justify-end">
          <button
            className={`flex items-center justify-center rounded-full border-2 w-5 h-5 cursor-pointer transition-transform duration-300 hover:animate-none ${
              !open && "animate-pulse"
            }`}
            onClick={toggle}
            aria-label="Abrir menú"
          >
            {!open && (
              <span
                className={`w-2 h-2 rounded-full ${isScrolled ? "bg-brown-dark" : "bg-white"}`}
              />
            )}
          </button>
        </div>

        {/* Contenedor animado del menú */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <nav>
            <ul className="flex flex-col">
              {mainMenu.map((item) => (
                <li key={item.label} className="flex">
                  <a
                    href={pathname === "/" ? item.href : `/${item.href}`}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className={`w-full border-b not-last-of-type:w-full border-transparent text-base md:text-xl font-medium pb-1 mb-2 pl-4 transition-colors duration-200 ${isScrolled ? "hover:border-brown-dark " : "hover:border-white"} `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <Social />
    </header>
  );
};

export default Header;
