import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      'ng-dynamic-signal-form': 'projects/ng-dynamic-signal-form/src/public-api.ts',
    },
  },
});
