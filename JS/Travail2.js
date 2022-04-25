function corrige() {
  j = 0
    var question2 = document.getElementById("question2").value;
  // verifie la reponce de question 1 sortie
    if (question2 == "q2ans1") {
      messageQ2 = "Bien fait!"
      var qu2 = document.getElementById("bon2")
      qu2.innerHTML = messageQ2
      j = j + 1
    } else {
      var messageQ2b = "Bonne essai! La bonne reponce etait 'WOW! (nom inscrie) est un beau nom!'!"
      var qu2 = document.getElementById("bon2")
  qu2.innerHTML = messageQ2b
    }
       //Chercher les données select dans le formulaire
    var question3 = document.getElementById("q3ans1");
       //Variable pour stocker l'année choisie
    var messageQ3 = "";
      // verifie la question 2 en javascript
    if (question3.checked) {
      messageQ3 = " " + question3.value;
      var q3 = ("Bien fait!")
      var qu3 = document.getElementById("bon3")
      qu3.innerHTML = q3
      j = j + 1
    } else {
      var messageQ3b = "Bonne essai! La bonne reponce est vrai!"
      
      var qu3 = document.getElementById("bon3")
          qu3.innerHTML = messageQ3b
    }
  
    var q4ans1 = document.getElementsByName("question4")
  
      if ((q4ans1[0].checked) && (q4ans1[1].checked) && !(q4ans1[2].checked)) {
          var messageQ4 = "Bien fait!"
          var qu4 = document.getElementById("bon4")
          qu4.innerHTML = messageQ4
          j = j + 1
      } else {
          var messageQ4b = "Bonne essai! Les bonnes reponces etaient 'Let' et 'Var'!"
          var qu4 = document.getElementById("bon4")
          qu4.innerHTML = messageQ4b
      }
  var final = document.getElementById("final")
  var messageR = ("Votre score finale est " + j + " sur 3")
  final.innerHTML = messageR
} //end function

