export const showCard = (clothesContainer, dataclothes) => {
  dataclothes?.forEach((element) => {
      const { id, name, price, description, collection, img1, img2, img3 } = element;
      console.log(dataclothes)
      clothesContainer.innerHTML += `    
         <div class="card" style="width: 18rem;">
  <img src="${img1}" class="card-img-top" alt="...">
  <img src="${img2}" class="card-img-top" alt="...">
  <img src="${img3}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
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