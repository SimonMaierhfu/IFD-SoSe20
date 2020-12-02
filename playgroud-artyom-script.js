  const artyom = new Artyom();
window.addEventListener("load", function (){
  document.getElementById("start").addEventListener("click", function(){
   document.getElementById("start").remove();
     var element = document.getElementById("eve");
  element.classList.add("active");

    artyom.addCommands([{
        indexes: ["Hallo"],
        action: function (i) {
          
            artyom.say("Hi Student");
        }},
      {
      indexes: ["Zusammenfassung","Gib mir bitte eine Zusammenfassung"],
        action: function (i) {
          
            artyom.say("Du hast heute zwei Veranstaltungen. Um 9:45- 11:15 Streaming Anwendungen und um 16:15 Projekt Meeting.");
        }
    },
     
    }]);

    function startContinuousArtyom() {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                   
                    artyom.say("Hallo ich bin der Sprachassistent Eve. Ich versuche dir deinen Uni Altag zu erleichtern. Du kannst mich zum Beispiel nach Veranstaltungen fragen.");
                });
            
    };

    startContinuousArtyom();
  });
});
//# sourceMappingURL=playgroud-artyom-script.js.map
