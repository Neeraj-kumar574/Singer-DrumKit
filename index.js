
var numberOfDrumButtons = document.querySelectorAll(".nk").length;

 for (var i=0;i<numberOfDrumButtons;i++){


   document.querySelectorAll(".nk")[i].addEventListener("click", function (){

          var buttonInnerHTML = this.innerHTML;

         switch (buttonInnerHTML) {
           case "Karan":
             var karan=new Audio('sounds/karan.mp3');
             karan.play();
             break;

             case "Sidhu":
               var sidhu=new Audio('sounds/sidhu.mp3');
               sidhu.play();
               break;

               case "Akhil":
                 var akhil=new Audio('sounds/akhil.mp3');
                 akhil.play();
                 break;

                 case "Guru":
                   var guru=new Audio('sounds/guru.mp3');
                  guru.play();
                   break;

                   case "Jass":
                     var jass=new Audio('sounds/jass.mp3');
                  jass.play();
                     break;

                     case "Kamal":
                       var audio=new Audio('sounds/kamal.mp3');
                      audio.play();
                       break;

                       case "KaranR":
                         var karanR=new Audio('sounds/karanR.mp3');
                         karanR.play();
                         break;

                         case "BJay":
                           var bJay=new Audio('sounds/bJay.mp3');
                           bJay.play();
                           break;

           default:console.log(buttonInnerHTML);

         }

   });


 }
