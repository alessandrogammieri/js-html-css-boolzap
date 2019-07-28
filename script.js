
$( document ).ready(function() {
  // FUNZIONE BOTTA E RISPOSTA
  function sendMessage() {
    // Salvo msg inserito dall'utente
    var msg = $("#msginput").val();
    // Creo il clone del messaggio utente
    var msgelement = $("#template .msguser").clone();
    var newmsg = msgelement.children("p").text(msg);
    var oramsg = msgelement.children("span").text(getCurrentTime());
    // Stampo l'input
    $(".boxchat.active").append(msgelement);
    // Pulisco l'input alla fine
    $("#msginput").val("");
    // Creo il mio clone della risposta
    var msgelementrisp = $("#template .msgrisp").clone();
    // Creo risposta automatica in 1 secondo
    setTimeout(function () {
      var risp = msgelementrisp.children("p").text("Non ho tempo!");
      var orarisp = msgelementrisp.children("span").text(getCurrentTime());
      $(".boxchat.active").append(msgelementrisp);
    }, 1000);
  }

  // INVIO DEL MESSAGGIO TRAMITE IL CLICK
  $("#sendmsg").click(
    function () {
      sendMessage();
      scrollMessage();
    }
  );

  // INVIO DEL MESSAGGIO TRAMITE IL TASTO INVIO
  $("#msginput").keypress(function() {
      if (event.which == 13) {
        sendMessage();
        scrollMessage();
      }
    }
  );

  // RICERCHIAMO I CONTATTI
  // La mia funzione si attiva premento un tasto sulla tastiera
  $(".cerca").keyup(
    function () {
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
    }
  );

  // CLICK SUL CONTATTO E RELATIVA CONVERSAZIONE
  $(".user").click(
    function () {
      // Creo una variabile e assegno l'attributo su user
      var refchat = $(this).attr("refchat");
      // Rimuovo la classe active e attiva
      $(".boxchat").removeClass("active");
      $(".image").removeClass("attiva");
      // Aggiungo la classe active e attiva dove c'è l'attributo
      $('.boxchat[refchat="'+ refchat +'"]').addClass("active");
      $('.image[refchat="'+ refchat +'"]').addClass("attiva");
    }
  );

  // COMPARSA/SCOMPARSA ICONA OPZIONI MESSAGGIO
  $(document).on("mouseenter", ".msguser, .msgrisp", function() {
    $(this).find(".dropdown i").show();
  });
  $(document).on("mouseleave", ".msguser, .msgrisp", function() {
    $(this).find(".dropdown i").hide();
  });
  $(document).on("click",".menu-option", function(){
    $(this).closest(".dropdown").siblings(".menu").toggle();
  });
  $(document).on("click", ".delete", function(){
    $(this).closest(".msguser, .msgrisp").children("p").html('<i class="fas fa-ban"></i>' + ' ' + '<em>Hai eliminato questo messaggio</em>');
    $(".menu").hide();
  });

  // SCROLL AUTOMATICA DELLA CHAT
  function scrollMessage () {
    // Misurazione dell'altezza della chat
    var scroll = $(".chat")[0].scrollHeight;
    // Applico lo scroll al contenitore della chat
    $(".chat").scrollTop(scroll);
  }

  // FUNZIONE PER ORARIO MESSAGGI CHAT
  function getCurrentTime () {
    var data = new Date();
    var h = data.getHours() + ":";
    if (h < 10) {
        h = '0' + h;
      }
    var m = data.getMinutes();
    if (m < 10) {
        m = '0' + m;
      }
    return h + m;
  }

});
