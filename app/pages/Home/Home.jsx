import "./Home.css"
export default function HomePage(){

    return(<>

     <div className="homepage">
      <section className="universe-section">
        <h1 className="universe-title">L'Univers Rick et Morty</h1>
        <h2 className="universe-subtitle">"Wubba Lubba Dub Dub!"</h2>
        
        <p className="universe-text">
          Rick et Morty est une série d'animation américaine créée par <span className="highlight">Justin Roiland</span> et <span className="highlight">Dan Harmon</span>. 
          Elle suit les aventures interdimensionnelles d'un scientifique alcoolique génie, Rick Sanchez, 
          et de son petit-fils anxieux mais bon, Morty Smith.
        </p>
        
        <p className="universe-text">
          La série explore des thèmes philosophiques profonds comme l'existentialisme, le nihilisme, 
          et le sens de la vie, tout en maintenant un humour absurde et décalé. Rick possède un 
          <span className="highlight"> pistolet portail</span> qui lui permet de voyager à travers 
          des dimensions infinies, créant ainsi des possibilités narratives illimitées.
        </p>
        
        <div className="quote-box">
          "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV."
          <div className="quote-author">— Morty Smith</div>
        </div>
        
        <p className="universe-text">
          Chaque dimension contient des versions alternatives des personnages, certaines similaires, 
          d'autres radicalement différentes. Cette structure permet à la série d'explorer des concepts 
          scientifiques complexes comme la <span className="highlight">théorie des multivers</span>, 
          les paradoxes temporels, et la mécanique quantique.
        </p>
        
        <div className="concepts">
          <div className="concept-card">
            <div className="concept-icon">🌀</div>
            <h3 className="concept-title">Multivers</h3>
            <p className="concept-description">
              Des dimensions infinies avec des versions alternatives de chaque personnage et réalité.
            </p>
          </div>
          
          <div className="concept-card">
            <div className="concept-icon">🧪</div>
            <h3 className="concept-title">Science-Fiction</h3>
            <p className="concept-description">
              Gadgets impossibles, voyages interdimensionnels et expériences scientifiques folles.
            </p>
          </div>
          
          <div className="concept-card">
            <div className="concept-icon">😂</div>
            <h3 className="concept-title">Humour Noir</h3>
            <p className="concept-description">
              Un mélange unique d'humour absurde, de satire sociale et de références culturelles.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>)
}

/*TP : 

Création d'un nouveau projet, avec React Router : 

Le projet doit contenir, au minimum : 

2 pages, avec leur routes dédiées

Un menu de navigation permettant de transiter entre les deux pages

Un composant utilitaire utilisant les données d'un contexte pour hydrater son contenu, via un appel à l'api https://api.sampleapis.com/rickandmorty/characters, en stockant les données reçues dans un état (state) et en utilisant un état (state) pour représenter un seul personnage, qui sera affiché via ce composant, sur une page de l'application.
webdevoo — 09:41*/