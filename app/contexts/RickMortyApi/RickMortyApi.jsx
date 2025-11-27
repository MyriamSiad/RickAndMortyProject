import { createContext, useState } from "react";

export const RickMortyContext = createContext({});

export default function RickMortyProvider({children}){

   const [personnage , setPersonnage] = useState({});
    const [personnages , setPersonnages] = useState([]);
    const[charactersPool , setCharactersPool] = useState ([]);

      async function fetchPersonnages(){
        if(personnages.length > 0){
            return;
        }
    
       // setloading(true);
      /*const personnages  = */

      try{
        const response  =  await fetch("https://api.sampleapis.com/rickandmorty/characters")
        const datas = await response.json()
       
        if(!response.ok){
            console.log("erreur dans l'api RickMorty");
        }
        setPersonnages(datas)
        setPersonnage(datas[Math.floor(Math.random() * datas.length)]);
       // setloading(false);
      }catch(err){
        console.error(err);
        //setloading(false);
      }
    }

    function getPersonnage(){

        
        const personnageList = personnages;
        setPersonnage(personnageList[Math.floor(Math.random() * personnageList.length)]);

        console.log(personnageList);
        
    
    }

    return(<>
    <RickMortyContext.Provider value = {{
        personnage,
        fetchPersonnages,
        getPersonnage
    }}>
        {children}
    </RickMortyContext.Provider>

    </>);

}