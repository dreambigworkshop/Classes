import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import NewsWrapper from "./NewsWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <NewsWrapper />
      <Header />
    </div>
  );
}

export default App;
