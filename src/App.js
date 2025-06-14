import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
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
      <ScrollToTopButton />
    </div>
  );
}

export default App;
