import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import ScreenCom from "./components/ScreenCom";

const operators = ["+", "-", "*", "/"];

function App() {
  const [expression, setExpression] = useState("");
  const validKeys = "0123456789+-*/.%";

  const calculate = () => {
    setExpression((prev) => {
      try {
        if (!prev) {
          return "";
        }
        const value: number = eval(prev);
        return value.toString();
      } catch {
        alert("Invalid Calculation!");
        return "";
      }
    });
  };

  const appendValue = (value: string) => {
    setExpression((prev) => {
      const currentNumber = prev.split(/[+\-*/]/).pop();

      const lastValue = prev.charAt(prev.length - 1);
      if (operators.includes(lastValue) && operators.includes(value)) {
        return prev.slice(0, -1) + value;
      }
      if (operators.includes(lastValue) && value === ".") {
        return prev + "0.";
      }
      if (currentNumber?.includes(".") && value === ".") {
        return prev;
      }
      return prev + value;
    });
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (validKeys.includes(event.key)) {
      appendValue(event.key);
    }
    if (event.key === "Enter") {
      calculate();
    }
    if (event.key === "Escape") {
      setExpression("");
    }
    if (event.key === "Backspace") {
      setExpression((prev) => prev.substring(0, prev.length - 1));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="mainContainer">
      <div className="calculatorContainer">
        <ScreenCom expression={expression} />
        <Buttons
          setExpression={setExpression}
          calculate={() => calculate()}
          appendValue={(value: string) => appendValue(value)}
        />
        <p className="text-xs">Tap any button to calculate</p>
      </div>
    </main>
  );
}

export default App;
