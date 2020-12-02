  const artyom = new Artyom();
window.addEventListener("load", function (){
  document.getElementById("start").addEventListener("click", function(){
   document.getElementById("start").remove();
    document.getElementById("eve").classList.add("active");
  

    artyom.addCommands([{
        indexes: ["Hallo Eve","Eve"],
        action: function (i) {
          
            artyom.say("Hi Student");
        }},
      {
      indexes: ["Zusammenfassung","Gib mir bitte eine Zusammenfassung"],
        action: function (i) {
          
            artyom.say("Du hast heute um 9 45- 11 15 Streaming Anwendungen und um 16:15 das Projekt Meeting. Außerderm hast du 3 neue Mails erhalten. Denk auch an deine Interface Design Abgabe morgen 18:00! Kann ich dir sonst noch helfen?");
        }
    },
     {
      indexes: ["Was für Veranstaltungen habe ich heute"],
        action: function (i) {
          
            artyom.say("Du hast heute zwei Fächer. Um 9 45- 11 15 Streaming Anwendungen und um 16:15 das Projekt Meeting.");
        }
    },
   {
      indexes: ["In welchem Raum findet Medienethik statt"],
        action: function (i) {
          
            artyom.say("Medienethik findet in D M 17 in alfaview statt.");
        }
    },
   {
      indexes: ["Sag mir die aktuellen Infos"],
        action: function (i) {
          
            artyom.say("Informationen zu den geplanten Lehrformen können in der entsprechenden Veranstaltung hier im Intranet unter dem Reiter „Info/Beschreibung“ abgerufen werden. Hier finden Sie „Informationen zum E-Learning/Distance-Learning-Angebot“ sowie je nach Veranstaltung Direktlinks zum FELIX-Kurs und / oder zum Alphaview-Veranstaltungsraum.");
        }
    }, 
   {
      indexes: ["danke"],
        action: function (i) {
          
            artyom.say("Kann ich dir sonst noch irgendwie weiter helfen?");
        }
    },
                           {
      indexes: ["nein","stop","tschüss"],
        action: function (i) {
          
            artyom.say("Bis zum nächsten Mal.");
        }
    },
    ]);
artyom.when("NOT_COMMAND_MATCHED", function(){
            artyom.say("Ich konnte dich leider nicht verstehen. Rede deutlicher!");
        });
    function startContinuousArtyom() {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                  
                 artyom.say("Hi ich bin der Sprachassistent Marie. Ich versuche dir deinen Uni Altag zu erleichtern. Du kannst mich zum Beispiel nach aktuellen Infos fragen.");
                  
                 document.getElementById("text").innerHTML= 'Du kannst folgende Befehle testen <br><br> "Gib mir eine Zusammenfassung?" <br> "Was für Veranstaltungen habe ich heute" <br> "In welchem Raum findet Medienethik statt?" <br> "Sag mir die aktuellen Infos."<br>';
                   
                });
            
    };

    startContinuousArtyom();
  });
});
//# sourceMappingURL=playgroud-artyom-script.js.map
