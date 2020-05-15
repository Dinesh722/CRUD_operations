import React,{ Component} from 'react';
import './App.css';
import Add from './page/Add';
import Edit from './page/Edit';
import Table from './page/Table';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userDetails : [
        { id:1, name:"dinesh", age:"22"},
        { id:2, name:"naresh", age:"20"}
      ],
      toggleAdd : true,
      inputValue : {id:'', name:'', age:''}
    };
    this.trigger=React.createRef();
    localStorage.setItem("id",2)
  }

clearData(){
  // this.createRef.current.test()
  console.log(this.state.inputValue)
}

toggleFunction(e){
  this.clearData();
  this.setState({
    toggleAdd:false,
    inputValue :  {id:e.id, name:e.name, age:e.age}
  })
}

addUserVal(e){
  // console.log(e);
  this.setState({ userDetails: [...this.state.userDetails, e] });
}

deleteUserVal(e){
 this.state.userDetails.splice(e, 1)
  this.setState({
    userDetails: this.state.userDetails
  })
  console.log(this.state.userDetails);
}

updateUser(e){
const index = this.state.userDetails.findIndex(emp => emp.id === e.id)
const newItems = [...this.state.userDetails];
newItems[index] = e;
this.setState({ 
  userDetails:newItems,
  toggleAdd:true,
  inputValue : {id:'', name:'', age:''}
 });
}

test(){
  console.log(this.state.userDetails);
}
  render(){
    return (
      <div>
        {/* <button onClick={this.test.bind(this)} >kasjdhfkjashgf</button> */}
        <div className="text-center font-weight-bold"> CRUD</div>
        {this.state.toggleAdd?(
        <Add users={this.state.userDetails} addUser={this.addUserVal.bind(this)} />):
        (<Edit ref={this.myRef} inp={this.state.inputValue} toggle={this.state.toggleAdd} updateUser={this.updateUser.bind(this)} />
        )}
        <br></br>
        <Table ref={this.trigger} deleteUser={this.deleteUserVal.bind(this)} users={this.state.userDetails} editUser={this.toggleFunction.bind(this)} />
      </div>
    );
    }
}
export default App;
