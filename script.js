const root = document.documentElement;
const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
const heroPhoto = document.querySelector(".hero-photo");
const langToggleButtons = Array.from(document.querySelectorAll("[data-lang-toggle]"));
const i18nElements = Array.from(document.querySelectorAll("[data-i18n]"));
const phoneLinks = Array.from(document.querySelectorAll("[data-phone-link]"));
const resumeLinks = Array.from(document.querySelectorAll("[data-resume-link]"));

const translations = {
  en: {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Jonas Chen",
    "hero.copy":
      "I am Jonas Chen (also known as Jiannan Chen), a 22-year-old NYU junior double majoring in Computer Science and Mathematics, with a minor in Web Programming. I build full-stack products that connect polished interfaces, reliable APIs, database-backed workflows, and deployable cloud or containerized systems",
    "hero.viewProjects": "View Projects",
    "hero.resume": "Resume",
    "hero.contact": "Contact",
    "profile.label": "Profile",
    "profile.universityLabel": "University",
    "profile.university": "New York University",
    "profile.standingLabel": "Standing",
    "profile.standing": "Junior, 22",
    "profile.majorLabel": "Major",
    "profile.major": "Computer Science, Mathematics",
    "profile.minorsLabel": "Minors",
    "profile.minors": "Web Programming",
    "about.label": "About",
    "about.title": "Full-Stack Software Engineer",
    "about.copy1":
      "I focus on end-to-end product engineering: translating requirements into clear interfaces, reliable backend services, thoughtful data models, and maintainable systems that can evolve through real iteration",
    "about.copy2":
      "I am currently preparing for software engineering internships and new-grad style roles where I can contribute to full-stack product teams, developer tooling, and applied AI systems",
    "projects.label": "Main Maintained Projects",
    "projects.title": "Main projects",
    "projects.copy":
      "Main projects I actively maintain and present. These three projects fully demonstrate my practical ability in applying technologies such as Cloudflare, DigitalOcean, Docker, MongoDB, FastAPI, and React/Vite to complete full-stack development, service integration, and production-level deployment",
    "projects.kyg.label": "Website Development Internship · The company's official website platform",
    "projects.kyg.copy":
      "Built an Astro and Cloudflare Workers company website, using D1/R2 for CMS data, product assets, bilingual catalog pages, and admin workflows",
    "projects.catch.label": "A programming learning platform based on gamification interaction",
    "projects.catch.copy":
      "Built a Dockerized full-stack learning platform with FastAPI microservices, MongoDB persistence, and a React/Vite frontend",
    "projects.nearbite.label": "NYC personalized restaurant recommendation platform",
    "projects.nearbite.copy":
      "Built a restaurant recommendation app with Streamlit, MongoDB, Yelp API integration, and embedding-based ranking for location-aware discovery",
    "projects.repository": "Repository",
    "timeline.label": "Research & Coursework Timeline",
    "timeline.title": "Recent Projects",
    "timeline.kyg.date": "May 2025 - Aug 2025",
    "timeline.kyg.label": "Website Development Internship",
    "timeline.kyg.copy":
      "A website development internship project focused on production website delivery and iterative business-facing implementation",
    "timeline.nearbite.date": "Jan 21 - May 1",
    "timeline.nearbite.label": "NYC personalized restaurant recommendation platform",
    "timeline.nearbite.copy":
      "A long-running Python project focused on practical software delivery, iteration, and research-style product thinking",
    "timeline.fitflow.date": "Feb 12 - Mar 15",
    "timeline.fitflow.label": "Fitness Tracker",
    "timeline.fitflow.copy":
      "A web app exercise emphasizing product flow, frontend structure, and clear user-facing behavior",
    "timeline.pypl.date": "Mar 10 - Mar 31",
    "timeline.pypl.label": "Python terminal game package",
    "timeline.pypl.copy":
      "A Python packaging project focused on installable structure, maintainable modules, and reusable game logic",
    "timeline.signbridge.date": "Apr 2 - Apr 16",
    "timeline.signbridge.label": "Gesture Language Challenge Platform",
    "timeline.signbridge.copy":
      "A containerized app exercise for packaging services, coordinating environments, and making deployment assumptions explicit",
    "timeline.catch.date": "Apr 21 - May 7",
    "timeline.catch.label": "programming learning platform",
    "timeline.catch.copy":
      "A full-stack development platform for gamified interactive programming learning",
    "timeline.openRepository": "Open repository",
    "contact.label": "Open to Software Engineering Roles",
    "contact.title": "I am building toward product-minded engineering teams",
    "contact.copy":
      "This portfolio is designed for recruiters, professors, and collaborators who want a quick but substantive view of my technical direction",
    "contact.email": "Email Jonas",
    "contact.phone": "+1 201 895 8874",
    "contact.phoneHref": "tel:+12018958874",
    "contact.github": "View GitHub",
    "footer.copy": "© 2026 Jonas Chen",
    "footer.backTop": "Back to top",
    "meta.title": "Jonas Chen | Software Engineering Portfolio",
    "meta.description":
      "Jonas Chen, NYU junior double majoring in Computer Science and Mathematics with a minor in Web Programming. Portfolio for software engineering roles"
  },
  zh: {
    "nav.about": "关于",
    "nav.work": "经历",
    "nav.projects": "项目",
    "nav.contact": "联系",
    "hero.title": "陈见南",
    "hero.copy":
      "我是陈见南（Jonas Chen），22 岁，目前是纽约大学大三学生，双专业为计算机科学与数学，辅修网页编程。我专注于全栈产品开发，将清晰的交互界面、可靠的 API、数据库驱动的业务流程，以及可部署的云端或容器化系统连接起来",
    "hero.viewProjects": "查看项目",
    "hero.resume": "简历",
    "hero.contact": "联系我",
    "profile.label": "个人信息",
    "profile.universityLabel": "学校",
    "profile.university": "纽约大学",
    "profile.standingLabel": "年级",
    "profile.standing": "大三，22 岁",
    "profile.majorLabel": "专业",
    "profile.major": "计算机科学、数学",
    "profile.minorsLabel": "辅修",
    "profile.minors": "网页编程",
    "about.label": "关于",
    "about.title": "全栈软件工程师",
    "about.copy1":
      "我专注于端到端产品工程：将需求转化为清晰的交互界面、可靠的后端服务、合理的数据模型，以及能够支持持续迭代的可维护系统",
    "about.copy2":
      "我正在准备软件工程实习岗位，希望加入全栈产品团队、开发者工具或应用型 AI 系统相关方向",
    "projects.label": "主要项目",
    "projects.title": "主要项目",
    "projects.copy": "我主要维护并展示的三个项目。这些项目集中体现了我运用 Cloudflare、DigitalOcean、Docker、MongoDB、FastAPI 和 React/Vite 完成全栈开发、服务集成与生产级部署的实践能力",
    "projects.kyg.label": "网站开发实习 · 公司官网平台",
    "projects.kyg.copy":
      "基于 Astro 和 Cloudflare Workers 开发企业官网，使用 D1/R2 支撑 CMS 数据、产品图片资产、中英文目录页和后台管理流程",
    "projects.catch.label": "基于游戏化交互的编程学习平台",
    "projects.catch.copy":
      "基于 Docker 编排 FastAPI 微服务、MongoDB 持久化与 React/Vite 前端，实现编程学习平台的核心服务集成",
    "projects.nearbite.label": "纽约餐厅个性化推荐平台",
    "projects.nearbite.copy":
      "基于 Streamlit、MongoDB、Yelp API 和 embedding 排序构建餐厅推荐应用，支持结合位置与偏好的个性化发现",
    "projects.repository": "打开仓库",
    "timeline.label": "研究与课程项目时间线",
    "timeline.title": "近期项目",
    "timeline.kyg.date": "2025 年 5 月 - 2025 年 8 月",
    "timeline.kyg.label": "网站开发实习",
    "timeline.kyg.copy": "网站开发实习项目，聚焦生产级网站交付和面向业务的迭代实现",
    "timeline.nearbite.date": "1 月 21 日 - 5 月 1 日",
    "timeline.nearbite.label": "纽约餐厅个性化推荐平台",
    "timeline.nearbite.copy": "长期 Python 项目，关注实际软件交付、持续迭代和研究型产品思维",
    "timeline.fitflow.date": "2 月 12 日 - 3 月 15 日",
    "timeline.fitflow.label": "健身追踪应用",
    "timeline.fitflow.copy": "Web 应用项目，强调产品流程、前端结构和清晰的用户交互行为",
    "timeline.pypl.date": "3 月 10 日 - 3 月 31 日",
    "timeline.pypl.label": "Python 终端游戏包",
    "timeline.pypl.copy": "Python 打包项目，关注可安装结构、可维护模块和可复用游戏逻辑",
    "timeline.signbridge.date": "4 月 2 日 - 4 月 16 日",
    "timeline.signbridge.label": "手势语言挑战平台",
    "timeline.signbridge.copy": "容器化应用项目，练习服务打包、环境协调和部署假设说明",
    "timeline.catch.date": "4 月 21 日 - 5 月 7 日",
    "timeline.catch.label": "编程学习平台",
    "timeline.catch.copy": "面向游戏化交互式编程学习的全栈开发平台",
    "timeline.openRepository": "打开仓库",
    "contact.label": "寻找软件工程机会",
    "contact.title": "如果有兴趣了解我或者有任何问题，欢迎联系我！",
    "contact.copy": "这个作品集面向招聘者、教授和合作者，用于快速了解我的技术方向与项目能力",
    "contact.email": "邮件联系",
    "contact.phone": "(+86) 17688518535",
    "contact.phoneHref": "tel:+8617688518535",
    "contact.github": "查看 GitHub",
    "footer.copy": "© 2026 Jonas Chen",
    "footer.backTop": "回到顶部",
    "meta.title": "Jonas Chen | 软件工程作品集",
    "meta.description": "Jonas Chen，纽约大学大三学生，双专业为计算机科学与数学，辅修网页编程。面向软件工程岗位的个人作品集"
  }
};

