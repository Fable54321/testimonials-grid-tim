import jeanette from "../../images/image-jeanette.jpg";

const Card_D = () => {
  return (
    <div>
      
 <header>
  <div className="author-name">
    <img src={jeanette} alt="a picture of the author"/>
  <h2><span data-color-dark="data-color-dark">Jeanette Harmon <br/></span>
  <span className="subheader" data-subheader-dark="data-subheader-dark">Verified Graduate</span></h2>
  </div>

  <h3 data-color-dark="data-color-dark">An overall wonderful and rewarding experience</h3>
  </header>

  <main>
  <p data-subheader-dark="data-subheader-dark">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
  while doing something I love. ”</p>
  </main>
  </div>
  )
}

export default Card_D
