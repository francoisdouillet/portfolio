import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="home">
      <h1>FRANCOIS DOUILLET</h1>
      <h2>Developpeur Web Full-Stack</h2>
      <div className="home__link">
        <Link to="/project">Mes projets</Link>
        <Link to="/about">Infos</Link>
      </div>
    </div>
  );
};

export default Home;
