user_input_form.addEventListener("submit", (e) => {

    e.preventDefault();
    const PLACEHOLDER_PHOTO_URL = "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";


    const destinationName = destination_name.value
    const locationName = loaction_name.value
    const photoUrl = photo_url.value || PLACEHOLDER_PHOTO_URL;
    const descr = description.value

    console.log(destinationName, locationName, photoUrl, descr);
});