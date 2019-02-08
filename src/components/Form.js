import React from 'react';

class Form extends React.Component {

    handleChange(event){
        this.props.handleChange(event);
    }

    handleSubmit(event){
        this.props.handleSubmit(event);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s3">
                        <input 
                            id = "title"
                            name="currentTitle"
                            type="text"
                            value={this.props.currentTitle}
                            onChange={this.props.handleChange}/>
                        <label for="title">Title</label>
                    </div>
                    <div className="input-field col s7">
                        <input
                            id = "description" 
                            name="currentDetails"
                            type="text"
                            value={this.props.currentDetails}
                            onChange={this.props.handleChange}/>
                        <label for="description">Description</label>                        
                    </div>
                    <div className="input-field col s2">
                        <button className="btn purple darken-3 waves-effect waves-light"
                           type="submit" name="action">Add note</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;
