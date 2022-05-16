const url =
  "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";

let universities; //will contain the list of universities from one country

//Function that return all universities from one specific country
async function getUniversities(country) {
  let response = await fetch(url);
  let arr = await response.json();
  let universities = arr.filter((uni) => uni.country === country);
  return universities;
}

//I've marked Spain as the default country
country = "Spain";

//Method that assigns all Spanish universities to the universities variable
let spainAssignment = async (country) => {
  universities = await getUniversities(country);
};

//We run the preious function passing Spain as a parameter to have
//the list of Spanish universities as the default for any search
spainAssignment("Spain");
document.getElementById("title").innerHTML = "Spanish Universities";
document.getElementById("spain-button").style.backgroundColor = "red";

//We create an event to control the input changes
document.getElementById("search-input").onkeyup = handleInput;

//When we pulse on any button, we assign a list of the universities of
//the selected country to the universities variable
document.getElementById("spain-button").onclick = async () => {
  //We clean the search results of any previous search
  document.getElementById("search-results").innerHTML = "";
  //Change the background color of the selected button
  activeButton(country, "spain-button");
  document.getElementById("title").innerHTML = "Spanish Universities";
  country = "Spain";
  universities = await getUniversities(country);
};
document.getElementById("us-button").onclick = async () => {
  document.getElementById("search-results").innerHTML = "";
  activeButton(country, "us-button");
  document.getElementById("title").innerHTML = "US Universities";
  country = "United States";
  universities = await getUniversities(country);
};
document.getElementById("uk-button").onclick = async () => {
  document.getElementById("search-results").innerHTML = "";
  activeButton(country, "uk-button");
  document.getElementById("title").innerHTML = "British Universities";
  country = "United Kingdom";
  universities = await getUniversities(country);
};
document.getElementById("russia-button").onclick = async () => {
  document.getElementById("search-results").innerHTML = "";
  activeButton(country, "russia-button");
  document.getElementById("title").innerHTML = "Russian Universities";
  country = "Russian Federation";
  universities = await getUniversities(country);
};
document.getElementById("france-button").onclick = async () => {
  document.getElementById("search-results").innerHTML = "";
  activeButton(country, "france-button");
  document.getElementById("title").innerHTML = "French Universities";
  country = "France";
  universities = await getUniversities(country);
};

let input;

//Each time we change the input text, we will show a list of the universities
//of the selected country whose name contains the input text
function handleInput() {
  document.getElementById("search-results").innerHTML = "";
  input = document.getElementById("search-input").value;
  universities
    .filter((uni) => uni.name.toLowerCase().includes(input.toLowerCase()))
    .map((uni) => uni.name)
    .forEach((name) => {
      document.getElementById("search-results").innerHTML +=
        "<p>" + name + "</p>";
    });
}
//function that deactivates the previous selected button color and set the current button color
function activeButton(prevCountry, buttonId) {
  switch (prevCountry) {
    case "Spain":
      document.getElementById("spain-button").style.backgroundColor = "black";
      break;
    case "United States":
      document.getElementById("us-button").style.backgroundColor = "black";
      break;
    case "United Kingdom":
      document.getElementById("uk-button").style.backgroundColor = "black";
      break;
    case "Russian Federation":
      document.getElementById("russia-button").style.backgroundColor = "black";
      break;
    case "France":
      document.getElementById("france-button").style.backgroundColor = "black";
      break;
  }
  document.getElementById(buttonId).style.backgroundColor = "red";
}
