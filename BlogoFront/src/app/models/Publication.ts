export default class Publication {

    private _Id: number;
    private _Title: string;
    private _Content: string;

    constructor(Title: string, Content: string) {
        this._Title = Title;
        this._Content = Content;
    }

    get Id(): number {
        return this._Id;
    }

    get Title(): string {
        return this._Title;
    }

    get Content(): string {
        return this._Content;
    }

    set Title(value: string) {
        this._Title = value;
    }

    set Content(value: string) {
        this._Content = value;
    }
}