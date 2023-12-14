user_input_form.addEventListener("submit", (e) => {

    e.preventDefault();
    const PLACEHOLDER_PHOTO_URL = "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";


    const destinationName = destination_name.value;
    const locationName = location_name.value;
    const photoUrl = photo_url.value || PLACEHOLDER_PHOTO_URL;
    const descr = description.value;

    user_input_form.reset();

    const card = createCard({destinationName, locationName, photoUrl, descr});
    cards_container.appendChild(card);
});

function createCard({destinationName, locationName, photoUrl, descr}) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem;");
    card.innerHTML = ` 
    <img src=${photoUrl} class="card-img-top" alt=${destinationName} at ${locationName}>
    <div class="card-body">
      <h5 class="card-title">${destinationName}</h5>
      <p class="card-text">${locationName}</p>
      ${descr && `<p class="card-text">${descr}</p`}
      <button type="button" class="btn btn-info">Edit</button>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
    `;

    return card;
}