import React, { Component } from 'react';

var count = 0;

class Table extends Component {
    componentDidMount() {
        const message = window.innerWidth < 800 ? "Swipe right for more ---->" : null 
        if (message !== null && count++ === 0) {
            window.M.toast({html: message, classes: 'rounded'})
        }
    }
    render() {
        return (
            <div>
                <table className= "highlight responsive-table">
                    <thead>
                        <tr>
                            <th> <i className= "material-icons left">format_list_numbered</i> Sl No </th>
                            <th> <i className= "material-icons left">search</i> Issue Category </th>
                            <th> <i className= "material-icons left">info_outline</i> Issue Type </th>
                            <th> <i className= "material-icons left">place</i> Location </th>
                            <th> <i className= "material-icons left">today</i> Date of Reporting </th>
                            <th> <i className= "material-icons left">done_all</i>Status </th>
                            <th> <i className= "material-icons left">date_range</i> Date of Closure </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.issueList }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;