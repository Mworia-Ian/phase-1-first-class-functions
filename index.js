function receivesAFunction(func){
    func()
}

function spy(){

}
receivesAFunction(spy)



const returnsANamedFunction = () => {
  
    return function fn(){
        
    };
}




function returnsAnAnonymousFunction(){
    return function(){
        
    }
}