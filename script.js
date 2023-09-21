const container = document.querySelector(".collection-container");
const collection = [
  {
    picture: "./assets/grandmother.jpg",
    model: "Grandmother",
    brand: "MOOG",
    releaseYear: 2018,
    content: [
      "The ideal starter. Where synthesis is not only about the end result, but the journey of discovery and experimentation.",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
    brandLink: "https://www.moogmusic.com",
  },
  {
    picture: "./assets/lyra8.jpg",
    model: "Lyra-8",
    brand: "SOMA Labs",
    releaseYear: 2016,
    content: [
      "LYRA is based on eight generators, which will be referred to as voices. Their design is not like a traditional subtractive synthesis VCO.",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/prophet6.jpg",
    model: "Prophet-6",
    brand: "Sequential",
    releaseYear: 2015,
    content: [
      "The Prophet-6 is Dave Smith’s tribute to the poly synth that started it all. But it’s not simply a reissue of a classic...",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/juno106.jpg",
    model: "Juno-60",
    brand: "Roland",
    releaseYear: 1984,
    content: [
      "The Juno-106 is a six-voice polyphonic, analog synthesizer. It is able to produce pads, piano and great soundscapes...",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/arp2600.jpg",
    model: "ARP-2600",
    brand: "ARP",
    releaseYear: 1970,
    content: [
      "The 2600 was ARP's answer to the modular system, creating a more compact, more stable and more intuitive synthesizer.",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/microkorg.jpg",
    model: "Microkorg",
    brand: "Korg",
    releaseYear: 2002,
    content: [
      "A wide variety of contrasting synth sounds that were appealing to a broad range of music styles, even those outside of electronic music.",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/tr808.jpg",
    model: "TR-808",
    brand: "Roland",
    releaseYear: 1980,
    content: [
      "With its warm toned strip of colorful sequencing buttons and tweakable banks of knobs, the 808 is the most iconic drum machine.",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/minimoog.jpg",
    model: "Minimoog Model D",
    brand: "Moog",
    releaseYear: 1970,
    content: [
      "Released in 1970, Minimoog was the world's first portable synthesizer and served as the archetype for all electronic keyboards that followed.",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/mellotron.jpg",
    model: "Mellotron M4000",
    brand: "Streetly Electronics",
    releaseYear: 2007,
    content: [
      "The final reedition of the iconic instrument is back ! Used by a lot of great artist such as The Beatles, Elton John, Jean-Michel Jarre, ...",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/microbrute.jpg",
    model: "Microbrute",
    brand: "Arturia",
    releaseYear: 2017,
    content: [
      "MicroBrute is a pure analog sonic powerhouse of a synth. Small in size but loaded with features providing harsch noises to great soundscapes.",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/modular.jpg",
    model: "Modular Synth",
    brand: "Multiple brands",
    releaseYear: "1964",
    content: [
      "Modular synthesizers are composed of separate modules. The modules can be connected together by the user to create a unique sound.",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
  {
    picture: "./assets/blofeld.jpg",
    model: "Blofeld",
    brand: "Waldorf",
    releaseYear: 2007,
    content: [
      "The most recent synth on this list, Arturia made a great deal with this Minifreak : tons of sound, nice playability with aftertouch keys. ",
    ],
    more: "Learn more",
    link: "https://www.moogmusic.com/products/grandmother",
  },
];

returnCollection = (collection, sortBy) => {
  if (sortBy === "releaseYear") {
    collection.sort((a, b) => a.releaseYear - b.releaseYear);
  } else if (sortBy === "model") {
    collection.sort((a, b) => a.model.localeCompare(b.model));
  } else if (sortBy === "brand") {
    collection.sort((a, b) => a.brand.localeCompare(b.brand));
  }

  return collection
    .map(
      (collectionBox) => `
      <li class="item_card">
        <figure class="item_header">
          <img src="${collectionBox.picture}" />
        </figure>
        <div class="item_content">
          <h2>${collectionBox.model}</h2>
          <h3>by <a href="${collectionBox.brandLink}">${collectionBox.brand}</a>, ${collectionBox.releaseYear}</h3>
          <p>${collectionBox.content}</p>
        </div>
        <div class = "cta">
          <a class="learn_btn" href="${collectionBox.link}">
            ${collectionBox.more} 
          </a>
          <button class="del_btn" onclick="removeBox(this)"><i class="fa-solid fa-trash"></i></button>
        </div>
      </li>
    `
    )
    .join("");
};

function populateContainer(sortBy) {
  container.innerHTML = returnCollection(collection, sortBy);
}

document.getElementById("sortSelect").addEventListener("change", function () {
  const sortBy = this.value;
  populateContainer(sortBy);
});

function removeBox(e) {
  e.parentNode.parentNode.remove();
}

populateContainer();
