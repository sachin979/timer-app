import "./App.css";
import useTimer from "./Timer";

function App() {
  const { timer, start, stop, pause } = useTimer();
  const btnStyle = {
    width: "80px",
    height: "30px",
    margin: "10px",
    fontSize: "14px",
    fontWeight: "600",
  };
  return (
    <div className="App">
      <div style={{ fontSize: "28px" }}> {timer} </div>
      <div>
        <button onClick={start} style={btnStyle}>
          Start
        </button>
        <button onClick={pause} style={btnStyle}>
          Pause
        </button>
        <button onClick={stop} style={btnStyle}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
