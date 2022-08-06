  const input = document.getElementById("text")
  const button = document.getElementById("search")
  const capital1 = document.querySelector(".capital h2")
  const population1 = document.querySelector(".population h2")
  const region1 = document.querySelector(".region h2")
  const currency1 = document.querySelector(".currency h2")
  const area1 = document.querySelector(".area h2")
  const language = document.querySelector(".languages h2")
  const img1 = document.getElementById("img")


button.addEventListener("click", function(){
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getData(data);
    
    }).catch(err => alert("Something went wrong => " + err.message ))

  function getData(data) {
    const { capital, population, region, flags, currencies, area,  languages } = data[0];
    capital1.innerHTML = capital;
    population1.innerHTML = population.toLocaleString();
    region1.innerHTML = region;
    area1.innerHTML = area.toLocaleString()
    language.innerHTML = Object.values(languages)
    img1.src = flags.png;
    for (let key in currencies) {
      currency1.textContent = `${key} ${currencies[key].symbol}`;
    }  
  }

});

document.onkeydown = function (e) {
  if (e.key === "Enter") {
    button.click();
  }
}
