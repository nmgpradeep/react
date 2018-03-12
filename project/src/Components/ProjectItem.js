import React, { Component } from 'react';

class ProjectItem extends Component {
  onDelete(id){
    this.props.deleteProject(id);
  }
  render() {
    return (
      <li className="project">
        <strong>{this.props.project.title}</strong> - {this.props.project.category} <a href="javascript:;" onClick={this.onDelete.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
