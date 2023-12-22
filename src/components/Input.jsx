import React, { useState, useEffect } from "react";
import useCurrencyInfo from "../hook/useCurrencyInfo";
import "./input.css";
function Input() {
  const [selectCountry, setSelectCountry] = useState("inr");
  const [selectedCountry, setSelectedCountry] = useState("");
  const data = useCurrencyInfo(selectCountry);
  const [country, setCountry] = useState([]);
  const [inputCurrency, setInputCurrency] = useState(1);
  const [isClick, setIsClick] = useState(true);
  useEffect(() => {
    if (data[selectCountry]) {
      const allKeys = Object.keys(data[selectCountry]);
      setCountry(allKeys);
      // console.log(allKeys,"all")
    }
  }, [data]);
  const handleInputCurrency = (e) => {
    setInputCurrency(e.target.value);
  };
  const handleConvert = () => {
    console.log(data[selectCountry][selectedCountry]);
    setInputCurrency(inputCurrency * data[selectCountry][selectedCountry]);
    setIsClick(true);
  };
  return (
    <div style={{ marginTop: "50px" }} id="main_container">
      <h2 id="main_heading"> Currency Converter</h2>
      <label type="inputCurrency"></label>
      <input
        type="number"
        name="inputCurrency"
        id="inputCurrency"
        onChange={handleInputCurrency}
        value={inputCurrency}
      />
      <div className="countrySelBox">
        From:{" "}
        <select
          name=""
          id="from"
          onChange={(e) => {
            setIsClick(false);
            return setSelectCountry(e.target.value);
          }}
        >
          {country?.map((el) => {
            return (
              <option value={el} key={el}>
                {el}
              </option>
            );
          })}
        </select>
        To:{" "}
        <select
          name=""
          id="to"
          onChange={(e) => {
            setIsClick(false);
            {
              return setSelectedCountry(e.target.value);
            }
          }}
        >
          {country?.map((el) => {
            return (
              <option value={el} key={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
      <button onClick={handleConvert} disabled={isClick}>
        Convert
      </button>
    </div>
  );
}

export default Input;

// import React, { useState } from 'react';
// import useCurrencyInfo from '../hook/useCurrencyInfo'; // Adjust the path accordingly

// function CurrencyInfoComponent() {
//   const [selectedCurrency, setSelectedCurrency] = useState('inr');
//   const[data,loading,error] = useCurrencyInfo(selectedCurrency);

//   const handleCurrencyChange = (event) => {
//     setSelectedCurrency(event.target.value);
//   };
// console.log(data)
//   return (
//     <div>
//       <h1>Currency Information</h1>

//       <label>Select Currency:</label>
//       <select value={selectedCurrency} onChange={handleCurrencyChange}>
//         <option value="inr">INR</option>
//         <option value="usd">USD</option>
//         {/* Add more currency options as needed */}
//       </select>

//       {loading && <div>Loading...</div>}
//       {error && <div>Error: {error.message}</div>}

//       {data && (
//         <div>
//           <h2>{data.name}</h2>
//           <p>Symbol: {data.symbol}</p>
//           {/* Render additional information based on your data */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CurrencyInfoComponent;
