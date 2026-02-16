module.exports = {
  default: {
    require: ['step-definitions/**/*.ts', 'src/hooks/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['features/**/*.feature'],
    timeout: 30000, 
  }
};
