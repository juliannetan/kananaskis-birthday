# Yora Nordic Spa Birthday

A private birthday invitation for Tyra: November 28, 2026, leaving Calgary around noon for Yora Nordic Spa Kananaskis (formerly Kananaskis Nordic Spa), dinner and a cozy overnight. RSVP is handled by a published Tally form, so guests do not need an account and static hosting does not require RSVP server endpoints.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kananaskis-birthday.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/21e0879f-fa1a-41e6-a83a-b7aacf6b9c47).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages

In the repository, choose **Settings → Pages → Source → GitHub Actions**. The included workflow builds the invitation, verifies `dist/client/index.html`, copies spa photographs into the static output and deploys it when `main` changes. You can also start the workflow from **Actions → Deploy invitation to GitHub Pages → Run workflow**.

The current custom domain remains connected to Lovable; this workflow does not move it. To host that domain on GitHub instead, configure the domain and DNS in GitHub Pages separately. The GitHub deployment has not been run or verified from this editor.

Spa photographs are credited to Kiki Davies / Pursuing Pretty and Rebecca Hardcastle via Explore Kananaskis. This private invitation is not affiliated with the spa.