const setLanguage = (language) => {
  const activeLanguage = translations[language] ? language : "en";

  root.lang = activeLanguage === "zh" ? "zh-CN" : "en";
  root.dataset.language = activeLanguage;

  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    const text = translations[activeLanguage][key];

    if (text) {
      element.textContent = text;
    }
  });

  document.title = translations[activeLanguage]["meta.title"];
  document
    .querySelector("meta[name='description']")
    ?.setAttribute("content", translations[activeLanguage]["meta.description"]);

  phoneLinks.forEach((link) => {
    link.setAttribute("href", translations[activeLanguage]["contact.phoneHref"]);
  });

  resumeLinks.forEach((link) => {
    link.setAttribute(
      "href",
      activeLanguage === "zh" ? "./data/jiannanchen_cv.pdf" : "./data/jc_e_resume.pdf"
    );
  });

  langToggleButtons.forEach((button) => {
    button.textContent = activeLanguage === "zh" ? "EN" : "中文";
    button.setAttribute("aria-pressed", String(activeLanguage === "zh"));
    button.setAttribute("aria-label", activeLanguage === "zh" ? "Switch to English" : "切换到中文");
  });

  localStorage.setItem("portfolio-language", activeLanguage);
};

const savedLanguage = localStorage.getItem("portfolio-language");
setLanguage(savedLanguage || "en");

langToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = root.dataset.language === "zh" ? "en" : "zh";
    setLanguage(nextLanguage);
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
  revealObserver.observe(element);
});

window.addEventListener(
  "pointermove",
  (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    root.style.setProperty("--cursor-x", `${x}px`);
    root.style.setProperty("--cursor-y", `${y}px`);

    if (heroPhoto) {
      root.style.setProperty("--parallax-x", `${((x - centerX) / centerX) * 10}`);
      root.style.setProperty("--parallax-y", `${((y - centerY) / centerY) * 8}`);
    }
  },
  { passive: true }
);

window.addEventListener(
  "scroll",
  () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    root.style.setProperty("--scroll-progress", progress.toFixed(4));
  },
  { passive: true }
);
