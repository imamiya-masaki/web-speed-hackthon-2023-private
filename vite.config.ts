import path from 'node:path';


import react from '@vitejs/plugin-react';
import analyze from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
// import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

import { getFileList } from './tools/get_file_list';




const publicDir = path.resolve(__dirname, './public');
const getPublicFileList = async (targetPath: string) => {
  const filePaths = await getFileList(targetPath);
  const publicFiles = filePaths
    .map((filePath) => path.relative(publicDir, filePath))
    .map((filePath) => path.join('/', filePath));

  return publicFiles;
};

export default defineConfig(async ({mode}) => {
  const videos = await getPublicFileList(path.resolve(publicDir, 'videos'));

  const plugins = [
    react(),
    wasm(),
    topLevelAwait(),
    ViteEjsPlugin({
      module: '/src/client/index.tsx',
      title: '買えるオーガニック',
      videos,
    }),
    mode === 'analyze' &&
    visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ]
  if (mode === 'development'){
    plugins.push(analyze)
  }
  if (mode === 'production') {
    plugins.push(viteCompression())
    // plugins.push(chunkSplitPlugin())
  }
  return {
    build: {
      // assetsInlineLimit: 20480,
      cssCodeSplit: mode == 'production',
      minify: mode  == 'production' ? 'terser' : false,
      // rollupOptions: {
      //   output: {
      //     experimentalMinChunkSize: 40960,
      //   },
      // },
      sourcemap: mode == 'develop' ? true : false,
      target: 'es2022',
    },
    plugins
  };
});
