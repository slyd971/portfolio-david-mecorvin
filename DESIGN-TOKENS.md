# Design tokens — Refonte smile.eu × SQLI

Documentation des tokens visuels utilisés dans la refonte (`feat/redesign-smile-sqli`). Source de vérité : le bloc `@theme` dans `src/styles/globals.css` (Tailwind v4, mécanisme CSS-first).

## Méthode d'extraction

Les couleurs n'ont **pas** été estimées à l'œil sur des captures d'écran. Elles ont été extraites en pilotant [Playwright](https://playwright.dev) sur https://www.sqli.com/fr-fr et en lisant les valeurs réellement appliquées via `getComputedStyle()` sur les éléments porteurs de la charte (liens d'accent, footer, bandeau, fond de page), après acceptation du bandeau cookies.

Les variables CSS globales du thème (`--bs-primary`, `--bs-secondary`, etc.) sont des tokens **Bootstrap par défaut**, pas la charte réelle du site — ils ont été ignorés au profit des couleurs effectivement rendues à l'écran.

## Constat important : le rouge-corail n'existe pas

Le brief initial supposait un accent "rouge-corail vif type SQLI". Ce n'est **pas** ce qui a été trouvé sur le site en juillet 2026 : l'identité réelle est un **bleu-indigo profond** pour les liens/CTA, sur un fond **bleu-nuit** et un fond clair **ivoire chaud** (pas blanc pur). Aucune trace de corail/rouge n'a été observée sur la home.

## Valeurs relevées → valeurs retenues

| Token | Valeur relevée (sqli.com) | Élément source | Valeur retenue | Écart |
|---|---|---|---|---|
| Midnight | `rgb(15, 14, 43)` = `#0F0E2B` | `<footer>` bg, et couleur de texte sur fond clair | `#0F0E2B` | Aucun — valeur exacte |
| Surface | `rgb(255, 250, 240)` = `#FFFAF0` | `<body>` bg | `#FFFAF0` | Aucun — valeur exacte |
| Accent (deep) | `rgb(31, 36, 233)` = `#1F24E9` | lien "Rejoignez l'aventure SQLI", `--bs-primary` | `#1F24E9` | Aucun — valeur exacte |
| Accent (light) | `rgb(109, 165, 255)` = `#6DA5FF` | bandeau ticker "Elevate Customer Experience..." | `#6DA5FF` | Aucun — valeur exacte |

Les 4 valeurs finales sont donc les valeurs **exactes** trouvées sur le site — aucun ajustement de teinte n'a été nécessaire. Le seul ajustement a porté sur **l'usage** de l'accent (deux variantes déjà présentes sur le site, appliquées chacune au bon fond) plutôt que sur sa valeur.

## Garde-fou contraste (WCAG AA)

Calculs de contraste (formule WCAG standard) sur les paires réellement utilisées :

| Paire | Contraste | Verdict |
|---|---|---|
| Accent deep (`#1F24E9`) sur midnight | 2.22 | ❌ Échoue — **d'où l'usage de deux variantes d'accent** |
| Accent light (`#6DA5FF`) sur midnight | 7.58 | ✅ |
| Accent deep (`#1F24E9`) sur surface | 8.12 | ✅ |
| Texte blanc sur bouton accent deep | 8.44 | ✅ |
| Texte midnight sur bouton accent light | 7.58 | ✅ |
| Midnight texte sur surface | 18.05 | ✅ |

**Règle d'usage retenue** : `accent` (deep) est utilisé uniquement sur fond clair (surface) ; `accent-light` est utilisé uniquement sur fond midnight. Cette règle est directement inspirée de la façon dont sqli.com utilise déjà ses deux teintes sur ses propres fonds clair/sombre — ce n'est pas une invention, c'est une observation du site source.

Contrôle supplémentaire effectué sur les textes atténués (`text-white/NN`, `text-midnight/NN`) utilisés dans la refonte : deux occurrences sous le seuil AA ont été corrigées pendant l'implémentation (`text-midnight/45` → `/65` sur les dates de la timeline ; `text-white/30` → `/40` sur les titres inactifs de la liste Expertise, qui restent au-dessus du seuil "grand texte" 3:1 grâce à leur taille ≥24px).

## Typographie

| Rôle | Police | Source |
|---|---|---|
| Display (titres, hero) | Space Grotesk | `next/font/google`, variable `--font-grotesk` |
| Corps de texte | IBM Plex Sans | `next/font/google`, variable `--font-plex` (déjà en place avant la refonte, conservée) |

Échelle : hero en `clamp` implicite via les breakpoints Tailwind (`text-4xl` → `xl:text-[4.5rem]`, soit ~2.25rem à 4.5rem selon la largeur d'écran).

## Implémentation technique (Tailwind v4)

**Piège rencontré** : ce projet utilise Tailwind v4 (`@tailwindcss/postcss`). Les tokens définis via `tailwind.config.js` → `theme.extend.colors` / `fontFamily` **ne sont pas pris en compte** par le pipeline CSS-first de v4 dans cette configuration — les classes générées (`bg-midnight`, `font-display`, etc.) compilaient sans erreur mais ne produisaient aucune règle CSS réelle (`background-color: rgba(0,0,0,0)` observé). Diagnostiqué via `getComputedStyle()` en cours d'implémentation.

**Solution** : les tokens sont déclarés dans un bloc `@theme` directement dans `src/styles/globals.css` :

```css
@theme {
  --color-midnight: #0f0e2b;
  --color-surface: #fffaf0;
  --color-accent: #1f24e9;
  --color-accent-light: #6da5ff;

  --font-display: var(--font-grotesk), ui-sans-serif, system-ui, sans-serif;
  --font-sans: var(--font-plex), ui-sans-serif, system-ui, sans-serif;
}
```

`tailwind.config.js` ne conserve que les globs `content` ; c'est la seule source de vérité pour les tokens désormais.

## Rythme des fonds (alternance)

Les 9 sections de la home alternent strictement midnight / surface : Hero (midnight) → Profil (surface) → Expertise (midnight) → Expériences (surface) → Projets (midnight) → Clients (surface) → Stack (midnight) → Témoignages (surface) → Contact (midnight). Les pages projets suivent la même logique sur leurs propres sections.
