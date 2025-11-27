import { useContext } from "react";
import RickMortyProvider from "@/contexts/RickMortyApi/RickMortyApi";
import Utilitaires from "@/components/Utilitaires/Utilitaires";

export default function RickandMortyPage(){

    return(
        <>
        <RickMortyProvider>
            <Utilitaires/>
        </RickMortyProvider>
        </>)
}

