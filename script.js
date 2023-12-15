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
