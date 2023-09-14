const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams);
const landscape = urlParams.get("landscape");
const food = urlParams.get("food");
console.log(landscape);
let aarstid = landscape;
console.log(aarstid);
// console.log(landscape);
console.log(landscape.landscape);

if (food == "Pizza") {
  document.querySelector(".Strand_img").src = "img/pizza.svg";
}
if (food == "Pasta") {
  document.querySelector(".Strand_img").src = "img/pasta.svg";
}

fetch(`https://tjherkatrrebvelyjaav.supabase.co/rest/v1/vildtmaddata?landscape=eq.${aarstid}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI",
  },
})
  .then((res) => res.json())
  .then(showLandscapes);
function showLandscapes(landscapes) {
  console.log(landscapes);

  if (document.querySelector(".main_title")) {
    landscapes.forEach((singleElement) => {
      //console.log(singleElement.image);
      //cloner og ændrer indhold
      const clone = document.querySelector("#template-opskrift").content.cloneNode(true);
      clone.querySelector(".img1").setAttribute("src", singleElement.image);
      clone.querySelector(".caption").textContent = singleElement.name;

      document.querySelector(".block").appendChild(clone);
    });
  }
  //   //looper og kalder showLandscape
  //   //->landscapes.forEach(showLandscape);
}
console.log();
if (document.querySelector(".pizzaClick")) {
  document.querySelector(".pizzaClick").setAttribute("href", `opskrifter.html?landscape=${aarstid}`);
}

// function showLandscape(landscape) {
//   console.log(landscape);
//   //fang template
//   const template = document.querySelector("#landskab-kort").content;
//   //lav en kopi
//   document.querySelector(".headline").textContent = landscape;
//   const copy = template.cloneNode(true);
//   //ændre indhold
//   //appende
//   document.querySelector("#landskab-kort").appendChild(copy);
// }
