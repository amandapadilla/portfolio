import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import About from "./About";
import Skills from "./SkillsList";
// import Projects from "./ProjectList";
// import Contact from "./Contact";

import "../stylesheets/index.scss";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [],
      projects: [],
      filter: ""
    };
    this.getPortfolioData = this.getPortfolioData.bind(this);
  }
  componentDidMount() {
    this.getPortfolioData();
  }
  getPortfolioData = () => {
    fetch(
      "https://my-json-server.typicode.com/amandapadilla/porfoliodatafakeAPIserver/db"
    )
      .then(response => response.json())
      .then(data => {
        const skills = data.skills[0];
        this.setState({
          skills: skills,
          projects: data.projects
        });
      });
  };

  render() {
    const { skills, projects } = this.state;
    const frontendSkills = skills.frontend;
    const uxSkills = skills.UX;
    // this.formatData();
    console.log(frontendSkills, projects);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/skills/"
            render={() => {
              return <Skills skills={skills} frontendSkills={frontendSkills} />;
            }}
          />
          {/* <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
