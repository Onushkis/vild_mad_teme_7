const urlParams = new URLSearchParams(window.location.search);
const landscape = urlParams.get("landscape");
console.log(landscape);
fetch("https://tjherkatrrebvelyjaav.supabase.co/rest/v1/vildtmaddata", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI",
  },
})
  .then((res) => res.json())
  .then(showLandscapes);
function showLandscapes(landscapes) {
  console.log(landscapes);
  //looper og kalder showLandscape
  landscapes.forEach(showLandscape);
}
function showLandscape(landscape) {
  console.log(landscape);
  //fang template
  const template = document.querySelector("#landskab-kort").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h1").textContent = landscape.landscape;
  copy.querySelector("img").src = `img/kort${kort.id}.svg`;
  //appende
  document.querySelector("#main-kort").appendChild(copy);
}
