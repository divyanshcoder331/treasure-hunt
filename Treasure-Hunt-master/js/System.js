class System{

    constructor(){}

    authenticate(actualCode,enterCode){
        if(enterCode === actualCode){
            return true;
        }
        else{
            return false;
        }
    }

    

}