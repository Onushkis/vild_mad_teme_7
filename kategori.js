//url    //https://tjherkatrrebvelyjaav.supabase.co
//api nøgle   //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI
//efterspørger, får og henter data fra Supabase
fetch("https://tjherkatrrebvelyjaav.supabase.co/rest/v1/vildtmaddata?select=landscape", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI",
  },
})
  //konverterer dataen til et objekt vi kan bruge
  .then((res) => res.json())
  //Beder om a kalde funktionen showLandscapes
  .then(showLandscapes);
//Kalder funktionen og viser landskab for hvert element i landscapes array'en
function showLandscapes(landscapes) {
  landscapes.forEach(showLandscape);
}
//fetcher indholdet i vores template
const template = document.querySelector("template").content;
//kloner indholdet i template, inkl. alle child elements
const clone = template.cloneNode(true);
