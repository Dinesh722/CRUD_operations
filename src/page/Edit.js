import React,{Component} from 'react';

  class Edit extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            age:'',
            id:''
        }
    }

    test(){
        alert();
    }
    componentDidMount(){
        this.setState({
            name:this.props.inp.name,
            age:this.props.inp.age,
            id:this.props.inp.id
        })
    }

    inpSubmit(){
        this.props.updateUser(this.state);
    }

      render(){
        return(
            <div className="col-md-12 row text-center">
                <div className="col-md-4">
                    <input placeholder="Namess" type="text"
                     value={this.state.name}
                     onChange={e=>{
                        this.setState({name:e.target.value})
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
                    <button onClick={this.inpSubmit.bind(this)} >Update</button>
                </div>
            </div>
        )
      }
    }

export default Edit;