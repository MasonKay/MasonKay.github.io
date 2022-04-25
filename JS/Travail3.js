function madlibs() {
  var adjectif = document.getElementById("adjectif").value;
  var nom = document.getElementById("nom").value;
  var verb = document.getElementById("verb").value;
  var place = document.getElementById("place").value;
  var activite = document.getElementById("activite").value;
  var saison = document.getElementById("saison").value;

  var paragraph = ("En " + saison + ", moi et mon ami " + nom + " somme aller au " + place + " " + adjectif + "! Nous avons " + verb + " et nous avons fait du " + activite + "!")
  var para = document.getElementById("madlib")
  para.innerHTML = paragraph
}