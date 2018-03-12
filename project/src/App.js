import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Clock from './Components/Clock';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        projects: [
          {
            id: uuid.v4(),
            title: 'Business Websites',
            category: 'Web Design'
          },
          {
            id: uuid.v4(),
            title: 'Social App',
            category: 'Mobile Development'
          },
          {
            id: uuid.v4(),
            title: 'ECommerce Shopping Cart',
            category: 'Web Development'
          }
        ]
    };
  }

  handleAddProject(project){
    let projects = this.state.projects;
    project.id = uuid.v4();
    projects.push(project);
    this.setState({
      projects: projects
    });
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let pIndex = projects.findIndex(project => project.id === id);
    projects.splice(pIndex, 1);
    this.setState({
      projects: projects
    });
  }

  render() {
    return (
      <div className="Projects">
        <Clock />
        <AddProject addProject={this.handleAddProject.bind(this)}/>
		    <Projects projects={this.state.projects} deleteProject={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
