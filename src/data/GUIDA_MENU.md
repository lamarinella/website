# Guida alla modifica del Menu

Il menu è contenuto nel file **`src/data/menu.json`**.
Apri quel file con qualsiasi editor di testo (Blocco Note, VS Code, ecc.).

---

## Struttura del file

Il file è diviso in **categorie** (Caffetteria, Dolci, Panini, ecc.).
Ogni categoria contiene una lista di `items` (voci del menu).

```
Categoria
 ├── id          → identificativo interno (non modificare)
 ├── title       → nome in italiano
 ├── titleEn     → nome in inglese
 ├── imageLayout → "large" (foto grande) o "small" (foto piccola)
 ├── items       → lista delle voci
 └── subcategories → (opzionale) sottosezioni (es. Cocktails, Vini)
```

---

## Aggiungere una voce al menu

Trova la categoria giusta, cerca la lista `"items"` e aggiungi un nuovo blocco:

```json
{
  "name": "Nome del prodotto",
  "nameEn": "English name",
  "description": "Ingredienti o descrizione (opzionale)",
  "descriptionEn": "Description in English (optional)",
  "price": "€0.00"
}
```

**Esempio** — aggiungere un panino:
```json
{
  "name": "Il Mio Panino",
  "description": "Bresaola, rucola, parmigiano",
  "descriptionEn": "Bresaola, rocket, parmesan",
  "price": "€5.50"
}
```

> Ricorda la virgola `,` dopo ogni blocco tranne l'ultimo!

---

## Modificare un prezzo

Trova la voce e cambia il valore `"price"`:

```json
"price": "€1.50"   →   "price": "€1.80"
```

---

## Nascondere/rimuovere una voce

Per rimuovere una voce, cancella tutto il suo blocco `{ ... }` inclusa la virgola precedente.

Se vuoi solo **nasconderla temporaneamente** senza cancellarla, aggiungi:
```json
"available": false
```

Esempio:
```json
{
  "name": "Prodotto stagionale",
  "price": "€3.00",
  "available": false
}
```

---

## Aggiornare i gusti del gelato (ogni giorno)

Cerca la sezione **`"id": "gelateria"`** e trova il campo `"flavors"`.

Ogni gusto ha questo formato:
```json
{ "name": "Nocciola", "nameEn": "Hazelnut", "type": "crema", "available": true }
```

- `"available": true`  → gusto disponibile oggi (appare evidenziato nel modal)
- `"available": false` → gusto non disponibile oggi (appare in grigio)

**Aggiorna solo il campo `available`** per i gusti giornalieri.

**Tipi di gusto:**
- `"type": "crema"`  → gusti cremosi (nocciola, pistacchio, ecc.)
- `"type": "frutta"` → gusti alla frutta (fragola, limone, ecc.)

---

## Aggiungere un nuovo gusto alla gelateria

Aggiungi un oggetto alla lista `"flavors"`:
```json
{ "name": "Cioccolato Bianco", "nameEn": "White Chocolate", "type": "crema", "available": true }
```

---

## Aggiungere una categoria con sottosezioni (es. Cocktails)

Le categorie con sottosezioni usano `"subcategories"` invece di `"items"`:

```json
{
  "id": "nuova-categoria",
  "title": "Nuova Categoria",
  "titleEn": "New Category",
  "imageLayout": "small",
  "subcategories": [
    {
      "title": "Prima sottosezione",
      "items": [
        { "name": "Prodotto", "price": "€0.00" }
      ]
    }
  ]
}
```

---

## Cose da NON modificare

| Campo | Perché non modificarlo |
|---|---|
| `"id"` | Usato internamente per la navigazione del menu |
| `"imageLayout"` | Controlla il layout visivo (chiedere al dev per cambiarlo) |
| La struttura `{ }` e `[ ]` | Modificarla causa errori nel sito |

---

## Consigli

- Dopo ogni modifica, **salva il file** e ricarica il sito per vedere i cambiamenti.
- Se qualcosa smette di funzionare, controlla di non aver dimenticato una virgola `,` o una parentesi `}`.
- In caso di dubbi, contatta lo sviluppatore.
