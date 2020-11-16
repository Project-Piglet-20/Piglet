import React from 'react';
import CreatableSelect from 'react-select/creatable';

const Selectdropdown = ({ addData, CategoryList, count, decrementCount }) => {
    return (
        <div className="card-content" style={{ textAlign: 'left' }}>
            <label
                htmlFor="dropdown"
                style={{ fontSize: 'larger', color: 'black' }}
            >
                <i className="material-icons left">search</i>What is the
                problem?
            </label>

            <br />
            <div
                className="input-field col s12"
                style={{ minWidth: '330px', width: 'fit-content' }}
            >
                <CreatableSelect
                    id="dropdown"
                    isClearable
                    options={CategoryList}
                    onChange={(e) => (e ? addData(e) : decrementCount(count))}
                />
            </div>
        </div>
    );
};

export default Selectdropdown;
