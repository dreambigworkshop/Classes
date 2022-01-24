import "./App.css";
import Banner from "./Banner";
import Counter from "./Counter";
import Header from "./Header";
import NewsWrapper from "./NewsWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter initial={1} />
      <Banner />
      <NewsWrapper />
      <Header />
    </div>
  );
}

export default App;
