
$( document ).ready(function() {
  $("#sendmsg").click(
    function () {
      // Salvo msg inserito dall'utente
      var msg = $("#msginput").val();
      // Inseriamo in pagina il messaggio
      $(".chat").append(
        "<div class='msguser'>" + msg + "</div>"
      );
      // Pulisco l'input alla fine
      $("#msginput").val("");
    }
  );

});
