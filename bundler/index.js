import { createWriteStream, readdirSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { minify as terser } from 'terser';
import { fileURLToPath } from 'node:url';
import CleanCSS from 'clean-css';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
if (!existsSync(join(__dirname, 'build'))) {
    mkdirSync(join(__dirname, 'build'));
}
const minifyCSS = new CleanCSS({
    level: 2
});
const minify = async (code, type) => {
    switch (type) {
        case "css":
            return minifyCSS.minify(code).styles;
        case "js":
            return (await terser(code)).code || "";
    }
};
const cssArr = [];
const defArr = [];
const jsArr = [];
const ucssFile = createWriteStream(join(__dirname, 'build', 'styles.css'), { flags: 'w' });
const ujsFile = createWriteStream(join(__dirname, 'build', 'index.js'), { flags: 'w' });
const cssFile = createWriteStream(join(__dirname, 'build', 'styles.min.css'), { flags: 'w' });
const jsFile = createWriteStream(join(__dirname, 'build', 'index.min.js'), { flags: 'w' });
for (let file of readdirSync(join(__dirname, '..'), { recursive: true })) {
    if (file instanceof Buffer) {
        file = file.toString();
    }
    if (file.includes("node_modules"))
        continue;
    if (file.includes("example"))
        continue;
    if (file.endsWith("component.json")) {
        const metadata = JSON.parse(readFileSync(join(__dirname, '..', file), "utf-8"));
        const element = metadata.element.replaceAll("-", "");
        const filepath = file.replace("component.json", "");
        console.log(`Found component: ${metadata.name} at ${filepath}`);
        metadata.dependencies?.css.forEach(async (css) => {
            cssArr.push(readFileSync(join(__dirname, "..", filepath + css)).toString());
        });
        metadata.dependencies?.js?.forEach(async (js) => {
            jsArr.push(readFileSync(join(__dirname, "..", filepath + js)).toString());
        });
        defArr.push(`class ${element} extends ${metadata.type === "extension" ? "HTML" + metadata.extends[0].toUpperCase() + metadata.extends.replace(metadata.extends[0], "") + "Element" : "HTMLElement"} {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.classList.add('${metadata.element}');\n\t}\n}`);
        defArr.push(`customElements.define('${metadata.element}', ${element}${metadata.type === "extension" ? ", { " + metadata.class + " }" : ""});\n`);
    }
}
const js = jsArr.join("\n") + defArr.join("\n");
jsFile.write(await minify(js, "js"));
cssFile.write(await minify(cssArr.join(""), "css"));
ucssFile.write(cssArr.join(""));
ujsFile.write(js);
cssFile.close();
jsFile.close();
