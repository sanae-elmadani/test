import React from "react";
import { useState, useEffect } from "react";
import main from "../assets/images/Judge.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import Wrapper1 from "../assets/wrappers/RegisterPage";
import DropDown from "./DropDown/DropDown";

const initialState = {
  spécialité: "",
  ville: "",
};

function SearchCard() {
  const [selected, setSelected] = useState("Choose One");
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper>
      <main>
        <div className="container page">
          <div className="info">
            <Wrapper1 className="full-page">
              <form className="form" onSubmit={onSubmit}>
                <h3>Chercher un Avocat</h3>

                {/* Spécialité field */}
                <div className="form-row">
                  <label htmlFor="name" className="form-label">
                    Spécialité
                  </label>
                  <DropDown />
                  <label htmlFor="name" className="form-label">
                    Ville
                  </label>
                  <DropDown />
                  {/* <input
                    type="text"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    className="form-input"
                  /> */}
                </div>

                <button type="submit" className="btn btn-block">
                  Chercher
                </button>
              </form>
            </Wrapper1>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
}

export default SearchCard;
