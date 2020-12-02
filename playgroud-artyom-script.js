  const artyom = new Artyom();
window.addEventListener("load", function (){
  document.getElementById("start").addEventListener("click", function(){
   document.getElementById("start").remove();
     var element = document.getElementById("eve");
  element.classList.add("active");

    artyom.addCommands([{
        indexes: ["Hallo"],
        action: function (i) {
            console.log("YEAh Motherfucker");
            artyom.say("Hallo Student");
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
                   
                    artyom.say("Hallo ich bin der Sprachassistent Eve. Ich versuche dir deinen Uni Altag zu erleichtern. Du kannst mich zum Beispiel nach einer Zusammenfassung für den heutigen Tag fragen.");
                });
            
    };

    startContinuousArtyom();
  });
});
//# sourceMappingURL=playgroud-artyom-script.js.map
