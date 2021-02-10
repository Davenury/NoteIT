import react from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {Table} from "react-bootstrap";

export class NoteDetailsPopup extends react.Component {
    render() {
        return (
            <Dialog
                maxWidth='sm'
                fullWidth={true}
                open={this.props.openPopup}
                onClose={this.props.closePopup}>
                <DialogTitle id="alert-dialog-title">{this.props.note.title}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {this.props.note.content}
                    </DialogContentText>

                    <Table hover>
                        <thead>
                            <tr>
                                <th>
                                   Creation Date
                                </th>
                                <th>Modification Date</th>
                                <th>Version</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.note.created}</td>
                                <td>{this.props.note.modified}</td>
                                <td>{this.props.note.version}</td>
                            </tr>
                        </tbody>
                    </Table>

                </DialogContent>

                <DialogActions>
                    <Button onClick={this.props.closePopup} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}