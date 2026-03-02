# La Marinella - Sito Web Vetrina

Sito web elegante, minimal e professionale per la gelateria pasticceria artigianale "La Marinella".

## ✨ Caratteristiche

- **Design Professionale**: Look sofisticato e luxury con attenzione ai dettagli
- **Multi-pagina**: Struttura completa con 5 pagine principali
- **Responsive**: Ottimizzato per tutti i dispositivi (desktop, tablet, mobile)
- **Performance**: Sito statico ultra-veloce grazie ad Astro
- **Animazioni Fluide**: Transizioni eleganti e micro-interazioni
- **SEO Ottimizzato**: Meta tags e struttura semantica

## 🚀 Tecnologie

- **Astro 5.x** - Framework statico moderno e performante
- **CSS Custom** - Styling professionale senza framework esterni
- **Google Fonts** - Cormorant Garamond (display) + Inter (body)
- **JavaScript Vanilla** - Minimal JS per interazioni

## 🎨 Design

### Palette Colori
- **Sfondo**: `#F8F7F7` - Grigio chiaro elegante
- **Testo**: `#0C0C0C` - Quasi nero per leggibilità
- **Crema**: `#F1E2C3` - Accento caldo
- **Oro/Bronzo**: `#A67A46` - Accent principale (luxury)
- **Verde**: `#7B7B54` - Secondario (naturale)

### Tipografia
- **Display**: Cormorant Garamond (300, 400, 500, 600)
- **Body**: Inter (300, 400, 500, 600)
- Font weight leggeri per eleganza

## 📄 Struttura Pagine

1. **Home** (`/`) - Hero coinvolgente + features principali
2. **Pasticceria** (`/pasticceria`) - Showcase prodotti pasticceria
3. **Gelateria** (`/gelateria`) - Gusti gelato e qualità
4. **Menu** (`/menu`) - Listino completo con prezzi
5. **Contatti** (`/contatti`) - Informazioni, mappa, orari

## 📦 Struttura Progetto

```
├── public/
│   ├── brand assets/       # Logo, pattern, palette
│   ├── fonts/             # (non più usato, ora Google Fonts)
│   └── images/            # Foto prodotti e hero
├── src/
│   ├── components/        # Componenti Astro riutilizzabili
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   └── Footer.astro
│   ├── layouts/           # Layout base
│   │   └── BaseLayout.astro
│   └── pages/             # Pagine del sito
│       ├── index.astro        # Home
│       ├── pasticceria.astro  # Pasticceria
│       ├── gelateria.astro    # Gelateria
│       ├── menu.astro         # Menu
│       └── contatti.astro     # Contatti
```

## 🛠️ Comandi

```bash
# Installa dipendenze
npm install

# Avvia dev server (http://localhost:4321)
npm run dev

# Build per produzione
npm run build

# Preview build di produzione
npm run preview
```

## 📝 Personalizzazione

### 1. Modificare i Contenuti

I contenuti si trovano direttamente nei file delle pagine:
- **Home**: `src/pages/index.astro` e `src/components/Hero.astro`
- **Pasticceria**: `src/pages/pasticceria.astro`
- **Gelateria**: `src/pages/gelateria.astro`
- **Menu**: `src/pages/menu.astro`
- **Contatti**: `src/pages/contatti.astro`

### 2. Aggiungere Google Maps

Nel file `src/pages/contatti.astro`, cerca la sezione `.map-placeholder` e sostituiscila con:

```html
<iframe
  src="IL_TUO_LINK_GOOGLE_MAPS_EMBED"
  width="100%"
  height="600"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

**Come ottenere il link:**
1. Vai su [Google Maps](https://maps.google.com)
2. Cerca il tuo indirizzo
3. Clicca su "Condividi" → "Incorpora mappa"
4. Copia il codice iframe

### 3. Modificare i Colori

I colori sono definiti in `src/layouts/BaseLayout.astro` nelle variabili CSS:

```css
:root {
  --color-background: #F8F7F7;
  --color-text: #0C0C0C;
  --color-cream: #F1E2C3;
  --color-accent: #A67A46;
  --color-green: #7B7B54;
}
```

### 4. Aggiungere/Rimuovere Prodotti

Modifica gli array nei file delle pagine:
- **Pasticceria**: array `products` in `src/pages/pasticceria.astro`
- **Gelateria**: array `gelatiCategories` in `src/pages/gelateria.astro`
- **Menu**: sezioni menu in `src/pages/menu.astro`

### 5. Modificare Logo e Immagini

Sostituisci i file in `public/brand assets/` e `public/images/` mantenendo gli stessi nomi, oppure aggiorna i percorsi nei componenti.

## 🌐 Deploy

Il sito può essere deployato su qualsiasi piattaforma di hosting statico:

### Netlify (Consigliato)
1. Collega il repository GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Importa il progetto
2. Framework: Astro
3. Deploy automatico

### Altre Opzioni
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Qualsiasi hosting statico

## 🔧 Configurazione Build

Il file `astro.config.mjs` contiene le configurazioni di build. Per deployment personalizzato, consulta la [documentazione Astro](https://docs.astro.build/en/guides/deploy/).

## 📱 Browser Supportati

- Chrome/Edge (ultimi 2 versioni)
- Firefox (ultimi 2 versioni)
- Safari (ultimi 2 versioni)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## 📄 Licenza

Tutti i diritti riservati - La Marinella © 2025

---

**Developed with ❤️ using Astro**
