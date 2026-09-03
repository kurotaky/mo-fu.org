# mo-fu.org

Yuta Kurotaki's personal website built with Nuxt 4.

## Development Environment

- Node.js: v22 (see `.nvmrc`)
- Nuxt: 4.5.2
- Bulma: 1.0.4
- ESLint: 10 (`@nuxt/eslint`, flat config)

## Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production
$ npm run build

# generate static project
$ npm run generate

# preview generated static project
$ npm run preview

# lint
$ npm run lint
```

## Project Structure

```
mo-fu.org/
├── assets/         # Static assets (images, CSS, etc.)
├── components/     # Vue components
├── layouts/        # Layout components
├── pages/          # Page components
├── plugins/        # Nuxt plugins
├── public/         # Static files served as-is (favicon, CNAME)
└── store/          # (unused) legacy directory
```

## License

MIT
