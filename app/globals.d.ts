declare var require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}

declare var process: any

// From build system...
declare var BUILT: string
declare var NAME: string
declare var VERSION: string
declare var MODE: string
declare var DEBUG: boolean
declare var PRODUCTION: boolean
