# La Marinella - Style Guide

Guida di riferimento per mantenere una linea di stile coerente su tutte le pagine del sito.

---

## 🎨 Palette Colori

### Colori Primari
```css
/* Nero - Testo principale */
rgb(12, 12, 12)

/* Oro/Accent - Elementi decorativi, hover states */
rgb(185, 140, 75)

/* Verde Oliva - Accenti secondari, icone, CTA */
rgb(123, 123, 84)

/* Beige Chiaro - Sfondi alternati */
rgb(250, 248, 245)

/* Chamoisee - Testo secondario su sfondi chiari */
rgb(241, 226, 195)
```

### Utilizzo dei Colori
- **Oro**: Hover states, sottotitoli in evidenza, decorazioni principali
- **Verde Oliva**: Icone Features, CTA buttons, bordi decorativi, stati hover alternativi
- **Gradiente Verde→Oro**: Linee di accento, transizioni hover eleganti

---

## 📐 Layout & Spacing

### Container
```css
.container-custom {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem; /* mobile */
  padding: 0 3rem; /* lg */
  padding: 0 4rem; /* xl */
}
```

### Section Padding
```css
.section-padding {
  padding: 6rem 0; /* mobile */
  padding: 8rem 0; /* lg */
  padding: 10rem 0; /* xl */
}
```

### Grid Systems
```css
/* Features/Cards Grid - 3 colonne */
grid lg:grid-cols-3 gap-8 lg:gap-12

/* Bento Gallery - 4 colonne */
grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4

/* Info Cards - 3 colonne */
grid md:grid-cols-3 gap-8 lg:gap-12
```

---

## 🔤 Tipografia

### Font Families
```css
/* Serif - Titoli, elementi eleganti */
font-family: 'Cormorant Garamond', serif;

/* Sans-serif - Corpo testo, UI */
font-family: 'Inter', sans-serif;
```

### Gerarchia Titoli

#### H1 - Hero Title
```css
text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]
font-serif
leading-[0.95]
```

#### H2 - Section Titles
```css
text-4xl md:text-5xl lg:text-6xl
font-serif
mb-6
```

#### H3 - Card/Feature Titles
```css
text-2xl md:text-3xl
font-serif
mb-4
```

### Body Text
```css
/* Paragrafi standard */
text-lg md:text-xl
text-[rgb(12,12,12)]/70
leading-relaxed

/* Sottotitoli Hero */
text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem]
font-light
tracking-wide
leading-[1.6]
```

### Uppercase Text (Navigation, CTA)
```css
text-[0.75rem] md:text-[0.8125rem]
font-light
tracking-[0.15em]
uppercase
```

---

## 🎭 Componenti & Pattern

### Navbar
**Comportamento:**
- Trasparente in cima (logo bianco, testo bianco)
- Glass effect dopo 100px scroll (bg-white/80, backdrop-blur-xl, testo scuro)
- Auto-hide quando scrolli giù (dopo 150px)
- Riappare quando scrolli su

**Classi:**
```astro
<nav class="fixed top-0 left-0 right-0 z-[1000] transition-all duration-500">
  <!-- Logo bianco iniziale, cambia a nero con scroll -->

  <!-- Desktop Menu: hidden md:flex gap-10 xl:gap-12 -->
  <!-- Mobile Menu: md:hidden (component React) -->
</nav>
```

### Buttons/CTA

#### Primary Button (Verde)
```html
<a class="inline-flex items-center gap-3 px-8 py-4
   bg-[rgb(123,123,84)] text-white
   text-sm font-light tracking-[0.15em] uppercase
   transition-all duration-500
   hover:bg-[rgb(185,140,75)] hover:shadow-lg hover:scale-105">
  Testo CTA
</a>
```

#### Secondary Button (Outlined Verde)
```html
<a class="inline-flex items-center gap-3 px-8 py-4
   border border-[rgb(123,123,84)] text-[rgb(123,123,84)]
   text-sm font-light tracking-[0.15em] uppercase
   transition-all duration-500
   hover:bg-[rgb(123,123,84)] hover:text-white hover:shadow-lg">
  Testo CTA
</a>
```

#### Dark Button (Hover Verde)
```html
<a class="inline-flex items-center gap-3 px-8 py-4
   bg-[rgb(12,12,12)] text-white
   text-sm font-light tracking-[0.15em] uppercase
   transition-all duration-500
   hover:bg-[rgb(123,123,84)] hover:shadow-lg">
  Testo CTA
</a>
```

### Cards

