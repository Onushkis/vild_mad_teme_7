//laver objektet urlParams, gør det muligt at arbejde med parametre
const urlParams = new URLSearchParams(window.location.search);
//fanger parameteret landscape, og gemmer dets værdi i variablen landscape
const landscape = urlParams.get("landscape");
//fanger parameteret food, og gemmer dets værdi i variablen food
const food = urlParams.get("food");
//sætter variablen raavarer til at have samme værdi som landscape variablen
let raavarer = landscape;
//ændrer billede efter food variablens værdi, med betingelse
if (food == "Pizza") {
  document.querySelector(".Strand_img").src = "img/pizza.svg";
}
if (food == "Pasta") {
  document.querySelector(".Strand_img").src = "img/pasta.svg";
}
// henter data, påvirker landscape query parameteret med raavarer variablen
fetch(`https://tjherkatrrebvelyjaav.supabase.co/rest/v1/vildtmaddata?landscape=eq.${raavarer}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI",
  },
})
  .then((res) => res.json())
  .then(showLandscapes);
function showLandscapes(landscapes) {
  //tjekker efter html elementet .main-title
  if (document.querySelector(".main_title")) {
    //loop itererer gennem hvert element
    landscapes.forEach((singleElement) => {
      //kloner templatens indhold
      const clone = document.querySelector("#template-opskrift").content.cloneNode(true);
      //sætter src attributten til værdien på image
      clone.querySelector(".img1").setAttribute("src", singleElement.image);
      //sætter tekst indholdet til værdien på name
      clone.querySelector(".caption").textContent = singleElement.name;
      //appender den klonede template til html elementet .block
      document.querySelector(".block").appendChild(clone);
    });
  }
}
//tjekker efter html elementet .pizzaClick
if (document.querySelector(".pizzaClick")) {
  //sætter href attributten til raavarer variablens url værdi
  document.querySelector(".pizzaClick").setAttribute("href", `opskrifter.html?landscape=${raavarer}`);
}
