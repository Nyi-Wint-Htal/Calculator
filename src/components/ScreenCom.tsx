type ScreenCom = {
  expression: string;
};

const ScreenCom = ({ expression }: ScreenCom) => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">Horizon Calc</h1>
      <h2 className="text-sm mb-5 font-medium">
        Clean Calculations. Clear Results.
      </h2>
      <div className="screenStyle">
        <p className="text-4xl">{expression || "0"}</p>
      </div>
    </div>
  );
};

export default ScreenCom;
