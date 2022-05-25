import './App.scss';
import CircleButton from "./CircleButton/CircleButton";

function App() {
  return (
    <div className="App">
      <CircleButton
        svgType={'expand'}
      />
        <CircleButton
            svgType={'closeButton'}
        />
    </div>
  );
}

export default App;
