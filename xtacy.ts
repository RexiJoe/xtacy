export default class xtacy{

    state: any;
    prevState: any;
    name: string;
    _target: HTMLElement;
    _event: Event;

    constructor(initialState: any){
        this.state = initialState;
        this.prevState = null;
        this.name = crypto.randomUUID();
        this._target = document.body;
        this._event = new Event(this.name);
    };
    setState(newState: any){
        this.prevState = this.state;
        this.state = newState;
        this._target.dispatchEvent(this._event);
    };
    activateState(callback: (state: any)=> void){
        this._target.addEventListener(this.name, ()=>{
            callback(this.state);
        });
    };
    activatePrevState(callback: (prevState: any)=> void){
        this._target.addEventListener(this.name, ()=>{
            callback(this.prevState);
        });
    };
};
