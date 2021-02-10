import react from 'react';
import swal from 'sweetalert';
import {Box, TextareaAutosize, TextField} from "@material-ui/core";
import {Button} from "react-bootstrap";
import '../css/Form.css'

export class CustomFormComponent extends react.Component{

    type = "Created";

    constructor(props) {
        super(props);
        let title = "";
        let content = "";
        if(this.props.note !== null){
            title = this.props.note.title;
            content = this.props.note.content;
            this.type = "Updated";
        }
        this.state = {
            title: title,
            content: content
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    reload(){
        window.location.reload(false);
    }

    onSubmitForm(){
        let xhr = new XMLHttpRequest();
        let form = document.getElementById(this.getID())
        let fd = new FormData(form);
        xhr.addEventListener('load', () => {
            if(xhr.status === 406){
                swal("Error!", xhr.responseText, "error")
            }
            else {
                swal("Note " + this.type, "", "success")
                    .then(() => {
                        this.reload()
                    })
            }
        })
        xhr.addEventListener('error', () => {
            swal("Something went wrong!", "We're sorry, but something went wrong, please contact administrator", "error")
                .then(() => {
                    this.reload()
                })
        })
        xhr.open("POST", this.props.actionUrl);
        xhr.send(fd);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        })
    }

    getID(){
        return "form" + this.type
    }

    render(){
        return (
            <form id={this.getID()}>
                <Box m={2}>
                <TextField
                    id="standard-basic"
                    label="Title"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onInputChange}/>
                </Box>
                <Box m={2}>
                <TextareaAutosize
                    id="standard-basic"
                    label="Content"
                    type="text"
                    name="content"
                    value={this.state.content}
                    onChange={this.onInputChange}
                    rowsMin={5}
                    className="textArea"/>
                    <br/>
                </Box>
                <Box m={2}>
                <Button
                    variant="secondary"
                    type="submit"
                    onClick={this.onSubmitForm}
                >{this.type === "Created" ? "Add new Note" : "Update this Note"}</Button>
                </Box>
            </form>
        )
    }
}