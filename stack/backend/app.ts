import * as express from 'express'
import * as path from 'path'

// Create a new express application instance
const app: express.Application = express();
const port: number = parseInt(process.env.PORT, 10) || 8080

app.get('/api', function(req, res) {
  res.json({
    value: 'Hello from api ou pas!!!'
  });
});

// Si le BACKEND_ONLY est set, on ne demarre pas Nuxt
if (process.env.BACKEND_ONLY) {
  listen();
} else {
  const { Nuxt, Builder } = require('nuxt');
  const isProd = (process.env.NODE_ENV === 'production')
  
  // Nous instancions Nuxt.js avec les options
  let config = require(path.join(__dirname, '..', 'frontend', 'nuxt.config.js'));

  if (isProd) {
    config = {
      ...config,
      modules: config.modules.filter(module => !module.startsWith('@/')),
      srcDir: undefined,
      buildDir: 'dist/frontend'
    }
  } 
  config.dev = !isProd
  const nuxt = new Nuxt(config)
  
  // Faire le rendu chaque route avec Nuxt.js
  app.use(nuxt.render)
  
  // Faire le build seulement en mode de développement avec du rechargement à chaud
  if (config.dev) {
    new Builder(nuxt).build()
    .then(listen)
  }
  else {
    listen();
  }
}

function listen() {
  // Écouter le serveur
  app.listen(port, '0.0.0.0', () => {
    console.log('Le serveur écoute sur `localhost:' + port + '`.')
  })
}
