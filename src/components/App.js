import React from "react";
import Header from "./Header";
import "../stylesheets/index.scss";
import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
      <h1 className="page-title">Hello world!<br/> I'm Amanda Padilla <br/>This is my portfolio</h1>
      </section>
      <main>
        <section>
          <h1>About me</h1>
          <p>
          My imagination, creativity, multipotentiality and initiative moves me to research and adopt new forms of communication. 
          </p>
          <p>
          My experience extends from journalism to design and multimedia production, from webdoc to VR and also data visualization, learning by gamification systems and transmedia projects management and interactive experiences UX analytics. I love to explore my attention to details in User Experience and Interfaces and always trying to make it better. 
          </p>
          <p>
          I'm a hackathon lover who has lived interdisciplinar colective experiences around the globe exploring paths to new knowledge, learning and incorporating new skills in community as my passion. Currently, I'm exploring my potential as Frontend Developer.
          </p>
          <aside>
            <button>Check my CV</button>
          </aside>
        </section>
        <section>
          <h2>Skills</h2>
        </section>
        <section>
          <h2>Proyects</h2>
        </section>
        <section>
          <h2>Get in Touch!</h2>
        </section>
      </main>
    </div>
  );
}

export default App;