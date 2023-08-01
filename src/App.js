import Background from "./component/home/Background";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Project from "./component/project/Project";
import BackToHome from "./component/utils/BackToHome";
import About from "./component/about/About";
import Network from "./component/home/Network";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Background />
                <Home />
                <Network />
              </>
            }
          />
          <Route
            path="/project"
            element={
              <>
                <Background />
                <BackToHome />
                <Project />
              </>
            }
          />
          <Route 
          path="/about"
          element={
            <>
            <Background />
            <BackToHome />
            <About />
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
