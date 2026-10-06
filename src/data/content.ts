export interface SpeakingItem {
  date: string;
  title: string;
  event: string;
  eventLink?: string;
  talkLink?: string;
  videoLink?: string;
  pdfLink?: string;
  additionalLinks?: Array<{ label: string; url: string }>;
  type?: 'conference' | 'podcast' | 'meetup';
}

export interface TopicCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: 'strategy' | 'sports' | 'ai' | 'betting' | 'education' | 'data' | 'github' | 'tech';
  link?: string;
  linkText?: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    topics: string;
    speaking: string;
    substack: string;
    contact: string;
    langSwitch: string;
    langSwitchUrl: string;
    langSwitchLabel: string;
  };
  hero: {
    tagline: string;
    title1: string;
    title2: string;
    description: string;
    btnSubstack: string;
    btnGithub: string;
  };
  bio: {
    badge: string;
    title: string;
    subtitle: string;
    readMoreBio: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    vseTag: string;
  };
  substack: {
    badge: string;
    title: string;
    description: string;
    btnSubscribe: string;
    hint: string;
  };
  topicsSection: {
    title: string;
    subtitle: string;
    items: TopicCard[];
  };
  speaking: {
    title: string;
    subtitle: string;
    items: SpeakingItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitBtn: string;
    sending: string;
    success: string;
    error: string;
    spamNote: string;
  };
}

