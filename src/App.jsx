import CircleMobile from "./assets/img/circle-mobile.png"
import CircleDesktop from "./assets/img/circle-desktop.png"
import './App.css'
import { useState } from "react"

export default function App() {

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  function validate(value, type) {

    const num = Number(value);
    const currentYear = new Date().getFullYear();

    if (!value.trim()) {
      if (type === "day") return "Gün Alanı Boş Bırakılamaz";
      if (type === "month") return "Ay Alanı Boş Bırakılamaz";
      if (type === "year") return "Yıl Alanı Boş Bırakılamaz";
    }
    if (isNaN(num)) {
      return "Sadece Sayı Giriniz";
    }

    if (type === "day" && (num < 1 || num > 31)) {
      return "Geçerli Bir Gün Giriniz";
    }
    if (type === "month" && (num < 1 || num > 12)) {
      return "Geçerli Bir Ay Giriniz";
    }
    if (type === "year" && (num > currentYear)) {
      return "Geçerli Bir Yıl Giriniz";
    }

    return "";
  }

  return (
    <>
      <div className="container">
        <div className="birthday">
          <div className="field">
            <p className={dayError ? "label-error" : ""}>GÜN</p>
            <input
              type="text"
              onChange={(e) => {
                const value = e.target.value;
                setDay(value);

                const validationError = validate(value, "day");
                setDayError(validationError);
              }}
              value={day}
              maxLength={2}
              placeholder="GÜN"
              className={dayError ? "input-error" : ""}
            />
            {dayError && <span className="error-text">{dayError}</span>}
          </div>
          <div className="field field--middle">
            <p className={monthError ? "label-error" : ""}>AY</p>
            <input
              type="text"
              onChange={(e) => {
                const value = e.target.value;
                setMonth(value);

                const validationError = validate(value, "month");
                setMonthError(validationError);
              }}
              value={month}
              maxLength={2}
              placeholder="AY"
              className={monthError ? "input-error" : ""}
            />
            {monthError && <span className="error-text">{monthError}</span>}
          </div>
          <div className="field">
            <p className={yearError ? "label-error" : ""}>YIL</p>
            <input
              type="text"
              onChange={(e) => {
                const value = e.target.value;
                setYear(value);

                const validationError = validate(value, "year");
                setYearError(validationError);
              }}
              value={year}
              maxLength={4}
              placeholder="YIL"
              className={yearError ? "input-error" : ""}
            />
            {yearError && <span className="error-text">{yearError}</span>}
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