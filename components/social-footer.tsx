import { socialMenu } from "@/config/navigation";

const social = () => {
  return (
    <div className="flex items-center gap-2 text-brown">
      {socialMenu.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer "
          className="bg-green rounded-full w-8 h-8 flex items-center justify-center hover:bg-white transition-colors duration-200"
        >
          <i className={social.icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default social;
