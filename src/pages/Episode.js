import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Cards from "../Components/Cards/Cards";
import Inputgroup from "../Components/InputGroup";

const Episode = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [results, setResults] = useState([]);
  console.log(info);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function (params) {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((char) => {
          return fetch(char).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row mb-4">
          <h1 className="text-center mb-4">
            Episodio :{" "}
            <span className="text-primary">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center">
            Data de exibicao : {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>
        <div className="row">
          <div className="col-3">
            <h4 className=" text-center mb-4">Escolher Episodios</h4>
            <Inputgroup setID={setID} name="Episode" total={51} />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Episode;
