import React from 'react';
import IssueCard from './IssueCard';

const Table = (props) => {
    var i = 0;
    return (
        <div className="row">
            {!props.issueList ? (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            ) : (
                props.issueList.map((issue) => (
                    <div
                        className="col s12 m4"
                        style={{ paddingBottom: '40px' }}
                        key={i++}
                    >
                        <IssueCard issue={issue} />
                    </div>
                ))
            )}
        </div>
    );
};

export default Table;
