import { defineConfig } from "vite"
import { copyFiles } from "./src/utils/plugins/copy-files";

export default defineConfig({
    plugins: [
        copyFiles('./src/utils/enums', './public/src/enums'),
        copyFiles('./src', './public/src')
    ]
});
