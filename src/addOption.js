import React from 'react';
import axios from 'axios';

class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    axios.post('https://decision-28ec2.firebaseio.com/option.json',{option})
              .then(res => console.log(res.data))
              .catch(err => console.log({error : this.props.handleAddOption(option)}))
              
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>     
        {this.state.error && 
        <p className="error"> {this.state.error}</p>}
        <form className="form" onSubmit={this.handleAddOption}>
          <input className="input" type="text" name="option" />
          <button className="button"> Add Option </button>
        </form>
      </div>
    );
  }
}
export default AddOption;