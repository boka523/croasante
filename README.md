# Croasante

**Live Demo:** https://croasante-react.vercel.app/

A React + Vite web project for a modern bakery / product showcase site. It includes home page sections for hero content, product listings, gallery display, customer reviews, video presentation, contact information, and policy pages.

## Project Description

- Built with React 19 and Vite.
- Uses `react-router-dom` for page navigation.
- Includes reusable components for `Navbar`, `Hero`, `About`, `Products`, `Gallery`, `Reviews`, `VideoPlayer`, `Contact`, and `Footer`.
- Contains dedicated pages for `Home`, `All Photos`, `Privacy Policy`, and `Terms of Service`.
- Uses ESLint for code quality and formatting.

## Setup Instructions

1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local development URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

- `npm run dev` - start the Vite development server.
- `npm run build` - build the production bundle.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint checks across the project.

## Folder Structure

- `src/` - application source code.
- `src/components/` - individual UI components.
- `src/pages/` - page-level views and routing targets.
- `public/` - static assets served by Vite.

## Notes

- Update the component content and assets to match your bakery or product brand.
- Use `src/pages/AllPhotos/AllPhotos.jsx` for a full gallery page experience.
- Policy information is available in `src/pages/PrivacyPolicy` and `src/pages/TermsOfServices`.
