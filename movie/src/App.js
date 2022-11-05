// APP.js Sebagai File Index Utama Pada React Js
// Import CSS
import "./css/style.css";
import "./App.css";
// Memanggil Semua Componen = View / Segmen
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      {/* Header Section */}
      <div className="myBG">
        {/* Navigation */}
        {/* Memanggil Componen Navigation Bar */}
        <NavigationBar />
        {/* End Navigation */}
        {/* Header Section Intro */}
        {/* Inline CSS */}
        {/* <p style={{textAlign:"center"}}></p> */}
        <Intro />
        {/* End Header Section Intro */}
      </div>
      {/* End Header Section */}
      {/* Main Section */}
      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End Trending Section */}
      {/* Superhero Section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* End Superhero section */}
      {/* End Main Section */}
    </div>
  );
}

export default App;
