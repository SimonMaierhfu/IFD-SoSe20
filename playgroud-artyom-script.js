  const artyom = new Artyom();
window.addEventListener("load", function (){
  

    artyom.addCommands([{
        indexes: ["Hallo"],
        action: function (i) {
            console.log("YEAh Motherfucker");
            artyom.say("Hallo Student");
        },
    }]);

    function startContinuousArtyom() {

            function (){
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function ()
                });
            };
    }

    startContinuousArtyom();

});
//# sourceMappingURL=playgroud-artyom-script.js.map
