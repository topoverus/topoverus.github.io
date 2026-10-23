"use strict";
const stages = [
  ["I₁: 1 ≤ nums.len() ≤ 10000", "The array length constrains the valid index ranges."],
  ["I₂: 0 ≤ low ≤ len   ·   I₃: −1 ≤ high ≤ len − 1", "Establish both index bounds together; their internal order is not rewarded."],
  ["I₄: left partition   ·   I₅: right partition", "Use the bounds to expose the partition error: high ≤ i should become high < i."]
];
document.querySelectorAll("[data-step]").forEach(button => {
  button.addEventListener("click", () => {
    const step = Number(button.dataset.step);
    document.querySelectorAll("[data-step]").forEach(other => {
      other.classList.toggle("active", other === button);
      other.setAttribute("aria-pressed", String(other === button));
    });
    document.querySelectorAll("[data-level]").forEach(node => node.classList.toggle("reached", Number(node.dataset.level) <= step));
    document.getElementById("stage-code").textContent = stages[step][0];
    document.getElementById("stage-description").textContent = stages[step][1];
  });
});
document.querySelectorAll("[data-metric]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-metric]").forEach(other => {
      other.classList.toggle("active", other === button);
      other.setAttribute("aria-pressed", String(other === button));
    });
    document.querySelectorAll("[data-one]").forEach(cell => cell.textContent = cell.dataset[button.dataset.metric]);
    document.querySelectorAll("[data-bar-one]").forEach(bar => {
      bar.style.width = `${bar.dataset[button.dataset.metric === "one" ? "barOne" : "barThree"]}%`;
    });
    document.getElementById("comparison-caption").textContent = `Weighted ${button.textContent} (%) across 471 problems`;
    document.getElementById("result-caption").textContent = `${button.textContent} (%) · up to 10 repair iterations per chain`;
  });
});
const copyButton = document.getElementById("copy-citation");
copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  const citation = document.getElementById("bibtex");
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(citation.textContent);
    status.textContent = "Copied";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = "Text selected. Copy with Ctrl/Cmd+C";
  }
});
document.querySelectorAll("[data-resource]").forEach(link => {
  const value = window.TOPOVERUS_LINKS?.[link.dataset.resource];
  if (!value) return;
  let url;
  try { url = new URL(value); } catch { return; }
  if (url.protocol !== "https:") return;
  link.href = url.href;
  link.removeAttribute("aria-disabled");
  if (link.classList.contains("resource")) link.querySelector("small").remove();
  else link.textContent = "Open resource ↗";
});
