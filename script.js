
$( document ).ready(function() {
  // BOTTA E RISPOSTA SULLA CHAT
  $("#sendmsg").click(
    function () {
      // Salvo msg inserito dall'utente
      var msg = $("#msginput").val();
      // Creo il clone del messaggio uetnete
      var msgelement = $("#template .msguser").clone();
      // Stampo l'input
      msgelement.text(msg);
      $(".chat").append(msgelement);
      // Pulisco l'input alla fine
      $("#msginput").val("");
      // Creo il mio clone della risposta
      var msgelementrisp = $("#template .msgrisp").clone();
      // Creo risposta automatica in 1 secondo
      setTimeout(function () {
        var risp = msgelementrisp.text("Ok");
        $(".chat").append(risp);
      }, 1000);
    }
  );

  // RICERCHIAMO I CONTATTI
  // La mia funzione si attiva premento un tasto sulla tastiera
  $(".cerca").keyup(function () {
    // Creo una variabile e trasformo il valore in minuscolo
    var cercaNome = $(this).val().toLowerCase();
    // Nel momento in cui si digita i contatti spariscono
    $(".box-user > .user").hide();
    // Se spazio > di 0 parte la funzione
    if (cercaNome.length > 0) {
      // Funzione che attraversa i mie contatti
      $(".box-user > .user").each(function (){
        // Creo una variabile che trasformo i nomi in minuscolo
        var cercaCont = $(this).find(".name").text().toLowerCase();
        // Verifico se inclusi
        if (cercaCont.includes(cercaNome)) {
          $(this).show();
        }
      });
      // Se spazio = a 0 i contatti si vedono
    } else if (cercaNome.length == 0) {
      $(".box-user > .user").show();
    }
  });

});
