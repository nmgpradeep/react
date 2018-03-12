import React, { Component } from 'react';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web', 'Mobile']
  };
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }
  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    }else{
      this.setState({
        newProject: {
          title: this.refs.title.value,
          category:this.refs.category.value
        }
      }, function(){
          console.log(this.state);
          this.props.addProject(this.state.newProject);
      });      
    }
    e.preventDefault();
  }
  render() {
    let defaultOptions = this.props.categories.map(category => {
      return (
          <option key={category} value={category}>{category}</option>
      );
    });
    return (
      <div className="form-element">
        <h4>Add Project</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-element">
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div className="form-element">
            <label>Category</label><br />
            <select ref="category">
              {defaultOptions}
            </select>
          </div>
          <div className="form-element"><br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
