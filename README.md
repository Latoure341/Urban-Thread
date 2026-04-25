# Urban Thread

Urban Thread is a simple online store frontend built with plain HTML, CSS3, Bootstrap Framework, and JavaScript, integrated with Firebase for authentication and database support.

## Project Structure

- `Frontend/`
  - `index.html` - main landing page
  - `index.js` - entry JavaScript for the frontend UI
  - `index.css` - global styles
  - `Cart/` - shopping cart pages and logic
  - `Checkout/` - checkout page and flow
  - `Login/` - login page and logic
  - `OrderSuccess/` - order success page
  - `Shopping/` - product browsing page
  - `SignUp/` - registration page
- `FireBase/`
  - `firebase.js` - Firebase initialization
  - `auth.js` - authentication helper functions
  - `database.js` - database helper functions
- `package.json` - project metadata and build scripts
- `netlify.toml` - Netlify deployment configuration

## Features

- User authentication via Firebase
- Shopping cart flow
- Checkout flow
- Order success confirmation
- Static site deployment support via Netlify

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Install Dependencies

```bash
npm install
```

### Run a Local Server

This project is a static frontend. You can serve `Frontend/index.html` using any static file server.

For example, with a simple npm package like `serve`:

```bash
npm install -g serve
serve Frontend
```

### Build

The repository includes an `esbuild` build script to bundle the frontend entry point.

```bash
npm run build
```

This generates `dist/bundle.js` from `Frontend/index.js`.

## Deployment

The project is configured to deploy on Netlify. The `netlify.toml` file publishes the `Frontend` folder and redirects all routes to `Frontend/index.html`.

## Notes

- Firebase credentials and configuration should be managed securely.
- The current build setup is minimal and intended for static deployment.

## License

ISC
