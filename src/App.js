import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Nav";
import Skills from "./components/Courses";

import Testimonals from "./components/Testimonals";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Testimonals />
      <Contact />
    </div>
  );
}

export default App;
