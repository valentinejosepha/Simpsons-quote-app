import React from 'react'
import "./Random.css"
import DisplayRandom from './DisplayRandom'

class Random extends React.Component {
  state = {
    characters: [],
    isloaded: false,
    tabCharacter: {
    name: "Luke Skywalker",
    height: 1.72,
    mass: 73,
    gender: "male",
    homeworld: "tatooine",
    wiki: "http://starwars.wikia.com/wiki/Luke_Skywalker",
    image: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    born: -19,
    bornLocation: "polis massa",
    died: 34,
    diedLocation: "ahch-to",
    species: "human",
    hairColor: "blond",
    eyeColor: "blue",
    skinColor: "light",
    cybernetics: "Prosthetic right hand",
    }

  }

  getRandom = () => {
    fetch("https://melroune.github.io/starwars-api/api/all.json")
    .then(res => res.json()) 
    .then(res => this.setState({characters: res, isloaded: true}))
  }

  componentDidMount() {
    this.getRandom()
  }

  random = max => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClick = () => {
    this.setState({tabCharacter : this.state.characters[this.random(87)]})
  }
  
  render () {
    return (
    <>
    <ul>
    <li>Name :{this.state.tabCharacter.name}</li>
    <li>Height :{this.state.tabCharacter.height}</li>
    <li>Mass :{this.state.tabCharacter.mass}</li>
    <li>Gender :{this.state.tabCharacter.gender}</li>
    <li>Homeworld :{this.state.tabCharacter.homeworld}</li>
    <li>Wiki :{this.state.tabCharacter.wiki}</li>
    <li><img 
     className="imgCharacter" 
     src={this.state.tabCharacter.image} 
     alt= {this.state.tabCharacter.name}></img></li>
    <li>Born :{this.state.tabCharacter.born}</li>
    <li>Born Location :{this.state.tabCharacter.bornLocation}</li>
    <li>Died :{this.state.tabCharacter.died}</li>
    <li>Death Location :{this.state.tabCharacter.diedLocation}</li>
    <li>Species :{this.state.tabCharacter.species}</li>
    <li>Eye Color:{this.state.tabCharacter.eyeColor}</li>
    <li>Hair Color :{this.state.tabCharacter.hairColor}</li>
    <li>Skin Color:{this.state.tabCharacter.skinColor}</li>
    <li>Cybernetics :{this.state.tabCharacter.cybernetics}</li>
    </ul>
    
    <button 
        className='NewCharacterButton'
        onClick={this.handleClick}>
      Get New Character
    </button>
    {/*  {!this.state.isloaded ? (<div>Loading...</div> 
    ) : (
     <div>
       Random
       <div>
       {this.state.characters.map(character => (
         <DisplayRandom character={character} key={character.id} />
       ))}
       </div>
     </div>
       )} */}
    </>
    )}
}

export default Random;