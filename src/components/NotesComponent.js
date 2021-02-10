import react from 'react';
import {Note} from "./Note";
import {NotesTable} from "./NotesTable";
import {CircularProgress} from "@material-ui/core";

export class NotesComponent extends react.Component{

    state={
        notes: undefined,
        isFetching: false
    }

    constructor(props){
        super(props)
        this.props = props
    }

    componentDidMount() {
        this.mounted = true
        this.getNotes()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    getNotes(){
        this.setState({ isFetching: true });
        fetch(this.props.baseUrl + 'get_all_notes')
            .then(response => response.json())
            .then(
                result => {
                    this.setState({isFetching: false})
                    return result.notes.map(note => new Note(note, this.props.baseUrl))
                }
            )
            .then(notes => {
                if(this.mounted){
                    this.setState({ notes: notes, isFetching: false })
                }
            })
            .catch(e => {
                console.log(e);
                this.setState({ isFetching: false })
            })
    }

    render(){
        if (this.state.notes === undefined && this.state.isFetching === true){
            return (
                <div>
                    <p>Looking for notes...</p>
                    <CircularProgress color="secondary" />
                </div>
            )
        }
        else if(this.state.notes === undefined){
            return (
                <div>
                    <p>Looks like you don't have any notes. Create one now!</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <NotesTable baseURL={this.props.baseUrl} notes={this.state.notes}/>
                </div>
            )
        }
    }
}