#### Feature Card (Glass Morphism)
```tsx
<article class="group relative
  bg-white/60 backdrop-blur-sm
  border border-[rgb(123,123,84)]/10
  p-8 lg:p-10
  transition-all duration-500
  hover:bg-white hover:border-[rgb(123,123,84)]/30
  hover:shadow-xl hover:-translate-y-2">

  {/* Icona in cerchio con gradiente verde→oro */}
  <div class="w-16 h-16 rounded-full
    bg-gradient-to-br from-[rgb(123,123,84)] to-[rgb(123,123,84)]/70
    group-hover:from-[rgb(185,140,75)] group-hover:to-[rgb(185,140,75)]/70">
    <Icon />
  </div>

  {/* Titolo con hover verde */}
  <h3 class="text-2xl md:text-3xl font-serif
    text-[rgb(12,12,12)]
    group-hover:text-[rgb(123,123,84)]">
    Titolo
  </h3>

  {/* Linea accento gradiente */}
  <div class="absolute bottom-0 left-0 h-1
    bg-gradient-to-r from-[rgb(123,123,84)] via-[rgb(185,140,75)] to-transparent
    w-0 group-hover:w-full transition-all duration-700"></div>
</article>
```

### Icone

**Libreria:** Lucide React (`lucide-react`)

**Stile:**
```tsx
import { Sparkles, Hammer, Heart } from 'lucide-react';

<Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
```

**Palette icone:**
- Features: Verde oliva → Oro all'hover
- Location/Info: Verde oliva statico
- Decorative: Oro

---

## ✨ Animazioni

