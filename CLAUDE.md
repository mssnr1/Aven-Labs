# Aven Labs Portal: notes for Claude

- Owner is Jan, he writes German: reply in German. Docs German, code and comments English.
- This is the launcher of the app family (Fluo `mssnr1/atmen`, Fayo `mssnr1/Fayo`, Tono planned). Design rules come
  from `mssnr1/anima-lab-design` (`docs/01-marke-und-designsystem.md`): night default, neutral controls, colour only
  as each app's signature light, Figtree with light headlines, type 13/15/17/19 px.
- Apps, links and copy live in `src/apps.ts`. Preview images in `public/figures/` are renders of the apps' 3D
  figure; keep the CC BY-SA credit in the footer.
- Every push to `main` publishes to https://mssnr1.github.io/Aven-Labs/. Before a PR: `npm test` and `npm run build`.
