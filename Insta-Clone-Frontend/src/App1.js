import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import insta from './PostView/insta.png'
import Postview from './PostView/postview';
import camera from './PostView/cam.png'
function App() {
  const [userData, updateUserData] = useState([])
  useEffect(() => {
        fetch('https://insta-backend-3sch.onrender.com')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
              console.log(myJson);
              myJson.reverse()
              updateUserData(myJson)
            });
            
    },[])
    
  
  return (
   <>
    <header id='header'><div id='head'><img id='logo' alt='logo' src={insta}></img><h2>Insta clone x</h2></div> <Link to="/upload"><img alt='cam' src={camera}/></Link>  </header>
        <div className="App">
        <div className='cards'>
          {userData.map((ele, ind) => {
            return <Postview key={`card${ind}`} data={ele} index={ind}/>
            })}
        </div>
    </div>
    </>
  )
}
export default App;