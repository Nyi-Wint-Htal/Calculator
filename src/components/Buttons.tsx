type ButtonsProps = {
  setExpression: React.Dispatch<React.SetStateAction<string>>;
  calculate: () => void;
  appendValue: (value: string) => void;
};
const Buttons = ({ setExpression, calculate, appendValue }: ButtonsProps) => {
  const expArray1 = ["7", "8", "9"];
  const expArray2 = ["4", "5", "6"];
  const expArray3 = ["1", "2", "3"];

  return (
    <div className="buttonsContainer">
      <button
        className="buttonStyle bg-amber-400 drop-shadow-amber-300 text-white"
        onClick={() => setExpression("")}
      >
        AC
      </button>
      <button
        className="buttonStyle bg-gray-200 drop-shadow-gray-300 text-black"
        onClick={() =>
          setExpression((prev) =>
            prev.charAt(0) != "-" ? "-" + prev : prev.substring(1),
          )
        }
      >
        ±
      </button>
      <button
        className="buttonStyle bg-gray-200 drop-shadow-gray-300 text-black"
        onClick={() => {
          appendValue("/100");
          calculate();
        }}
      >
        %
      </button>
      <button
        className="buttonStyle bg-blue-500 drop-shadow-blue-400 text-white"
        onClick={() => appendValue("/")}
      >
        ÷
      </button>
      {expArray1.map((exp) => {
        return (
          <button
            key={exp}
            className="buttonStyle border-2 bg-white border-gray-200 drop-shadow-gray-300"
            onClick={() => appendValue(exp)}
          >
            {exp}
          </button>
        );
      })}
      <button
        className="buttonStyle bg-blue-500 drop-shadow-blue-400 text-white"
        onClick={() => appendValue("*")}
      >
        ✖
      </button>
      {expArray2.map((exp) => {
        return (
          <button
            key={exp}
            className="buttonStyle border-2 bg-white border-gray-200 drop-shadow-gray-300"
            onClick={() => appendValue(exp)}
          >
            {exp}
          </button>
        );
      })}
      <button
        className="buttonStyle bg-blue-500 drop-shadow-blue-400 text-white"
        onClick={() => appendValue("-")}
      >
        -
      </button>
      {expArray3.map((exp) => {
        return (
          <button
            key={exp}
            className="buttonStyle border-2 bg-white border-gray-200 drop-shadow-gray-300"
            onClick={() => appendValue(exp)}
          >
            {exp}
          </button>
        );
      })}
      <button
        className="buttonStyle bg-blue-500 drop-shadow-blue-400 text-white"
        onClick={() => appendValue("+")}
      >
        +
      </button>
      <button
        className="buttonStyle bg-red-500 drop-shadow-red-400 "
        onClick={() =>
          setExpression((prev) => prev.substring(0, prev.length - 1))
        }
      >
        <i className="fa-solid fa-delete-left text-white"></i>
      </button>
      <button
        className="buttonStyle border-2 bg-white border-gray-200 drop-shadow-gray-300"
        onClick={() => appendValue("0")}
      >
        0
      </button>
      <button
        className="buttonStyle border-2 bg-white border-gray-200 drop-shadow-gray-300"
        onClick={() => appendValue(".")}
      >
        .
      </button>
      <button
        className="buttonStyle bg-gray-200 drop-shadow-gray-300 text-black"
        onClick={() => calculate()}
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
