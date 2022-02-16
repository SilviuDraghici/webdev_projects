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
    img_back.setAttribute('onclick',`window.open('${listing_data.amazon}','mywindow');`);
    
    let img = img_back.querySelector("img");
    img.src = listing_data.image;

    let more_options = new_listing.querySelector(".more_options");

    if (!listing_data.more_options) {
        more_options.remove();
    }

    let body = new_listing.querySelector(".body");
    console.log("body");
    console.log(body);

    let title = body.querySelector("p");
    console.log("title");
    console.log(title);
    title.innerHTML = listing_data.ttl;

    let amazon_button = body.querySelector(".amazon_button");
    console.log("amazon_button");
    console.log(amazon_button);
    amazon_button.setAttribute('onclick',`window.open('${listing_data.amazon}','mywindow');`);

    let price = body.querySelector(".price");
    if(listing_data.price) {
        console.log(`Setting Price: ${listing_data.price}`);
        price.querySelector("p").innerHTML = listing_data.price;

        let no_price = body.querySelector(".no_price");
        no_price.remove();
    } else {
        console.log(`no price here!`);
        price.remove();
    }

    listings.appendChild(new_listing);
}

function get_listings() {
    return [
        {
            image: "https://m.media-amazon.com/images/I/21Erq7u3BXL._SL500_.jpg",
            ttl: "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Satin Nickel",
            amazon: "https://www.amazon.com/dp/B07GY3FD2W?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$31.87",
            more_options: true
        },
        {
            image: "https://m.media-amazon.com/images/I/21j5U5z4vsL._SL500_.jpg",
            ttl: "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Warm Gold",
            amazon: "https://www.amazon.com/dp/B07GY18321?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$31.98",
            more_options: true
        },
        {
            image: "https://m.media-amazon.com/images/I/219SEeqnrIL._SL500_.jpg",
            ttl: "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Black",
            amazon: "https://www.amazon.com/dp/B07GXYB4ZM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$29.78",
            more_options: true
        },

        {
            image: "https://m.media-amazon.com/images/I/21ZFmX2CuwL._SL500_.jpg",
            ttl: "Ivilon Drapery Window Curtain Rod - End Cap Style Design 1 Inch Pole. 28 to 48 Inch Color Satin Nickel",
            amazon: "https://www.amazon.com/dp/B06X9H5HD5?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$27.97",
            more_options: true
        },
        {
            image: "https://m.media-amazon.com/images/I/31p21KCv5fL._SL500_.jpg",
            ttl: "Ivilon Drapery Window Curtain Rod - End Cap Style Design 1 Inch Pole. 28 to 48 Inch Color Warm Gold",
            amazon: "https://www.amazon.com/dp/B06X9H3B9V?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$27.99",
            more_options: true
        },
        {
            image: "https://m.media-amazon.com/images/I/21WHnqT3HWL._SL500_.jpg",
            ttl: "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Black",
            amazon: "https://www.amazon.com/dp/B06WWP9XXB?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$27.79",
            more_options: true
        },

        {
            image: "https://m.media-amazon.com/images/I/31+a3rHQ65L._SL500_.jpg",
            ttl: "Ivilon Drapery Window Curtain Rod - Twisted Style Set, 28 to 48 Inch. Color Brushed Nickel",
            amazon: "https://www.amazon.com/dp/B01GER4VGQ?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1"
        },
        {
            image: "https://m.media-amazon.com/images/I/31oDPX3v52L._SL500_.jpg",
            ttl: "Ivilon Window Curtain Rod - Edge Style Drapery Treatments, 28 to 48 Inch. Color Warm Gold",
            amazon: "https://www.amazon.com/dp/B071WQGFT8?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$28.99",
            more_options: true
        },
        {
            image: "https://m.media-amazon.com/images/I/31OOke8Hu9L._SL500_.jpg",
            ttl: "Ivilon Drapery Window Curtain Rod - Twisted Style Set, 28 to 48 Inch. Color Black",
            amazon: "https://www.amazon.com/dp/B01GER4KLM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1"
        },

        {
            image: "https://m.media-amazon.com/images/I/31wX-h5vyxL._SL500_.jpg",
            ttl: "Ivilon Decorative Window Curtain Rod - Carved Square Finials, 1 1/8 in Rod, 28 to 48 in. Antique Black",
            amazon: "https://www.amazon.com/dp/B07BD2TL74?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$29.99",
            more_options: true
        },
        {
            image: "https://m.media-amazon.com/images/I/41ot1JyHpFL._SL500_.jpg",
            ttl: "Ivilon Window Treatment Curtain Rod - Square Finials, 1 1/8 in Rod, 28 to 48 Inch, Antique Black",
            amazon: "https://www.amazon.com/dp/B079K3H3RK?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$28.76",
            more_options: true
        },
        {
            image: "https://m.media-amazon.com/images/I/312iWuhX5bL._SL500_.jpg",
            ttl: "Ivilon Decorative Window Curtain Rod - Carved Square Finials, 1 1/8 in Rod, 28 to 48 in. Black",
            amazon: "https://www.amazon.com/dp/B07BD3LMTM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
            price: "$29.99",
            more_options: true
        }
        
    ];
}