function outer(){
    let a = 'Hampter';
    let b = 'Bampter';
    console.log(a, b);
   

    function inner(a, b){
        a = 'Glam';
        b = 'Sally';
        b = 'Sally ;3';
        console.log(a, b);
      
    };
    inner(a, b);
    console.log(a, b);
}
outer();


