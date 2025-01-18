export default class xtacy<T>{

    state: any | T;
    prevState: any | T;
    name: string;
    _target: HTMLElement;
    _event: Event;

    constructor(initialState: any | T){
        this.state = initialState;
        this.prevState = null;
        this.name = crypto.randomUUID();
        this._target = document.body;
        this._event = new Event(this.name);
    };
    setState(newState: any | T){
        this.prevState = this.state;
        this.state = newState;
        this._target.dispatchEvent(this._event);
    };
    activateState(callback: (state: any | T)=> void){
        this._target.addEventListener(this.name, ()=>{
            callback(this.state);
        });
    };
    activatePrevState(callback: (prevState: any | T)=> void){
        this._target.addEventListener(this.name, ()=>{
            callback(this.prevState);
        });
    };
};
