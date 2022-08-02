import React, { useEffect } from "react";
import "./index.scss";
import axios from "axios";
const Wel = () => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("tech", "deep");
  encodedParams.append("text", "hello world.");
  encodedParams.append("language", "en");

  const options = {
    method: "GET",
    url: "https://text-to-speech27.p.rapidapi.com/speech",
    params: { text: "hello world", lang: "en-us" },
    headers: {
      "X-RapidAPI-Key": "609837955bmsh006154fa6b9c4b0p14703djsn06ac69178266",
      "X-RapidAPI-Host": "text-to-speech27.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const dd = async () => {
      try {
        await axios
          .request(options)
          .then(function (response) {
            URL.createObjectURL(new Blob(response.data));
          })
          .catch(function (error) {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    };
    dd();
  }, []);
  return <div>Wel</div>;
};

export default Wel;
