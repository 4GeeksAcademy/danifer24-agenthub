const sectionContent = document.getElementById("section-content");

const sectionFiles = {
  dashboard: "./sections/dashboard.html",
  users: "./sections/users.html",
  agents: "./sections/agents.html",
  skills: "./sections/skills.html",
  contracts: "./sections/contracts.html",
  errors: "./sections/errors.html",
};

function applyActiveNav(sectionName) {
  document.querySelectorAll(".js-nav-link").forEach((link) => {
    const active = link.dataset.section === sectionName;
    link.classList.toggle("text-blue-600", active);
    link.classList.toggle("dark:text-blue-400", active);
    link.classList.toggle("bg-blue-50/50", active);
    link.classList.toggle("dark:bg-blue-900/20", active);
    link.classList.toggle("border-r-2", active);
    link.classList.toggle("border-blue-600", active);

    link.classList.toggle("text-slate-500", !active);
    link.classList.toggle("dark:text-slate-400", !active);
  });
}

async function setSection(sectionName) {
  const file = sectionFiles[sectionName];
  if (!file) return;

  try {
    const res = await fetch(file);
    const html = await res.text();
    sectionContent.innerHTML = html;
    applyActiveNav(sectionName);
    closeAllDropdowns();
  } catch {
    sectionContent.innerHTML = `
      <div class="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
        Error cargando la sección: ${sectionName}
      </div>
    `;
  }
}

function closeAllDropdowns() {
  sectionContent.querySelectorAll('[id^="drop-"]').forEach((d) => d.classList.add("hidden"));
}

window.toggleDropdown = function (id) {
  const dropdown = document.getElementById(id);
  if (!dropdown) return;
  sectionContent.querySelectorAll('[id^="drop-"]').forEach((d) => {
    if (d.id !== id) d.classList.add("hidden");
  });
  dropdown.classList.toggle("hidden");
};

window.openModal = function (id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("hidden");
  closeAllDropdowns();
};

window.closeModal = function (id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("hidden");
};

document.querySelectorAll(".js-nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    setSection(link.dataset.section);
  });
});

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  });
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") document.documentElement.classList.add("dark");
else document.documentElement.classList.remove("dark");

window.addEventListener("click", function (e) {
  if (!e.target.closest("button") && !e.target.closest('[id^="drop-"]')) {
    closeAllDropdowns();
  }
});

setSection("dashboard");