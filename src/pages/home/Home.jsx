import Chart from "../../components/chart/Chart";
import "./Home.scss";
import Board from "../../components/board/Board";
import BoardEvent from "../../components/board/BoardEvent";
import Featured from "../../components/featured/Featured";
import Imageboard from "../../components/imageboard/Imageboard";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div className="Home">
      <div className="homeContainer">
        <Banner />
        <Featured />
      </div>

      <div className="chart">
        <Chart />
      </div>
      <div className="Imageboard1">
        <Imageboard />
      </div>

      <div className="listContainer">
        <Board />
        <BoardEvent />
      </div>
    </div>
  );
};

export default Home;
