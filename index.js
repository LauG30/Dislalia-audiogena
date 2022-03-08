var luz = document.querySelector("#luz");
luz.setAttribute("light", "intensity: 0.8");

//Movimiento
AFRAME.registerComponent('static-movement', {
    schema: {default: ''},
    init: function () {
       var el = this.el;
       el.addEventListener('click', function () {
          document.querySelector('#player').setAttribute('position', el.getAttribute('position'));
          console.log("Click: Player moved");
       });
    }
});

AFRAME.registerComponent('collider', {
   init: function(){
      this.el.addEventListener('collide', function(e) {

         const idTrigger = e.detail.body.el.id;
         const triggers = {
            'trigger': () =>{
               var scream = document.querySelector("#Scream");
               let audio = document.querySelector("#CancionInfantil");
               audio.play();
               e.detail.body.el.parentNode.removeChild(e.detail.body.el);
               setTimeout(function(){
                  scream.setAttribute("visible",true);
                  scream.setAttribute("src","#Screamer1");
               },200)
               setTimeout(function(){
                  scream.setAttribute("visible",false);
               },2000);
            }
         }
         triggers[idTrigger] ? triggers[idTrigger](): null;
      });
   }
})
