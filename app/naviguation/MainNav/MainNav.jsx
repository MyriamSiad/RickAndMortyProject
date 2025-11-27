//import React from 'react';
import "./MainNav.css"
import { NavLink } from 'react-router';
export default function MainNav() {
  return (
    <>
        <nav>
            <menu>
                <li>
                    <NavLink
                    to = "/"
                    >
                    Accueil
                    </NavLink>
                </li>

                <li>
                    <NavLink
                    to = "/rickandmorty"
                    >
                    Rick et Morty
                    </NavLink>
                </li>


            </menu>
        </nav>
    </>
  );
}
