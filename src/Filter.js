
import React from 'react';

function Filter(props){

    const list = (
        <ul>
            {props.interns.filter((intern) => intern.name.startsWith(props.data)).map((intern) =>
                <li key={intern.id}>
                    <label> {intern.name}</label>
                </li>
            )}
        </ul>
    );

    return (
        <div>
            {list}

        </div>
    );


}

export default Filter;