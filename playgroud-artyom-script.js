  const artyom = new Artyom();
window.addEventListener("load", function (){
  document.getElementById("start").addEventListener("click", function(){
   document.getElementById("start").remove();
  

    artyom.addCommands([{
        indexes: ["Hallo Eve","Eve"],
        action: function (i) {
          
            artyom.say("Hi Student");
        }},
      {
      indexes: ["Zusammenfassung","Gib mir bitte eine Zusammenfassung"],
        action: function (i) {
          
            artyom.say("Du hast heute um 9:45- 11:15 Streaming Anwendungen und um 16:15 das Projekt Meeting. Außerderm hast du 3 neue Mails erhalten. Denk auch an deine Interface Design Abgabe morgen 18:00! Kann ich dir sonst noch helfen?");
        }
    },
     {
      indexes: ["Veranstaltungen","Was für Veranstaltungen habe ich heute"],
        action: function (i) {
          
            artyom.say("Du hast heute zwei Fächer. Um 9:45- 11:15 Streaming Anwendungen und um 16:15 das Projekt Meeting.");
        }
    },
   {
      indexes: ["Veranstaltungen","Was für Veranstaltungen habe ich heute"],
        action: function (i) {
          
            artyom.say("Du hast heute zwei Veranstaltungen. Um 9:45- 11:15 Streaming Anwendungen und um 16:15 Projekt Meeting.");
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
                  
                 artyom.say("Hi ich bin der Sprachassistent Eve. Ich versuche dir deinen Uni Altag zu erleichtern. Du kannst mich zum Beispiel nach Veranstaltungen fragen.",{
                 });
                 document.getElementById("text").innerHtml= 'Du kannst folgende Befehle testen <br><br> "Gib mir eine Zusammenfassung?" <br> "Was für Veranstaltungen habe ich heute" <br> "Füge eine Abgabe Datum hinzu."';
                });
            
    };

    startContinuousArtyom();
  });
});
//# sourceMappingURL=playgroud-artyom-script.js.map
