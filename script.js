window.onload = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('start-date').value = today;
    document.getElementById('start-date').min = today;
};

function setMinEndDate() {
    var startDate = document.getElementById('start-date').value;
    document.getElementById('end-date').min = startDate;
    document.getElementById('end-date').value = startDate;
}

function bookNow() {
    var destination = document.getElementById('destination').value;
    var people = document.getElementById('people').value;
    var startDate = document.getElementById('start-date').value;
    var endDate = document.getElementById('end-date').value;
    var description = document.getElementById('description').value;

    if (destination && people && startDate && endDate && description) {
        alert('Booking successful!');
    } else {
        alert('Please fill in all fields.');
    }
}

const packages = [
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/gokarna/mmt/destination/m_destination_gokarna_landscape_l_400_640.jpg", 
        place: "Gokarna",
        rate: '100 $',
        rating: 5
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg",
        place: "Lakshadweep",
        description: "Lakshadweep is home to serene beaches. You can expect summer heat and the temperature rising upto 32°C. Lakshadweep is also very popular among relaxation-seekers.",
        rate: "1030 $",
        rating: 2
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/srinagar/mmt/destination/m_landscape_l_400_640.jpg",
        place: "Srinagar",
        description: "A dreamy honeymoon awaits you at Srinagar. You will love sightseeing and the lively festivals. Don’t forget to sample the delicious cuisines at Srinagar.",
        rate: "130 $",
        rating: 1
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/destination/m_destination-pondicherry-landscape_l_400_640.jpg",
        place: "Pondicherry",
        description: "If you are a beach lover, you must head to Puducherry. You can expect the city is at its hottest during this time. Puducherry is a hot favourite among foodies too.",
        rate: "120 $",
        rating: 5
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/destination/m_destination-goa-landscape_l_400_640.jpg",
        place: "Goa",
        description: "Rev up your spirits with the stunning adventures of Goa. You can expect heavy rainfall throughout the season, pleasant sea breeze. Humidity tends to be high. You can also sample delicious cuisines at Goa.",
        rate: "103 $",
        rating: 4
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/havelock/mmt/destination/m_destination_havelock_landscape_l_400_640.jpg",
        place: "Havelock Island",
        description: "Havelock is an absolute delight for romantic souls. You can expect extremely hot days with temperatures reaching up to 32°C. Don’t forget to indulge in adventure activities at Havelock.",
        rate: "230 $",
        rating: 3
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/destination/m_Landscape_l_400_640.jpg",
        place: "Manali",
        description: "Manali is the perfect escape for romance-seekers. You will love the waterfalls and adventure sports. Additionally, you can try out various adventure activities at Manali.",
        rate: "2550 $",
        rating: 2
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/destination/m_destination_Amritsar_l_367_623.jpg",
        place: "Amritsar",
        description: "Soak in the mystic hues of Amritsar, a famous pilgrimage spot! You will love exploring sightseeing attractions and attending various festivals. The local cuisines at Amritsar are worth trying out too.",
        rate: "280 $",
        rating: 4
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/rameshwaram/mmt/destination/m_destination_rameshwaram_landscape_l_400_640.jpg",
        place: "Rameshwaram",
        description: "Made famous by the epic Ramayana, Rameshwaram is a quaint beach town and a popular Hindu pilgrimage destination that also attracts nature lovers and adventure enthusiasts.",
        rate: "90 $",
        rating: 4
    },
]

let cardsContainer = document.getElementById('main-container-2'); 
for(let i=0;i<packages.length;i++){
    let ratingStar = '';
    for(let stars = 0; stars<packages[i].rating; stars++){
        ratingStar+='⭐';
    }
    cardsContainer.innerHTML += 
    `<div class="card">
        <img src="${packages[i].image}" alt="">
        <h2>${packages[i].place}</h2>
        <p>${packages[i].description}</p>
        <div class='rateRating'>
            <h3>${packages[i].rate}</h3>
            <h3 class='stars'>${ratingStar}</h3>
        </div>
        <button class='service'>Book Nows</button>
    </div>` 
}




const services = [
    {
        image: "https://b.zmtcdn.com/data/pictures/9/19359199/9e8ffca566cfa94eb4dd1a009c931743_featured_v2.jpg?output-format=webp", 
        place: "Affordable Hotel", 
        rate: '100$ - 1000$' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/chains/0/19091260/0fada51155b5fff789bf182ea730a0d0_featured_v2.jpg?output-format=webp", 
        place: "Food & Drinks", 
        rate: '10$ - 50$' 
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tourguide2.jpg/220px-Tourguide2.jpg", 
        place: "Safety Guide", 
        rate: '100 $' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/6/3400346/886efb75864d1e6edf6d7411b332eaf6_featured_v2.jpg", 
        place: "Access to Library",
        rate: '5$ - 20$' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/8/20697478/2f5a1e49824432905827abe457c4ad12_featured_v2.jpg", 
        place: "Wifi Access",
        rate: '5$ - 10$' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/1/19493951/2f897a835cdf0accd2426a1a576287aa_featured_v2.jpg", 
        place: "Pub",
        rate: '50$ - 500$'
    }
]


    let cardsContainer2 = document.getElementById('main-container-3'); 
    for(let i=0;i<services.length;i++){ 
        cardsContainer2.innerHTML += 
        `<div class="card">
            <img src="${services[i].image}" alt="">
            <h2>${services[i].place}</h2> 
            <h3>${services[i].rate}</h3> 
            <button class='service'>Try Now</button>
        </div>` 
    }