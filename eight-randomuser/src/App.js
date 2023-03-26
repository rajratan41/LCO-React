import React, {useState, useEffect} from "react"

import {Container, Col, Row} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Axios from "axios"




function App() {

  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const {data} = await Axios.get("https://randomuser.me/api/")
    console.log("RESPONSE : " , data);

    const details = data.results[0]
    console.log(details);

    setDetails(details)
  }
  
  useEffect(()=> {
    fetchDetails()
  },[])


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
