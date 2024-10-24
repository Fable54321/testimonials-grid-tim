import patrick from "../../images/image-patrick.jpg";

const Card_E = () => {
  return (
    <div>
      <header>
        <div className="author-name">
          <img id="wider-img" data-border-color-accent="data-border-color-accent" src={patrick} alt="autor's picture" />
          <h2>Patrick Abrams <br/>
            <span className="subheader"> Verified Graduate</span></h2>
        </div>

        <h3>
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </h3>
      </header>

      <main>
        <p>
          {" "}
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people. ”{" "}
        </p>
      </main>
    </div>
  );
}

export default Card_E
