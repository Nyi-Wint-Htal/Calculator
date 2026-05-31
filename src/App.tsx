import Buttons from "./components/Buttons";
import ScreenCom from "./components/ScreenCom";

function App() {
  return (
    <main className="mainContainer">
      <div className="calculatorContainer">
        <ScreenCom />
        <Buttons />
        <p className="text-xs">Tap any button to calculate</p>
      </div>
    </main>
  );
}

export default App;
