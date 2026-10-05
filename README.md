# Tailwind Starter

A multi-page HTML, CSS and JavaScript starter powered by Tailwind CSS, Vite and jQuery.

## Requirements

- Node.js 24 LTS recommended; Node.js 22.12+ within the 22.x release line is also supported.
- npm

## Getting Started

Install dependencies:

```sh
npm ci
```

Start the development server:

```sh
npm run watch
```

Open [http://localhost:8001](http://localhost:8001). No initial build is required. For other devices on the same network, use the Network URL printed in the terminal.

## Production Build

```sh
npm run build
```

Deploy the complete contents of `dist/` to a static web server. Node.js is not required on the production server.

To preview the build locally:

```sh
npm run preview
```

Open [http://localhost:8002](http://localhost:8002). Serve the build over HTTP or HTTPS rather than opening HTML files via `file://`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run watch` | Start the development server with automatic updates. |
| `npm run build` | Create an optimized production build. |
| `npm run build:watch` | Rebuild production output when source files change. |
| `npm run preview` | Serve the existing production build locally. |
| `npm run check` | Check entry/config JavaScript syntax and build the project. |

## Features

- Tailwind CSS 4 with CSS-based configuration and Preflight.
- Vite development server with hot module replacement.
- Multiple HTML entry points with page-specific CSS and JavaScript.
- Shared base styles, local Space Grotesk fonts and reusable components.
- jQuery available as a module and through browser globals.
- Relative production asset paths for deployment in subdirectories.

## Browser Support

Targets Chrome 111+, Safari 16.4+ and Firefox 128+. Individual CSS features may require newer browser versions.

## Dependencies

Dependency versions are pinned and recorded in `package-lock.json`. Use `npm ci` for reproducible installations. Run `npm outdated` to review updates and `npm audit` to check for known vulnerabilities.
