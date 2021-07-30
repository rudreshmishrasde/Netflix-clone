import logo from './logo.svg';
import './App.css';
import Rows from './Rows'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <Rows title = "NETFLIX ORIGINALS" fetchUrl ={requests.fetchTrending} />
      <Rows title = "Trending Now" fetchUrl = {requests.fetchNetflixOriginals}/>
      
    </div>
  );
}

export default App;
