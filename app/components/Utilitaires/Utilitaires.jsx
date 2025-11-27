import "./Utilitaires.css"
import { useContext, useEffect } from 'react'
import {RickMortyContext} from '@/contexts/RickMortyApi/RickMortyApi'
export default  function Utilitaires(){

   const {fetchPersonnages , personnage, getPersonnage} = useContext(RickMortyContext);
   useEffect (()=>{
       fetchPersonnages();

    }, [])
    return(<>
        <div className="character-container">
  <button className="character-button" onClick={getPersonnage}>
    Nouveau personnage 
  </button>
  
  {personnage && (
            <div className="character-card">
            <img className="character-image" src={personnage?.image} alt={personnage?.name} />
            
            <div className="character-info">
                <p className="character-name">{personnage?.name}</p>
                
                <p>
                <strong>Status:</strong> 
                {personnage?.status}
                <span className={`status-badge status-${personnage?.status?.toLowerCase()}`}>
                    {personnage?.status}
                </span>
                </p>
                
                <p><strong>Type:</strong> {personnage?.type || 'N/A'}</p>
                <p><strong>Gender:</strong> {personnage?.gender}</p>
                <p><strong>Origin:</strong> {personnage?.origin}</p>
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