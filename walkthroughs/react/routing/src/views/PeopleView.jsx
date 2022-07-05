import React from "react";
import { Link } from "react-router-dom";
import { APIService } from "../services/API.service";

export const PeopleView = (props) => {
  const [people, setPeople] = React.useState([]);

  const fetchPeople = async () => {
    let data = await APIService.getList("people");
    if (data) setPeople(data);
  };

  React.useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <main>
      <h1>People {people.length}</h1>
      <div className="container">
        {people.map(({ id, name }) => (
          <div key={id} className="card">
            <h3>{name}</h3>
            <Link to={`${id}`}>View More</Link>
          </div>
        ))}
      </div>
    </main>
  );
};
