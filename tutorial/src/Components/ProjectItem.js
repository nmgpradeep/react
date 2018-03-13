import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ProjectItem extends Component {

  render() {

    return (
      <li>
        {this.props.project.title} - {this.props.project.category}
      </li>

    );
  }
}
ProjectItem.propTypes = {
  project: PropTypes.object
};
export default ProjectItem;
