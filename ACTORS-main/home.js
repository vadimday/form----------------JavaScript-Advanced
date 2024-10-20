const actors = [
  {
    id: 1,
    firstName: "Jason",
    lastName: "Statham",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3BZ9CFrDli4HGgITNYriH3nwN9a-YzN4Bg&s",
    contacts: [
      "https://www.facebook.com/JasonStatham/",
      "https://twitter.com/realjstatham",
      "https://www.instagram.com/jasonstatham/?hl=ru",
    ],
  },
  {
    id: 2,
    firstName: "Dwayne",
    lastName: "Johnson",
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/800px-Dwayne_Johnson_2%2C_2013.jpg",
    contacts: [
      "https://www.facebook.com/DwayneJohnson",
      "https://www.instagram.com/therock/?hl=ru",
    ],
  },
  {
    id: 3,
    firstName: "Emma",
    lastName: "Stone",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiiD91hb83nLT-jRN9mfIlv48L_mzynhZCQ&s",
    contacts: [
      "https://www.facebook.com/DwayneJohnson",
      "https://www.instagram.com/therock/?hl=ru",
    ],
  },
  {
    id: 4,
    firstName: "Somebody",
    lastName: "Tuffak",
    profilePicture:
      "https://klev.club/uploads/posts/2023-11/1698821824_klev-club-p-kartinki-palets-cheloveka-25.png",
    contacts: [
      "https://twitter.com/realjstatham",
      "https://www.instagram.com/therock/?hl=ru",
    ],
  },
  {
    id: 999,
    firstName: "Z",
    lastName: "V",
    profilePicture:
      "https://e-cis.info/upload/iblock/dfd/u555nozal27rcr8u4gv8iyy0u6x7x35r.png",
    contacts: [
      "https://twitter.com/realjstatham",
      "https://www.instagram.com/therock/?hl=ru",
    ],
  },
  {
    id: 5,
    firstName: "Scarlett",
    lastName: "Johansson",
    profilePicture:
      "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg",
    contacts: [
      "https://www.facebook.com/pages/category/Actor/Scarlett-Johansson-Official-101457158013203/",
      "https://twitter.com/scarlett_jo",
      "https://www.instagram.com/scarlett.johansson.fc/?hl=ru",
    ],
  },
  {
    id: 6,
    firstName: "Yevgeny",
    lastName: "Ponasenkov",
    profilePicture:
      "https://www.factroom.ru/wp-content/uploads/2019/06/10-faktov-o-evgenii-ponasenkove-kotoryj-svodit-vsekh-s-uma-1250x883.jpg",
    contacts: ["https://www.facebook.com/Ponasenkov"],
  },
  {
    id: 7,
    firstName: "Daniel",
    lastName: "Day-Lewis",
    profilePicture:
      "https://cdn.britannica.com/27/124327-050-961A19F3/Daniel-Day-Lewis.jpg",
    contacts: [
      "https://www.facebook.com/JasonStatham/",
      "https://twitter.com/realjstatham",
      "https://www.instagram.com/jasonstatham/?hl=ru",
    ],
  },
];

const actorCardsContainer = document.getElementById("actor-cards");
const chosenList = document.getElementById("chosen-list");
const chosenActors = new Set();

actors.forEach((actor) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = actor.profilePicture
    ? actor.profilePicture
    : "https://via.placeholder.com/100?text=No+Image";
  card.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = `${actor.firstName} ${actor.lastName}`;
  card.appendChild(name);

  const socialLinks = document.createElement("div");
  socialLinks.className = "social-links";
  actor.contacts.forEach((contact) => {
    const link = document.createElement("a");
    if (contact.includes("facebook")) {
      link.textContent = "FB";
    } else if (contact.includes("twitter")) {
      link.textContent = "TW";
    } else if (contact.includes("instagram")) {
      link.textContent = "IG";
    } else {
      link.textContent = "Site";
    }
    link.href = contact;
    link.target = "_blank";
    socialLinks.appendChild(link);
  });
  card.appendChild(socialLinks);

  card.addEventListener("click", () => {
    if (!chosenActors.has(actor.id)) {
      chosenActors.add(actor.id);

      const li = document.createElement("li");
      li.textContent = `${actor.firstName} ${actor.lastName}`;
      li.classList.add("chosen");
      li.addEventListener("click", () => {
        chosenList.removeChild(li);
        chosenActors.delete(actor.id);
      });

      chosenList.appendChild(li);
    }
  });

  actorCardsContainer.appendChild(card);
});
