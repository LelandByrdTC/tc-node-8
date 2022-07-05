import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Loading } from "../shared/Loading";
import { APIService } from "../services/API.service";

export const PersonDetails = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  console.log(location);

  const fetchPerson = async () => {
    let data = await APIService.getItem("people", id);
    if (data) setPerson(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <button className="btn bg-secondary" onClick={() => navigate(-1)}>
            Back
          </button>
          <h1>{person.name}</h1>
        </div>
      </div>
    </div>
  );
};
