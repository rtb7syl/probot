import Octokit from '@octokit/rest'

declare module '@octokit/plugin-retry' {
  export function plugin(): Octokit.Plugin
}

declare module '@octokit/plugin-throttling' {
  export function plugin(): Octokit.Plugin
}