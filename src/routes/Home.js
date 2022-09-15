import { useState } from "react";
import MovieList from "../components/MovieList";
import Nav from "../components/Nav";
import LoadingIcon from "../components/LoadingIcon";

function Home() {
  const [loading, setLoading] = useState(true);

  const onLoad = () => {
    setLoading(false);
  };

  return (
    <main>
      <Nav />
      <main onLoad={onLoad}>
        {loading ? <LoadingIcon /> : null}
        <MovieList rating={8.5} limit={1} />
        <MovieList rating={8.5} header={"평점 8.5이상"} page={5} />
        <MovieList genre={"Documentary"} header={"다큐멘터리"} />
        <MovieList genre={"Thriller"} header={"스릴러"} />
        <MovieList genre={"Animation"} header={"애니메이션"} />
        <MovieList genre={"Sci-Fi"} header={"#SF"} page={2} />
      </main>
    </main>
  );
}

export default Home;
