# Aven Labs Portal

Startseite der App-Familie: von hier startet man Fluo (Atmen), Fayo (Gesicht) und bald Tono (Dehnen).
Gestaltung nach dem gemeinsamen Designsystem [`mssnr1/anima-lab-design`](https://github.com/mssnr1/anima-lab-design)
(Nacht, Figtree, neutrale Bedienelemente, je App ein Signaturlicht).

- Live: https://mssnr1.github.io/Aven-Labs/
- Lokal: `npm install`, dann `npm run dev`
- Apps und Texte: `src/apps.ts`
- Vorschaubilder: `public/figures/`, gerendert aus den 3D-Figuren von Fluo und Fayo
- Veröffentlichen: jeder Push auf `main` testet, baut und veröffentlicht über GitHub Pages (`.github/workflows/deploy.yml`)

Die Figur in den Vorschaubildern stammt aus Z-Anatomy (CC BY-SA 4.0) und BodyParts3D (CC BY-SA 2.1 JP); die Nennung
steht unten auf der Seite.
