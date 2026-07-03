import React from "react";

export type NewsCategory = "Pressemitteilung" | "Presse" | "Vortrag" | "Podcast";

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  dateSort: string; // YYYY-MM-DD for sorting
  category: NewsCategory;
  excerpt: string;
  externalUrl?: string;
  body: React.ReactNode;
}

export const news: NewsItem[] = [
  {
    slug: "karriva-launch-2026",
    title: "Wie Direktmarketing-Prinzipien die Jobsuche verändern: Karriva startet als KI-Karrierecoach",
    date: "1. Juli 2026",
    dateSort: "2026-07-01",
    category: "Pressemitteilung",
    excerpt: "custain bringt mit Karriva einen KI-gestützten Karrierecoach für Fach- und Führungskräfte im deutschsprachigen Raum auf den Markt.",
    body: (
      <>
        <p>
          Köln, 1. Juli 2026. custain veröffentlicht heute Karriva, einen KI-gestützten Karrierecoach
          für Fach- und Führungskräfte in Deutschland, Österreich und der Schweiz. Die Plattform
          begleitet Berufstätige durch den gesamten Bewerbungsprozess: von der strategischen
          Karriere-Positionierung über Job-Matching und Anschreiben bis hin zur
          Interview-Vorbereitung, Gehaltsverhandlung und den ersten 90 Tagen im neuen Job.
        </p>
        <p>
          "Wir haben Karriva gebaut, weil ich die gleiche Frage immer wieder gehört habe: Wie
          positioniere ich mich richtig, und wie kommuniziere ich das überzeugend? Karriva deckt
          den gesamten Weg ab, auf Deutsch, für den DACH-Markt",
          sagt Dirk Walter, Gründer von custain und Karriva.
        </p>
        <p>
          Karriva analysiert Lebensläufe automatisch, bewertet Stellenanzeigen nach Passgenauigkeit
          und generiert individuelle Anschreiben. Ein zentrales Feature ist die
          Karriere-Positionierung: Eine strukturierte KI-Analyse in sechs Abschnitten zeigt
          Stärken, Marktposition und konkrete nächste Schritte. Für die späteren Phasen der
          Jobsuche stehen Assessment-Coaching, Gehaltsverhandlungs-Coaching und ein
          persönlicher Onboarding-Plan bereit.
        </p>
        <p>
          "Eine Bewerbung ist eine Direktmarketing-Kampagne in eigener Sache. Das klingt nüchtern,
          ist aber genau die richtige Denkweise. Aus Jahren im Kundenbeziehungsmanagement weiß ich:
          Wer zielgenau und relevant kommuniziert, setzt sich durch. Karriva gibt Jobsuchenden das
          Handwerkszeug dafür", ergänzt Walter.
        </p>
        <p>
          Karriva ist ab sofort unter <a href="https://karriva.com" target="_blank" rel="noopener noreferrer">karriva.com</a> verfügbar.
          Ein kostenloser Einstiegsplan ist dauerhaft verfügbar. Bezahlpläne starten ab 29 Euro
          pro Monat mit 14 Tagen kostenlosem Test.
        </p>
        <h3>Über custain</h3>
        <p>
          custain ist eine Beratung für Customer Management und KI-Produktentwicklung mit Sitz in
          Köln. Seit 2013 begleitet custain Unternehmen aus Telekommunikation, Medien, Energie und
          Finanzen bei der strategischen Führung ihrer Kundenbeziehungen.
        </p>
        <h3>Kontakt</h3>
        <p>
          Dirk Walter<br />
          custain, Customer Management Beratung<br />
          <a href="mailto:info@custain.de">info@custain.de</a><br />
          <a href="https://custain.de">custain.de</a>
        </p>
      </>
    ),
  },
  {
    slug: "crm-konsumgueterbereich-podcast-2020",
    title: "CRM im Konsumgüterbereich",
    date: "August 2020",
    dateSort: "2020-08-01",
    category: "Podcast",
    excerpt: "Dirk Walter spricht im CRM-Podcast über seine Erfahrungen mit Customer Relationship Management: Implementierung bei der Dr. Wolff Gruppe, relevante Kanäle, Kundenbindung und Churn-Prevention.",
    externalUrl: "https://www.crmpodcast.de",
    body: (
      <>
        <p>
          Dirk Walter ist zu Gast im CRM-Podcast und teilt seine Erfahrungen aus über einem
          Jahrzehnt Kundenbindungsarbeit. Im Gespräch geht es um die Implementierung von CRM-Systemen
          bei der Dr. Wolff Gruppe, die Bedeutung relevanter Kommunikationskanäle und konkrete
          Strategien zur Churn-Prevention.
        </p>
        <p>
          Zentrale These: Kundenbindung entsteht nicht durch Systeme, sondern durch relevante
          Angebote zum richtigen Zeitpunkt. Technologie ist Mittel, nicht Zweck.
        </p>
        <p>
          <a href="https://www.crmpodcast.de" target="_blank" rel="noopener noreferrer">Zur Podcast-Episode ↗</a>
        </p>
      </>
    ),
  },
  {
    slug: "kuendigungshuerde-zeit-2019",
    title: "Kündigungshürden abbauen",
    date: "14. März 2019",
    dateSort: "2019-03-14",
    category: "Presse",
    excerpt: "Dirk Walter wird in der ZEIT zum Thema Kündigungsbarrieren zitiert: Unternehmen sollten rechtzeitig bessere Angebote unterbreiten, statt durch Hürden Verdruss zu erzeugen.",
    externalUrl: "https://www.zeit.de/2019/12/telekommunikation-mobilfunk-anbieterwechsel-kundenservice-verbraucherzentrale",
    body: (
      <>
        <p>
          Die ZEIT berichtet über Kündigungsbarrieren in der Telekommunikationsbranche und zitiert
          Dirk Walter zu seiner Position als Kundenmanagement-Experte.
        </p>
        <p>
          Walters Kernthese: "Unternehmen sollten rechtzeitig bessere Angebote unterbreiten, bevor
          Kunden kündigen." Kündigungshürden erzeugten kurzfristig Vertragsbindung, langfristig
          jedoch Verdruss und Vertrauensverlust. Retention funktioniert durch Relevanz, nicht durch
          Barrieren.
        </p>
        <p>
          <a href="https://www.zeit.de/2019/12/telekommunikation-mobilfunk-anbieterwechsel-kundenservice-verbraucherzentrale" target="_blank" rel="noopener noreferrer">Zum Artikel in der ZEIT ↗</a>
        </p>
      </>
    ),
  },
  {
    slug: "digitalisierung-vertrieb-bdew-2017",
    title: "Digitalisierung im Vertrieb: Schritt halten oder vorausgehen?",
    date: "7. Juli 2017",
    dateSort: "2017-07-07",
    category: "Vortrag",
    excerpt: "Dirk Walter referiert auf dem BDEW-Informationstag über digitale Kommunikationsstrategien und Kundenkontaktmaßnahmen im Energiesektor.",
    body: (
      <>
        <p>
          Auf dem BDEW-Informationstag "Digitalisierung im Vertrieb" stellt Dirk Walter dar, wie
          Energieversorger digitale Kommunikationsstrategien nutzen können, um Kundenkontakte
          relevanter und effizienter zu gestalten.
        </p>
        <p>
          Der Vortrag zeigt an konkreten Beispielen, welche digitalen Kanäle in der
          Kundenansprache wirken, wo klassische Direktansprache weiterhin überlegen ist und wie
          beide Welten sinnvoll kombiniert werden können. Besonderes Augenmerk liegt auf der
          Segmentierung: Nicht jeder Kanal passt zu jedem Kundensegment.
        </p>
      </>
    ),
  },
  {
    slug: "aboalarm-brandeins-2016",
    title: "Zum nächstmöglichen Zeitpunkt",
    date: "Januar 2016",
    dateSort: "2016-01-01",
    category: "Presse",
    excerpt: "brand eins berichtet über Online-Kündigungsdienste. Dirk Walter kommentiert: Je höher die Hürden, desto unzufriedener wird der Kunde.",
    externalUrl: "https://www.brandeins.de/archiv/2016/befreiung/aboalarm-abo-kuendigen-zum-naechstmoeglichen-zeitpunkt/",
    body: (
      <>
        <p>
          brand eins widmet sich in der Ausgabe Januar 2016 dem Thema Kündigung und den
          aufkommenden Online-Diensten, die Verbrauchern das Kündigen von Abonnements erleichtern.
        </p>
        <p>
          Dirk Walter kommentiert die Entwicklung aus Unternehmensperspektive: "Je höher die
          Hürden, desto unzufriedener wird er." Gemeint ist der Kunde, der kündigen möchte.
          Unternehmen, die Kündigungen erschweren, verschieben das Problem nur und beschädigen
          dabei das Vertrauen dauerhaft.
        </p>
        <p>
          <a href="https://www.brandeins.de/archiv/2016/befreiung/aboalarm-abo-kuendigen-zum-naechstmoeglichen-zeitpunkt/" target="_blank" rel="noopener noreferrer">Zum Artikel in brand eins ↗</a>
        </p>
      </>
    ),
  },
  {
    slug: "direktansprache-energiemarkt-bdew-2014",
    title: "Direktansprache im Energiemarkt",
    date: "5. Juni 2014",
    dateSort: "2014-06-05",
    category: "Vortrag",
    excerpt: "custain präsentiert auf einer BDEW-Veranstaltung über erfolgreiche Direktansprache und Vertriebswege im liberalisierten Energiemarkt.",
    body: (
      <>
        <p>
          Auf einer BDEW-Veranstaltung stellt custain Erkenntnisse aus der Praxis vor: Welche
          Direktansprache-Methoden funktionieren im liberalisierten Energiemarkt, welche Kanäle
          bringen welche Konversionsraten und wie lassen sich Neukundengewinnung und
          Bestandskundenpflege sinnvoll kombinieren.
        </p>
        <p>
          Der Vortrag basiert auf Projekterfahrungen mit regionalen und überregionalen
          Energieversorgern und zeigt konkrete Maßnahmen, die sich in der Praxis bewährt haben.
        </p>
      </>
    ),
  },
  {
    slug: "kundenrueckgewinnung-bdew-2013",
    title: "Professionelle Kundenrückgewinnung",
    date: "9. Oktober 2013",
    dateSort: "2013-10-09",
    category: "Vortrag",
    excerpt: "Dirk Walter berichtet auf einer BDEW-Veranstaltung über strukturierte Kundenbindungs- und Rückgewinnungsstrategien aus der Praxis.",
    body: (
      <>
        <p>
          Kundenrückgewinnung ist mehr als ein Rabattangebot zum richtigen Zeitpunkt. Auf der
          BDEW-Veranstaltung stellt Dirk Walter einen strukturierten Ansatz vor: Segmentierung
          nach Kündigungsgrund, kanalspezifische Ansprache und messbare Erfolgskriterien.
        </p>
        <p>
          Besonders im Fokus: Wie unterscheiden sich Kunden, die aus Preisgründen kündigen, von
          solchen, die unzufrieden mit dem Service sind? Und welche Rückgewinnungsmaßnahme
          passt zu welchem Segment?
        </p>
      </>
    ),
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find(n => n.slug === slug);
}

export const categoryColors: Record<NewsCategory, string> = {
  Pressemitteilung: "var(--teal)",
  Presse: "var(--navy-600)",
  Vortrag: "var(--muted)",
  Podcast: "var(--muted)",
};
