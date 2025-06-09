import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      {/* Header */}
      <MainContent />
      {/* About */}
      <About />
      {/* Project */}
      <Project />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
