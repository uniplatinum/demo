const registerPage = require("./register.page");
const Page = require("./page");

class register extends page {

    get inputUsername(){
        return $('#username')
    };
}
module.export= new registerPage();
