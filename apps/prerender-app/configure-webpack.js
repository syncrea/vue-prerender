/*
 * Modify the webpack config by exporting an Object or Function.
 *
 * If the value is an Object, it will be merged into the final
 * config using `webpack-merge`.
 *
 * If the value is a function, it will receive the resolved config
 * as the argument. The function can either mutate the config and
 * return nothing, OR return a cloned or merged version of the config.
 *
 * https://cli.vuejs.org/config/#configurewebpack
 */

const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

module.exports = (config) => {
  return {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, '..', '..', 'dist', 'apps', 'prerender-app'),
        outputDir: path.join(__dirname, '..', '..', 'dist', 'apps', 'prerender-app-static'),
        routes: [ '/', '/about'],
        renderer: new Renderer({
          renderAfterDocumentEvent: 'after-load',
          args: [
            '--disable-gpu',
            '--renderer',
            '--no-sandbox',
            '--no-service-autorun',
            '--no-experiments',
            '--no-default-browser-check',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-extensions'
          ],
          dumpio: true
        })
      })
    ]
  };
};
