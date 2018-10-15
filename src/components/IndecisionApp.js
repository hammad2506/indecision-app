import React from 'react';
import Options from './Options';
import Action from './Action';
import Add from './Add';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

  state = {
        options:  [],
        selectedOption: undefined
    };

    onActionButton = () => {
       const randomNumb = Math.floor(Math.random() * this.state.options.length);
       this.setState(() => ( {selectedOption: this.state.options[randomNumb]} ));
    };

    onFormSubmit = (option) => {
        if(!option){
            return 'No option was entered';
        }else if(this.state.options.indexOf(option) !== -1){
            return 'Option already inserted';
        }

        this.setState((prevState) => ({
            options : prevState.options.concat([option])
        }));
    };

    removeAllOptions = () => {
        this.setState(() => ({options: []}));
    };

    removeOption = (removeOption) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => ( option !== removeOption ))
        }));
    };

    closeModal = () => {
        this.setState(() => ( {selectedOption: undefined} ));
    }

    componentDidMount(){
        try{
            const options = JSON.parse(localStorage.getItem('options'));
            
            if(options){
                this.setState(() => ({ options }));
            }
        } catch(e){

        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            try{
             const json = JSON.stringify(this.state.options);
             localStorage.setItem('options', json);
            }catch(e){
             console.log("Didnt update state");
            }
        }
     }


    render(){
        
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action onActionButton={this.onActionButton} disabled={this.state.options.length}/>
                    <div className="widget">
                        <Options 
                            options = {this.state.options} 
                            removeAllOptions = {this.removeAllOptions} 
                            removeOption = {this.removeOption} />
                            <Add onFormSubmit={this.onFormSubmit} />
                    </div>
                    <OptionModal 
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}/>
                </div>
            </div>
        );
    }
}




export default IndecisionApp;