export type Language = "de" | "en";

export const dictionaries = {
  de: {
    navbar: {
      start: "Start",
      services: "Leistungen",
      projects: "Projekte",
      about: "Über uns",
      contact: "Kontakt",
      requestQuote: "Angebot anfordern",
      language: "DE / EN"
    },
    hero: {
      reviews: "4.823 Google Rezensionen",
      title: "Ihre erfahrene <span class='text-copper-500'>Schlosserei & Metallbau</span> in München",
      subtitle: "Traditionelles Handwerk, modernste Sicherheitstechnik und zuverlässiger Schlüsselnotdienst. Wir öffnen Ihnen Tür und Tor.",
      ctaPrimary: "Tür aufmachen lassen",
      ctaSecondary: "Anderes Angebot anfordern",
      scroll: "Scrollen"
    },
    services: {
      tag: "Unsere Leistungen",
      title: "Premium Metallbau & Schlosserei",
      description: "Als gewerbliche Bauschlosserei sind wir spezialisiert auf Metallschlösser und Beschläge sowie deren Reparatur. Wir bieten erstklassige Verarbeitung und schnellen Vor-Ort-Service.",
      cta: "Jetzt anfragen",
      items: [
        {
          title: "Schlüsseldienst & Notöffnung",
          description: "Schnelle und zuverlässige Türöffnung in München und Umgebung. Beschädigungsfrei, wenn möglich."
        },
        {
          title: "Einbruchschutz & Sicherheitstechnik",
          description: "Sichern Sie Ihr Eigenheim oder Gewerbe. Wir montieren Panzerriegel, Zusatzschlösser und Fenstergitter."
        },
        {
          title: "Metallbau & Konstruktionen",
          description: "Geländer, Zaunanlagen, Gitter und Tore nach Maß für Privat- und Gewerbekunden."
        }
      ],
      emergency: {
        title: "Notfall oder dringende Reparatur?",
        subtitle: "Unser Team ist in München schnell vor Ort."
      }
    },
    projects: {
      tag: "Referenzen",
      title: "Unsere Arbeiten",
      description: "Vom massiven Stahltor bis zur feinen Schließanlage: Werfen Sie einen Blick auf einige unserer erfolgreich realisierten Projekte für Kunden im Raum München.",
      categories: {
        security: "Einbruchschutz",
        metal: "Metallbau",
        construction: "Konstruktion",
        systems: "Sicherheitstechnik"
      },
      items: [
        "Sicherheitstüren",
        "Maßgefertigtes Tor",
        "Treppengeländer",
        "Schließanlagen",
        "Stahltreppe",
        "Fenstergitter"
      ]
    },
    about: {
      tag: "Über uns",
      title: "Ihre erfahrene Schlosserei in München",
      p1: "<strong class='text-white'>Sie sind auf der Suche nach einem Schlosser mit Schlüsseldienst?</strong> Dann wenden Sie sich an unser Team der Werner Hastreiter GmbH in München! Unsere Handwerker öffnen Ihnen Tür und Tor.",
      p2: "Als gewerbliche Bauschlosserei sind wir spezialisiert auf Metallschlösser und Beschläge sowie deren Reparatur. Wer unsere Metallbaufirma vor Ort aufsuchen möchte, findet am schnellsten mit der U-Bahn zu uns.",
      p3: "Im Einzugsgebiet München besuchen wir unsere gewerblichen und privaten Kunden gerne auch im Außendienst.",
      benefits: [
        "Zertifizierter Schweißfachbetrieb",
        "Jahrelange Erfahrung in München",
        "Gewerbliche und private Kunden",
        "Zuverlässiger Außendienst vor Ort"
      ],
      cta: "Lernen Sie uns kennen",
      badgeTitle: "Qualität & Präzision",
      badgeSubtitle: "Seit vielen Jahren Ihr verlässlicher Partner in München."
    },
    contact: {
      tag: "Kontakt",
      title: "Lassen Sie uns zusammenarbeiten",
      description: "Haben Sie ein Projekt im Auge oder benötigen einen schnellen Notdienst? Kontaktieren Sie uns für ein kostenloses Angebot.",
      details: {
        location: "Standort",
        phone: "Telefon / Notdienst",
        email: "E-Mail",
        hours: "Öffnungszeiten"
      },
      hoursText: "Mo – Do: 08:30 – 17:00<br />Fr: 08:30 – 14:00",
      form: {
        title: "Kostenloses Angebot anfordern",
        nameLabel: "Name / Firma",
        namePlaceholder: "Max Mustermann",
        phoneLabel: "Telefon",
        phonePlaceholder: "+49 ...",
        emailLabel: "E-Mail Adresse",
        emailPlaceholder: "mail@beispiel.de",
        messageLabel: "Ihre Nachricht oder Anfrage",
        messagePlaceholder: "Wie können wir Ihnen helfen?",
        submit: "Nachricht senden"
      }
    },
    footer: {
      about: "Ihre erfahrene Schlosserei in München. Wir sind spezialisiert auf Metallbau, Schlüsseldienst und Sicherheitstechnik für private und gewerbliche Kunden.",
      navigation: "Navigation",
      legal: "Rechtliches",
      navItems: ["Startseite", "Leistungen", "Referenzen", "Über uns", "Kontakt"],
      legalItems: ["Impressum", "Datenschutz", "AGB"],
      rights: "Alle Rechte vorbehalten.",
      designed: "Designed in Germany."
    }
  },
  en: {
    navbar: {
      start: "Home",
      services: "Services",
      projects: "Projects",
      about: "About Us",
      contact: "Contact",
      requestQuote: "Request Quote",
      language: "EN / DE"
    },
    hero: {
      reviews: "4,823 Google Reviews",
      title: "Your experienced <span class='text-copper-500'>Locksmith & Metalworks</span> in Munich",
      subtitle: "Traditional craftsmanship, modern security technology, and reliable emergency locksmith. We open doors and gates for you.",
      ctaPrimary: "Emergency Door Opening",
      ctaSecondary: "Request a Custom Quote",
      scroll: "Scroll"
    },
    services: {
      tag: "Our Services",
      title: "Premium Metalworks & Locksmith",
      description: "As a commercial locksmith, we evaluate and repair metal locks and fittings. We offer first-class workmanship and fast on-site service.",
      cta: "Inquire Now",
      items: [
        {
          title: "Locksmith & Emergency Opening",
          description: "Fast and reliable door opening in Munich and surrounding areas. Damage-free whenever possible."
        },
        {
          title: "Burglary Protection & Security",
          description: "Secure your home or business. We install crossbars, additional locks, and window grilles."
        },
        {
          title: "Metalworks & Constructions",
          description: "Custom railings, fences, grilles, and gates for private and commercial clients."
        }
      ],
      emergency: {
        title: "Emergency or urgent repair?",
        subtitle: "Our team is quickly on-site in Munich."
      }
    },
    projects: {
      tag: "References",
      title: "Our Work",
      description: "From massive steel gates to fine locking systems: Take a look at some of our successfully completed projects for clients in the Munich area.",
      categories: {
        security: "Burglary Protection",
        metal: "Metalworks",
        construction: "Construction",
        systems: "Security Technology"
      },
      items: [
        "Security Doors",
        "Custom Gate",
        "Stair Railings",
        "Locking Systems",
        "Steel Stairs",
        "Window Grilles"
      ]
    },
    about: {
      tag: "About Us",
      title: "Your Experienced Locksmith in Munich",
      p1: "<strong class='text-white'>Are you looking for a locksmith with emergency services?</strong> Then contact our team at Werner Hastreiter GmbH in Munich! Our craftsmen will open doors and gates for you.",
      p2: "As a commercial metal workshop, we specialize in metal locks and fittings as well as their repair. If you want to visit our metal construction company on site, the fastest way is by subway.",
      p3: "In the Munich catchment area, we are also happy to visit our commercial and private customers in the field.",
      benefits: [
        "Certified Welding Company",
        "Years of Experience in Munich",
        "Commercial and Private Clients",
        "Reliable On-Site Field Service"
      ],
      cta: "Get to Know Us",
      badgeTitle: "Quality & Precision",
      badgeSubtitle: "Your reliable partner in Munich for many years."
    },
    contact: {
      tag: "Contact",
      title: "Let's Work Together",
      description: "Have a project in mind or need a quick emergency service? Contact us for a free quote.",
      details: {
        location: "Location",
        phone: "Phone / Emergency",
        email: "Email",
        hours: "Business Hours"
      },
      hoursText: "Mon – Thu: 08:30 – 17:00<br />Fri: 08:30 – 14:00",
      form: {
        title: "Request a Free Quote",
        nameLabel: "Name / Company",
        namePlaceholder: "John Doe",
        phoneLabel: "Phone",
        phonePlaceholder: "+49 ...",
        emailLabel: "Email Address",
        emailPlaceholder: "mail@example.com",
        messageLabel: "Your Message or Inquiry",
        messagePlaceholder: "How can we help you?",
        submit: "Send Message"
      }
    },
    footer: {
      about: "Your experienced locksmith in Munich. We specialize in metal construction, locksmith services, and security technology for private and commercial customers.",
      navigation: "Navigation",
      legal: "Legal",
      navItems: ["Home", "Services", "References", "About Us", "Contact"],
      legalItems: ["Imprint", "Privacy Policy", "Terms & Conditions"],
      rights: "All rights reserved.",
      designed: "Designed in Germany."
    }
  }
};
