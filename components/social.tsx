import { socialMenu } from "@/config/navigation";

const social = () => {
  return (
    <div className="absolute right-4 md:right-12 top-8 items-center gap-2 text-brown-dark hidden md:flex">
      {socialMenu.slice(0, 3).map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer "
          className="bg-green rounded-full w-7 h-7 flex items-center justify-center hover:bg-brown-dark transition-colors duration-200"
        >
          <i className={social.icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default social;
