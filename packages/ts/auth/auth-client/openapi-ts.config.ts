import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: '../../../../dist/auth-v1.yaml',
    output: './src'
});