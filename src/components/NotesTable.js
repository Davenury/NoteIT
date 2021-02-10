import react from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Badge} from "react-bootstrap";

export class NotesTable extends react.Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    columns = [
        {
            dataField: 'title',
            text: "Title Click to sort!",
            sort: true
        },
        {
            dataField: 'created',
            text: 'Creation date Click to sort!',
            sort: true
        },
        {
            dataField: 'modified',
            text: 'Last Modification Date Click to sort!',
            sort: true
        },
        {
            dataField: 'version',
            text: 'Version'
        },
        {
            text: 'Actions',
            dataField: 'actions'
        }
    ]

    render(){
        return (
            <div>
                <BootstrapTable
                    classes="bootstrapTable"
                    keyField="id"
                    data={this.props.notes}
                    columns={this.columns}
                    bootstrap4={true}
                    hover={true}
                    caption={<h3><Badge variant="info">Click on Column to sort!</Badge></h3>}
                />
            </div>
        )
    }
}

