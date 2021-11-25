import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({mode}) => {
  const isDev = mode === 'dev';

  return defineConfig({
    base: isDev ? '' : '/umis-website-vite/dist/',
    plugins: [
      vue(),
    ]
  });
};
