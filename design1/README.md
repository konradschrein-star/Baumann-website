# DER BAUMANN - Website

Professionelle Handwerker-Website für Dresden

## 🎨 Design-System

### Farbschema (Natürliche Farben)
- **Primär (Holzbraun)**: `#6B4423` (dunkel), `#8B5A2B` (mittel), `#4A2E1A` (sehr dunkel)
- **Sekundär (Waldgrün)**: `#4A7C59` (Waldgrün), `#5F9B6D` (Salbeigrün), `#2F5940` (dunkel)
- **Akzent**: `#D4A574` (helles Holz/Sand)
- **Hintergrund**: `#FDFBF7` (warmes Weiß), `#F5F1EB` (Off-White)

### Typografie
- **Überschriften**: Roboto Slab (Serif)
- **Fließtext**: Inter (Sans-Serif)

## 📁 Struktur

```
website/
├── index.html                 # Startseite
├── assets/
│   ├── css/
│   │   ├── styles.css        # Haupt-Stylesheet
│   │   └── pages.css         # Seiten-spezifische Styles
│   ├── js/
│   │   └── main.js          # JavaScript (Navigation, Formulare)
│   └── images/              # Platzhalter für Bilder
└── pages/
    ├── leistungen.html      # Alle Dienstleistungen
    ├── projekte.html        # Projekt-Portfolio
    ├── ratgeber.html        # Blog/SEO-Content
    ├── kontakt.html         # Kontaktformular
    ├── impressum.html       # Impressum (Pflichtangabe)
    └── datenschutz.html     # Datenschutzerklärung (DSGVO)
```

## 🔧 Anpassungen vor dem Go-Live

### 1. Persönliche Daten aktualisieren

**In `impressum.html` und `datenschutz.html`:**
- `[Ihr vollständiger Name]` → Ihren echten Namen eintragen
- `[Ihre E-Mail-Adresse]` → Ihre Geschäfts-E-Mail
- `[Ihre USt-IdNr.]` → Ihre Umsatzsteuer-Identifikationsnummer
- `[Name des Hosting-Anbieters]` → z.B. "Strato", "1&1", etc.

**Suchen & Ersetzen in allen Dateien:**
```
0176 8549 6825 → Ihre echte Telefonnummer
4917685496825 → Ihre Nummer im internationalen Format (für WhatsApp)
```

### 2. E-Mail-Adresse hinzufügen

Die Website hat noch keine E-Mail-Adresse hinterlegt. Fügen Sie diese hinzu in:
- Footer (alle Seiten)
- Kontaktseite
- Impressum

### 3. Kontaktformular Backend

Das Kontaktformular ist aktuell nur Frontend. Für volle Funktionalität:

**Option A: FormSubmit (kostenlos, einfach)**
```html
<!-- In kontakt.html, Form-Tag ersetzen: -->
<form action="https://formsubmit.co/ihre-email@example.com" method="POST">
```

**Option B: Eigenes PHP-Script**
Erstellen Sie `contact-handler.php` auf Ihrem Server.

**Option C: Email-Service**
Nutzen Sie Services wie SendGrid, EmailJS, oder Formspree.

### 4. Bilder hinzufügen

Aktuell verwenden die Projekt- und Blog-Karten Farbverläufe als Platzhalter.

**Ihre Bilder aus den Ordnern:**
- `Images/` (19 Bilder)
- `more images/` (13 Bilder)

**Bilder einfügen:**
```html
<!-- Vorher (Platzhalter): -->
<div class="project-image" style="background: linear-gradient(...)"></div>

<!-- Nachher (echtes Bild): -->
<img src="../assets/images/terrasse-01.png" alt="WPC-Terrasse" class="project-image">
```

**Empfohlene Optimierungen:**
- Bilder in moderne Formate konvertieren (WebP)
- Größe optimieren (max. 200KB pro Bild)
- Tools: TinyPNG, Squoosh.app

### 5. Google Maps Integration

In `kontakt.html` ist ein Platzhalter für eine Karte.

