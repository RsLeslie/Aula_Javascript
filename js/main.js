function insert(num){
    
    document.form.visor.value=document.form.visor.value+num;
    
}
function reset(){
    form.reset();
}
function calcule(){
    var resultado=document.form.visor.value;
    if(resultado){
        document.form.visor.value=eval(resultado);
    }
}