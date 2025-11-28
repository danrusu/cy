import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: '**/*.spec.ts',

    supportFile: './cypress/support/index.ts',

    viewportWidth: 1280,
    viewportHeight: 1024,
    watchForFileChanges: false,
    defaultCommandTimeout: 10_000,
    video: false,

    experimentalOriginDependencies: true,

    setupNodeEvents,
  },
});

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
