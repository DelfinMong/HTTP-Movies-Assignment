import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateMovie = props => {
  const [updateFilm, setUpdateFilm] = useState({
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  const { id } = useParams();

  const handleChange = e => {
    setUpdateFilm({ ...updateFilm, [e.target.name]: e.target.value });
  };

  const handleStars = e => {
    setUpdateFilm({ ...updateFilm, stars:[e.target.value] });
  };

 
  const handleSubmit = e => {
    e.preventDefault();
    
      axios
        .put(`http://localhost:5000/api/movies/${id}`, updateFilm)
        .then(res => {
          // props.addToSavedList(updateFilm);
          props.history.push("/");
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }
  

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
          console.log(res.data);
          // updating to the new updated list. Filling the form with existing data.
          setUpdateFilm(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="updateMovie">
      <form onSubmit={handleSubmit}>
        <h1>
          
            <input
              type="text"
              name="title"
              value={updateFilm.title}
              placeholder="Title"
              onChange={handleChange}
            />
         
        </h1>
        <p>
          
            <input
              type="text"
              name="director"
              value={updateFilm.director}
              placeholder="Director"
              onChange={handleChange}
            />
          
        </p>
        <p>
          
            <input
              type="text"
              name="metascore"
              value={updateFilm.metascore}
              placeholder="Metascore"
              onChange={handleChange}
            />
        
        </p>
        <p>
         
            <input
              type="text"
              name="stars"
              value={updateFilm.stars}
              placeholder="Stars"
              onChange={handleStars}
            />
         
        </p>
        <button type="submit">
          UpdateMovie
        </button>
      </form>
    </div>
  )
};

export default UpdateMovie;