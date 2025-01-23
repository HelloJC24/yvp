const TitlteBar = ({ title }) => {
  return (
    <div className="w-full bg-primary py-6 text-center border-t-4 border-slate-500">
      <h1 className="text-white text-2xl font-semibold">{title}</h1>
    </div>
  );
};

export default TitlteBar;
