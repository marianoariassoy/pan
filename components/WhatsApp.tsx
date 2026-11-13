const Whatsapp = () => {
  return (
    <div className="fixed bottom-8 right-4 z-50">
      <a
        href="http://wa.me/5491157966646"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full 
       transition-all items-center justify-center hover:scale-105 text-brown-dark bg-green flex text-2xl"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;
