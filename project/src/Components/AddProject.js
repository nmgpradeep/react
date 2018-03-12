import React, { Component } from 'react';

class AddProject extends Component {
  static defaultProps = {
      categories: [
      'Web Design',
      'Mobile Development',
      'Web Development'
    ]
  };
  constructor(){
      super();
      this.state = {
        newProject: {}
      };
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    }else{
      this.setState({
        newProject: {
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function(){
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }
  render() {
    let defaultOptions = this.props.categories.map(category=>{
      return (
        <option value={category} key={category}>{category}</option>
      );
    });
    return (
      <div className="add-project">
		    <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="element-block">
            <label> Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div className="element-block">
            <label> Category</label><br />
            <select ref="category">
              {defaultOptions}
            </select>
          </div>
          <div className="element-block">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
