import React from "react";
import "./index.scss";
const FirstPage = () => {
  var name = "What I can call you";
  name = name.split("");
  console.log(name);
  return (
    <main className="m_div">
      <div className="typewriter">
        <h1 className="typ">Hi,I'm Prateek</h1>
      </div>
      <form className="form">
        <label htmlFor="name">
          {name.map((item, idx) => {
            console.log(item);
            return  <span key={idx} className="char">
                  {item}
                </span>
          })}{" "}
          <span className="heart">❤?</span>
        </label>
        <input type={"text"} id="name" />
        <button type="submit" className="send">
          Move ✈
        </button>
      </form>
    </main>
  );
};

export default FirstPage;
