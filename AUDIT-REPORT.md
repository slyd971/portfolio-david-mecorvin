# Audit portfolio David Mecorvin — Rapport de diagnostic

**Statut : diagnostic seul, aucun code modifié.** Ce rapport vérifie chaque constat de l'audit externe contre le code réel, puis liste les corrections proposées. En attente de validation avant création des branches/PR (lots 1 → 5).

Légende : ✅ Confirmé | ⚠️ Partiellement confirmé / nuance | ❌ Non reproductible | 🆕 Trouvé en plus (hors périmètre initial de l'audit externe)

---

## LOT 1 — SEO / Metadata

| Constat | Statut | Détail |
|---|---|---|
| Meta description home pauvre | ✅ | `src/app/layout.js:19-21` — `description: "Portfolio de David Mecorvin"`, aucun mot-clé, aucune accroche. |
| Metadata dupliquées sur les pages projets | ✅ **Critique confirmé** | `src/app/projects/[slug]/page.js` n'exporte **aucun** `generateMetadata()` ni `metadata`. Les 6 pages projets (`aldi`, `bnp-paribas`, `bforbank`, `dataiku`, `printemps`, `parrot`) héritent donc **exactement** du titre et de la description du layout racine. C'est le point le plus grave de l'audit, confirmé à 100%. |
| Absence d'Open Graph / Twitter Cards | ✅ | Aucune clé `openGraph` ni `twitter` dans `layout.js`. Aucune image OG dans `public/`. |
| Sitemap / robots absents | ✅ | Aucun fichier `app/sitemap.ts` ni `app/robots.ts` trouvé dans le projet. |
| Données structurées absentes | ✅ | Aucune occurrence de `application/ld+json` dans `src/`. |
| Canonical URLs | ✅ | Aucun `metadataBase` ni `alternates.canonical` nulle part. |

**Conclusion Lot 1 : tous les constats sont confirmés, sans exception. C'est le lot le plus critique — à traiter en premier.**

---

## LOT 2 — Copy & cohérence éditoriale

| Constat | Statut | Détail |
|---|---|---|
| Incohérence "Sénior" / "Senior" | ✅ | Dans `src/app/page.js`, tableau `experiences` : ligne 60 "Product Owner **Sénior**" (SQLI/Rocher), ligne 71 "... Web **Sénior**" (Listen too), ligne 93 "... Bilingue Multi-Projets" utilise "**Senior**" sans accent (Smile). 2 occurrences accentuées vs 1 non-accentuée. `src/data/projects.js` (roleLabel) n'a aucune occurrence du mot, donc pas de conflit là. → Harmonisation simple sur "Senior" (3 remplacements dans `page.js`). |
| Répétition champ lexical "rassurer" | ✅ | `page.js:355` — titre section Expériences : *"Une trajectoire pensée pour **rassurer**, structurer et livrer"*. `page.js:38` — highlight "Positionnement senior" (affiché dans la section Profil) : *"Une approche structurée, **rassurante** et orientée impact"*. Les deux sont visibles à quelques centaines de pixels d'écart au scroll. → Remplacer le titre de section par *"Une trajectoire pensée pour cadrer, structurer et livrer"*, garder "rassurante" dans le highlight. |
| Hero trop générique | ⚠️ subjectif | Confirmé que le hero ("Je pilote les projets digitaux avec une logique produit, business et delivery") ne mentionne ni le double profil annonceur/agence, ni les secteurs exigeants (banque, retail). C'est un avis qualitatif, pas un bug — je proposerai 2-3 alternatives **dans la description de la PR** sans les appliquer, comme demandé. |
| Méthodologie ALDI à reformuler | ✅ | `src/data/projects.js` (entrée ALDI, champ `methodology`) : `["Cycle en V adapté avec pratiques Agile"]`. Confirmé plat/peu valorisant. → reformulation proposée dans le prompt, à appliquer telle quelle sauf avis contraire. |
| Cohérence "+30% opt-in" | ❌ **Non confirmé — déjà cohérent** | Vérifié `src/data/projects.js` : `keyMetrics` ALDI ligne 52 → `"+30%" / "opt-in recrutés en 2025"` ; `results` ligne 97 → `"+30% d'opt-in recrutés en 2025"`. Formulation identique entre snapshot et résultats. Idem pour Dataiku ("+30% de trafic direct entre 2021 et 2022", cohérent aux deux endroits). **Aucune action nécessaire sur ce point**, je le signale pour ne pas introduire un changement inutile. |

---

## LOT 3 — Markup & bugs de rendu

| Constat | Statut | Détail |
|---|---|---|
| Double marqueur de liste "- •" | ❌ **Non reproductible** | Inspection du HTML rendu (`curl` + `getComputedStyle` via Playwright) sur `/projects/aldi` : chaque `<li>` a `list-style-type: none` (reset Tailwind Preflight actif), le texte affiché est bien `"• Piloter les projets..."` — un seul marqueur, pas de double tiret/puce. Je n'ai trouvé ce bug sur aucune des 6 pages projets, desktop ou mobile. **Je recommande de fermer ce point**, sauf si tu peux me donner un navigateur/une page précise où tu l'as vu (possible cache CDN Vercel obsolète ?). |
| 🆕 Point apparenté trouvé | 🆕 | Le "•" est un caractère **codé en dur dans le texte** (`<li>• {item}</li>`, 7 occurrences dans `src/app/projects/[slug]/page.js`) plutôt qu'un vrai marqueur de liste sémantique (`list-disc`). Ce n'est pas le bug décrit, mais c'est un anti-pattern mineur : un lecteur d'écran énonce le caractère littéral, et le style est couplé au contenu. Je propose de basculer vers `list-disc marker:text-[#F5A94E] pl-5` (ou équivalent) pour un vrai marqueur, sans changer le rendu visuel. |
| Un seul `<h1>` par page | ✅ **Conforme** | Home : un seul `<h1>` (`page.js:231`, le hero). Pages projets : un seul `<h1>` (`[slug]/page.js:93`, le nom du projet). Aucune page n'a de doublon. |
| Hiérarchie h2/h3 sans saut de niveau | ✅ **Conforme** | Home : h1 → h2 (titres de section) → h3 (titres de cartes : pillars, highlights, expériences, projets). Pages projets : h1 → h2 (blocs) → h3 (Méthodologie, titres de réalisations). Aucun saut détecté. |
| Attributs `alt` | ⚠️ Présents mais génériques | Toutes les images ont un `alt` (`alt={project.title}` pour les logos, `alt="David Mecorvin"` pour la photo hero). Fonctionnellement correct, mais peu descriptif — proposition : `alt="Logo ${project.title}"` pour les logos, `alt="Portrait de David Mecorvin, Chef de Projet Digital / Product Owner"` pour la photo. |
| `target="_blank"` + `rel` | ✅ Confirmé, à corriger | Les 6 liens externes (LinkedIn, home + pages projets + MobileNav) utilisent `rel="noreferrer"` seul, **pas** `rel="noopener noreferrer"`. Note technique : `noreferrer` inclut déjà le comportement de `noopener` dans les navigateurs modernes, donc ce n'est pas une faille active aujourd'hui — mais l'audit demande explicitement la forme complète, et l'ajouter est sans risque. |

---

## LOT 4 — Performance

| Constat | Statut | Détail |
|---|---|---|
| Images ne passent pas par `next/image` | ✅ **Confirmé** | Recherche exhaustive : 3 occurrences de `<img>` brut (`page.js:281` photo hero, `page.js:382` logos cartes projets, `[slug]/page.js:81` logo page projet). `next/image` est **importé** dans `[slug]/page.js:2` mais **jamais utilisé** (import mort). Aucune des images du site ne bénéficie de l'optimisation Next (resize, format moderne, lazy-loading natif géré, `sizes`). |
| Poids des images | ✅ **Confirmé, sévérité haute** | `public/photo/profil-cv.png` = **1,89 Mo** pour une image affichée à ~250-600px de large selon le breakpoint. C'est l'image du hero, donc probablement l'élément LCP (Largest Contentful Paint) de la home — son poids actuel va directement pénaliser le score Performance. Les logos clients (1,6 Ko à 36 Ko) sont déjà légers, impact mineur. |
| Fonts via `next/font` | ✅ **Déjà conforme, rien à faire** | `src/app/layout.js` utilise `next/font/google` (Fraunces + IBM Plex Sans) avec `display: "swap"`. Aucune balise `<link>` Google Fonts bloquante. Ce point de l'audit est déjà résolu, je ne le retouche pas. |
| Audit Lighthouse | ⚠️ Non exécuté dans cette phase | L'environnement sandbox n'a pas d'accès réseau sortant vers PageSpeed Insights, et `next build` + Lighthouse CLI local n'a pas été lancé pendant le diagnostic pour ne pas modifier l'état du serveur de dev en cours. Je le lancerai en tout début de lot 4 (avant/après) une fois la branche créée, et consignerai les scores ici. |

---

## LOT 5 — Audit design

Captures prises via Playwright, viewports 1440px (desktop) et 390px (mobile), sur la home et `/projects/aldi`. Aucune erreur console détectée sur les deux pages, aux deux tailles.

### 1. Identité visuelle & différenciation
- **✅ Amélioré récemment** : le site est passé d'une palette bleu/navy générique ("template SaaS généré par IA") à un thème bronze/ambre sur fond charbon chaud, avec une serif éditoriale (Fraunces) sur les titres. C'est déjà un point fort par rapport à la version précédente.
- **Point faible principal restant** : les sections Profil / Expériences / Projets / Contact utilisent encore systématiquement le même conteneur "carte à bordure + fond translucide" (`rounded-[1.6-1.8rem] border border-white/10 bg-white/5`) — un motif répété qui reste le réflexe le plus visible du site, même si trois sections (Expertise, Clients, Stack) en ont été volontairement sorties.
- **Levier de différenciation le plus rentable** : la photo professionnelle (ajoutée cette session) est un vrai différenciateur face aux portfolios anonymes — actuellement sous-exploitée (juste dans le hero). Une déclinaison cohérente (même traitement visuel répété ailleurs, ex. section Contact) renforcerait l'identité sans coût de refonte.

### 2. Typographie
- Fraunces (serif, display) sur tous les h1/h2 ; IBM Plex Sans (sans-serif) en corps de texte. Pairing intentionnel, mis en place cette session — cohérent entre home et pages projets (mêmes classes `font-serif` réutilisées).
- **⚠️ Incohérence mineure** : les h3 (titres de cartes) ne sont **jamais** en Fraunces, uniquement en Plex Sans — choix défendable (hiérarchie), mais pas documenté/intentionnel au sens système de design, plutôt un héritage de mes éditions successives.

### 3. Couleur & contraste
- **Palette réelle extraite** : fond `#16110C`, accent clair `#F5A94E`, accent profond `#C2703A`, pâle `#FBD9A8`, crème `#FDECC8` — 5 tokens de couleur cohérents, bien réutilisés (pas de couleurs isolées ailleurs).
- **⚠️ Absence de système d'opacité** : **18 valeurs d'opacité de texte différentes** utilisées de façon ad hoc (`text-white/25` à `/85`, `text-black/55` à `/80`), sans échelle définie. J'ai calculé les ratios de contraste WCAG réels :
  - `text-white/45` et au-dessus → **conformes AA** (contraste ≥ 4,5) sur le fond `#16110C`.
  - `text-white/35` (hero, mot "avec une logique") → contraste 3,20 : conforme **uniquement** parce que c'est un texte de grande taille (≥ 24px, seuil AA large text = 3,0) — limite, à surveiller si la taille du hero est un jour réduite.
  - `text-white/25` (séparateur "•" entre tags Expertise) → contraste 2,21, **sous le seuil AA** même pour du grand texte — mais c'est un séparateur décoratif, pas une information portée par le texte ; risque réel faible.
  - **`text-black/55`** (label "CONTACT" du bloc CTA final, sur fond dégradé clair) → contraste ≈ 4,2 au milieu du dégradé, **sous le seuil AA (4,5)** pour un texte de petite taille (`text-xs`). C'est le seul cas que je classerais **critique** sur le plan accessibilité.
- Couleur d'accent (`#F5A94E`/`#C2703A`) utilisée de façon cohérente pour CTA, liens actifs, icônes et hover — pas de dérive constatée.

### 4. Layout & rythme vertical
- Espacements de section : valeurs Tailwind cohérentes (`py-8 sm:py-10 lg:py-16` répété identiquement sur toutes les sections) — c'est un système de fait, pas du arbitraire, bon point.
- **⚠️ Densité Stack** : 24 tags d'outils en flux libre sur 2-3 lignes (`Jira, Confluence, Monday, Microsoft Teams, SharePoint...`) — scannable mais dense, aucun regroupement par catégorie (gestion de projet / design / CMS / analytics). Un regroupement visuel améliorerait la lisibilité sans refonte lourde.
- Grille de cartes projets : alignement et hauteurs cohérents en desktop (3 colonnes) et mobile (1 colonne) — pas de bug de responsive détecté sur les 6 projets.

### 5. Hiérarchie de l'information
- Le hero communique la proposition de valeur clairement en un coup d'œil (titre + sous-titre + photo + stats) — **conforme au test des 5 secondes**.
- **⚠️ Confirmé** : sur les 4 stats du hero, seules 2 sont de vrais chiffres (`12+`, `360°`) ; les 2 autres (`Agile`, `Multi`) sont des mots. Le format "stat" visuel (gros chiffre + légende) créé une attente de données chiffrées que "Agile" et "Multi" ne remplissent pas — ça affaiblit légèrement l'impact du bloc. Piste : soit trouver un vrai chiffre de remplacement, soit différencier visuellement les deux items non-numériques (badge plutôt que "stat").
- **⚠️ CTA de contact** : le bouton "Me contacter" (mailto) n'apparaît que dans le hero et dans la section Contact tout en bas. Entre les deux (Profil, Expertise, Expériences, Projets, Clients, Stack — soit l'essentiel du scroll), aucun CTA de contact direct n'est visible ; seul le lien LinkedIn reste dans le header (desktop ≥640px) ou le menu mobile. Un utilisateur convaincu à mi-parcours doit remonter ou descendre jusqu'au bout pour agir.

