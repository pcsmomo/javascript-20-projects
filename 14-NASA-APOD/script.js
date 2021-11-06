// Dummy data
const resultsArray = [
  {
    copyright: "Babak Tafreshi",
    date: "2011-06-17",
    explanation:
      "On June 15, the totally eclipsed Moon was very dark, with the Moon itself positioned on the sky toward the center of our Milky Way Galaxy. This simple panorama captures totality from northern Iran in 8 consecutive exposures each 40 seconds long. In the evocative scene, the dark of the eclipsed Moon competes with the Milky Way's faint glow. The tantalizing red lunar disk lies just above the bowl of the dark Pipe Nebula, to the right of the glowing Lagoon and Trifid nebulae and the central Milky Way dust clouds. At the far right, the wide field is anchored by yellow Antares and the colorful clouds of Rho Ophiuchi. To identify other sights of the central Milky Way just slide your cursor over the image. The total phase of this first lunar eclipse of 2011 lasted an impressive 100 minutes. Parts of the eclipse were visible from most of planet Earth, with notable exceptions of North and Central America.",
    hdurl: "https://apod.nasa.gov/apod/image/1106/2011Jun15TLEpan_tafreshi.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Eclipsed Moon in the Milky Way",
    url: "https://apod.nasa.gov/apod/image/1106/2011Jun15TLEpan_tafreshi600h.jpg",
  },
  {
    date: "2008-05-17",
    explanation:
      "Uncomfortably close Typhoon Rammasun (right) and 25 million light-year distant galaxy M101 don't seem to have much in common. For starters, Rammasun was only a thousand kilometers or so across while M101 (aka the Pinwheel Galaxy) spans about 170,000 light-years, making them vastly dissimilar in scale, not to mention the different physical environments that control their formation and development. But they do look amazingly alike: each with arms exhibiting the shape of a simple and beautiful mathematical curve known as a logarithmic spiral, a spiral whose separation grows in a geometric way with increasing distance from the center. Also known as the equiangular spiral, growth spiral, and Bernoulli's spiral or spira mirabilis, this curve's rich properties have fascinated mathematicians since its discovery by 17th century philosopher Descartes. Intriguingly, this abstract shape is much more abundant in nature than suggested by the striking visual comparison above. For example, logarithmic spirals can also describe the tracks of subatomic particles in a bubble chamber, the arrangement of sunflower seeds and, of course, cauliflower.   digg_url = 'http://apod.nasa.gov/apod/ap080517.html'; digg_skin = 'compact';",
    hdurl: "https://apod.nasa.gov/apod/image/0805/NaturalSpirals.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Logarithmic Spirals",
    url: "https://apod.nasa.gov/apod/image/0805/NaturalSpiralsS.jpg",
  },
  {
    date: "2013-08-11",
    explanation:
      "If not perfect, then this spiral galaxy is at least one of the most photogenic. An island universe of about 100 billion stars, 32 million light-years away toward the constellation Pisces, M74 presents a gorgeous face-on view. Classified as an Sc galaxy, the grand design of M74's graceful spiral arms are traced by bright blue star clusters and dark cosmic dust lanes. Constructed from image data recorded in 2003 and 2005, this sharp composite is from the Hubble Space Telescope's Advanced Camera for Surveys. Spanning about 30,000 light-years across the face of M74, it includes exposures recording emission from hydrogen atoms, highlighting the reddish glow of the galaxy's large star-forming regions. Recently, many astronomers are tracking a bright supernova that has been seen in M74.   Gallery: Highlights of the 2013 Perseids Meteor Shower",
    hdurl: "https://apod.nasa.gov/apod/image/1308/m74_hubble_4014.jpg",
    media_type: "image",
    service_version: "v1",
    title: "M74: The Perfect Spiral",
    url: "https://apod.nasa.gov/apod/image/1308/m74_hubble_960.jpg",
  },
];

const resultsNav = document.getElementById("resultsNav");
const favoritesNav = document.getElementById("favoritesNav");
const imagesContainer = document.querySelector(".images-container");
const saveConfirmed = document.querySelector(".save-confirmed");
const loader = document.querySelector(".loader");

// NASA API
const count = 10;
const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

// let resultsArray = [];
let favorites = {};

function updateDOM() {
  resultsArray.forEach((result) => {
    // Card Container
    const card = document.createElement("div");
    card.classList.add("card");
    // Link
    const link = document.createElement("a");
    link.href = result.hdurl;
    link.title = "View Full Image";
    link.target = "_blank";
    // Image
    const image = document.createElement("img");
    image.src = result.url;
    image.alt = "NASA Picture of the Day";
    image.loading = "lazy";
    image.classList.add("card-img-top");

    // Card Body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    // Card Title
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = result.title;
    // Save Text
    const saveText = document.createElement("p");
    saveText.classList.add("clickable");
    saveText.textContent = "Add To Favorites";
    saveText.setAttribute("onclick", `saveFavorite('${result.url}')`);
    // Card Text
    const cardText = document.createElement("p");
    cardText.textContent = result.explanation;

    // Footer Container
    const footer = document.createElement("small");
    footer.classList.add("text-muted");
    // Date
    const date = document.createElement("strong");
    date.textContent = result.date;
    // Copyright
    const copyrightResult =
      result.copyright === undefined ? "" : result.copyright;
    const copyright = document.createElement("span");
    copyright.textContent = ` ${copyrightResult}`;
    // Append
    footer.append(date, copyright);
    cardBody.append(cardTitle, saveText, cardText, footer);
    link.appendChild(image);
    card.append(link, cardBody);
    imagesContainer.appendChild(card);
  });
}

// Get 10 Images from NASA API
async function getNasaPictures() {
  try {
    // const response = await fetch(apiUrl);
    // const resultsArray = await response.json();
    console.log(resultsArray);
    updateDOM();
  } catch (errir) {
    // Catch Error Here
  }
}

// Add result to Favorites
function saveFavorite(itemUrl) {
  // Loop though Results Array to select favorite
  resultsArray.forEach((item) => {
    if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
      favorites[itemUrl] = item;
      // Show Save Confirmation for 2 Seconds
      saveConfirmed.hidden = false;
      setTimeout(() => {
        saveConfirmed.hidden = true;
      }, 2000);
      // Set Favorites in localStorage
      localStorage.setItem("nasaFavorites", JSON.stringify(favorites));
    }
  });
}

// On Load
getNasaPictures();
