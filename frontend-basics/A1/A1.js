function goTo(id) {
    console.log(`Going to id: ${id}`);

    document.getElementById(id).focus();
}

function loadListings() {
    console.log(`Loading Listings`);
    listings = document.getElementById('listings').children[0].children[0];
    console.log("listings");
    console.log(listings);

    listing_template = listings.children[0];
    console.log("listing_template");
    console.log(listing_template);

    listing_template.remove();

    listing_list = get_listings();

    for (let i = 0; i < listing_list.length; i++) {
        add_listing(listing_list[i]);
    }

}

function add_listing(listing_data) {
    console.log(`Adding Listing: ${JSON.stringify(listing_data)}`);
    let new_listing = listing_template.cloneNode(true);

    let img_back = new_listing.querySelector(".img_back");

    let img = img_back.querySelector("img");
    img.src = listing_data.image;

    let body = new_listing.querySelector(".body");
    console.log("body");
    console.log(body);

    let title = body.querySelector("p");
    console.log("title");
    console.log(title);
    title.innerHTML = listing_data.ttl;

    listings.appendChild(new_listing);
}

function get_listings() {
    return [
        { image: "https://m.media-amazon.com/images/I/21Erq7u3BXL._SL500_.jpg", ttl: "Ivilon Drapery Treatment Window Curtain Rod - Acrylic" },
        { image: "https://m.media-amazon.com/images/I/21j5U5z4vsL._SL500_.jpg", ttl: "Ivilon Drapery Treatment Window Curtain Rod - Acrylic" },
        { image: "https://m.media-amazon.com/images/I/219SEeqnrIL._SL500_.jpg", ttl: "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Black" }
    ];
}