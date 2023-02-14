// Developed by Jose Daniel Ayala Gutierrez
// Date: 13/02/2023
// LinkedIn: https://www.linkedin.com/in/jos%C3%A9-daniel-ayala-gutierrez-868008244/
// GitHub: https://github.com/RexiJoe
export default class xtacy{
    constructor(initialState){
        this.state = initialState;
        this.prevState = null;
        this.name = crypto.randomUUID();
        this._target = document.body;
        this._event = new Event(this.name);
    };
    setState(newState){
        this.prevState = this.state;
        this.state = newState;
        this._target.dispatchEvent(this._event);
    };
    activateState(callback){
        this._target.addEventListener(this.name, ()=>{
            callback(this.state);
        });
    };
    activatePrevState(callback){
        this._target.addEventListener(this.name, ()=>{
            callback(this.prevState);
        });
    };
};