### Intersection Observer Pattern

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});
```

### Staggered Animations
```javascript
cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add('animated');
  }, index * 150); // Delay incrementale
});
```

### CSS Animation Classes
```css
/* Initial state */
.element {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* Animated state */
.element.animated {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Transitions
```css
/* Standard hover */
transition-all duration-500

/* Hover con scale */
hover:scale-105 hover:shadow-lg

/* Hover con traslazione */
hover:-translate-y-2

/* Hover con colore */
hover:text-[rgb(123,123,84)]
hover:bg-[rgb(185,140,75)]
```

---

## 🖼️ Immagini & Media

### Hero Background
```astro
<div class="absolute inset-0 z-0">
  <img
    src="/images/hero-image.avif"
    class="w-full h-full object-cover"
  />
  <!-- Overlay gradient -->
  <div class="absolute inset-0 bg-gradient-to-b
    from-[rgb(12,12,12)]/40 via-[rgb(12,12,12)]/30 to-[rgb(12,12,12)]/50">
  </div>
</div>
```

### Bento Grid Gallery
```astro
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4
  auto-rows-[180px] md:auto-rows-[240px]">

  <!-- Large Image (2x2) -->
  <div class="col-span-2 row-span-2 relative group overflow-hidden">
    <img class="w-full h-full object-cover
      transition-transform duration-700 group-hover:scale-110" />
    <div class="absolute inset-0 bg-gradient-to-t
      from-[rgb(12,12,12)]/60 via-transparent to-transparent
      opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    </div>
  </div>

  <!-- Small Image (1x1) -->
  <div class="col-span-1 row-span-1 relative group overflow-hidden">
    {/* Same structure */}
  </div>
</div>
```

**Pattern Layout:** 1 Large (2x2) → 4 Small (1x1) → 1 Large (2x2) → 2 Small (1x1)

### Pattern Background (Brand)
```astro
<div class="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.015]">
  <img
    src="/brand assets/pattern chamoisee.svg"
    alt=""
    class="w-full h-full object-cover"
  />
</div>
```

---

## 🎯 Best Practices

### 1. **No Rounded Corners**
- Le card e immagini NON usano `rounded-lg` o simili
- Stile minimalista con angoli netti
- Eccezione: icone circolari (`rounded-full`)

### 2. **No Dividing Lines**
- Evitare linee di separazione tra sezioni
- Preferire transizioni di colore sfondo
- Pattern e gradienti per definire sezioni

### 3. **Glass Morphism Selettivo**
```css
/* Solo per navbar scrollata e feature cards */
bg-white/60 backdrop-blur-sm
bg-white/80 backdrop-blur-xl
```

### 4. **Componenti React**
```astro
<!-- Usa client:only="react" per evitare hydration errors -->
<Component client:only="react" />
```

### 5. **Responsive Breakpoints**
```css
/* Mobile first */
base: 0px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### 6. **Z-Index Hierarchy**
```css
Hero content: z-10
Navbar: z-[1000]
Mobile Menu Dialog: z-[9999]
```

---

## 📱 Mobile Optimization

### Hero Mobile
```css
/* Titolo più grande su mobile */
text-[3rem] /* era 2.75rem */

/* Padding safe areas */
.hero-safe-top: pt-safe
.hero-safe-bottom: pb-safe
```

### Mobile Menu
- Apparizione dopo 100px scroll (linee bianche → nere)
- Dialog full-screen con backdrop blur
- Animazioni fade-in staggered per menu items

### Touch Targets
```css
/* Minimo 44x44px per elementi toccabili */
w-9 h-9 /* Mobile menu button */
px-8 py-4 /* CTA buttons */
```

---

## 🔧 Configurazione Tecnica

### Astro Config
```javascript
export default defineConfig({
  devToolbar: { enabled: false }, // No dev toolbar
  integrations: [react()],
  vite: { plugins: [tailwindcss()] }
});
```

### React Components
- Usa `useState` e `useEffect` per stati dinamici
- `client:only="react"` per evitare SSR hydration issues
- Gestisci scroll states localmente nel componente

---

## 🎨 Sezioni Speciali

### Hero Section
- Full height: `min-h-screen`
- Background image con overlay gradient
- Navbar trasparente overlay
- Animazioni fade-in con delay

### Features Section
- Sfondo gradiente: `bg-gradient-to-b from-white to-[rgb(250,248,245)]`
- Pattern background sottile (opacity 0.015)
- Elementi decorativi circolari (verde + oro, opacity 0.02)
- Cards glass morphism con icone Lucide

### Gallery Section
- Bento grid responsive (2 col mobile, 4 col desktop)
- Immagini senza bordi arrotondati
- Hover con scale 110% e overlay gradiente
- Pattern background brand

### Location Section
- Info cards centrate con icone circolari verde
- CTA button verde con hover oro
- Background decorativo con immagini location (opacity 5%)

---

## 📦 Assets Richiesti

### Fonts
- Cormorant Garamond (300, 400, 500, 600, italic 400)
- Inter (300, 400, 500, 600)

### Logos
- `/brand assets/Logotipo Duch White.svg` (navbar trasparente)
- `/brand assets/Logotipo black.svg` (navbar scrollata)

### Pattern
- `/brand assets/pattern chamoisee.svg` (decorativo)

### Images
- Hero: `/images/hero-image.avif`
- Pasticceria: `/images/pasticceria-img/*.avif`
- Gelateria: `/images/gelateria-img/*.avif`
- Location: `/images/paradiso del sub-img.avif`, `/images/zona tavolini-img.avif`

---

## ✅ Checklist Nuova Pagina

Quando crei una nuova pagina, assicurati di:

- [ ] Usare `section-padding` per spacing verticale
- [ ] Includere pattern background se appropriato (opacity 0.015)
- [ ] Animare elementi con Intersection Observer
- [ ] Mantenere palette colori (verde oliva + oro)
- [ ] NO rounded corners (tranne icone circolari)
- [ ] NO linee divisorie tra sezioni
- [ ] Bottoni con hover verde → oro
- [ ] Tipografia coerente (serif per titoli, sans per body)
- [ ] Responsive mobile-first
- [ ] Componenti React con `client:only="react"`
- [ ] Testing su mobile (touch targets, leggibilità)

---

## 🎯 Esempi di Codice Pronti

### Section Template
```astro
<section class="section-padding bg-[rgb(250,248,245)] relative overflow-hidden">
  <!-- Pattern background -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.015]">
    <img src="/brand assets/pattern chamoisee.svg" alt="" class="w-full h-full object-cover" />
  </div>

  <div class="container-custom relative">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-20 section-header">
      <h2 class="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">
        Titolo <span class="italic text-[rgb(185,140,75)]">Evidenziato</span>
      </h2>
      <p class="text-lg md:text-xl text-[rgb(12,12,12)]/70 leading-relaxed">
        Sottotitolo descrittivo
      </p>
    </div>

    <!-- Content -->
    <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
      <!-- Cards qui -->
    </div>
  </div>
</section>

<script>
  // Animazioni Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const header = document.querySelector('.section-header');
  if (header) observer.observe(header);
</script>

<style>
  .section-header {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  .section-header.animated {
    opacity: 1;
    transform: translateY(0);
  }
</style>
```

---

**Ultimo aggiornamento:** Gennaio 2026
**Versione:** 1.0
**Maintainer:** La Marinella Web Team