export const contentEN: Content = {
  meta: {
    title: "Antonín Kučera — Data Strategist & Head of BI",
    description: "Data Strategist & Head of BI, Data Science & Ad Operations at Livesport. Focus on Sports Data, AI in Analytics, Data Strategy, and iGaming."
  },
  nav: {
    about: "About",
    topics: "Focus Areas",
    speaking: "Public Speaking",
    substack: "Substack",
    contact: "Contact",
    langSwitch: "CZ",
    langSwitchUrl: "/cs/",
    langSwitchLabel: "Česká verze"
  },
  hero: {
    tagline: "Head of BI @ Livesport · Data Strategist · AI & Cloud",
    title1: "Being data-informed,",
    title2: "not data-driven",
    description: "Hello! I am Antonín Kučera, a data leader with over 13 years of experience in digital consulting and business intelligence. Currently, I work as the Head of Business Intelligence at Livesport, leading teams of analysts, engineers, and scientists.",
    btnSubstack: "Read my Substack",
    btnGithub: "GitHub Profile"
  },
  bio: {
    badge: "13+ years of experience",
    title: "Data Strategist & Head of BI, Data Science & Ad Operations",
    subtitle: "Building data-informed cultures that drive revenue and user satisfaction.",
    readMoreBio: "More about me",
    p1: "Hello! I am Antonín Kučera, a data leader with over 13 years of experience in digital consulting and business intelligence.",
    p2: "Currently, I work as the Head of Business Intelligence at Livesport, a global sports media company, where I lead teams of analysts, engineers, and scientists.",
    p3: "My mission is simple: I don't just 'manage data' — I build data-informed cultures.",
    p4: "I believe that having data isn't enough. The real challenge and my passion lies in Data Strategy, Governance, AI and Literacy. I focus on moving from being blindly 'data-driven' to being intelligently 'data-informed,' ensuring that insights actually drive revenue and user satisfaction.",
    vseTag: "Master's Degree in Information Management from Prague University of Economics and Business (VŠE)"
  },
  substack: {
    badge: "Substack Blog & Newsletter",
    title: "What I Write About",
    description: "Unlocking the power of data, using LLM agents in BigQuery, building data-informed teams, and cloud architecture.",
    btnSubscribe: "Subscribe on Substack",
    hint: "Join readers at antoninkucera.substack.com"
  },
  topicsSection: {
    title: "Focus Areas & Expertise",
    subtitle: "Key domains, analytical topics, and open-source activities.",
    items: [
      {
        id: "bi-ai",
        title: "BI & AI in Data Analytics",
        description: "Combining modern Business Intelligence with Generative AI and LLM agents in BigQuery to automate data cleaning and extract actionable insights.",
        tags: ["BigQuery", "LLM Agents", "dbt", "Looker"],
        icon: "ai"
      },
      {
        id: "sports-data",
        title: "Sports & Football Data",
        description: "Processing and analyzing real-time sports telemetry, match statistics, and fan engagement metrics for over 100 million global users.",
        tags: ["Sports Analytics", "Real-Time Data", "Livesport"],
        icon: "sports"
      },
      {
        id: "strategy",
        title: "Data Strategies & Governance",
        description: "Designing enterprise data roadmaps, data literacy programs, and governance frameworks that turn raw metrics into sustainable revenue.",
        tags: ["Data Governance", "Data Culture", "Cloud Architecture"],
        icon: "strategy"
      },
      {
        id: "betting",
        title: "Betting & iGaming",
        description: "Analyzing market odds dynamics, user betting behavior, attribution models, and data-driven ad operations in the iGaming ecosystem.",
        tags: ["iGaming Analytics", "Ad Operations", "Market Intelligence"],
        icon: "betting"
      },
      {
        id: "open-data",
        title: "World Statistics & Open Data",
        description: "Exploring global macroeconomic datasets, public open data APIs, and metric-backed insights across healthcare, finance, and demographics.",
        tags: ["Open Data", "Global Stats", "Data Analysis"],
        icon: "data"
      },
      {
        id: "education",
        title: "Education & Data Literacy",
        description: "Fostering data literacy across organizations, mentoring analytics teams, public speaking at conferences, and hosting data podcasts.",
        tags: ["Mentorship", "Podcasts", "Public Speaking"],
        icon: "education"
      },
      {
        id: "projects",
        title: "Projects & Open Source",
        description: "Open-source SQL/Python transformation tools, data pipeline scripts, dbt models, and analytical experiments hosted on GitHub.",
        tags: ["GitHub", "Python", "SQL", "Open Source"],
        icon: "github",
        link: "https://github.com/antoninkucera",
        linkText: "github.com/antoninkucera →"
      },
      {
        id: "investments",
        title: "Tech Investments & Trends",
        description: "Evaluating emerging cloud technology stacks, cost-optimization strategies, AI infrastructure, and long-term tech investments.",
        tags: ["Tech Trends", "Cloud Costs", "Fintech"],
        icon: "tech"
      }
    ]
  },
  speaking: {
    title: "🎙️ Public Speaking & Knowledge Sharing",
    subtitle: "I am passionate about sharing my experience in building data teams and advocating for data culture.",
    items: [
      {
        date: "27.11.2025",
        title: "BI leader: agent with a licence \"to change\"",
        event: "DataDay 2025",
        eventLink: "http://dataday.cz",
        pdfLink: "https://akucera.eu/wp-content/uploads/2025/12/dataday_2025_final_final.pdf",
        type: "conference"
      },
      {
        date: "17.3.2025",
        title: "IT Talks podcast interview",
        event: "IT Talks Podcast",
        videoLink: "https://www.youtube.com/watch?v=D3-n9W7-Mcg",
        type: "podcast"
      },
      {
        date: "20.11.2024",
        title: "Data Cleaning with SQL and ML",
        event: "DataDay 2024",
        eventLink: "http://dataday.cz",
        pdfLink: "https://akucera.eu/wp-content/uploads/2025/12/dataday_1124_final.pdf",
        type: "conference"
      },
      {
        date: "14.9.2024",
        title: "MeasureCamp Czechia 2023 / 2024",
        event: "MeasureCamp Czechia",
        talkLink: "https://czechia.measurecamp.org/2023/09/14/measurecamp-czechia-2023/",
        type: "conference"
      },
      {
        date: "25.5.2023",
        title: "Global Expansion based on Data",
        event: "BI Meetup",
        talkLink: "https://cz.linkedin.com/posts/antoninkucera_dostal-jsem-mo%C5%BEnost-promluvit-na-bi-networking-activity-7062419892796317696-kzQB",
        type: "meetup"
      },
      {
        date: "23.5.2023",
        title: "dCast — I see business intelligence as the brain of the company",
        event: "dCast Podcast",
        talkLink: "https://open.spotify.com/episode/3KPbPpOyFbZvxO5GQXOfvl?si=9J6vYAz5TGCK-brA823Snw",
        type: "podcast"
      },
      {
        date: "26.1.2023",
        title: "DataTalk podcast #23 — Head of BI at Livesport",
        event: "DataTalk Podcast",
        talkLink: "https://open.spotify.com/episode/4YYogcfxPUOQYBEgid4czi",
        additionalLinks: [
          { label: "Ceskepodcasty.cz", url: "https://ceskepodcasty.cz/podcast/data-talk/data-talk-23-antonin-kucera-livesport" },
          { label: "DataTalk.cz", url: "https://www.datatalk.cz/podcast/epizoda-23" }
        ],
        type: "podcast"
      },
      {
        date: "4.1.2023",
        title: "SharkTalk — Not all analysts are the same!",
        event: "SharkTalk",
        videoLink: "https://www.youtube.com/watch?v=13gLng75IgQ",
        type: "podcast"
      },
      {
        date: "10.6.2022",
        title: "Being data-informed, not data-driven",
        event: "WebExpo Conference 2022",
        talkLink: "https://webexpo.net/prague2022/talk/being-data-informed-not-data-driven-is-where-it-s-at.html",
        videoLink: "https://slideslive.com/38984439/being-datainformed-not-datadriven?ref=folder-104209",
        type: "conference"
      },
      {
        date: "21.10.2021",
        title: "Cookie bar optimization: Possible impact on data quality",
        event: "Data Restart 2021",
        talkLink: "https://www.datarestart.cz/2021",
        type: "conference"
      },
      {
        date: "4.9.2021",
        title: "Cookie bar optimization",
        event: "MeasureCamp Czechia 2021",
        type: "conference"
      },
      {
        date: "5.9.2020",
        title: "From raw data to User Journey",
        event: "MeasureCamp Czechia 2020",
        talkLink: "https://docs.google.com/presentation/d/1mRk4UIY0XuUFhj4dYue0_K3uYtA-e2GoJ60GkLnlvPs/edit#slide=id.g944c65bc40_0_19",
        eventLink: "https://czechia.measurecamp.org/",
        type: "conference"
      },
      {
        date: "21.11.2019",
        title: "Data analytics for 130+ applications",
        event: "Tech Event",
        videoLink: "https://www.youtube.com/watch?v=Des8UJYxdPE",
        type: "conference"
      }
    ]
  },
  contact: {
    title: "Let's Connect",
    subtitle: "I am always looking for new ways to leverage data to enhance user experience. Whether you are a fellow data leader, analyst, or event organizer, I'd love to connect.",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Message",
    submitBtn: "Send Message",
    sending: "Sending...",
    success: "Thank you! Your message has been sent successfully.",
    error: "Could not send form directly. Opening your email client...",
    spamNote: "Protected against spam (Honeypot active)."
  }
};

