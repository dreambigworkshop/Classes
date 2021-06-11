import logo from './logo.svg';
import './App.css';
import HeadeComponent from './Components/HeadeComponent';
import ContentComponent from './Components/ContentComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div className="App">
        <div className="header">
          {/* <HeadeComponent /> */}
        </div>
        <div className="content">
          <ContentComponent initialValue={5}/>
        </div>
        <div className="footer">
          {/* <FooterComponent /> */}
        </div>
    </div>
  );
}

export default App;
