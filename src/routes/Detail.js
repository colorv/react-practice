import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastIcon from "../components/CastIcon";
import Nav from "../components/Nav";
import LoadingIcon from "../components/LoadingIcon";
import styles from "./Detail.module.css";

function Detail() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const movieDetail = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`
      )
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    movieDetail();
  }, []);

  return (
    <main>
      <Nav />
      {loading ? (
        <LoadingIcon />
      ) : (
        <section>
          <div className={styles.header}>
            <img
              className={styles.posterImg}
              src={movie.medium_cover_image}
              alt={movie.title}
            />
            <div>
              <h1 className={styles.title}>{movie.title}</h1>
              <div className={styles.meta}>
                {movie.genres
                  ? movie.genres.map((genre, index) => (
                      <span key={index}>{genre} · </span>
                    ))
                  : null}
                {movie.runtime ? (
                  <span>
                    {`${Math.floor(movie.runtime / 60)}H ${
                      movie.runtime % 60
                    }M`}
                  </span>
                ) : null}
                <span> ⭐️ {movie.rating}</span>
              </div>
              <p className={styles.description}>
                {movie.description_full.length <= 455
                  ? movie.description_full
                  : `${movie.description_full.slice(0, 455)} ...`}
              </p>
            </div>
          </div>
          <div>
            <div className={styles.screenshot_container}>
              <h3 className={styles.screenshot_title}>관련 이미지</h3>
              <img
                className={styles.screenshot}
                src={movie.medium_screenshot_image1}
                alt=""
              />
              <img
                className={styles.screenshot}
                src={movie.medium_screenshot_image2}
                alt=""
              />
              <img
                className={styles.screenshot}
                src={movie.medium_screenshot_image3}
                alt=""
              />
            </div>
            <div>
              <h3>감독/출연</h3>
              {movie.cast
                ? movie.cast.map((cast, index) => (
                    <div className={styles.cast_container} key={index}>
                      {cast.url_small_image ? (
                        <img
                          className={styles.cast_img}
                          src={cast.url_small_image}
                          alt=""
                        />
                      ) : (
                        <CastIcon />
                      )}
                      <div className={styles.cast_info}>
                        <span>{cast.name}</span>
                        <span className={styles.character_name}>
                          {cast.character_name}
                        </span>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Detail;
