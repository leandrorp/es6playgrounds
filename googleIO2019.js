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
  trlPorutuguesBRList.format( list )  // manzanas, mangos ou plátanos
  
  
  