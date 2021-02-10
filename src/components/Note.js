import {ActionsButtons} from "./ActionsButtons";

export class Note{
    constructor(note_object, baseURL) {
        this.baseURL = baseURL;
        this._title = note_object.title
        this._content = note_object.content
        this._created = note_object.created
        this._modified = note_object.modified
        this._version = note_object.version
        this._id = note_object.id
        this.actions = <ActionsButtons note={this}/>
    }

    get title(){
        return this._title
    }

    get content(){
        return this._content
    }

    get created(){
        return this.prepareDate(this._created)
    }

    get modified(){
        return this.prepareDate(this._modified)
    }

    get version(){
        return this._version
    }

    get id(){
        return this._id
    }

    prepareDate(timestamp){
        return new Date(timestamp*1000).toLocaleDateString("en-GB")
    }
}