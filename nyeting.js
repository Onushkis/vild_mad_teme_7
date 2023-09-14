const urlParams2 = new URLSearchParams(window.location.search);
// console.log(urlParams2);
const landscape2 = urlParams2.get("landscape");
console.log(landscape2);

// console.log(landscape);

fetch("https://tjherkatrrebvelyjaav.supabase.co/rest/v1/vildtmaddata?title=eq." + landscape2, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI",
  },
})
  .then((res) => res.json())
  .then(showLandscapes);

function showLandscapes(landscapes) {
  const headlineElement = document.querySelector(".headline");
  headlineElement.textContent = landscape2;
}
