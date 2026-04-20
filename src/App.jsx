import Bottom from "./assets/img/bottom.png"
import './App.css'

export default function App() {
  return (
    <>
      <div className="container">
        <div className="birthday">
          <div className="day">
            <p>GÜN</p>
            <input type="text" />
          </div>
          <div className="month">
            <p>AY</p>
            <input type="text" />
          </div>
          <div className="year">
            <p>YIL</p>
            <input type="text" />
          </div>
        </div>
        <img src={Bottom} className="bottom" alt="" />
        <div className="results">
          <div className="years">
            <h1><span>--</span> Yıl</h1>
          </div>
          <div className="months">
            <h1><span>--</span> Ay</h1>
          </div>
          <div className="day">
            <h1><span>--</span> Gün</h1>
          </div>
        </div>
      </div>
    </>
  )
}