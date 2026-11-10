// Slide artwork: images, process notes and isolated live demos.
(function () {
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const note = (head, body, points) => `<div class="a-note"><h3>${head}</h3><p>${body}</p><ul>${points.map((p) => `<li>${p}</li>`).join('')}</ul></div>`;

  const NOTES = {
    'note-highscore': () => note('It keeps working when a source doesn’t.', 'Highscore fetches design, code and content metrics live on load. If one source fails, that pillar falls back to its latest stored snapshot, so the dashboard stays useful.', ['Partial live data merges over the snapshot', 'A weekly cron job keeps the trend history growing', 'Any view exports as JSON or CSV']),
    'note-buero': () => note('An agent does the searching. The page stays honest.', 'Every weekday morning, Codex searches Stepstone, Indeed and the Federal Employment Agency for office roles within 30 km of Dortmund, and a validation script merges what it finds into the collection.', ['Listings merge by portal ID, so nothing seen or saved is lost', 'Each run records which sources worked, and the page says when results are incomplete', 'Distances come from town centres, and the page says so']),
    'note-kinder': () => note('Votes stay secret until the reveal.', 'Other players’ votes are removed by the API until the reveal, not merely hidden by CSS, so there is nothing to find in the browser.', ['Only hashed participant secrets are stored', 'Conditional writes keep simultaneous votes safe', 'Rooms expire after seven days']),
  };

  const EMBEDS = {
    brix: { src: 'shared/brix/index.html', label: 'live brix/react component' },
    hs: { src: 'shared/highscore/index.html', label: 'live Highscore component', dark: true },
    kc: { src: 'shared/kindercards/index.html', label: 'playable Kinder Cards round', dark: true },
    bk: { src: 'shared/buerokompass/index.html', label: 'live Bürokompass app' },
  };

  window.Art = {
    html(key, title, alt) {
      const [kind, name] = key.split(':');
      if (kind === 'img') return `<div class="art art-embed art-shot"><img src="${name}" alt="${esc(alt || title)}" width="1600" height="1000" loading="lazy" decoding="async"></div>`;
      if (EMBEDS[kind]) {
        const { src, label, dark } = EMBEDS[kind];
        return `<div class="art art-embed${dark ? ' on-dark' : ''}"><iframe src="${src}#${name}" title="${esc(title)}, ${label}" loading="lazy"></iframe></div>`;
      }
      return `<div class="art"><div class="art-in">${NOTES[key]()}</div></div>`;
    },
  };
})();
