export const showCard = (clothesContainer, dataclothes) => {
  dataclothes?.forEach((element) => {
      const { id, name, price, description, size, collection, image1, image2, image3 } = element;
      console.log(dataclothes)
      clothesContainer.innerHTML += `    
         <div class="card" style="width: 18rem;">
  <img src="${image1}" class="card-img-top" alt="...">
  <img src="${image2}" class="card-img-top" alt="...">
  <img src="${image3}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <button class="card-title">${size}</button>
    <p class="card-text">${description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-scrollable">
  
</div>
  </div>
</div>
     `;
    })
  };