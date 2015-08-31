class ConsoleWrapper{
    constructor(debug = false){
        this.name = 'Console wrapper!';
    }
    speak(){
        debugger;
        console.log("Hello, I am ", this);
    }
}

module.exports = ConsoleWrapper;
