type LayoutProps = {
  children: React.ReactNode;
};

const container = ({ children }: LayoutProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex flex-col gap-y-8 py-12 text-lg">
      {children}
    </div>
  );
};

export default container;
