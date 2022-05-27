import Row from "../components/share/Row";
import Requests from "../Api/reguests";

const Tvshows = () => {
  return (
    <>
      <Row title="Comedies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="TopRated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action" fetchUrl={Requests.fetchActionMovies} />
    </>
  );
};

export default Tvshows;
