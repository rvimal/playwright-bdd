module.exports = {
  default: {
    require: ['tests/step-definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'html:test-results/cucumber-report.html', 'json:test-results/cucumber-report.json'],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true
  }
}
