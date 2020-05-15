import React, { Component } from 'react';

  class Table extends Component {

    delRow(e){
      this.props.deleteUser(e);
    }

    editRow(e){
      this.props.editUser(e);
    }

      render(){
        return(
            <div>
              <table className="table table-bordered text-center">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th colSpan="2">Action</th>
                </tr>
                </thead>
                {this.props.users.map((e,index)=>(
                  <tbody  key={index}>
                    <tr>
                      <td>{index+1}</td>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.age}</td>
                      <td>
                      <button onClick={this.editRow.bind(this,e)} >Edit</button>
                      </td>
                      <td>
                      <button onClick={this.delRow.bind(this,index)} >Delete</button>
                      </td>
                    </tr>
                  </tbody>
                ))}   
              </table>  
            </div>
        )
      }  
    }

export default Table;