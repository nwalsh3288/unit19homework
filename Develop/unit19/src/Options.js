import React, { Component } from 'react';

class Options extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <button type="button" className="btn btn-primary">
                Sort
            </button>
            <button type="button" className="btn btn-info">
                Filter
            </button>
            </>
         );
    }
}
 
export default Options;