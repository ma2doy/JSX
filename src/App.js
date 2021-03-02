import logo from './logo.svg';
import './App.css';
import pic2 from "./pic2.jpeg"
import "./style.css"
function App() {
  return (
    <>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Youssef</h1>
    <titlered style={{ color: "red", fontSize: 60 }}>the title</ titlered>
    <br />
    <img src="/pic1.jpg"alt="pic1" />
    <br />
    <img src={pic2}alt="pic2"></img>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
  );
}

export default App;
