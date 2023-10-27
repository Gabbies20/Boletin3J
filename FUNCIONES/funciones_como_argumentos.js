var myFn = function (fn){
    var result = fn();
    console.log(result)
}

myFn(function() {
    return 'Hola Mundo';
});


//Ahora esa funcion está dentro de una variables:
var myOtherFn = function(){
    return 'Hola Mundooooooooooooooooooo';
};

myFn(myOtherFn);