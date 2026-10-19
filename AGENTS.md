<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the birthday invitation on the existing TanStack index route with browser-safe content and a public Tally link; static hosts cannot run RSVP server functions.
- Define invitation colors, photo overlays, and responsive layout styles in the global stylesheet; preserve one coherent theme across phone and desktop.
- Keep event facts and the published RSVP URL in `src/lib/invitation.ts`; central values allow concrete rule tests.
- Prerender only the public invitation for GitHub Pages, upload `dist/client`, and copy CDN-pointer photos into that artifact; leave the connected Lovable custom domain unchanged.
