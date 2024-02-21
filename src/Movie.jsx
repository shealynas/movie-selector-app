export default function Movie({ movie, onClickFunction }) {
  return (
    <div
      className="movie"
      onClick={() => {
        onClickFunction();
      }}
    >
      <h2>{movie.title}</h2>
      <img src={movie.image} alt="" />
    </div>
  );
}
