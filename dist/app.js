(() => {
  "use strict";
  const p = window.PROFILE;
  const dictionary = {
    zh: {
      about: "关于我", news: "最新动态", research: "研究方向", publications: "论文成果", experience: "研究经历", education: "教育背景", awards: "荣誉奖励",
      eyebrow: "个人学术主页", hello: "你好，我是晓斌。", introLabel: "关于洪晓斌", browse: "浏览论文", scholar: "Google Scholar", profiles: "学术与代码",
      selected: "论文成果", selectionNote: "以下为部分研究成果，完整列表见 Google Scholar。", equal: "* 表示共同第一作者", all: "全部", graph: "图学习", temporal: "时空数据", llm: "大模型", multimodal: "多模态", showAll: "查看全部论文", showLess: "收起列表", count: "篇", older: "更多论文", footer: "洪晓斌 · Xiaobin Hong", updated: "更新于 2026 年 10 月", researchSub: "Research interests", experienceSub: "Research experience", educationSub: "Education", awardsSub: "Honors & awards", paperImage: "论文示意图", result: "筛选结果", filter: "按研究方向筛选论文", external: "在新标签页打开", github: "访问 GitHub", list: "论文列表"
    },
    en: {
      about: "About Me", news: "News", research: "Research", publications: "Publications", experience: "Research Experience", education: "Education", awards: "Honors and Awards",
      eyebrow: "Personal academic homepage", hello: "Hi, I’m Xiaobin.", introLabel: "About Xiaobin Hong", browse: "Explore publications", scholar: "Google Scholar", profiles: "Find me online",
      selected: "Publications", selectionNote: "Selected work is listed below. See Google Scholar for a complete list.", equal: "* denotes equal contribution", all: "All", graph: "Graph learning", temporal: "Spatiotemporal", llm: "LLMs", multimodal: "Multimodal", showAll: "View all publications", showLess: "Show less", count: "papers", older: "More publications", footer: "Xiaobin Hong · 洪晓斌", updated: "Updated October 2026", researchSub: "Research interests", experienceSub: "Research experience", educationSub: "Education", awardsSub: "Honors & awards", paperImage: "Paper illustration", result: "Matching publications", filter: "Filter publications by research area", external: "opens in a new tab", github: "Visit GitHub", list: "Publication list"
    }
  };
  let language = "en";
  try { language = localStorage.getItem("homepage-language") === "zh" ? "zh" : "en"; } catch (_) { /* Storage can be disabled. */ }
  let category = "all";
  let expanded = true;
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const localized = (value) => typeof value === "string" ? value : value[language];
  const t = (key) => dictionary[language][key];
  const arrow = '<span aria-hidden="true">↗</span>';
  const link = (url, label, className = "") => `<a class="${className}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ${arrow}</a>`;
  const heading = (id, key) => `<div class="section-heading"><h2 id="${id}-title"><span aria-hidden="true">${({news:"🔥",publications:"📝",awards:"🎖",education:"📖",experience:"🔬"})[id] || ""}</span> ${t(key)}</h2></div>`;
  const tags = (items) => `<div class="tags">${items.map((tag) => `<span>${esc(tag)}</span>`).join("")}</div>`;
  function renderPublications() {
    const matching = p.publications.filter((paper) => category === "all" || paper.category.includes(category));
    const visible = category === "all" && !expanded ? matching.slice(0, 6) : matching;
    const list = document.getElementById("publication-list");
    list.innerHTML = visible.map((paper) => {
      const authors = paper.authors.map((author, i) => `${author === "Xiaobin Hong" ? `<strong>${esc(author)}</strong>` : esc(author)}${paper.equal.includes(i) ? "<sup>*</sup>" : ""}`).join(", ");
      return `<article class="publication${paper.image ? " has-image" : ""}">
        ${paper.image ? `<a class="paper-image" href="${esc(paper.links[0].url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(paper.title)}"><span class="venue-badge">${esc(paper.venue)}${!paper.venue.includes(String(paper.year)) ? ` ${paper.year}` : ""}</span><img src="${esc(paper.image)}" alt="${esc(paper.title)} — ${t("paperImage")}" width="360" height="230" loading="lazy"></a>` : `<div class="paper-marker" aria-hidden="true"><span>${esc(paper.venue.split(" ")[0])}</span><span>${paper.year}</span></div>`}
        <div class="paper-content"><div class="paper-meta"><span class="venue">${esc(paper.venue)}</span>${!paper.venue.includes(String(paper.year)) ? `<span>${paper.year}</span>` : ""}${paper.dateNote ? `<span class="date-note">${esc(localized(paper.dateNote))}</span>` : ""}</div>
        <h3>${link(paper.links[0].url, paper.title)}</h3><p class="authors">${authors}</p><div class="paper-links">${paper.links.map((item) => link(item.url, item.label)).join('<span class="link-separator" aria-hidden="true"> | </span>')}</div></div>
      </article>`;
    }).join("");
    document.getElementById("publication-count").textContent = `${matching.length} ${language === "en" && matching.length === 1 ? "paper" : t("count")}`;
    const toggle = document.getElementById("show-all");
    toggle.hidden = true;
    toggle.textContent = expanded ? `${t("showLess")} ↑` : `${t("showAll")} (${p.publications.length}) ↓`;
    toggle.setAttribute("aria-expanded", String(expanded));
    document.querySelectorAll(".filter").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === category)));
  }
  function render() {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh" ? "洪晓斌 · Xiaobin Hong" : "Xiaobin Hong · 洪晓斌";
    document.getElementById("navigation").innerHTML = ["about", "news", "publications", "awards", "education", "experience"].map((key) => `<a href="#${key}">${t(key)}</a>`).join("");
    document.getElementById("mobile-home").textContent = t("about");
    document.querySelector(".site-header").classList.remove("menu-open");
    document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
    document.querySelectorAll("#navigation a").forEach(item => item.addEventListener("click", () => {
      document.querySelector(".site-header").classList.remove("menu-open");
      document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
    }));
    const languageButton = document.getElementById("language-toggle");
    languageButton.innerHTML = language === "zh" ? `EN ${arrow}` : `中文 ${arrow}`;
    languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
    document.getElementById("profile").innerHTML = `<div class="profile-inner"><img class="portrait" src="${esc(p.portrait)}" alt="${esc(localized(p.name))}" width="166" height="208" fetchpriority="high"><h1>${esc(localized(p.name))}</h1><p class="secondary-name">${esc(localized(p.nameSecondary))}</p><p class="profile-tagline">${esc(localized(p.tagline))}</p>${p.affiliation ? `<p>${esc(localized(p.affiliation))}</p>` : ""}<div class="profile-divider"></div><p class="profile-label">${t("profiles")}</p><div class="profile-links">${p.links.map((item) => `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer"><span class="link-monogram ${item.short === "iD" ? "orcid" : ""}" aria-hidden="true">${esc(item.short)}</span><span>${esc(item.label)}</span>${arrow}</a>`).join("")}${p.email ? link(`mailto:${p.email}`, p.email) : ""}</div><a class="sidebar-jump" href="#publications">${t("browse")} <span aria-hidden="true">↓</span></a></div>`;
    document.getElementById("about").innerHTML = `<h2 class="sr-only" id="about-title">${t("about")}</h2><div class="intro"><p>${language === "zh" ? '你好！我是<strong>洪晓斌（Xiaobin Hong）</strong>。' : 'Hi! I am <strong>Xiaobin Hong (洪晓斌)</strong>. '}${esc(p.intro[language][1])}</p><p>${esc(p.intro[language][0])}</p></div>`;
    document.getElementById("research").innerHTML = `<p id="research-title">${language === "zh" ? "我的研究兴趣主要包括：" : "My research interests include:"}</p><ul class="research-list">${p.research.map((area) => `<li><strong>${esc(localized(area.title))}:</strong> <em>${esc(localized(area.text))}</em></li>`).join("")}</ul>`;
    document.getElementById("news").innerHTML = heading("news", "news") + `<ul class="news-list">${p.news.map(item => `<li><time datetime="${esc(item.datetime)}">${esc(item.date)}</time>: 🎉 ${language === "zh" ? `论文 <strong>${esc(item.paper)}</strong> 被 <strong>${esc(item.venue)}</strong> 录用。` : `Our paper <strong>${esc(item.paper)}</strong> was accepted to <strong>${esc(item.venue)}</strong>.`}</li>`).join("")}</ul>`;
    document.getElementById("publications").innerHTML = heading("publications", "selected") + `<p class="section-description">${t("selectionNote")}</p><div class="publication-toolbar"><div class="filters" role="group" aria-label="${t("filter")}">${["all", "graph", "temporal", "llm", "multimodal"].map((filter) => `<button class="filter" type="button" data-filter="${filter}" aria-pressed="${filter === category}">${t(filter)}</button>`).join("")}</div><span id="publication-count" aria-live="polite"></span></div><p class="equal-note">${t("equal")}</p><div id="publication-list" aria-label="${t("list")}"></div><button type="button" class="show-all" id="show-all" aria-controls="publication-list" aria-expanded="${expanded}"></button>`;
    document.getElementById("experience").innerHTML = heading("experience", "experience", "experienceSub") + `<div class="project-list">${p.projects.map((project) => `<article class="project"><h3>${esc(localized(project.title))}</h3><p>${esc(localized(project.text))}</p>${tags(project.tags)}</article>`).join("")}</div>`;
    document.getElementById("education").innerHTML = heading("education", "education", "educationSub") + `<div class="education-list">${p.education.map((item) => `<article class="education-item"><p class="education-dates">${esc(item.dates)}</p><div><h3>${esc(localized(item.school))}</h3><p>${esc(localized(item.degree))}</p><p class="education-detail">${esc(localized(item.detail))}</p></div></article>`).join("")}</div>`;
    document.getElementById("awards").innerHTML = heading("awards", "awards", "awardsSub") + `<ul class="awards-list">${p.awards.map((award) => `<li><span class="award-year">${award.year}</span><div><span class="award-title">${esc(localized(award.title))}</span><span class="award-org">${esc(localized(award.org))}</span></div></li>`).join("")}</ul>`;
    document.getElementById("footer").innerHTML = `<div><span>© ${new Date().getFullYear()} ${t("footer")}</span><span>${t("updated")} <span class="footer-dot">·</span> ${link(p.links[1].url, "GitHub")}</span></div>`;
    document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", () => { category = button.dataset.filter; renderPublications(); }));
    document.getElementById("show-all").addEventListener("click", () => {
      expanded = !expanded;
      renderPublications();
      if (!expanded) document.getElementById("publications").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    });
    renderPublications();
  }
  document.getElementById("menu-toggle").addEventListener("click", () => {
    const open = document.querySelector(".site-header").classList.toggle("menu-open");
    document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelector(".site-header").classList.contains("menu-open")) {
      document.querySelector(".site-header").classList.remove("menu-open");
      document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
      document.getElementById("menu-toggle").focus();
    }
  });
  document.getElementById("language-toggle").addEventListener("click", () => {
    language = language === "zh" ? "en" : "zh";
    try { localStorage.setItem("homepage-language", language); } catch (_) { /* Language remains usable without storage. */ }
    render();
  });
  render();
})();
