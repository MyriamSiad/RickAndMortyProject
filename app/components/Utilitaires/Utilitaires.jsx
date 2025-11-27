import "./Utilitaires.css"
import { useContext, useEffect } from 'react'
import {RickMortyContext} from '@/contexts/RickMortyApi/RickMortyApi'
import MonImage from "../../assets/images/Myimage.jpg"
export default  function Utilitaires(){

   const {fetchPersonnages , personnage, getPersonnage} = useContext(RickMortyContext);
   useEffect (()=>{
       fetchPersonnages().then(() => {
        getPersonnage();
       })
    }, [])
    return(<>
        <div className="character-container">
  <button className="character-button" onClick={getPersonnage}>
    Nouveau personnage 
  </button>
  
  {personnage && (
            <div className="character-card">
            <img className="character-image" src={personnage?.image || {MonImage}} alt={personnage?.name} />
            
            <div className="character-info">
                <p className="character-name">{personnage?.name || "Click on the button above to  generate a character"}</p>
                
                <p>
                <strong>Status:</strong> 
                {personnage?.status}
                <span className={`status-badge status-${personnage?.status?.toLowerCase()}`}>
                    {personnage?.status ||'N/A'}
                </span>
                </p>
                
                <p><strong>Type:</strong> {personnage?.type || 'N/A'}</p>
                <p><strong>Gender:</strong> {personnage?.gender ||'N/A'}</p>
                <p><strong>Origin:</strong> {personnage?.origin || 'N/A'}</p>
            </div>
            </div>
        )}
        </div>
    </>)
}

/*les données reçues dans un état (state) et en utilisant un état (state) pour représenter un seul personnage, qui sera affiché via ce composant, sur une page de l'application.
webdevoo */

/* "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "Human",
    "gender": "Male",
    "origin": "Earth (C-137)",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"*/