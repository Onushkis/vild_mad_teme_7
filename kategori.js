//url    //https://tjherkatrrebvelyjaav.supabase.co
//api nøgle   //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI

fetch("https://tjherkatrrebvelyjaav.supabase.co/rest/v1/vildtmaddata?select=landscape", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI",
  },
})
  .then((res) => res.json())
  .then(showLandscapes);

function showLandscapes(landscapes) {
  console.log(landscapes);
  landscapes.forEach(showLandscape);
}
function showLandscape(landscape) {
  //fanger vores main
  const main = document.querySelector("main").content;

  //cloner
  const clone = main.cloneNode(true);

  //ændrer indhold
  clone.querySelector("a").textContent = landscape.landscape;
  clone.querySelector("a").href = `kort.html?landscape=${landscape.landscape}`;

  //appender
  document.querySelector("section").appendChild(clone);
}
