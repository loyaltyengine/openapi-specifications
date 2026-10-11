import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: '../../../../dist/properties-v1.yaml',
    output: './src'
});