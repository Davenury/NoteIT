import react from 'react';
import {Button} from "react-bootstrap";
import '../css/ActionButtons.css'
import {NoteDetailsPopup} from "../dialogs/NoteDetailsPopup";
import {DeleteNotePopup} from "../dialogs/DeleteNotePopup";
import {UpdateNotePopup} from "../dialogs/UpdateNotePopup";
import swal from 'sweetalert';

export class ActionsButtons extends react.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            showDetailsPopup: false,
            showDeletePopup: false,
            showUpdatePopup: false
        };
        this.toggleDeletePopup = this.toggleDeletePopup.bind(this)
        this.toggleUpdatePopup = this.toggleUpdatePopup.bind(this)
        this.toggleDetailsPopup = this.toggleDetailsPopup.bind(this)
        this.deleteNoteAndClosePopup = this.deleteNoteAndClosePopup.bind(this)
    }

    toggleDeletePopup(){
        this.setState({
            showDeletePopup: !this.state.showDeletePopup
        })
    }

    toggleUpdatePopup(){
        this.setState({
            showUpdatePopup: !this.state.showUpdatePopup
        })
    }

    toggleDetailsPopup(){
        this.setState({
            showDetailsPopup: !this.state.showDetailsPopup
        });
    }

    deleteNoteAndClosePopup(){
        //send request to delete note with id from this.props.note.id
        let xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () =>{
            swal("Note deleted!", "", "success")
                .then( value => {
                    window.location.reload(false);
                })
        })
        xhr.open('POST', this.props.note.baseURL + 'delete_note/' + this.props.note.id)
        xhr.send()
        this.toggleDeletePopup()
    }

    render(){
        return (
        <div>
            {
                this.state.showDeletePopup ?
                    <DeleteNotePopup
                        openPopup={this.toggleDeletePopup}
                        closePopup={this.toggleDeletePopup}
                        deleteNoteAndClose={this.deleteNoteAndClosePopup}
                        note = {this.props.note} /> : null
            }
            {
                this.state.showDetailsPopup ?
                    <NoteDetailsPopup
                        openPopup={this.toggleDetailsPopup}
                        closePopup={this.toggleDetailsPopup}
                        note = {this.props.note} /> : null
            }
            {
                this.state.showUpdatePopup ?
                    <UpdateNotePopup
                        openPopup={this.toggleUpdatePopup}
                        closePopup={this.toggleUpdatePopup}
                        note = {this.props.note} /> : null
            }
            <Button
                variant="success"
                onClick={this.toggleDetailsPopup}
            >
                Show details
            </Button>
            <Button
                onClick={this.toggleUpdatePopup}
                variant="info"
            >
                Update
            </Button>
            <Button
                onClick={this.toggleDeletePopup}
                variant="danger"
            >
                Delete
            </Button>
        </div>
        )
    }
}
