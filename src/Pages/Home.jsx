import Row from "../components/share/Row";
import Requests from "../Api/reguests";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BannerShow, BannerState } from "../Redux/Reducers/bannerShow";

const Home = () => {
  const banner = useSelector(BannerState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BannerShow(true));
  }, [banner, dispatch]);

  return (
    <>
      <div>
        <Row
          className="h-[250px]"
          title="OrignialNetflix"
          fetchUrl={Requests.fetchNetflixOriginals}
          islarge
        />
        <Row title="Trainding Now" fetchUrl={Requests.fetchTrending} />
        <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
        <Row title="Romance" fetchUrl={Requests.fetchRomanceMovies} />
        <Row title="Comedies" fetchUrl={Requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
        <Row title="TopRated" fetchUrl={Requests.fetchTopRated} />
        <Row title="Action" fetchUrl={Requests.fetchActionMovies} />
      </div>
    </>
  );
};

export default Home;
