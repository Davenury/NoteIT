import react from 'react';
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {Button} from "react-bootstrap";
import {CustomFormComponent} from "../components/CustomFormComponent";

export class UpdateNotePopup extends react.Component {

    prepareUrlForUpdateNote(){
        return this.props.note.baseURL + "update_note/" + this.props.note.id
    }

    render() {
        return (
            <Dialog
                style={{textAlign: "center"}}
                maxWidth='sm'
                fullWidth={true}
                open={this.props.openPopup}
                onClose={this.props.closePopup}>
                <DialogTitle id="alert-dialog-title">Update {this.props.note.title}</DialogTitle>

                <DialogContent>
                    <CustomFormComponent
                        actionUrl={this.prepareUrlForUpdateNote()}
                        note={this.props.note}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.props.closePopup} variant="outline-primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}