import React, { Component } from 'react';
import data from "./data.json"

 
class TableBody extends Component {
    constructor(){
        super()
        this.state = { 
            sortStatus: "asc",
            dataSort: [...data],
            input:""
         }
         this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }
    

    // componentDidMount() {
    //     console.log(data)
    // }

    sorter = () => {
        this.state.dataSort.sort((a, b) => {
        if (a.name < b.name) {
          return this.state.sortStatus === "asc" ? -1 : 1;
        }
        if (a.name > b.name) {
            return this.state.sortStatus === "asc" ? 1 : -1;
        }
        return 0;
      });
      this.setState({sortStatus:this.state.sortStatus=== "asc" ? "desc": "asc"})
      this.setState({dataSort: this.state.dataSort})
    }

    inputChangeHandler(e){
        const newValue = e.target.value
        console.log(e.target.value)
        console.log(this.state.input+"pre-input set state")
        this.setState({
            input: newValue
        }
        
    ,() => this.finishFilter())}

    finishFilter(){
        console.log(this.state.input+"post-input set state")
        let newData = this.state.dataSort.filter((d)=>{
            console.log("new data function running")
            return this.state.input === "" || d.name.includes(this.state.input)
            
          });
          this.setState({
            dataSort: newData
        })
        console.log(this.state.dataSort)
        // try to reset the input
        if(this.state.input === ""){
            this.setState({dataSort:[...data]})
        }
    }

    render() { 
        return ( 
            <> {"Case Sensitive Filter"}
            <input type="text" value={this.state.input} onChange={(e) => this.inputChangeHandler(e)}/>
        <tr>
        <th onClick={this.sorter}>
        Name (Click Me to Sort)
        </th>
        <th>
        Email
        </th>
        <th>
        Color
        </th>
        </tr>
          
        {
            this.state.dataSort.map(person=>(
                <tr>
                <td>
                {person.name}
                </td>
                <td>
                {person.email}
                </td>
                <td>
                {person.favoriteColor}
                </td>
                </tr> 
            ))
        }
          </> 
    )
}
}
 
export default TableBody;