const eventform = document.getElementById("eventForm");
const eventcontainer = document.getElementById("eventContainer");
const clearAllbtn = document.getElementById("clearAllBtn");
const addSamplebtn = document.getElementById("addSampleBtn");
const democontent = document.getElementById("demoContent");

/* ✅ Add Event */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;
  const category = document.getElementById("eventCategory").value;
  const description = document.getElementById("eventDescription").value;

  // Remove empty state
  container.innerHTML = "";

  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event-card");

  eventDiv.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p>${description}</p>
  `;

  container.appendChild(eventDiv);
  form.reset();
});

/* ✅ Clear All Events */
clearBtn.addEventListener("click", () => {
  container.innerHTML = "<div class='empty-state'>No events yet. Add your first event!</div>";
});

/* ✅ Add Sample Events */
sampleBtn.addEventListener("click", () => {
  container.innerHTML = "";

  const samples = [
    { title: "Hackathon", date: "2026-03-10", category: "Workshop", desc: "Coding competition" },
    { title: "Tech Meetup", date: "2026-03-15", category: "Meetup", desc: "Networking event" },
    { title: "Webinar", date: "2026-03-20", category: "Webinar", desc: "Online learning session" }
  ];

  samples.forEach(event => {
    const div = document.createElement("div");
    div.classList.add("event-card");

    div.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Category:</strong> ${event.category}</p>
      <p>${event.desc}</p>
    `;

    container.appendChild(div);
  });
});

/* ✅ DOM Manipulation Demo */
document.addEventListener("keydown", () => {
  demoContent.textContent = "🎉 You pressed a key! DOM updated successfully.";
});const form = document.getElementById("eventForm");
const container = document.getElementById("eventContainer");
const clearBtn = document.getElementById("clearAllBtn");
const sampleBtn = document.getElementById("addSampleBtn");
const demoContent = document.getElementById("demoContent");

/* ✅ Add Event */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;
  const category = document.getElementById("eventCategory").value;
  const description = document.getElementById("eventDescription").value;

  // Remove empty state
  container.innerHTML = "";

  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event-card");

  eventDiv.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p>${description}</p>
  `;

  container.appendChild(eventDiv);
  form.reset();
});

/* ✅ Clear All Events */
clearBtn.addEventListener("click", () => {
  container.innerHTML = "<div class='empty-state'>No events yet. Add your first event!</div>";
});

/* ✅ Add Sample Events */
sampleBtn.addEventListener("click", () => {
  container.innerHTML = "";

  const samples = [
    { title: "Hackathon", date: "2026-03-10", category: "Workshop", desc: "Coding competition" },
    { title: "Tech Meetup", date: "2026-03-15", category: "Meetup", desc: "Networking event" },
    { title: "Webinar", date: "2026-03-20", category: "Webinar", desc: "Online learning session" }
  ];

  samples.forEach(event => {
    const div = document.createElement("div");
    div.classList.add("event-card");

    div.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Category:</strong> ${event.category}</p>
      <p>${event.desc}</p>
    `;

    container.appendChild(div);
  });
});

/* ✅ DOM Manipulation Demo */
document.addEventListener("keydown", () => {
  demoContent.textContent = "🎉 You pressed a key! DOM updated successfully.";
});