import React, { Component } from 'react';
import ProjectItems from './ProjectItems' ;


class Project extends Component {

  render() {
    let projectItems;
    if(this.props.rahulmehta){
      // projectItems = this.props.rahulmehta.map(project => {
      //   return (
      //     <ProjectItems project={project}/>
      //   );
      // });
      projectItems = this.props.rahulmehta.map(function(project){
        return (
          <ProjectItems key={project.id} project={project}/>
        );
      });
    }
    console.log(this.props)
    return (
      <ul>
        <h2>Our Projects</h2>
        {projectItems}
      </ul>

    );
  }
}

export default Project;
