import React from "react";
import Header from "./Header";
import Landing from "./Landing";
import About from "./About";
import Menu from "./Menu";
import "../stylesheets/index.css";
import "../stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Landing />
      <About />
      <main>
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
