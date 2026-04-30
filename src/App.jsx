import CircleMobile from "./assets/img/circle-mobile.png"
import CircleDesktop from "./assets/img/circle-desktop.png"
import './App.css'

export default function App() {
  return (
    <>
      <div className="container">
        <div className="birthday">
          <div className="field">
            <p>GÜN</p>
            <input type="text" maxLength={2} />
          </div>
          <div className="field field--middle">
            <p>AY</p>
            <input type="text" maxLength={2} />
          </div>
          <div className="field">
            <p>YIL</p>
            <input type="text" maxLength={4} />
          </div>
        </div>

        <div className="separator" />

        <div className="action">
          <img src={CircleMobile} className="circle-mobile" alt="" />
          <img src={CircleDesktop} className="circle-desktop" alt="" />
          {/* <img src={CircleBottom} className="circle-bottom" alt="" /> */}
        </div>

        <div className="results">
          <h1><span>--</span> Yıl</h1>
          <h1><span>--</span> Ay</h1>
          <h1><span>--</span> Gün</h1>
        </div>
      </div>
    </>
  )
}