### 6. Pages projets
- Structure identique sur les 6 pages (Projet/Snapshot → Résultats → Challenge → Contexte/Objectifs → Rôle/Stack → Livrables/Compétences → Réalisations → "Ce que ce projet dit de moi") — cohérence confirmée, bon point pour la comparabilité entre projets.
- Le bloc Snapshot est bien différencié visuellement (dégradé bronze foncé) du reste (cartes `bg-white/5` neutres) — conforme.
- **⚠️ Confirmé** : aucune navigation "projet suivant / précédent" entre les 6 pages projets — seul un retour à l'accueil est proposé. Un visiteur qui lit ALDI doit revenir à la home pour accéder à BNP Paribas.

### 7. Micro-interactions & motion
- Inventaire : `transition` (hover color/border/bg), `hover:scale-[1.02]` sur les boutons principaux, rotation du chevron du bouton "Voir plus d'expériences". Durées/easings par défaut Tailwind (150ms), cohérents entre eux.
- **⚠️ Confirmé** : aucune règle `prefers-reduced-motion` nulle part dans le code. Impact réel limité aujourd'hui (pas d'animation de scroll, pas d'autoplay — uniquement des micro-transitions au survol), mais c'est un gap facile à combler par précaution.

### 8. Responsive & accessibilité
- Mobile : navigation via drawer fonctionnel (testé cette session), pas de débordement horizontal détecté sur les 6 pages projets ni la home.
- **⚠️ Touch targets sous 44px** : le bouton hamburger (`MobileNav.js:26`, `p-2.5` + icône 18px ≈ 38×38px) et le bouton de fermeture du drawer (`MobileNav.js:44`, `p-2` + icône 18px ≈ 34×34px) sont légèrement sous la recommandation de 44×44px minimum (WCAG 2.5.5 / Apple HIG).
- **✅ Focus clavier présent** : testé au clavier (Tab) sur toute la home — l'ordre de tabulation suit l'ordre visuel logique (logo → nav → LinkedIn → CTA hero → ... → bouton "Voir plus"), et chaque élément affiche un contour de focus visible (style par défaut du navigateur, non personnalisé). Pas de `focus:outline-none` sans remplacement détecté nulle part — donc pas de piège clavier, juste un focus non "designé".

