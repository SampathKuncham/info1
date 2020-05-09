import React, {Component} from 'react';
import Header from './header';
import Copy from './copyRight';
import Action from './action';
import Options from './options';
import AddOption from './addOption';
import OptionModal from './optionModal';
import './style/head.css';
class App extends Component{
  state={
    options: [],
    selectedOption:undefined
  }
  handlePick=()=>{
    const ranNum=Math.floor(Math.random()* this.state.options.length)
    const option=this.state.options[ranNum]
    this.setState(
      {selectedOption:option}
    )
  }
  handleDeleteOptions=()=>{
    this.setState({ options:[] })
  }

  handleDeleteOption=(optionToRemove)=>{
    this.setState((prevState)=> ({
    options: prevState.options.filter((option)=>optionToRemove !== option) }))
  }

  handleAddOption =(option)=>{
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  handleClearSelectedOption=()=>{
      this.setState({selectedOption : undefined})
  }
  render(){
    const subj='Created by Sampath Kuncham';
  return (
    <div>
      <Header subtitle={subj}/>
      <div className="container">
      <Action hasOptions={this.state.options.length>0}
              handlePick={this.handlePick} />
      <div className="widget-T">
      <Options  options={this.state.options}
                handleDeleteOption={this.handleDeleteOption}
                handleDeleteOptions={this.handleDeleteOptions} />

      <AddOption handleAddOption={this.handleAddOption} />

      </div>

      <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
        </div>
        <Copy/>

    </div>
  );
}
}
export default App;
