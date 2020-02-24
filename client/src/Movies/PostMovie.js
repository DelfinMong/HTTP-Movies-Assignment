import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostMovie = props => {
  const [postFilm, setpostFilm] = useState({
    id: Date.now(),
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  

  const handleChange = e => {
    setpostFilm({ ...postFilm, [e.target.name]: e.target.value });
  };

  const handleStars = e => {
    setpostFilm({ ...postFilm, stars:[e.target.value] });
  };

 
  const handleSubmit = e => {
    e.preventDefault();
      setpostFilm({ ...postFilm });
      axios
        .post("http://localhost:5000/api/movies/", postFilm)
        .then(res => {
          setpostFilm(postFilm);
        //   props.addToSavedList(postFilm);
          props.history.push("/");
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }

    // useEffect(() => {
    //     axios
    //       .get(`http://localhost:5000/api/movies/`)
    //       .then(res => {
    //         setpostFilm({ res.data, postFilm});
    //       })
    //       .catch(err => {
    //         console.log("Error: ", err);
    //       });
    //   }, []);
  

  return (
    <div className="postMovie">
      <form onSubmit={handleSubmit}>
        <h1>
          
            <input
              type="text"
              name="title"
              value={postFilm.title}
              placeholder="Title"
              onChange={handleChange}
            />
         
        </h1>
        <p>
          
            <input
              type="text"
              name="director"
              value={postFilm.director}
              placeholder="Director"
              onChange={handleChange}
            />
          
        </p>
        <p>
          
            <input
              type="text"
              name="metascore"
              value={postFilm.metascore}
              placeholder="Metascore"
              onChange={handleChange}
            />
        
        </p>
        <p>
         
            <input
              type="text"
              name="stars"
              value={postFilm.stars}
              placeholder="Stars"
              onChange={handleStars}
            />
         
        </p>
        <button type="submit">
          Post-Movie
        </button>
      </form>
    </div>
  )
};

export default PostMovie;


