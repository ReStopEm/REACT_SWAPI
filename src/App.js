import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
class StarWarsService extends Component {
  constructor() {
    super();
    this.state = {
      starwarsData: null,
    }
  }

  componentDidMount() {
    const zip = this.props.zip;
    const apiURL = "https://swapi.co/api/planets/?page=" + zip  ;
    
    fetch(apiURL)
      .then(res => res.json())
      .then(json => { this.setState({ starwarsData: json }) })
  }

  render() {
    const starwarsData = this.state.starwarsData;
    if (!starwarsData) return (<div>Loading data...</div>)
    const starwars = starwarsData;
    
    return (
      PLANETS.map((place, index) => (
      <div >
        
        <h1>
          { starwars.planets }  {starwarsData.planets}
          
        </h1>
        {/* {JSON.stringify(starwarsData)}
        {console.log(JSON.stringify(starwarsData.results[0].name))} */}
        
        <p>Name:{starwarsData.results[index].name}</p>
        <p>Diameter:{starwarsData.results[index].diameter}</p>
        <p>Rotation_period:{starwarsData.results[index].rotation_period}</p>
        <p>Orbital_period:{starwarsData.results[index].orbital_period}</p>
        <p>Gravity:{starwarsData.results[index].gravity}</p>
        <p>Population:{starwarsData.results[index].population}</p>
        <p>Climate:{starwarsData.results[index].climate}</p>
        <p>Terrain:{starwarsData.results[index].terrain}</p>
        <p>Surface_water:{starwarsData.results[index].surface_water}</p>  
       
        {place.name}
      </div>
      ))
    );
  }
}
const PLANETS = [
  { name: "1", zip: "1" },
  { name: "2", zip: "2" },
  { name: "3", zip: "3" },
  { name: "4", zip: "4" },
  { name: "5", zip: "5" },
  { name: "6", zip: "6" },
  { name: "7", zip: "7" },
  { name: "8", zip: "8" },
  { name: "9", zip: "9" },
  { name: "10", zip: "10" },
 ];
 const PLACES = [
  { name: "1", zip: "1" },
  { name: "2", zip: "2" },
  { name: "3", zip: "3" },
  { name: "4", zip: "4" },
  { name: "5", zip: "5" },
  { name: "6", zip: "6" },
  { name: "7", zip: "7" },
 ];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    }
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {
          PLACES.map((place, index) => (
            <button key={index}
            className={"button " + (index%2===0?"is-danger":"is-primary")}
              onClick={() => (
                
                this.setState({ activePlace: index })
               )}> 
              
              {place.name}
            </button>
          ))}
        <StarWarsService zip={PLACES[activePlace].zip} key={activePlace} />
      </div>
    );
  }
}

export default App;
