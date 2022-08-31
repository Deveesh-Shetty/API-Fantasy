import React from "react";
import { useRef } from "react";
import "./Pincode.css";

function Pincode() {
  const inputCity = useRef(null);
  const result = useRef(null);
  const errorMessage = useRef(null);

  function getCityPincode() {
    result.current.textContent = "";
    if (inputCity.current.value === null || inputCity.current.value === "") {
      errorMessage.current.style.display = "block";
    } else {
      errorMessage.current.style.display = "none";
    }
    const city = inputCity.current.value;
    fetch(`https://api.postalpincode.in/postoffice/${city}`)
      .then((response) => response.json())
      .then((cityData) => {
        cityData[0].PostOffice.forEach((city) => {
          const cityNameH2 = document.createElement("h2");
          const cityPincodeH2 = document.createElement("h2");
          const cityDiv = document.createElement("div");

          cityNameH2.innerHTML = `<span>${city.Name}</span>, ${city.Division}, ${city.District}, ${city.State}, ${city.Country}`;
          cityPincodeH2.textContent = city.Pincode;

          cityDiv.append(cityNameH2);
          cityDiv.append(cityPincodeH2);
          result.current.append(cityDiv);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div id="pincode-search">
      <h1>Pincode</h1>
      <div className="pincode">
        <p>Enter City Name</p>
        <input
          type="text"
          name="city"
          id="city-search"
          ref={inputCity}
          placeholder="City Name"
        />
        <div className="buttons">
          <input type="submit" value="Search" onClick={getCityPincode} />
        </div>
        <h1 style={{ color: "var(--pop-color)" }}>Search results</h1>
        <h1
          className="error"
          style={{
            color: "red",
            fontSize: "3.5em",
            textAlign: "center",
            marginBlock: "10%",
            display: "none",
          }}
          ref={errorMessage}
        >
          Enter a valid City
        </h1>
        <div className="pincode-result" ref={result}>
          {/* <h2 className="city-name"></h2> */}
          {/* <h2 className="city-pincode"></h2> */}
        </div>
      </div>
    </div>
  );
}

export default Pincode;
