import { defineConfig } from "vite"
import { copyFiles } from "./src/plugins/copy-files";

export default defineConfig({
    plugins: [
        copyFiles('./src/enums', './dist/src/enums'),
        copyFiles('./src', './dist/src')
    ]
});
