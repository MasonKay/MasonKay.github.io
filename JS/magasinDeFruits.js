var prix = [1.61, 2.51, 2.18, 6.88, 1.28]
var fruitsTotal = 0
var taxesTotal = 0
var livraisonTotal = 0
// Fonction pour quand clickez 'Achete fruits', affiche tout
function recu() {
  
 // Variable de quantite de fruits
  var fruits = document.getElementsByName("fruits")
  var quantityB = document.getElementById("banana").value
  var quantityS = document.getElementById("straw").value
  var quantityK = document.getElementById("kiwi").value
  var quantityR = document.getElementById("ras").value
  var quantityG = document.getElementById("grape").value


  // Boucle for les prix et montant de fruits acheter
    for (var i=0; i < fruits.length; i++) {
      if (i == 0) {
        var banana = parseFloat(prix[i]*quantityB);
      } else if (i == 1) {
        var straw = parseFloat(prix[i]*quantityS);
      } else if (i == 2) {
        var kiwi = parseFloat(prix[i]*quantityK);
      } else if (i == 3) {
        var ras = parseFloat(prix[i]*quantityR);
      } else if (i == 4) {
        var grape = parseFloat(prix[i]*quantityG);
      }
    }
    fruitsTotal = banana + straw + kiwi + ras + grape
    var total1 = fruitsTotal



// Varibale des lieu
  var quebec = document.getElementById("quebec")
  var ontario = document.getElementById("ontario")
  var erreurLieu = ""

    if (total1 > 0) {
      if (quebec.checked) {
        taxesTotal = total1*1.15
      } else if (ontario.checked) {
        taxesTotal = total1*1.13;
      } else {
        erreurLieu = "Il faut selectione ou vous etes situer"
        document.getElementById("erreurLieu").innerHTML = erreurLieu
      }
    } 
  var total2 = taxesTotal
    

  
  var premium = document.getElementById("premium")
  var normal = document.getElementById("normal")
  var erreurLivraison = ""
  
  if (total2 > 0) {
    if (premium.checked) {
      livraisonTotal = total2 + 40
    } else if (normal.checked) {
      livraisonTotal = total2 + 15;
    } else {
      erreurLivraison = "Il faut soit ajouter votre maniere de livraison ou vous n'avez pas acheter de fruits!"
      document.getElementById("erreurLivraison").innerHTML = erreurLivraison
    }
  } 

  var total3 = livraisonTotal

  
  
  var argent = parseInt(document.getElementById("argent").value)


  
  var affiche = document.getElementById("totalCost")
  
    if (total1 > 0) {
      if ((quebec.checked || ontario.checked) && (premium.checked || normal.checked) && (argent > livraisonTotal)) {
        // Ajouter une range d'etoile
          var message1 = ("********************************")
        // Montant de banane et prix
          var messageB = "Banane x" + quantityB + " (" + banana.toFixed(2) + "$)"
        // Montant de fraise et prix
          var messageS = "Fraise x" + quantityS + " (" + straw.toFixed(2) + "$)"
        // Montant de kiwi et prix
          var messageK = "Kiwi x" + quantityK + " (" + kiwi.toFixed(2) + "$)"
        // Montant de framboise et prix
          var messageR = "Framboise x" + quantityR + " (" + ras.toFixed(2) + "$)"
        // Montant de raisin et prix
          var messageG = "Raisin x" + quantityG + " (" + grape.toFixed(2) + "$)"
        // Cout de tout les fruit sans taxes ni livraison
        fruitsTotal = "Cout total des fruits: " + fruitsTotal.toFixed(2) + "$"
        // Message de fruit pour afficher dans affiche.innerHTML
          var messageFruits = messageB + "<br>" + "<br>" + messageS + "<br>" + "<br>" + messageK + "<br>" + "<br>" + messageR + "<br>" + "<br>" + messageG + "<br>" + "<br>" 
        // Message des taxes pour afficher dans affiche.innerHTML
          var messageTaxes = "Cout des fruits avec les taxs provinciaux" + "<br>" +"<br>" + total2.toFixed(2) + "$"
        // Message des livraison pour afficher dans affiche.innerHTML
          var messageLivraison = "Cout total avec la livraison" + "<br>" + "<br>" + total3.toFixed(2) + "$"
        // Tout les messages combiner pour cree le recu
          affiche.innerHTML = message1 + "<br>" + messageFruits + fruitsTotal + "<br>" + message1 + "<br>" + messageTaxes + "<br>" + message1 + "<br>" + messageLivraison + "<br>" + message1 + "<br>" + "Argent a redonner est de " + (argent-total3).toFixed(2) + "$"
        
        } else {
        affiche.innerHTML = "Fonts non suffisante!"
      }
    } else {
      affiche.innerHTML = "Vous n'avez pas acheter de fruit!" + "<br>"
    }



  var argent = parseInt(document.getElementById("argent").value)
  var argentReste = parseInt(argent - livraisonTotal)

  // Boucle while pour boucler lors que argentReste > 0, et si argent > total3, sa fait la boucle
    while (argentReste > 0) { 
      if (argent > total3) {
        // Billet de 100$ qui retourne a l'utilisateur
        var argentDonne = parseInt(argentReste/100) 
        document.getElementById("billet100").innerHTML = "Billet de 100$= " + argentDonne
        argentReste = argentReste%100

        // Billet de 50 qui retourne a l'utilisateur
        argentDonne = parseInt(argentReste/50) 
        document.getElementById("billet50").innerHTML = "Billet de 50$ = " + argentDonne
        argentReste = argentReste%50
        
        // Billet de 20$ qui retourne a l'utilisateur
        argentDonne = parseInt(argentReste/20) 
        document.getElementById("billet20").innerHTML = "Billet de 20$ = " + argentDonne
        argentReste = argentReste%20
        
        // Billet de 10$ qui retourne a l'utilisateur
        argentDonne = parseInt(argentReste/10) 
        document.getElementById("billet10").innerHTML = "Billet de 10$ = " + argentDonne
        argentReste = argentReste%10
        
        // Billet de 5$ qui retourne a l'utilisateur
        argentDonne = parseInt(argentReste/5)
        document.getElementById("billet5").innerHTML = "Billet de 5$ = " + argentDonne
        argentReste = argentReste%5
        
        // Billet de 1$ qui retourne a l'utilisateur
        argentDonne = parseInt(argentReste/1)
        document.getElementById("billet1").innerHTML = "Billet de 1$ = " + argentDonne
        argentReste = argentReste%1
        
        // Billet de 0.50$ qui retourne a l'utilisateur
        argentDonne = parseFloat(argentReste/0.50)
        document.getElementById("billet050").innerHTML = argentDonne
        argentReste = argentReste%0.50

        // Billet de 0.25$ qui retourne a l'utilisateur
        argentDonne = parseFloat(argentReste/0.25)
        document.getElementById("billet025").innerHTML = argentDonne
        argentReste = argentReste%0.25
        
        // Billet de 0.10$ qui retourne a l'utilisateur
        argentDonne = parseFloat(argentReste/0.10)
        document.getElementById("billet010").innerHTML = argentDonne
        argentReste = argentReste%0.10

        // Billet de 0.05$ qui retourne a l'utilisateur
        argentDonne = parseFloat(argentReste/0.05)
        document.getElementById("billet005").innerHTML = argentDonne
        argentReste = argentReste%0.05
      } else {
        document.getElementById("erreurFonds").innerHTML = "Vous n'avez pas des fonts suffisante pour acheter les fruits!"
    }

  }
}
