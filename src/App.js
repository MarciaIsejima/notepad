import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase';
import _ from 'lodash';

const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
}

class App extends React.Component {

  constructor(props){
    super (props);
    this.state = {
      notes: [],
      name: "Marcia",
      currentTitle: '',
      currentDetails: ''
    };

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.deleteNote = this.deleteNote.bind(this);
  }

  componentWillMount() {

    // initialize Firebase
    firebase.initializeApp( {
      apiKey: "AIzaSyCKVZmQysi_bZUpOdii2OTwPpa3kwBhrHI",
      authDomain: "notepad-583e5.firebaseapp.com",
      databaseURL: "https://notepad-583e5.firebaseio.com",
      projectId: "notepad-583e5",
      storageBucket: "notepad-583e5.appspot.com",
      messagingSenderId: "501159111280"
    });

    // open 'notepad' database on Firestore 
    firebase.database().ref("/notes")
      .on('value', snapshot => {
        const fbstore = snapshot.val();

        // create a variable to store the notes retrieved from the database
        const store = _.map(fbstore, (value, id) => {
          return {
            id: id,
            title: value.title,
            details: value.details,
          };
        });
        
        //set the state to the 'store' object created
        this.setState({
          notes: store,

        })

      });

  };

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {

    //alert(`Your note ${this.state.currentTitle} has been added`);
    event.preventDefault();

    //create object to store current title and detail of new note
    const data = {
      title: this.state.currentTitle,
      details: this.state.currentDetails,
    };

    //push the new create object to database
    firebase.database().ref('/notes').push(data, response => response);

    //clear current title and details from state
    this.setState({
      currentTitle: '',
      currentDetails: '',
    });

  };

  // deletes a note from the database
  deleteNote(id){
    firebase.database().ref(`/notes/${id}`)
    .remove();
    alert("Successfully deleted!");
  };

  render() {
    return (
      <div className={styles}>
        <Header name={this.state.name}/>    
        <Form
          currentTitle={this.state.currentTitle}
          currentDetails={this.state.currentDetails}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <Grid 
          notes={this.state.notes}
          deleteNote={this.deleteNote.bind(this)}
        />
      </div>
    );
  }
}

export default App;