**Google Maps einbetten:**
1. Gehen Sie zu [Google Maps](https://maps.google.com)
2. Suchen Sie "Lockwitzer Straße 22, 01219 Dresden"
3. Klicken Sie "Teilen" → "Karte einbetten"
4. Kopieren Sie den iframe-Code
5. Ersetzen Sie den Platzhalter-Div

## 🚀 Deployment

### Option 1: Statisches Hosting (empfohlen)
- **Netlify**: Kostenlos, automatische HTTPS
- **Vercel**: Kostenlos, sehr schnell
- **GitHub Pages**: Kostenlos, einfach

### Option 2: Shared Hosting
- **Strato**, **1&1**, **All-Inkl**: Klassisches Web-Hosting
- Einfach alle Dateien per FTP hochladen

### Option 3: Eigener Server
- Benötigt nginx oder Apache
- HTTPS-Zertifikat mit Let's Encrypt

## 📱 Features

- ✅ **Responsive Design**: Funktioniert auf allen Geräten
- ✅ **SEO-optimiert**: Blog-Bereich für bessere Rankings
- ✅ **WhatsApp-Integration**: Direkte Kontaktaufnahme
- ✅ **Kontaktformular**: Mit Validierung
- ✅ **Barrierefreiheit**: WCAG AA konform
- ✅ **Mobile Navigation**: Hamburger-Menü
- ✅ **Smooth Scrolling**: Für Anker-Links
- ✅ **DSGVO-konform**: Datenschutzerklärung & Impressum

## 🎯 SEO-Optimierung

### Bereits implementiert:
- Meta-Beschreibungen auf allen Seiten
- Semantisches HTML (h1, h2, h3)
- Alt-Texte für Bilder (sobald eingefügt)
- Strukturierte URLs
- Mobile-First Design
- Schnelle Ladezeiten

### Zusätzlich empfohlen:
1. **Google My Business** einrichten
2. **Sitemap.xml** erstellen und bei Google einreichen
3. **robots.txt** hinzufügen
4. **Schema.org Markup** für lokales Business
5. Regelmäßig Blog-Artikel veröffentlichen

## 🔒 Rechtliche Hinweise

- ✅ Impressum vorhanden (§ 5 TMG)
- ✅ Datenschutzerklärung vorhanden (DSGVO)
- ⚠️ **Wichtig**: Aktualisieren Sie die Platzhalter-Daten!
- ⚠️ Bei Newsletter: Nutzen Sie Double-Opt-In

## 📞 Kontaktmöglichkeiten

Die Website bietet folgende Kontaktkanäle:
1. Telefon-Links (click-to-call auf Mobil)
2. WhatsApp-Button
3. Kontaktformular
4. E-Mail (nach Ergänzung)

## 🎨 Farben anpassen

Die Farben sind als CSS-Variablen definiert in `styles.css`:

```css
:root {
    --color-primary: #6B4423;        /* Dunkles Holzbraun */
    --color-secondary: #4A7C59;      /* Waldgrün */
    /* ... weitere Farben */
}
```

Ändern Sie diese Werte, um das gesamte Design anzupassen.

## 🐛 Bekannte Limitierungen

1. **Kontaktformular**: Benötigt Backend-Integration
2. **Bilder**: Müssen noch eingefügt werden
3. **Newsletter**: Nur Frontend, benötigt Service wie Mailchimp
4. **Blog-Artikel**: Sind aktuell Platzhalter-Links

## 📚 Weitere Schritte

1. Persönliche Daten ergänzen
2. Echte Projekt-Bilder hinzufügen
3. Kontaktformular mit Backend verbinden
4. Domain registrieren und verbinden
5. SSL-Zertifikat einrichten
6. Google Analytics/Matomo einrichten (DSGVO-konform!)
7. Regelmäßig Content aktualisieren

## 💡 Tipps

- **Content ist König**: Fügen Sie regelmäßig neue Blog-Artikel hinzu
- **Testimonials**: Sammeln Sie echte Kundenbewertungen
- **Fotos**: Nutzen Sie professionelle Fotos Ihrer Arbeiten
- **Updates**: Halten Sie die Projekte-Seite aktuell

---

**Viel Erfolg mit Ihrer Website! 🚀**

Bei Fragen zur Anpassung oder zum Deployment, lassen Sie es mich wissen.
