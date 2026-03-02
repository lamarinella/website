# Sistema Tipografico - La Marinella

## Principi di Design

### Obiettivi
- **Leggibilità**: Tutti i testi devono essere facilmente leggibili su qualsiasi dispositivo
- **Eleganza**: Trasmettere sofisticatezza e lusso attraverso scelte tipografiche raffinate
- **Gerarchia**: Creare una chiara gerarchia visiva che guidi l'utente
- **Consistenza**: Mantenere proporzioni armoniose su tutti gli schermi

### Font Families
- **Display (Titoli)**: `Cormorant Garamond` - Serif elegante per un look sofisticato
- **Body (Corpo)**: `Inter` - Sans-serif moderno per massima leggibilità

---

## Regole Tipografiche

### Headings (Titoli)

#### H1 - Hero Title
```
Mobile:    40px (2.5rem)
Tablet:    56px (3.5rem)
Desktop:   72px (4.5rem)
Large:     88px (5.5rem)
XL:        104px (6.5rem)

Font:      Cormorant Garamond Light
Line Height: 1.05
Tracking:  -0.02em (tight)
```

**Utilizzo**: Titolo principale della hero section, massimo impatto visivo

#### H2 - Section Title
```
Mobile:    32px (2rem)
Tablet:    44px (2.75rem)
Desktop:   56px (3.5rem)
Large:     68px (4.25rem)
XL:        80px (5rem)

Font:      Cormorant Garamond Light
Line Height: 1.1
Tracking:  -0.02em (tight)
```

**Utilizzo**: Titoli di sezione, intestazioni importanti

#### H3 - Subsection Title
```
Mobile:    24px (1.5rem)
Tablet:    30px (1.875rem)
Desktop:   36px (2.25rem)
Large:     44px (2.75rem)

Font:      Cormorant Garamond Normal
Line Height: 1.2
Tracking:  -0.02em (tight)
```

**Utilizzo**: Titoli di prodotti, card, sottosezioni

#### H4 - Small Heading
```
Mobile:    20px (1.25rem)
Tablet:    24px (1.5rem)
Desktop:   28px (1.75rem)

Font:      Cormorant Garamond Normal
Line Height: 1.3
Tracking:  -0.02em (tight)
```

**Utilizzo**: Piccoli titoli, enfasi moderata

---

### Body Text (Testo Corpo)

#### Paragraph (Default)
```
Mobile:    16px (1rem)
Desktop:   18px (1.125rem)

Font:      Inter Light
Line Height: 1.6
Tracking:  0.01em
Max Width: 75ch (per leggibilità ottimale)
```

**Utilizzo**: Testo standard, descrizioni, contenuti

---

### Special Text Classes

#### `.text-hero-subtitle` - Hero Subtitle
```
Mobile:    18px (1.125rem)
Tablet:    20px (1.25rem)
Desktop:   22px (1.375rem)
Large:     24px (1.5rem)

Font:      Inter Light
Line Height: 1.6
Tracking:  0.02em (wide)
```

**Utilizzo**: Sottotitolo nella hero, testo prominente sotto il titolo principale

#### `.text-section-subtitle` - Section Subtitle
```
Mobile:    16px (1rem)
Tablet:    18px (1.125rem)
Desktop:   20px (1.25rem)

Font:      Inter Light
Line Height: 1.6
Tracking:  0.02em (wide)
```

**Utilizzo**: Introduzioni di sezione, testi di supporto ai titoli

#### `.text-small` - Small Text
```
Mobile:    14px (0.875rem)
Tablet:    15px (0.9375rem)

Font:      Inter Normal
Line Height: 1.5
Tracking:  0.02em (wide)
```

**Utilizzo**: Didascalie, note, testi secondari

#### `.text-xs-custom` - Extra Small
```
Mobile:    12px (0.75rem)
Tablet:    13px (0.8125rem)

Font:      Inter Medium
Line Height: 1.4
Tracking:  0.05em
```

**Utilizzo**: Labels, tags, metadata, timestamp

---

## Best Practices

### 1. Line Length (Lunghezza Linea)
- **Ideale**: 45-75 caratteri per riga
- **Max**: 90 caratteri
- Usa `max-w-prose` (65ch) o `max-w-2xl`/`max-w-3xl` per limitare la larghezza

### 2. Line Height (Interlinea)
- **Headings**: 1.0-1.2 (più stretto per impatto)
- **Body**: 1.5-1.7 (più ampio per leggibilità)
- **Small text**: 1.4-1.5

### 3. Tracking (Letter Spacing)
- **Headings**: `tight` (-0.02em) per look premium
- **Body**: Minimal (0.01em)
- **Small/Uppercase**: `wide` (0.05-0.15em) per leggibilità

### 4. Font Weight
- **Display Headings**: Light (300) per eleganza
- **Body**: Light (300) per raffinatezza
- **Labels/Tags**: Medium (500) per visibilità

### 5. Responsive Scaling
- Scale progressiva: ogni breakpoint aumenta del 10-25%
- Non saltare troppo tra i breakpoint
- Test su dispositivi reali

### 6. Color Contrast
- **Body text**: Minimo 4.5:1 (WCAG AA)
- **Large text (18px+)**: Minimo 3:1
- Usa opacità per testi secondari: `text-[color]/65` o `/85`

---

## Esempi di Utilizzo

### Hero Section
```astro
<h1>Eccellenza<br/>
  <span class="italic text-cream">Artigianale</span>
</h1>
<p class="text-hero-subtitle text-white/85 max-w-3xl mx-auto">
  Descrizione breve e impattante
</p>
```

### Section Intro
```astro
<h2 class="mb-6">Titolo Sezione</h2>
<p class="text-section-subtitle text-text/65 max-w-2xl mx-auto">
  Introduzione alla sezione
</p>
```

### Product Card
```astro
<span class="text-xs-custom uppercase text-accent">Label</span>
<h3 class="mb-4">Nome Prodotto</h3>
<p class="text-text/65">Descrizione prodotto</p>
```

---

## Accessibilità

- **Base font size**: 16px (non mai meno su mobile)
- **Minimo leggibile**: 14px solo per metadata
- **Contrast ratio**: Rispettare WCAG 2.1 AA
- **Focus states**: Sempre visibili e chiari
- **Responsive**: Test su viewport 320px-2560px

---

## Tools & Testing

### Browser Testing
- Chrome DevTools (Responsive mode)
- Firefox (Accessibility inspector)
- Safari (iOS simulator)

### Dispositivi Reali
- iPhone SE/13 Mini (piccoli)
- iPad (tablet)
- MacBook/Desktop (grandi)

### Strumenti Utili
- [Type Scale Calculator](https://typescale.com/)
- [Fluid Type Scale](https://www.fluid-type-scale.com/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
