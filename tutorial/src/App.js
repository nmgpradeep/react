import React, { Component } from 'react';
import uuid from 'uuid';
import Project from './Components/Project';
import AddProject from './Components/AddProject' ;
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  handleAddProject(project){
    let projects = this.state.projects;
    project.id = uuid.v4();
    projects.push(project);
    this.setState({
      projects: projects
    });
  };
  componentDidMount(){
    this.setState({
      projects:[
        {
          id: uuid.v4(),
          title: 'Website Development',
          category: 'Web'
        },
        {
          id: uuid.v4(),
          title: 'Mobile App',
          category: 'Mobile'
        },
      ]
    })
  }
  render() {
    return (
      <div className="rajiv">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Project rahulmehta={this.state.projects} />
      </div>

    );
  }
}

export default App;
