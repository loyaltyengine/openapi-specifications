# OpenAPI Specifications

Loyalty Engine REST API specifications.

## Tech Stack

- **OpenAPI 3.1** - API specification standard
- **Node.js** - Runtime environment
- **Express** - Web server framework
- **Scalar** - API documentation UI
- **Redocly CLI** - OpenAPI bundling and linting
- **dotenv** - Environment configuration

## Prerequisites

- Node.js (v16 or higher)
- npm

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (optional):
```bash
PORT=3000
```

3. Bundle OpenAPI specs and start server:
```bash
npm start
```

4. Open your browser at `http://localhost:3000`

## Development Commands

| Command | Description |
|---------|-------------|
| `npm start` | Bundle specs and start the documentation server |
| `npm run bundle` | Bundle OpenAPI specs with external references resolved to `dist/` folder |
| `npm run lint-redocly` | Lint OpenAPI specifications for errors and best practices |

## API Documentation

After starting the server, you can access:
- Authentication API: `http://localhost:3000` (default)
- Other APIs: Available in the **top left dropdown menu**
