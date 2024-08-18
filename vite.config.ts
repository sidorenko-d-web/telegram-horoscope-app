import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  //@ts-ignore
  server: { https: true, host: 'app.test.tg '}, // Not needed for Vite 5+
  plugins: [mkcert(), react()],
});

