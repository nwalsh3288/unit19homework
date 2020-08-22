import React, { Component } from 'react';
import data from "./data.json"

 
class TableBody extends Component {
    state = { 
        sortStatus: "asc",
        dataSort: [...data]
     }

    // componentDidMount() {
    //     console.log(data)
    // }

    sorter = () => {
        dataSort.sort((a,b)) => 
    }


    render() { 
        return ( 
            <>
        <tr>
        <th onClick={this.sorter}>
        Name
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