import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Loading } from "../shared/Loading";
import { APIService } from "../services/API.service";

export const FilmDetails = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [film, setFilm] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  console.log(location);

  const fetchFilm = async () => {
    let data = await APIService.getItem("films", id);
    if (data) setFilm(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFilm();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <button className="btn bg-secondary" onClick={() => navigate(-1)}>
            Back
          </button>
          <h1>{film.original_title}</h1>
          <p>{film.title}</p>
        </div>
      </div>
    </div>
  );
};
