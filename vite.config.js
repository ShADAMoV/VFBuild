const fs = require('fs')
const path = require('path')
import { defineConfig } from 'vite'

const PAGES = fs.readdirSync('src/pages').filter((filename) => filename !== 'index.html');

const getInputs = () => {
    return PAGES.reduce((inputs, page) => {
        inputs[page.replace('.html', '')] = path.resolve(__dirname, `./src/pages/${page}`);

        return inputs;
    }, {});
}

const INPUTS = getInputs();


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: path.resolve(__dirname, 'src/pages/index.html'),
                ...INPUTS
            },
        }
    }
});
