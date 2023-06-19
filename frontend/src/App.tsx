import AppRouter from "./components/AppRouter";
import "./css/App.css";
import background from "./assets/backgrounds/Wallpaper.png";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
