import { defineConfig } from "vite"
import { copyFiles } from "./src/utils/plugins/copy-files";

export default defineConfig({
    plugins: [
        copyFiles('./src/utils/enums', './public/enums'),
        copyFiles('./src', './public/src')
    ]
});
