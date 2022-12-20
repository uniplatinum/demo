<<<<<<< HEAD
const registerPage = require("./register.page");
=======
const loginPage = require("./login.page");
>>>>>>> demo1
const Page = require("./page");

class register extends page {

    get inputUsername(){
        return $('#username')
    };
}
<<<<<<< HEAD
module.export= new registerPage();
=======
module.export= new loginPage();
>>>>>>> demo1
