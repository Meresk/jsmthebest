import './App.css'
import JsmTimer from './components/jsmTimer.jsx'
import ComplimentGenerator from "./components/ComplimetGenerator.jsx";

function App() {

  return (
      <div className="gradient-bg">
          <div className="main-container">
              <h1 style={{ margin: "0" }}>
                  Спасибо вам, Юлия Сергеевна!
              </h1>
              <div>
                  <JsmTimer />
              </div>
              <div>
                  <ComplimentGenerator />
              </div>

          </div>
      </div>
  )
}

export default App
