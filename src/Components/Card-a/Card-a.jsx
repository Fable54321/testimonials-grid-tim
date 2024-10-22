import "../../general styles/index.css"
import daniel from "../../images/image-daniel.jpg";

const Card_A = () => {
  return (
    <div>
    <header>
  <div className="author-name">   
  <img id="wider-img" data-border-color-accent="data-border-color-accent" src={daniel}  alt="the author's image" />
  <h2>Daniel Clifford <br/>
  <span className="subheader">Verified Graduate</span></h2>
  </div> 

  <h3>I received a job offer mid-course, and the subjects I learned <br/> were current, if not more so, 
  in the company I joined. I honestly feel I got every penny’s worth.</h3>
    </header>
  <main>  
  <p>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
  transition and have heard some people who had an amazing experience here. I signed up 
  for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
  The next 12 weeks was the best - and most grueling - time of my life. Since completing 
  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
  </main>
    </div>
  )
}

export default Card_A
