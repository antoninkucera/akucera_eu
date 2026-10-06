export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
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
  projects: {
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  speaking: {
    title: string;
    subtitle: string;
    items: Array<{
      date: string;
      title: string;
      event: string;
      link?: string;
      type: 'conference' | 'podcast' | 'meetup';
    }>;
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

export const contentCS: Content = {
  meta: {
    title: "Antonín Kučera — Data Strategist & Head of BI",
    description: "Osobní profil Antonína Kučery. Head of BI v Livesportu, Data Strategist, spíkr a autor na Substacku. Specialista na GCP, BigQuery, AI a datovou kulturu."
  },
  nav: {
    about: "O mně",
    experience: "Cesta & Skupiny",
    speaking: "Přednášky & Podcasty",
    substack: "Substack",
    contact: "Kontakt",
    langSwitch: "EN",
    langSwitchUrl: "/en/",
    langSwitchLabel: "English version"
  },
  hero: {
    tagline: "Head of BI @ Livesport · Data Strategist · AI & Analytics",
    title1: "Být data-informed,",
    title2: "nikoli slepě data-driven",
    description: "Jsem Antonín Kučera. Věříš, že data bez strategie a governance jsou jen šum? Pomáhám budovat firemní kulturu založenou na smysluplných datových rozhodnutích v Google Cloud a AI.",
    btnSubstack: "Číst můj Substack",
    btnGithub: "GitHub Profil"
  },
  bio: {
    badge: "13+ let v datech a BI",
    title: "Můj příběh & Filozofie",
    subtitle: "Od SEO a webové analytiky po vedení BI týmu pro stovky milionů uživatelů.",
    p1: "Aktuálně vodicí tým jako Head of Business Intelligence v Livesportu — globálním sportovně-technologickém lídrovi. Vedou týmy analytiků, datových inženýrů a vědců.",
    p2: "Má mise je jednoduchá: Nebuduji pouze datové pipeline, ale tvořím data-informed kulturu. Skutečná výzva spočívá v datové strategii, governance, gramotnosti a smysluplném využití AI.",
    p3: "Moje cesta začala v digital marketingu, SEO a vývoji ETL pipeline v SQL a R (R Shiny). Později jsem inicioval migraci datových pipeline do Google Cloud Platform, do které jsem se doslova zamiloval.",
    p4: "V roce 2020 jsem v Livesportu postavil vyhrazený BI tým, který pokrývá klíčové analytické potřeby firmy. Ve volném čase testuji nejnovější služby v GCP (BigQuery, Cloud Composer) a integraci LLM agentů do BI.",
    vseTag: "VŠE Praha — Inženýrský titul (Ing.) v oboru Informační management"
  },
  substack: {
    badge: "Substack Blog & Newsletter",
    title: "Můj zápisník o datech, GCP a AI",
    description: "Pravidelně sdílím praktické postřehy o datové architektuře v BigQuery, dbt/Dataformu, využití LLM v BI a budování data-informed kultury.",
    btnSubscribe: "Odebírat na Substacku",
    hint: "Připojte se k čtenářům na antoninkucera.substack.com"
  },
  projects: {
    title: "Oblast působení & Rozcestník",
    subtitle: "Předhled klíčových domén a mých veřejných projektů.",
    card1Title: "Livesport & Datová Strategie",
    card1Desc: "Vedení BI, Data Science & Ad Operations týmů. Návrh datové architektury v Google Cloud Platform pro stovky milionů uživatelů.",
    card2Title: "GitHub & Open Source",
    card2Desc: "Ukázky skriptů, SQL/Python transformací, dbt projektů a výzkum datových integrací.",
    card3Title: "Generativní AI v BI & Analytics",
    card3Desc: "Využití LLM agentů v BigQuery, automatizace datové očisty a vytváření AI pomocníků pro analytiky.",
    card4Title: "Osobní Hub (akucera.eu)",
    card4Desc: "Lehký statický web bez těžkopádného CMS pro prezentaci myšlenek, přednášek a rozcestník projektů."
  },
  speaking: {
    title: "🎙️ Přednášky, Podcasty & Eventy",
    subtitle: "Rád sdílím zkušenosti s budováním datových týmů a datové kultury.",
    items: [
      {
        date: "27. 11. 2025",
        title: "BI leader: agent with a license to change",
        event: "DataDay 2025",
        type: "conference"
      },
      {
        date: "17. 3. 2025",
        title: "Rozhovor o datové strategii a BI v Livesportu",
        event: "IT Talks Podcast",
        type: "podcast"
      },
      {
        date: "20. 11. 2024",
        title: "Data Cleaning with SQL and ML",
        event: "DataDay 2024",
        type: "conference"
      },
      {
        date: "14. 9. 2024",
        title: "Pokročilá analytika a organizace týmů",
        event: "MeasureCamp Czechia 2024",
        type: "conference"
      },
      {
        date: "23. 5. 2023",
        title: "BI jako mozek moderní firmy",
        event: "dCast Podcast",
        type: "podcast"
      },
      {
        date: "26. 1. 2023",
        title: "Head of BI v Livesportu (Epizoda #23)",
        event: "DataTalk Podcast",
        link: "https://www.datatalk.cz/podcast/epizoda-23",
        type: "podcast"
      },
      {
        date: "10. 6. 2022",
        title: "Being data-informed, not data-driven",
        event: "WebExpo Conference 2022",
        type: "conference"
      }
    ]
  },
  contact: {
    title: "Napište mi zprávu",
    subtitle: "Chcete zkonzultovat datovou strategii, pozvat mě na event nebo popovídat o GCP a AI?",
    nameLabel: "Vaše jméno",
    emailLabel: "Váš e-mail",
    messageLabel: "Zpráva",
    submitBtn: "Odeslat zprávu",
    sending: "Odesílám...",
    success: "Zpráva byla úspěšně odeslána! Ozvu se vám co nejdříve.",
    error: "Došlo k chybě při odesílání. Můžete mě kontaktovat přímo na antonio.kucera@gmail.com.",
    spamNote: "Formulář obsahuje ochranu proti spamu (Honeypot + reCAPTCHA/Web3Forms)."
  }
};

export const contentEN: Content = {
  meta: {
    title: "Antonín Kučera — Data Strategist & Head of BI",
    description: "Personal profile of Antonín Kučera. Head of BI at Livesport, Data Strategist, speaker, and Substack writer. Specialist in GCP, BigQuery, AI, and data culture."
  },
  nav: {
    about: "About",
    experience: "Journey",
    speaking: "Speaking & Podcasts",
    substack: "Substack",
    contact: "Contact",
    langSwitch: "CZ",
    langSwitchUrl: "/",
    langSwitchLabel: "Česká verze"
  },
  hero: {
    tagline: "Head of BI @ Livesport · Data Strategist · AI & Analytics",
    title1: "Being data-informed,",
    title2: "not blindly data-driven",
    description: "I am Antonín Kučera. I believe data without strategy and governance is just noise. I help build data-informed cultures powered by Google Cloud Platform and Artificial Intelligence.",
    btnSubstack: "Read my Substack",
    btnGithub: "GitHub Profile"
  },
  bio: {
    badge: "13+ years in Data & BI",
    title: "My Journey & Philosophy",
    subtitle: "From SEO and web analytics to leading BI teams serving hundreds of millions of global users.",
    p1: "Currently leading the data team as Head of Business Intelligence at Livesport — a global sports media leader. I lead teams of analysts, data engineers, and data scientists.",
    p2: "My mission is simple: I don't just manage data — I build data-informed cultures. The real passion lies in Data Strategy, Governance, Literacy, and practical AI application.",
    p3: "My path started in digital marketing, SEO, and ETL pipeline development in SQL & R (R Shiny). Later, I spearheaded the migration of our data pipelines to Google Cloud Platform, which I fell in love with.",
    p4: "In 2020, we established a dedicated Business Intelligence unit at Livesport. In my spare time, I explore cutting-edge GCP services (BigQuery, Cloud Composer) and LLM agent integration into BI.",
    vseTag: "Prague University of Economics and Business — Master's Degree in Information Management"
  },
  substack: {
    badge: "Substack Blog & Newsletter",
    title: "My writing on Data, Cloud & AI",
    description: "I regularly share actionable insights on BigQuery architecture, dbt/Dataform, LLM agents in BI, and building a true data-informed culture.",
    btnSubscribe: "Subscribe on Substack",
    hint: "Join readers at antoninkucera.substack.com"
  },
  projects: {
    title: "Focus Areas & Hub",
    subtitle: "Key domains and open-source activities.",
    card1Title: "Livesport & Data Strategy",
    card1Desc: "Leading BI, Data Science & Ad Operations. Designing cloud data architecture on GCP for hundreds of millions of monthly active users.",
    card2Title: "GitHub & Open Source",
    card2Desc: "Script repositories, SQL/Python transformation workflows, dbt projects, and data research.",
    card3Title: "Generative AI in BI & Analytics",
    card3Desc: "Leveraging LLM agents in BigQuery, automated data cleaning, and custom AI assistants for analysts.",
    card4Title: "Personal Hub (akucera.eu)",
    card4Desc: "A lightweight static website without heavy CMS bloat to share ideas, talks, and project links."
  },
  speaking: {
    title: "🎙️ Public Speaking & Podcasts",
    subtitle: "I am passionate about sharing insights on data leadership and building data cultures.",
    items: [
      {
        date: "Nov 27, 2025",
        title: "BI leader: agent with a license to change",
        event: "DataDay 2025",
        type: "conference"
      },
      {
        date: "Mar 17, 2025",
        title: "Data Strategy & BI at Livesport",
        event: "IT Talks Podcast",
        type: "podcast"
      },
      {
        date: "Nov 20, 2024",
        title: "Data Cleaning with SQL and ML",
        event: "DataDay 2024",
        type: "conference"
      },
      {
        date: "Sep 14, 2024",
        title: "Advanced Analytics & Team Structure",
        event: "MeasureCamp Czechia 2024",
        type: "conference"
      },
      {
        date: "May 23, 2023",
        title: "BI as the brain of the company",
        event: "dCast Podcast",
        type: "podcast"
      },
      {
        date: "Jan 26, 2023",
        title: "Head of BI at Livesport (Episode #23)",
        event: "DataTalk Podcast",
        link: "https://www.datatalk.cz/podcast/epizoda-23",
        type: "podcast"
      },
      {
        date: "Jun 10, 2022",
        title: "Being data-informed, not data-driven",
        event: "WebExpo Conference 2022",
        type: "conference"
      }
    ]
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Interested in consulting on GCP data strategy, inviting me to speak, or discussing AI in BI?",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Message",
    submitBtn: "Send Message",
    sending: "Sending...",
    success: "Your message has been sent successfully! I'll get back to you soon.",
    error: "Failed to send message. You can email me directly at antonio.kucera@gmail.com.",
    spamNote: "Form protected against spam (Honeypot + Web3Forms)."
  }
};
