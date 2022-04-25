function initiales() {
  var afficheIni = document.getElementById("afficheIni");
// Variables
  var prenom = document.getElementById("txtPrenom").value;
  var milieu = document.getElementById("txtNomMillieu").value;
  var famille = document.getElementById("txtNomDeFamille").value;
// Initiales
  var initiales = ("<br> Tes initiales sont " + prenom.toUpperCase().charAt(0) + "." + milieu.toUpperCase().charAt(0) + "." + famille.toUpperCase().charAt(0) + ".")
// Affiches les Initiales
  afficheIni.innerHTML = initiales }

function nomComplet() {
// Nom complet
  var afficheNom = document.getElementById("afficheNom");
// Variables
  var prenom = document.getElementById("txtPrenom").value;
  var milieu = document.getElementById("txtNomMillieu").value;
  var famille = document.getElementById("txtNomDeFamille").value;
// Initiales
  var nomComplet = ("<br> Ton nom complet est " + prenom + " " + milieu + " " + famille)

afficheNom.innerHTML = nomComplet }

function pass() {

  var affichePass = document.getElementById("affichePass");
// Variables
  var prenom = document.getElementById("txtPrenom").value;
  var milieu = document.getElementById("txtNomMillieu").value;
  var famille = document.getElementById("txtNomDeFamille").value;
// Initiales
  var password = ("<br> Ton nom d'utilisateur est " +   prenom.toLowerCase().charAt(0) + milieu.toLowerCase().charAt(0) + famille.toLowerCase())

affichePass.innerHTML = password }
