import React from 'react';

const Single = (props) => {
    return(

        <li className="col s4">
            <div className="card purple lighten-4">
                <div className="card-content black-text">
                    <span className="card-title">{props.note.title}</span>
                    <p>{props.note.details}</p>
                </div>
                <div className="card-action">
                    <a class="waves-effect purple darken-2 waves-light btn-small" onClick={() => props.deleteNote(props.note.id)}>Delete</a> 
                </div>
            </div>

        </li>
    );
}

export default Single;