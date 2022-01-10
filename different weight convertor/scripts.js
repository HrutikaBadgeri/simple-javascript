document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function (e) {
  //   console.log(123);
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.20046;
  document.getElementById("pouOutput").innerHTML = lbs;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});

// document.getElementById("output").style.visibility = "hidden";
document
  .getElementById("kilogramsInput")
  .addEventListener("input", function (e) {
    document.getElementById("output").style.visibility = "visible";
    let kg = e.target.value;
    (document.getElementById("gramsOutput").innerHTML = kg * 1000), "grams";
    document.getElementById("kgOutput").innerHTML = kg;
    document.getElementById("pouOutput").innerHTML = kg * 2.20462;
    document.getElementById("ozOutput").innerHTML = kg * 35.274;
  });

// document.getElementById("output").style.visibility = "hidden";
document.getElementById("gramsInput").addEventListener("input", function (e) {
  document.getElementById("output").style.visibility = "visible";
  let gms = e.target.value;
  document.getElementById("gramsOutput").innerHTML = gms;
  document.getElementById("kgOutput").innerHTML = gms / 1000;
  document.getElementById("pouOutput").innerHTML = gms * 2.00220462;
  document.getElementById("ozOutput").innerHTML = gms * 0.035274;
});

// document.getElementById("output").style.visibility = "hidden";
document.getElementById("ozInput").addEventListener("input", function (e) {
  document.getElementById("output").style.visibility = "visible";
  let oz = e.target.value;
  document.getElementById("gramsOutput").innerHTML = oz * 28.3495;
  document.getElementById("kgOutput").innerHTML = oz * 0.0283495;
  document.getElementById("pouOutput").innerHTML = oz * 0.0625;
  document.getElementById("ozOutput").innerHTML = oz;
});
