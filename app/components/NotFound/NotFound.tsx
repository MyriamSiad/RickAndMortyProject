
import {isRouteErrorResponse, useRouteError } from "react-router";
export default function NotFound() {
    const error : any = useRouteError() as Error;
  return (
    <>
        <div>
            <h1>Error 404"</h1>
            <p>Le contenu demandé est introuvable ! </p>
            {
                ((error?.statusText ||error?.message) &&
                <p>
                    <small>
                        Erreur : {error?.statusText || error?.message || "On a pas plus de détaille ): !"}
                    </small>
                </p>)

            }
        </div>
    </>
  );
}
