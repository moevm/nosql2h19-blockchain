import express, { Request, Response } from 'express'
import { resolve, join } from 'path'
import bodyParser from 'body-parser'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import Env from '../../build/services/env'
import CompilationService from '../../build/services/compiler'
import ConfiguratorService from '../../build/services/configurator'
import { clientRoutes } from './constants'

const env = new Env(process.env)
const configurator = new ConfiguratorService(env)
const {
  nodeConfig: { isDev },
  serverConfig: { host, port },
  paths: { OUTPUT_PATH, PUBLIC_PATH },
  withHMR
} = env

const clientConfig = configurator.getConfig({
  isDev,
  isServer: false,
  withHMR
})
const compilation = new CompilationService(clientConfig)
const clientCompiler = compilation.getCompiler()
const app = express()

app.use(
  webpackDevMiddleware(clientCompiler, {
    writeToDisk: !withHMR,
    publicPath: clientConfig.output.publicPath
  })
)
app.use(bodyParser.json())
app.use(PUBLIC_PATH, express.static(OUTPUT_PATH))
if (withHMR) {
  app.use(webpackHotMiddleware(clientCompiler))
}

app.get(clientRoutes, (req: Request, res: Response) => {
  res.sendFile(join(OUTPUT_PATH, 'index.html'))
})

app.listen(port, () => console.log(`Started Node.js server on port: ${port}`))
