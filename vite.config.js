import { defineConfig } from "vite"
import { copyFiles } from "./src/plugins/copy-files";

export default defineConfig({
    plugins: [
        copyFiles('./src/enums', './public/src/enums'),
        copyFiles('./src', './public/src')
    ]
});
