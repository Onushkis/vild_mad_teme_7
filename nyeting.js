//laver det nye objekt urlParams2, gør det muligt at arbejde med query parametre i den nye url
const urlParams2 = new URLSearchParams(window.location.search);
//bruger get til at hente værdien på landscape query parameteret
const landscape2 = urlParams2.get("landscape");
//henter data, inkluderer landscape2 variablen som query parameter
fetch("https://tjherkatrrebvelyjaav.supabase.co/rest/v1/vildtmaddata?title=eq." + landscape2, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI",
  },
})
  .then((res) => res.json())
  .then(showLandscapes);
function showLandscapes(landscapes) {
  //vælger html elementet .headline og gemmer værdien i headlineElement variablen
  const headlineElement = document.querySelector(".headline");
  //sætter html elementet til landscape2 variablens værdi
  headlineElement.textContent = landscape2;
}
