//Internationalization API

let trlPorutuguesBR = new Intl.RelativeTimeFormat('pt-BR', {
    numeric: 'auto'
  });
  trlPorutuguesBR.format( 5, 'day' )  //em dias
  trlPorutuguesBR.format( -5, 'day' )  //ha dias
  trlPorutuguesBR.format( 15, 'minute' )  //em minutos
  
  var trlPorutuguesBRList = new Intl.ListFormat('pt-BR', {
    type: 'disjunction'
  });
  var list = [ 'manzanas', 'mangos', 'plátanos' ];
  trlPorutuguesBRList.format( list )  // manzanas, mangos OU plátanos
  
  //BigInts

  let multiply = 100000000000009 * 123;
   // return wrong result

   let b = 10000000000000009n * 123n;
   // now it works

   const array = [1,2,3,4,1,2,[3,[4]]];
   array.flat(); // remove the one level of arrays [1,2,3,4,1,2,3,[4]]
   array.flat(Infinity)   // remove all levels   [1,2,3,4,1,2,3,4]
   
  

