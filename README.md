# TopoVerus project website

English academic project page for **Curriculum Proof Repair with Learned Counterexamples** by Yuechun Sun, Jun Yang, and Kexin Pei (University of Chicago).

Target: https://topoverus.github.io/

## Local preview

From this directory:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Visit http://localhost:8000/. No build step or package installation is needed. The website has no runtime CDN, analytics, tracking, or third-party font dependencies.

## Publish with GitHub Pages

Repository: `topoverus/topoverus.github.io` (public).
In **Settings → Pages**, select **Deploy from a branch**, `main`, `/ (root)`.
The `.nojekyll` file makes this a plain static site. A custom domain or DNS configuration is not needed.
Only this standalone website repository should be pushed; do not upload the parent research workspace or manuscript source archive.

## Add release links

Edit `site-config.js`:

```js
window.TOPOVERUS_LINKS = {
  paper: "https://arxiv.org/abs/YOUR_ID",
  code: "https://github.com/topoverus/YOUR_REPO",
  model: "https://huggingface.co/YOUR_ORG/YOUR_MODEL"
};
```

Empty strings show **Coming soon** without a clickable destination. Valid HTTPS URLs enable both the hero links and the resource section. Replace the Citation “Coming soon” text in `index.html` with the final BibTeX when the paper is released. Replace `assets/social.png` if the title or release status changes.

## Content and assets

- `index.html`: TLDR, labeled dependency graph, comparison charts, expandable benchmark table, citation placeholder, and metadata.
- `styles.css`: desktop/mobile layouts, reduced-motion support, and print styles.
- `script.js`: invariant explorer, synchronized chart and table metric switch, and release links.
- `assets/results.json`: all nine rows of manuscript Table 1, benchmark sizes, and both metrics. The table in `index.html` contains the same data so it remains readable without JavaScript. Update both when results change.
- `assets/diagnostics.*`: supplied `figures/VeriWorld (12).pdf` and lossless WebP rendering.
- `assets/sample-scaling.*`, `iteration-scaling.*`, `scaling-legend.*`: the exact figure files used by `figures/tts.tex`, plus lossless WebP renderings. No data or chart geometry was altered.
- `assets/favicon.svg`: original dependency-graph mark for this website.
- `assets/social.png`: social-sharing card rendered from this website.

The manuscript is the source of claims, authorship, and numbers. This site does not assert conference acceptance or a public model/code release. The full paper is not published here; its source includes draft annotations. The primary evaluation has 471 problems; test-time scaling uses a separate 63-problem validation set. Cross-model diagnostic utility uses 118 hard failed states. The 64.3% relative gain refers to the DeepSeek repairer and is taken from the manuscript's reported delta (rounded rates alone need not reproduce it exactly).

## Design research

The user supplied [Vero](https://vero.verina.io/), [ExVerus](https://exverus-proof.github.io/), and [VERINA](https://verina.io/) as references. Their academic project structure informed this independently implemented page; no frontend code or unrelated paper figures were copied.

Skills reviewed:

- [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md): intentional typography, visual hierarchy, accessibility, and responsive QA.
- [Claude Scholar frontend-design](https://github.com/Galaxy-Dawn/claude-scholar/blob/main/skills/frontend-design/SKILL.md): frontend design guidance in a research workflow. The upstream file is a general frontend skill, despite some directories describing it as a specialized academic-site skill.
- Installed Sites skill: buildless static implementation and presentation-focused information design. GitHub Pages was used as requested, instead of Sites hosting.

[GitHub Pages setup documentation](https://docs.github.com/en/pages/quickstart).
