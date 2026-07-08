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
      "Main systems I actively maintain and present. These projects demonstrate practical ability across applied AI, Cloudflare Workers, Docker, MongoDB, FastAPI, React/Vite, service integration, and production-oriented deployment",
    "projects.aither.label": "Cloudflare Workers AI Assistant Agent Platform",
    "projects.aither.copy":
      "Building a serverless agent platform for job search, email automation, calendar scheduling, contact retrieval, persistent memory, and multi-step workflows",
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
    "aither.label": "Featured AI Engineering Project",
    "aither.kicker": "Cloudflare Workers · AI Agents · Google Workspace",
    "aither.repository": "View repository",
    "aither.overview1":
      "AitherPath is an AI assistant agent platform designed around the work people actually delegate: finding job opportunities, drafting and organizing email, scheduling calendar events, retrieving contacts, and carrying context across multi-step productivity workflows.",
    "aither.overview2":
      "The project exists to explore how agentic software can move beyond single-turn chat interfaces into reliable, tool-using systems. The engineering problem is not only model quality; it is authentication, state, execution boundaries, memory, recoverability, and the contract between natural language and deterministic APIs.",
    "aither.overview3":
      "Cloudflare Workers is the architectural center because the assistant needs low-latency request handling, global execution, narrow deployment units, and managed primitives for data, object storage, sessions, and workflows. The platform is being shaped as an edge-native agent runtime rather than a monolithic backend.",
    "aither.features.title": "Key Features",
    "aither.feature.tool.title": "AI Tool Calling",
    "aither.feature.tool.copy": "A tool router translates assistant intent into typed API actions with explicit inputs, outputs, and failure states.",
    "aither.feature.workspace.title": "Google Workspace Integration",
    "aither.feature.workspace.copy": "OAuth-backed access to Gmail, Calendar, and Contacts enables the assistant to operate on real productivity data.",
    "aither.feature.memory.title": "Persistent Memory",
    "aither.feature.memory.copy": "D1 and session storage preserve user preferences, task context, and workflow state across requests.",
    "aither.feature.serverless.title": "Serverless Architecture",
    "aither.feature.serverless.copy": "Cloudflare Workers keep the execution surface small, deployable, and close to users without operating servers.",
    "aither.feature.workflow.title": "Workflow Automation",
    "aither.feature.workflow.copy": "Cloudflare Workflows provide a path for durable, multi-step jobs that survive retries and external API delays.",
    "aither.feature.oauth.title": "OAuth Authentication",
    "aither.feature.oauth.copy": "Scoped OAuth 2.0 authorization keeps Google API access explicit, revocable, and separated from assistant prompts.",
    "aither.feature.sessions.title": "Agent Sessions",
    "aither.feature.sessions.copy": "Cloudflare Agent Sessions are used to model conversational continuity without assuming a stateful server process.",
    "aither.feature.job.title": "Job Search",
    "aither.feature.job.copy": "The assistant is designed to coordinate search, ranking, saved context, and follow-up actions for applications.",
    "aither.feature.email.title": "Email Automation",
    "aither.feature.email.copy": "Gmail tools support reading, drafting, classifying, and preparing user-approved outbound communication.",
    "aither.feature.calendar.title": "Calendar Scheduling",
    "aither.feature.calendar.copy": "Calendar tools reason over availability and event creation while preserving clear human confirmation points.",
    "aither.arch.title": "System Architecture",
    "aither.arch.frontend": "Frontend",
    "aither.arch.workers": "Cloudflare Workers",
    "aither.arch.agent": "AI Agent Layer",
    "aither.arch.router": "Tool Router",
    "aither.arch.google": "Google APIs",
    "aither.arch.openai": "OpenAI",
    "aither.arch.database": "Database",
    "aither.arch.memory": "Persistent Memory",
    "aither.arch.copy":
      "The frontend captures user intent and confirmation decisions. Cloudflare Workers expose Hono-based REST endpoints, validate requests, and coordinate execution. The AI agent layer plans the next action, while the tool router isolates model output from privileged API calls. Google APIs provide Gmail, Calendar, and Contacts capabilities; OpenAI supplies reasoning and language generation; D1, R2, sessions, and workflow state persist the data needed for continuity.",
    "aither.challenges.title": "Engineering Challenges",
    "aither.challenge.oauth": "OAuth security requires scoped tokens, consent boundaries, refresh-token handling, and clear separation between credentials and prompts.",
    "aither.challenge.tools": "Tool orchestration requires typed contracts so model-generated plans become deterministic API calls instead of informal text.",
    "aither.challenge.workflows": "Multi-step workflows need durable checkpoints, retry behavior, and explicit recovery paths when Google or model calls fail.",
    "aither.challenge.memory": "Agent memory must distinguish stable user preferences from short-lived task state and auditable execution logs.",
    "aither.challenge.serverless": "Stateless serverless execution pushes state into sessions, D1, R2, and workflow records rather than process memory.",
    "aither.challenge.abstraction": "API abstraction keeps Gmail, Calendar, Contacts, and job-search tools behind a consistent interface for authorization, validation, and error handling.",
    "aither.stack.title": "Tech Stack",
    "aither.stack.programming": "Programming",
    "aither.stack.ai": "AI",
    "aither.stack.backend": "Backend",
    "aither.stack.cloud": "Cloud",
    "aither.stack.database": "Database",
    "aither.stack.auth": "Authentication",
    "aither.stack.devops": "DevOps",
    "aither.roadmap.title": "Future Roadmap",
    "aither.roadmap.multiagent": "Multi-agent collaboration for specialized planning, email, scheduling, and research roles.",
    "aither.roadmap.rag": "RAG over user documents, interaction history, and task artifacts.",
    "aither.roadmap.vector": "Vector database integration for semantic memory retrieval.",
    "aither.roadmap.memory": "Long-term memory with user-controlled retention and deletion policies.",
    "aither.roadmap.streaming": "Streaming responses for transparent intermediate reasoning and progress updates.",
    "aither.roadmap.eval": "Evaluation framework for tool accuracy, regression testing, and workflow completion quality.",
    "aither.roadmap.observability": "Observability, monitoring, structured logs, traces, and production alerting.",
    "aither.roadmap.deploy": "Production deployment hardening, secret management, and environment promotion.",
    "aither.roadmap.kubernetes": "Kubernetes as a future option for workloads that outgrow edge-only execution.",
    "aither.roadmap.mcp": "MCP and Model Context Protocol integration for a broader tool ecosystem.",
    "aither.lessons.title": "Lessons Learned",
    "aither.lessons.copy1": "Building useful AI software is primarily a systems problem. The model is one component in a larger execution environment that must manage trust, state, retries, observability, and user confirmation.",
    "aither.lessons.copy2": "Serverless architecture forces discipline. Because no request can rely on process-local memory, the design has to make state transitions explicit, serializable, and recoverable.",
    "aither.lessons.copy3": "Real API integrations are where agent abstractions become concrete. Gmail, Calendar, Contacts, OAuth, and workflow orchestration expose the boundary between fluent language interfaces and production software engineering.",
    "timeline.label": "Research & Coursework Timeline",
    "timeline.title": "Recent Projects",
    "timeline.aither.date": "Jun 18 - Present",
    "timeline.aither.label": "Cloudflare Workers AI Assistant Agent Platform",
    "timeline.aither.copy":
      "A production-oriented AI agent platform for Google Workspace automation, persistent memory, and multi-step assistant workflows",
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
    "projects.copy": "我主要维护并展示的工程系统。这些项目集中体现了我在应用型 AI、Cloudflare Workers、Docker、MongoDB、FastAPI、React/Vite、服务集成与生产级部署方面的实践能力",
    "projects.aither.label": "基于 Cloudflare Workers 的 AI Assistant Agent 平台",
    "projects.aither.copy": "构建面向求职搜索、邮件自动化、日程安排、联系人检索、持久化记忆和多步骤工作流的 serverless agent 平台",
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
    "aither.label": "重点 AI 工程项目",
    "aither.kicker": "Cloudflare Workers · AI Agents · Google Workspace",
    "aither.repository": "查看仓库",
    "aither.overview1": "AitherPath 是一个 AI assistant agent 平台，围绕真实可委托的生产力任务设计：寻找职位机会、起草和整理邮件、安排日历事件、检索联系人，并在多步骤工作流中保留上下文。",
    "aither.overview2": "这个项目探索 agentic software 如何从单轮聊天界面走向可靠的工具调用系统。核心工程问题不只是模型效果，还包括认证、状态、执行边界、记忆、恢复能力，以及自然语言和确定性 API 之间的契约。",
    "aither.overview3": "Cloudflare Workers 是系统架构的中心，因为 assistant 需要低延迟请求处理、全球边缘执行、较小的部署单元，以及数据、对象存储、会话和工作流等托管能力。平台正在按照 edge-native agent runtime 的方向设计，而不是单体后端。",
    "aither.features.title": "核心功能",
    "aither.feature.tool.title": "AI Tool Calling",
    "aither.feature.tool.copy": "工具路由器将 assistant 意图转换为带有明确输入、输出和失败状态的类型化 API 动作。",
    "aither.feature.workspace.title": "Google Workspace 集成",
    "aither.feature.workspace.copy": "基于 OAuth 的 Gmail、Calendar 和 Contacts 访问，使 assistant 能够处理真实生产力数据。",
    "aither.feature.memory.title": "持久化记忆",
    "aither.feature.memory.copy": "D1 和 session storage 用于跨请求保存用户偏好、任务上下文和工作流状态。",
    "aither.feature.serverless.title": "Serverless 架构",
    "aither.feature.serverless.copy": "Cloudflare Workers 让执行面保持小而清晰，支持无需运维服务器的部署和低延迟访问。",
    "aither.feature.workflow.title": "工作流自动化",
    "aither.feature.workflow.copy": "Cloudflare Workflows 为可重试、可恢复、跨外部 API 延迟的多步骤任务提供持久执行路径。",
    "aither.feature.oauth.title": "OAuth 认证",
    "aither.feature.oauth.copy": "带 scope 的 OAuth 2.0 授权让 Google API 访问保持明确、可撤销，并与 assistant prompt 分离。",
    "aither.feature.sessions.title": "Agent Sessions",
    "aither.feature.sessions.copy": "Cloudflare Agent Sessions 用于建模对话连续性，而不假设存在有状态服务器进程。",
    "aither.feature.job.title": "求职搜索",
    "aither.feature.job.copy": "assistant 被设计为协调搜索、排序、上下文保存和申请后续动作。",
    "aither.feature.email.title": "邮件自动化",
    "aither.feature.email.copy": "Gmail 工具支持读取、起草、分类和准备需要用户确认的外发邮件。",
    "aither.feature.calendar.title": "日程安排",
    "aither.feature.calendar.copy": "Calendar 工具用于分析可用时间并创建事件，同时保留清晰的人类确认节点。",
    "aither.arch.title": "系统架构",
    "aither.arch.frontend": "Frontend",
    "aither.arch.workers": "Cloudflare Workers",
    "aither.arch.agent": "AI Agent Layer",
    "aither.arch.router": "Tool Router",
    "aither.arch.google": "Google APIs",
    "aither.arch.openai": "OpenAI",
    "aither.arch.database": "Database",
    "aither.arch.memory": "Persistent Memory",
    "aither.arch.copy": "前端负责捕获用户意图和确认决策。Cloudflare Workers 暴露基于 Hono 的 REST 端点，完成请求校验并协调执行。AI agent layer 规划下一步动作，tool router 将模型输出与高权限 API 调用隔离。Google APIs 提供 Gmail、Calendar 和 Contacts 能力；OpenAI 提供推理和语言生成；D1、R2、sessions 和 workflow state 保存连续执行所需的数据。",
    "aither.challenges.title": "工程挑战",
    "aither.challenge.oauth": "OAuth 安全需要 scope token、授权边界、refresh token 处理，以及 credentials 与 prompts 的清晰隔离。",
    "aither.challenge.tools": "工具编排需要类型化契约，使模型生成的计划能够变成确定性的 API 调用，而不是非结构化文本。",
    "aither.challenge.workflows": "多步骤工作流需要持久检查点、重试行为，以及 Google 或模型调用失败时的明确恢复路径。",
    "aither.challenge.memory": "Agent memory 必须区分稳定的用户偏好、短期任务状态和可审计的执行日志。",
    "aither.challenge.serverless": "无状态 serverless 执行要求把状态放入 sessions、D1、R2 和 workflow records，而不是进程内存。",
    "aither.challenge.abstraction": "API 抽象将 Gmail、Calendar、Contacts 和 job-search 工具置于统一接口之后，便于授权、校验和错误处理。",
    "aither.stack.title": "技术栈",
    "aither.stack.programming": "Programming",
    "aither.stack.ai": "AI",
    "aither.stack.backend": "Backend",
    "aither.stack.cloud": "Cloud",
    "aither.stack.database": "Database",
    "aither.stack.auth": "Authentication",
    "aither.stack.devops": "DevOps",
    "aither.roadmap.title": "未来路线图",
    "aither.roadmap.multiagent": "Multi-agent collaboration：面向规划、邮件、日程和研究的专门 agent 角色。",
    "aither.roadmap.rag": "RAG：面向用户文档、交互历史和任务产物的检索增强生成。",
    "aither.roadmap.vector": "Vector database 集成，用于语义记忆检索。",
    "aither.roadmap.memory": "长期记忆，支持用户可控的保留和删除策略。",
    "aither.roadmap.streaming": "Streaming responses，用于展示中间进度和更透明的执行反馈。",
    "aither.roadmap.eval": "Evaluation framework，用于工具准确率、回归测试和工作流完成质量评估。",
    "aither.roadmap.observability": "Observability、monitoring、结构化日志、traces 和生产告警。",
    "aither.roadmap.deploy": "生产部署强化、secret management 和环境晋级流程。",
    "aither.roadmap.kubernetes": "Kubernetes 作为未来承载超出 edge-only 执行范围工作负载的选项。",
    "aither.roadmap.mcp": "MCP 和 Model Context Protocol 集成，连接更广泛的工具生态。",
    "aither.lessons.title": "工程反思",
    "aither.lessons.copy1": "构建有用的 AI 软件首先是系统工程问题。模型只是更大执行环境中的一个组件，系统还必须处理信任、状态、重试、可观测性和用户确认。",
    "aither.lessons.copy2": "Serverless 架构会迫使设计保持纪律性。因为请求不能依赖进程内存，状态转换必须显式、可序列化、可恢复。",
    "aither.lessons.copy3": "真实 API 集成会让 agent 抽象变得具体。Gmail、Calendar、Contacts、OAuth 和工作流编排共同暴露了自然语言界面与生产软件工程之间的边界。",
    "timeline.label": "研究与课程项目时间线",
    "timeline.title": "近期项目",
    "timeline.aither.date": "6 月 18 日 - 至今",
    "timeline.aither.label": "基于 Cloudflare Workers 的 AI Assistant Agent 平台",
    "timeline.aither.copy": "面向 Google Workspace 自动化、持久化记忆和多步骤 assistant 工作流的生产导向 AI agent 平台",
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
      activeLanguage === "zh" ? "./data/jiannanchen_cv.pdf" : "./data/jc_cv.pdf"
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
