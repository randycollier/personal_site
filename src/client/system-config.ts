const barrels: string[] = [
  'app',
  'app/+hero',
  'app/+user',
  'app/main-nav',
  'app/+index',
  /** @cli-barrel */
];

function createPackageConfig(barrels: string[]): any {
  return barrels.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}



export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
  }, createPackageConfig(barrels)),
  map: {
    'moment': 'vendor/moment/moment.js',
    // 'bootstrap':'vendor/bootstrap-sass/assets/javascripts/bootstrap.js',
    // '$': 'vendor/jquery/dist/jquery.js'
  }
};