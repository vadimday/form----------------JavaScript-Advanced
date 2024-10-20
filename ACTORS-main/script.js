const actorCardsContainer = document.getElementById("actor-cards");
const chosenList = document.getElementById("chosen-list");
const chosenActors = new Set();

function createCard(actor) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = actor.profilePicture
    ? actor.profilePicture
    : "https://via.placeholder.com/100";
  card.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = `${actor.firstName} ${actor.lastName}`;
  card.appendChild(name);

  const socialLinks = document.createElement("div");
  socialLinks.className = "social-links";
  actor.contacts.forEach((contact) => {
    const link = document.createElement("a");

    if (contact.includes("facebook")) link.textContent = "FB";
    else if (contact.includes("twitter")) link.textContent = "TW";
    else if (contact.includes("instagram")) link.textContent = "IG";
    else link.textContent = "Site";

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
}

document.getElementById("actor-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const profilePicture = document.getElementById("profile-picture").value;
  const social1 = document.getElementById("social1").value;
  const social2 = document.getElementById("social2").value;

  const newActor = {
    id: Date.now(),
    firstName,
    lastName,
    profilePicture,
    contacts: [social1, social2],
  };

  createCard(newActor);
});

document.getElementById("sort-options").addEventListener("change", (e) => {
  const chosenItems = Array.from(chosenList.children);

  chosenItems.sort((a, b) => {
    const nameA = a.textContent.toLowerCase();
    const nameB = b.textContent.toLowerCase();

    if (e.target.value === "alphabetical") {
      return nameA.localeCompare(nameB);
    } else if (e.target.value === "reverse") {
      return nameB.localeCompare(nameA);
    }
  });

  chosenList.innerHTML = "";
  chosenItems.forEach((item) => chosenList.appendChild(item));
});
