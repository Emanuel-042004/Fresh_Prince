import { postData } from "../modules/postData.js";
import { showCard } from "../modules/showCard.js";
import { clothes } from "../scripts/constant.js";

import { getData } from "../modules/getData.js";

const clothesContainer = document.getElementById('displayclothes');

document.addEventListener("DOMContentLoaded", async ()=> {
  
  const dataclothes = await getData('http://localhost:3000/clothes');

  showCard(clothesContainer, dataclothes);
})

const container = document.getElementById("containerCards");

document.addEventListener("DOMContentLoaded", async () => {
  const result = await getData(clothes);
  console.log(result);

   showCard(clothesContainer, result);
 
});