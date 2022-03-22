/// <reference types="vite/client" />

interface Window {
  ethereum: any
}

interface ImportMetaEnv {
  readonly VITE_CONTRACT_ADDR: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
