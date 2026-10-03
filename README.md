# OpenAPI Specifications

Loyalty Engine REST specifications: API documentation and client code generation.

## Overview

This project contains OpenAPI specifications for the Loyalty Engine API. It provides:

- **Interactive API Documentation** - Powered by Scalar
- **Client Code Generation** - Automated generation of Maven (Java) and Node.js client artifacts
- **Cloudflare Workers Deployment** - Deployment to Cloudflare Workers
- **Spec Validation** - Redocly linting for specification quality

## Tech Stack

- **OpenAPI 3.1** - API specification standard
- **Node.js** - Runtime environment
- **Cloudflare Workers** - Deployment platform
- **Scalar** - Modern API documentation UI
- **Redocly CLI** - OpenAPI bundling and linting
- **OpenAPI Generator** - Client code generation for multiple languages
- **Express** - Server framework

## Prerequisites

- Node.js
- npm
- Cloudflare account (for deployment)
- Wrangler CLI (installed via devDependencies)

## Project Structure

```
openapi-specifications/
├── openapi/              # OpenAPI specification files
│   ├── auth-v1.yaml      # Authentication and Users API
│   ├── properties-v1.yaml # Properties API
│   ├── coupons-v1.yaml   # Coupons API
│   ├── points-v1.yaml    # Points API
│   └── shared/           # Shared schemas and components
├── packages/             # Client code artifacts
│   ├── maven/            # Java/Maven artifacts
│   └── node/             # Node.js artifacts
├── dist/                 # Bundled OpenAPI specs (generated)
├── index.js              # Cloudflare Workers entry point and Scalar configuration
├── wrangler.jsonc        # Cloudflare Workers configuration
└── redocly.yaml          # Redocly configuration
```

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Bundle OpenAPI specs:
```bash
npm run bundle
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:8787`

### Cloudflare Workers Deployment

The application is configured to run on Cloudflare Workers:

**Development:**
```bash
npm run dev
```

**Production Deployment:**
```bash
npm run deploy
```

## Available APIs

- Authentication and Users API
- Properties API
- Coupons API
- Points API
