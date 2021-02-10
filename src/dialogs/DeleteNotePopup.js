import react from 'react';
import {Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import {Button} from "react-bootstrap";

export class DeleteNotePopup extends react.Component {
    render() {
        return (
            <Dialog
                maxWidth='sm'
                fullWidth={true}
                open={this.props.openPopup}
                onClose={this.props.closePopup}>
                <DialogTitle id="alert-dialog-title">Delete Note {this.props.note.title}?</DialogTitle>

                <DialogActions>
                    <Button onClick={this.props.closePopup} variant="outline-primary">
                        Don't delete Note
                    </Button>
                    <Button onClick={this.props.deleteNoteAndClose} variant="danger">
                        Delete Note
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}