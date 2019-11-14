// Same in the build/services/env
export enum Enviroment {
  production = 'production',
  development = 'development'
}

class AppService {
  public get isDev() {
    return process.env.NODE_ENV === Enviroment.development
  }
}

export default new AppService()
