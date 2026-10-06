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

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    bioPage: string;
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
    description: "Data Strategist & Head of BI, Data Science & Ad Operations at Livesport. Advocate for data-informed cultures, GCP cloud analytics, and AI."
  },
  nav: {
    about: "About",
    bioPage: "Full Bio",
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
  projects: {
    title: "Focus Areas & Hub",
    subtitle: "Key projects, cloud data engineering, and open-source activities.",
    card1Title: "Livesport & Data Strategy",
    card1Desc: "Overseeing data strategy, BI, Data Science, and Ad Operations for a global sports media company serving 100M+ monthly users.",
    card2Title: "GitHub Repositories",
    card2Desc: "Data pipeline code, SQL/Python transformations, dbt models, and analytical tools.",
    card3Title: "Generative AI in BI",
    card3Desc: "Leveraging LLM agents in BigQuery, automated data cleaning with SQL and ML, and custom AI tooling for analysts.",
    card4Title: "Personal Hub (akucera.eu)",
    card4Desc: "A lightweight, static site built for speed, performance, and clear knowledge sharing without heavy CMS bloat."
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
    description: "Antonín Kučera je Head of BI v Livesportu a Data Strategist. Specialista na GCP, BigQuery, AI a stavění datově informovaných týmů."
  },
  nav: {
    about: "O mně",
    bioPage: "Celý profil",
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
  projects: {
    title: "Oblast působení & Rozcestník",
    subtitle: "Přehled klíčových projektů a veřejných repozitářů.",
    card1Title: "Livesport & Datová Strategie",
    card1Desc: "Řízení BI, Data Science a Ad Operations v globálním sportovně-technologickém lídrovi pro 100 miliónů měsíčních uživatelů.",
    card2Title: "GitHub Repozitáře",
    card2Desc: "Kód datových pipeline, SQL/Python transformace, dbt modely a analytické nástroje.",
    card3Title: "Generativní AI v BI",
    card3Desc: "Využití LLM agentů v BigQuery, automatizované čištění dat pomocí SQL/ML a interní AI asistenti.",
    card4Title: "Osobní Hub (akucera.eu)",
    card4Desc: "Lehký statický web bez těžkopádného CMS pro prezentaci myšlenek, přednášek a rozcestník projektů."
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