---

## Top 5 recommandations (impact / effort)

| # | Recommandation | Impact | Effort | Lot |
|---|---|---|---|---|
| 1 | `generateMetadata()` unique par page projet (title + description) | Très haut (SEO indexation, CTR) | Faible | 1 |
| 2 | Compresser/convertir `profil-cv.png` (1,89 Mo → WebP/AVIF via `next/image`, `priority` sur le hero) | Haut (LCP, Core Web Vitals) | Faible | 4 |
| 3 | Sitemap + robots + OG/Twitter + JSON-LD `Person` | Haut (indexation, partage social) | Moyen | 1 |
| 4 | Corriger contraste `text-black/55` (label Contact) + retirer "rassurer" en double + harmoniser "Senior" | Moyen (a11y + cohérence perçue) | Très faible | 2, 5 |
| 5 | Lien "projet suivant" entre les 6 pages projets + CTA contact plus visible en milieu de scroll | Moyen (engagement, conversion) | Moyen | 5 |

---

## Points à ne PAS toucher (rappel)
- Adresse email de contact (`david.mecorvin@hotmail.fr`) — hors périmètre.
- Nom de domaine / configuration Vercel — hors périmètre.

## Points signalés comme non confirmés (à trancher avant d'ouvrir les PR)
- Le bug de double marqueur de liste "- •" n'est pas reproductible en l'état actuel du code déployé sur `main`. Confirme-moi si tu veux que je l'ignore ou que je creuse un autre angle (cache Vercel, navigateur spécifique).
- La cohérence du "+30% opt-in" est déjà bonne — aucune action prévue sauf contre-avis.

---

**Prochaine étape : ta validation de ce rapport avant que je crée les branches `fix/seo-metadata`, `fix/copy`, `fix/markup`, `fix/performance`, `feat/design-improvements` et ouvre les PR associées, dans cet ordre.**
