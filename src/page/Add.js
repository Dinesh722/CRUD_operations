import React,{Component} from 'react';

  class Add extends Component {
    constructor(){
        super();
        this.state = {
            id:null,
            name: '',
            age: ''
        };
    }
    inpSubmit(){
        if(this.state.name === "" || this.state.age === ""){
            return false;
        }
            this.props.addUser(this.state);
        this.setState({
            id:"",
            name: '',
            age: ''
        })
        localStorage.setItem("id",localStorage.getItem("id")*1 + 1*1)
    }
      render(){
        return(
            <div className="col-md-12 row text-center">
                <div className="col-md-4">
                    <input placeholder="Name" type="text"
                     value={this.state.name}
                     onChange={e=>{
                         this.setState({name:e.target.value,id : localStorage.getItem("id")*1 + 1*1})
                     }} />
                </div>
                <div className="col-md-4">
                    <input placeholder="Age" type="number" 
                    value={this.state.age} 
                    onChange={e=>{
                        this.setState({age:e.target.value})
                    }} />
                </div>
                <div className="col-md-4">
                    <button onClick={this.inpSubmit.bind(this)} >Add</button>
                </div>
            </div>
        )
      }
    }

export default Add;