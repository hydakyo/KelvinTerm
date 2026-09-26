const repo = "hydakyo/KelvinTerm";
const fallbackDmg = "https://github.com/hydakyo/KelvinTerm/releases/download/v0.4.2/KelvinTerm-0.4.2.dmg";

async function hydrateLatestRelease() {
  try {
    const response = await fetch("https://api.github.com/repos/" + repo + "/releases/latest", {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!response.ok) throw new Error("release lookup failed");

    const release = await response.json();
    const dmg = Array.isArray(release.assets)
      ? release.assets.find(asset => /\.dmg$/i.test(asset.name || ""))
      : null;

    const href = dmg?.browser_download_url || fallbackDmg;
    document.querySelectorAll(".download-link").forEach(link => {
      link.href = href;
      link.removeAttribute("target");
      link.removeAttribute("rel");
    });

    const label = release.tag_name || release.name || "Latest release";
    document.querySelectorAll(".release-version").forEach(node => node.textContent = label);

    const detail = document.getElementById("release-detail");
    if (detail) {
      const bits = ["Requires macOS 14 Sonoma or later"];
      if (dmg?.size) bits.push((dmg.size / 1024 / 1024).toFixed(1) + " MB DMG");
      if (release.published_at) {
        const d = new Date(release.published_at);
        bits.push("published " + d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }));
      }
      detail.textContent = bits.join(" · ");
    }
  } catch {
    document.querySelectorAll(".download-link").forEach(link => {
      link.href = fallbackDmg;
      link.removeAttribute("target");
      link.removeAttribute("rel");
    });
  }
}

function setupPreviewAppearance() {
  const preview = document.querySelector(".app-preview");
  const buttons = document.querySelectorAll(".appearance-btn");
  if (!preview || !buttons.length) return;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const theme = button.dataset.theme === "light" ? "light" : "dark";
      preview.dataset.previewTheme = theme;
      buttons.forEach(item => item.classList.toggle("is-active", item === button));
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
setupPreviewAppearance();
hydrateLatestRelease();
