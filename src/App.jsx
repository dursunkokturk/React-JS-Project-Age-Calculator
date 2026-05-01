import CircleMobile from "./assets/img/circle-mobile.png"
import CircleDesktop from "./assets/img/circle-desktop.png"
import './App.css'
import { useState } from "react"

export default function App() {

  const [day, setDay] = useState("");
  const [error, setError] = useState("");

  function validate(value) {

    const num = Number(value);

    if (!value.trim()) {
      return "Gün Alanı Boş Bırakılamaz";
    }

    if (isNaN(num) || num < 1 || num > 31) {
      return "Geçerli Bir Gün Giriniz";
    }

    return "";
  }

  return (
    <>
      <div className="container">
        <div className="birthday">
          <div className="field">
            <p className={error ? "label-error" : ""}>GÜN</p>
            <input
              type="text"
              onChange={(e) => {
                const value = e.target.value;
                setDay(value);

                const validationError = validate(value);
                setError(validationError);
              }}
              value={day}
              maxLength={2}
              placeholder="GÜN"
              className={error ? "input-error" : ""}
            />
            {error && <span className="error-text">{error}</span>}
          </div>
          <div className="field field--middle">
            <p>AY</p>
            <input type="text" maxLength={2} placeholder="AY" />
          </div>
          <div className="field">
            <p>YIL</p>
            <input type="text" maxLength={4} placeholder="YIL" />
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