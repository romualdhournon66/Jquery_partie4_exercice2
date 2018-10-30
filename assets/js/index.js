$(function(){

  $('#validate').click(function(){
    math = $('#math').val();
    francais = $('#francais').val();
    geo = $('#geo').val();
    svt = $('#svt').val();
    eps = $('#eps').val();
    console.log(math)
    // je vérifie que chaque variable est bien un nombre compris entre 0 et 20
    if ((isNaN(math) == false) && (isNaN(francais) == false) && (isNaN(geo) == false) && (isNaN(svt) == false) && (isNaN(eps) == false) &&
    parseFloat(math) >= 0 && parseFloat(math) <= 20 &&
    parseFloat(francais) >= 0 && parseFloat(francais) <= 20 &&
    parseFloat(geo) >= 0 && parseFloat(geo) <= 20 &&
    parseFloat(svt) >= 0 && parseFloat(svt) <= 20 &&
    parseFloat(eps) >= 0 && parseFloat(eps) <= 20 ){
      //calcule de ma moyenne
      result = (parseFloat(math)+parseFloat(francais)+parseFloat(geo)+parseFloat(svt)+parseFloat(eps))/5;
      if (result == 20){
        message = "excellent";
      }else if(result >= 16 && result < 20){
        message = "trés bien";
      }else if(result >= 13 && result < 16){
        message = "bien";
      }else if(result >= 10 && result < 13){
        message = "moyen";
      }else if(result >= 0 && result < 10){
        message = "en dessous de la moyenne";
      }
      alert('la moyenne est : ' + result + ' l\'aprréciation est : ' + message);
    }else{
      alert('merci de renseigner des nombres compris entre 0 et 20');
    }
  });
});
