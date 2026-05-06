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
  sectionContent.querySelectorAll('[id^="drop-"]').forEach((d) => {
    d.classList.add("hidden");
    d.classList.remove("fixed");
    d.style.top = "";
    d.style.left = "";
  });
}

window.toggleDropdown = function (event, id) {
  if (event) event.stopPropagation();

  const button =
    event?.currentTarget ||
    event?.target?.closest("button");

  const dropdown = document.getElementById(id);
  if (!dropdown || !button) return;

  const wasHidden = dropdown.classList.contains("hidden");
  closeAllDropdowns();
  if (!wasHidden) return;

  dropdown.classList.remove("hidden");
  dropdown.classList.add("fixed", "z-[120]");

  const rect = button.getBoundingClientRect();

  // Mostrar primero para medir tamaño real
  const menuWidth = dropdown.offsetWidth || 176;
  const menuHeight = dropdown.offsetHeight || 96;

  let left = rect.right - menuWidth;
  let top = rect.bottom + 8;

  // límites viewport
  if (left < 8) left = 8;
  if (left + menuWidth > window.innerWidth - 8) {
    left = window.innerWidth - menuWidth - 8;
  }

  // si no cabe abajo, abrir arriba
  if (top + menuHeight > window.innerHeight - 8) {
    top = Math.max(8, rect.top - menuHeight - 8);
  }

  dropdown.style.left = `${left}px`;
  dropdown.style.top = `${top}px`;
};

window.openModal = function (id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  closeAllDropdowns();

  // Asegura layout de overlay centrado
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Evita scroll del fondo
  document.body.classList.add("overflow-hidden");
};

window.closeModal = function (id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  document.body.classList.remove("overflow-hidden");
};

window.toggleSkills = function (id, buttonEl) {
  const panel = document.getElementById(id);
  if (!panel) return;

  const icon = buttonEl?.querySelector(".material-symbols-outlined");
  panel.classList.toggle("hidden");
  if (icon) icon.classList.toggle("rotate-180", !panel.classList.contains("hidden"));
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

window.addEventListener("click", (e) => {
  if (!e.target.closest("[data-dropdown-root]") && !e.target.closest('[id^="drop-"]')) {
    closeAllDropdowns();
  }
});

setSection("dashboard");