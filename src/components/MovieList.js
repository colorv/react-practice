import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MovieList.module.css";

function MovieList({ genre, rating, header, limit, page }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const genreParams = genre ? `&genre=${genre}` : "";
  const ratingParams = rating ? `&minimum_rating=${rating}` : "";
  const limitParams = limit ? `&limit=${limit}` : "&limit=8";
  const pageParams = page ? `&page=${page}` : "";
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?&sort_by=year${limitParams}${genreParams}${ratingParams}${pageParams}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return limit ? (
    movies.map((movie) => (
      // Top Movie - 1 Item
      <section
        className={styles.top_movie}
        key={movie.id}
        style={{
          backgroundImage: `url(${movie.background_image})`,
          backgroundSize: "cover",
        }}
      >
        <article className={styles.top_movie_info}>
          <div>
            <h1 className={styles.top_movie_title}>{movie.title}</h1>
            <p className={styles.top_movie_description}>
              {movie.description_full}
            </p>
            <Link to={`movie/${movie.id}`}>
              <button className={styles.top_movie_btn}>⌽ 상세 정보</button>
            </Link>
          </div>
          <img
            className={styles.top_movie_img}
            src={movie.medium_cover_image}
            alt={movie.title}
          />
        </article>
      </section>
    ))
  ) : (
    // movie list - 8 Item
    <section className={styles.movie_list}>
      {loading ? null : (
        <div>
          <h2 className={styles.list_title}>{header}</h2>
        </div>
      )}
      <article>
        {movies.map((movie) => (
          <Link to={`movie/${movie.id}`} key={movie.id}>
            <img
              className={styles.movie_img}
              src={movie.medium_cover_image}
              alt={movie.title}
            />
          </Link>
        ))}
      </article>
    </section>
  );
}

MovieList.propType = {
  header: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  limit: PropTypes.number,
  page: PropTypes.number,
};

export default MovieList;
