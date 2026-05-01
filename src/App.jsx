import CircleMobile from "./assets/img/circle-mobile.png"
import CircleDesktop from "./assets/img/circle-desktop.png"
import './App.css'
import { useState } from "react"

export default function App() {

  const [formError, setFormError] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const [resultYear, setResultYear] = useState("--");
  const [resultMonth, setResultMonth] = useState("--");
  const [resultDay, setResultDay] = useState("--");

  function checkFormValidity() {
    const hasError = dayError || monthError || yearError || !day || !month || !year;

    if (hasError) {
      setFormError("Lütfen Tüm Alanları Doğru Şekilde Doldurunuz");
      return false;
    }

    setFormError("");
    return true;
  }

  // ------------------- Artik Yil Hesaplama -------------------
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  // ---------- Ayin Kac Gun Cektigini Bulan Fonksiyon ----------
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  // --------- Bos Alanlarin Kontrolunu Yapiyoruz ---------
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

    if (type === "day") {

      // Kullanici Ilk Olarak Gun Degerini Yazarsa 
      // Tam Tarih Girilene Kadar Hata Vermesini Engelliyoruz
      if (!month || !year) return "";

      const daysInMonth = getDaysInMonth(Number(month), Number(year));

      if (num < 1 || num > daysInMonth) {
        return "Geçerli Bir Gün Giriniz";
      }
    }

    if (type === "month" && (num < 1 || num > 12)) {
      return "Geçerli Bir Ay Giriniz";
    }

    if (type === "year" && (num > currentYear)) {
      return "Geçerli Bir Yıl Giriniz";
    }

    return "";
  }

  function calculateAge() {
    if (!checkFormValidity()) return;

    const d = Number(day);
    const m = Number(month);
    const y = Number(year);

    const birthDate = new Date(y, m - 1, d);
    const today = new Date();

    // Guncel Gun Ay Yil Bilgilerini Aliniyor 
    const isValidDate = birthDate.getFullYear() === y && birthDate.getMonth() === m - 1 && birthDate.getDate() === d;

    if (!isValidDate) {
      setFormError("Geçersiz tarih girdiniz");
      return;
    }

    // Guncel Gun Ay Yil Bilgilerine Gore 
    // Kullanicidan Alinan Degerler Hesaplaniyor
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Gun Negatifse Aydan Borc Al
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    // Ay Negatifse Yıldan Borc Al
    if (months < 0) {
      years--;
      months += 12;
    }

    // Gun Bilgisinin Guncel Durumunu Aliyoruz 
    setResultDay(days);
    
    // Ay Bilgisinin Guncel Durumunu Aliyoruz 
    setResultMonth(months);
    
    // Yil Bilgisinin Guncel Durumunu Aliyoruz 
    setResultYear(years);
  }

  return (
    <>
      <div className="container">
        {formError && (
          <div className="form-error">
            {formError}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateAge();
          }}>
          <div className="birthday">

            {/* ----------------- Gun Verisi ----------------- */}
            <div className="field">
              <p className={dayError ? "label-error" : ""}>GÜN</p>
              <input
                type="text"
                onChange={(e) => {
                  const value = e.target.value;
                  setDay(value);

                  const validationError = validate(value, "day");
                  setDayError(validationError);
                  setFormError("");
                }}
                value={day}
                className={dayError ? "input-error" : ""}
                maxLength={2}
                placeholder="GÜN"
              />
              {dayError && <span className="error-text">{dayError}</span>}
            </div>

            {/* ----------------- Ay Verisi ----------------- */}
            <div className="field field--middle">
              <p className={monthError ? "label-error" : ""}>AY</p>
              <input
                type="text"
                value={month}
                maxLength={2}
                className={monthError ? "input-error" : ""}
                placeholder="AY"
                onChange={(e) => {
                  const value = e.target.value;
                  setMonth(value);

                  const validationError = validate(value, "month");
                  setMonthError(validationError);
                  setFormError("");
                }}
              />
              {monthError && <span className="error-text">{monthError}</span>}
            </div>

            {/* ----------------- Yil Verisi ----------------- */}
            <div className="field">
              <p className={yearError ? "label-error" : ""}>YIL</p>
              <input
                type="text"
                value={year}
                maxLength={4}
                className={yearError ? "input-error" : ""}
                placeholder="YIL"
                onChange={(e) => {
                  const value = e.target.value;
                  setYear(value);

                  const validationError = validate(value, "year");
                  setYearError(validationError);
                  setFormError("");
                }}
              />
              {yearError && <span className="error-text">{yearError}</span>}
            </div>
          </div>

          <div className="separator" />
          {formError && <p className="form-error">{formError}</p>}

          <div className="action" onClick={checkFormValidity}>
            
            {/* --------- Hesapla Butonu Mobil Gorunum --------- */}
            <img
              src={CircleMobile}
              className="circle-mobile action-click"
              onClick={calculateAge}
              alt=""
            />

            {/* --------- Hesapla Butonu Desktop Gorunum --------- */}
            <button type="submit" className="action-btn">
              <img
                src={CircleDesktop}
                className="circle-desktop action-click"
                onClick={calculateAge}
                alt=""
              />
            </button>
          </div>
        </form>

        {/* -------- Hesaplama Sonuclarini Ekrana Yazdiriyoruz -------- */}
        <div className="results">
          <h1><span>{resultYear}</span> Yıl</h1>
          <h1><span>{resultMonth}</span> Ay</h1>
          <h1><span>{resultDay}</span> Gün</h1>
        </div>
      </div>
    </>
  )
}