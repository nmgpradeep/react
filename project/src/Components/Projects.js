import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
class Projects extends Component {
  onDelete(id){
    this.props.deleteProject(id);
  }
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem project={project} key={project.id} deleteProject={this.onDelete.bind(this)}/>
        );
      });
    }
    return (
      <ul className="project-listing">
        <h3>Project Listing</h3>
        {projectItems}
      </ul>
    );
  }
}

export default Projects;
