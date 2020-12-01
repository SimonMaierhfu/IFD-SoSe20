  const artyom = new Artyom();
window.addEventListener("load", function (){
  document.getElementById("start").addEventListener("click", function(){
   document.getElementById("start").remove();
    document.getElementById("eve").css(display,block);

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
                });
            
    }

    startContinuousArtyom();
  });
});
//# sourceMappingURL=playgroud-artyom-script.js
