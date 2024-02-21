import { useState } from "react";
import "./App.css";
import Movie from "./Movie";

const movie1 = {
  title: "The Internship",
  image:
    "https://m.media-amazon.com/images/M/MV5BMjM1MzczMDgwOV5BMl5BanBnXkFtZTcwMDM4NjM2OQ@@._V1_FMjpg_UX1000_.jpg",
  description:
    "The film stars Vince Vaughn and Owen Wilson as recently laid-off salesmen who attempt to compete with much younger and more technically skilled applicants for a job at Google.",
};
const movie2 = {
  title: "Hot Rod",
  image: "",
  description:
    "Self-proclaimed stuntman Rod Kimble is preparing for the jump of his life - to clear fifteen buses to raise money for his abusive stepfather Frank's life-saving heart operation.",
};
const movie3 = {
  title: "Shrek",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1DvGqHkDYItWN8zpDljD8fPUHREFCHPoHg&usqp=CAU",
  description:
    "Shrek is the ultimate fairy tale remix where an ornery ogre, a chatty donkey, and a princess with a secret happily ever after, team up to break the spell of predictability.",
};

function App() {
  const [selectedMovie, setMovie] = useState("");

  return (
    <>
      <div className="selectedMovie">
        <h2>{selectedMovie.title}</h2>
        <img src={selectedMovie.image} alt="" />
        <p>{selectedMovie.description}</p>
      </div>

      <div className="moviesContainer">
        <Movie
          movie={movie1}
          onClickFunction={() => {
            setMovie(movie1);
          }}
        />
        <Movie
          movie={movie2}
          onClickFunction={() => {
            setMovie(movie2);
          }}
        />
        <Movie
          movie={movie3}
          onClickFunction={() => {
            setMovie(movie3);
          }}
        />
      </div>
    </>
  );
}

export default App;