export const contentCS: Content = {
  meta: {
    title: "Antonín Kučera — Data Strategist & Head of BI",
    description: "Antonín Kučera je Head of BI v Livesportu a Data Strategist. Zaměření na sportovní data, AI v analytice, datové strategie a iGaming."
  },
  nav: {
    about: "O mně",
    topics: "Témata & Oblasti",
    speaking: "Přednášky",
    substack: "Substack",
    contact: "Kontakt",
    langSwitch: "EN",
    langSwitchUrl: "/",
    langSwitchLabel: "English version"
  },
  hero: {
    tagline: "Head of BI @ Livesport · Data Strategist · AI & Cloud",
    title1: "Být data-informed,",
    title2: "nejen data-driven",
    description: "Jsem Antonín Kučera, lídr v oblasti dat a Business Intelligence s více než 13 lety praxe. V Livesportu vedu BI, Data Science a Ad Operations týmy. Pomáhám firmám přejít od pouhého shromažďování dat k jejich reálnému využití pro rozhodování.",
    btnSubstack: "Číst Substack",
    btnGithub: "GitHub"
  },
  bio: {
    badge: "13+ let zkušeností",
    title: "Data Strategist & Head of BI, Data Science & Ad Operations",
    subtitle: "Stavění data-informed kultury, která přináší reálnou hodnotu.",
    readMoreBio: "Více o mně",
    p1: "Jsem Antonín Kučera, datový lídr s více než 13 lety zkušeností v digitálním poradenství a Business Intelligence.",
    p2: "V současnosti působím jako Head of Business Intelligence v Livesportu, globální sportovně-technologické společnosti, kde vedu týmy analytiků, datových inženýrů a vědců.",
    p3: "Má mise je jednoduchá: Nesprávám pouze data — stavím data-informed kulturu.",
    p4: "Věřím, že mít data nestačí. Skutečná výzva a moje vášeň spočívá v datové strategii, governance, AI a datové gramotnosti. Zaměřuji se na posun od slepé důvěry v čísla k inteligentnímu „data-informed“ rozhodování, které přináší reálnou hodnotu a spokojenost uživatelů.",
    vseTag: "Inženýrský titul (Ing.) v oboru Informační management z VŠE v Praze"
  },
  substack: {
    badge: "Substack Blog & Newsletter",
    title: "O čem píši",
    description: "Praktické poznatky o BigQuery, LLM agentech v analytice, stavění datových týmů a firemní architektuře.",
    btnSubscribe: "Odebírat na Substacku",
    hint: "Pravidelné články na antoninkucera.substack.com"
  },
  topicsSection: {
    title: "Témata & Hlavní Oblasti",
    subtitle: "Klíčové domény, analytická témata a veřejné aktivity.",
    items: [
      {
        id: "bi-ai",
        title: "BI & AI v Datové Analytice",
        description: "Propojování moderního Business Intelligence s generativní AI a LLM agenty v BigQuery pro automatizovanou očistu dat a rychlé vyvozování závěrů.",
        tags: ["BigQuery", "LLM Agenti", "dbt", "Looker"],
        icon: "ai"
      },
      {
        id: "sports-data",
        title: "Sportovní Data & Fotbalová Analytika",
        description: "Zpracování a analytika reálných sportovních dat, zápasových statistik a chování fanoušků pro více než 100 milionů globálních uživatelů.",
        tags: ["Sportovní Analytika", "Real-Time Data", "Livesport"],
        icon: "sports"
      },
      {
        id: "strategy",
        title: "Datové Strategie & Governance",
        description: "Návrh firemních datových strategií, datové governance a programů datové gramotnosti pro přeměnu čísel v udržitelné příjmy.",
        tags: ["Data Governance", "Datová Kultura", "GCP Architektura"],
        icon: "strategy"
      },
      {
        id: "betting",
        title: "Sázení & iGaming Analytika",
        description: "Analýza kurzových trhů, sázkového chování uživatelů, atribučních modelů a datového řízení reklamy (Ad Operations) v iGaming prostředí.",
        tags: ["iGaming Analytika", "Ad Operations", "Market Intelligence"],
        icon: "betting"
      },
      {
        id: "open-data",
        title: "Světová Statistika & Open Data",
        description: "Zkoumání globálních makroekonomických dat, veřejných rozhraní Open Data a transparentní analytika sociálních a finančních trendů.",
        tags: ["Open Data", "Globální Statistiky", "Datová Analýza"],
        icon: "data"
      },
      {
        id: "education",
        title: "Vzdělávání & Datová Gramotnost",
        description: "Rozvíjení datové gramotnosti napříč firmou, mentoring analytických týmů, vystupování na konferencích a natáčení podcastů.",
        tags: ["Mentoring", "Podcasty", "Přednášky"],
        icon: "education"
      },
      {
        id: "projects",
        title: "Projekty & Open Source",
        description: "Veřejné SQL/Python skripty, transformace, dbt modely a výzkumné datové repozitáře dostupné na GitHubu.",
        tags: ["GitHub", "Python", "SQL", "Open Source"],
        icon: "github",
        link: "https://github.com/antoninkucera",
        linkText: "github.com/antoninkucera →"
      },
      {
        id: "investments",
        title: "Investice & Technologie",
        description: "Hodnocení moderních cloudových technologií, optimalizace cloudových nákladů (FinOps), AI infrastruktura a investiční trendy.",
        tags: ["Technologické Trendy", "FinOps", "Investice"],
        icon: "tech"
      }
    ]
  },
  speaking: {
    title: "🎙️ Přednášky, Podcasty & Eventy",
    subtitle: "Rád sdílím zkušenosti s budováním datových týmů a rozvojem datové kultury.",
    items: contentEN.speaking.items
  },
  contact: {
    title: "Napište mi",
    subtitle: "Chcete zprovoznit GCP datovou architekturu, zapojit AI do BI nebo mě pozvat na přednášku?",
    nameLabel: "Vaše jméno",
    emailLabel: "Váš e-mail",
    messageLabel: "Zpráva",
    submitBtn: "Odeslat zprávu",
    sending: "Odesílám...",
    success: "Děkuji! Zpráva byla v pořádku odeslána.",
    error: "Formulář nelze přímo odeslat. Otevírám e-mailový klient...",
    spamNote: "Ochrana proti spamu (Honeypot active)."
  }
};
