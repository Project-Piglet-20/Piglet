import React from 'react';
import CreatableSelect from 'react-select/creatable';

const Selectdropdown = ({ addData, CategoryList, count, decrementCount}) => {
    return (
        <div className="card-content">
            <label 
            style= {{'fontSize': 'larger', color: 'black'}}
            > What is the problem? </label> <i className= "material-icons left">search</i><br/>
            
            <div className= "input-field col s12"><CreatableSelect
                isClearable
                options={ CategoryList }
                onChange={ e => e ? addData(e) : decrementCount(count) }
            /> </div>
        </div>
    )
}

export default Selectdropdown;