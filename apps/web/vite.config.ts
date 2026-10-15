import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite-plus';
import { eveTanStack } from 'eve/tanstack';

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    eveTanStack(),
    tailwindcss(),
    tanstackStart({ srcDirectory: 'app' }),
    viteReact(),
    nitro(),
  ],
});
