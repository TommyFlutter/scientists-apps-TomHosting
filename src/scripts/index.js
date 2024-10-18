
import "regenerator-runtime";
import "../styles/main.css";
import "./components/AppBar.js";
import "./components/ElementBimbel.js";
import { displayRestaurants } from "./components/DataBimbel.js";
import data from "../public/data/DATA.json";

document.addEventListener("DOMContentLoaded", async function () {
  const hamburgerMenu = document.querySelector(".hamburger");
  const navlinks = document.querySelector(".nav-links");

  try {
    if (data && data.restaurants) {
      displayRestaurants(data.restaurants);
    } else {
      console.error("Error: Invalid JSON data format");
    }
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }

  if (hamburgerMenu && navlinks) {
    hamburgerMenu.addEventListener("click", function () {
      navlinks.classList.toggle("show");
    });
  } else {
    console.error("Error: Hamburger menu or nav links not found");
  }
});


