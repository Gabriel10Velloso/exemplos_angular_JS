
# ⌛ Ex: 1  SORT()

~~~ts
  // IMPRIMINDO ORDEM DECRESCENTE
  sortTeste() {
      this.points = [40, 100, 1, 5, 25, 10];
      this.points.sort(( a, b) => {
        return b - a;
      });
      this.sort.nativeElement.innerHTML = this.points;
  }
~~~






<!--
Estudar no futuro
-->

# EXEMPLO PRA ESTUDAR MAIS PARA FRENTE
### Development tools and libraries specialized for Angular

This is the home of the DevKit and the Angular CLI code. You can find the Angular CLI specific README
[here](https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md).


[![CircleCI branch](https://img.shields.io/circleci/project/github/angular/angular-cli/master.svg?label=circleci)](https://circleci.com/gh/angular/angular-cli) [![Dependency Status](https://david-dm.org/angular/angular-cli.svg)](https://david-dm.org/angular/angular-cli) [![devDependency Status](https://david-dm.org/angular/angular-cli/dev-status.svg)](https://david-dm.org/angular/angular-cli?type=dev) 

[![License](https://img.shields.io/npm/l/@angular-angular-cli/core.svg)](https://github.com/angular/angular-cli/blob/master/LICENSE) 

[![GitHub forks](https://img.shields.io/github/forks/angular/angular-cli.svg?style=social&label=Fork)](https://github.com/angular/angular-cli/fork) [![GitHub stars](https://img.shields.io/github/stars/angular/angular-cli.svg?style=social&label=Star)](https://github.com/angular/angular-cli) 



----

This is the home for all the tools and libraries built to assist developers with their Angular applications.

### Quick Links
[Gitter](https://gitter.im/angular/angular-cli) | [Contributing](https://github.com/angular/angular-cli/blob/master/CONTRIBUTING.md) | [Angular CLI](http://github.com/angular/angular-cli) | 
|---|---|---|


## The Goal of DevKit

Our goal is to provide a large set of libraries that can be used to manage, develop, deploy and
analyze your code.

This is the extension of the Angular CLI Project. Once this set of tools is done, the Angular CLI
as it is today will become one of many interfaces available to perform those tasks. Everything
will also be available to third party tools and IDEs.




## Tools

| Project | Package | Version | Links |
|---|---|---|---|
**Angular CLI** | [`@angular/cli`](https://npmjs.com/package/@angular/cli) | [![latest](https://img.shields.io/npm/v/%40angular%2Fcli/latest.svg)](https://npmjs.com/package/@angular/cli) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/cli-builds)
**Schematics CLI** | [`@angular-devkit/schematics-cli`](https://npmjs.com/package/@angular-devkit/schematics-cli) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fschematics-cli/latest.svg)](https://npmjs.com/package/@angular-devkit/schematics-cli) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-schematics-cli-builds)



## Packages
This is a monorepo which contains many packages:



| Project | Package | Version | Links |
|---|---|---|---|
**Architect** | [`@angular-devkit/architect`](https://npmjs.com/package/@angular-devkit/architect) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Farchitect/latest.svg)](https://npmjs.com/package/@angular-devkit/architect) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/architect/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-architect-builds)
**Architect CLI** | [`@angular-devkit/architect-cli`](https://npmjs.com/package/@angular-devkit/architect-cli) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Farchitect-cli/latest.svg)](https://npmjs.com/package/@angular-devkit/architect-cli) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-architect-cli-builds)
**Build Angular** | [`@angular-devkit/build-angular`](https://npmjs.com/package/@angular-devkit/build-angular) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fbuild-angular/latest.svg)](https://npmjs.com/package/@angular-devkit/build-angular) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_angular/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-build-angular-builds)
**Build NgPackagr** | [`@angular-devkit/build-ng-packagr`](https://npmjs.com/package/@angular-devkit/build-ng-packagr) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fbuild-ng-packagr/latest.svg)](https://npmjs.com/package/@angular-devkit/build-ng-packagr) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_ng_packagr/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-build-ng-packagr-builds)
**Build Optimizer** | [`@angular-devkit/build-optimizer`](https://npmjs.com/package/@angular-devkit/build-optimizer) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fbuild-optimizer/latest.svg)](https://npmjs.com/package/@angular-devkit/build-optimizer) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_optimizer/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-build-optimizer-builds)
**Build Webpack** | [`@angular-devkit/build-webpack`](https://npmjs.com/package/@angular-devkit/build-webpack) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fbuild-webpack/latest.svg)](https://npmjs.com/package/@angular-devkit/build-webpack) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_webpack/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-build-webpack-builds)
**Core** | [`@angular-devkit/core`](https://npmjs.com/package/@angular-devkit/core) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fcore/latest.svg)](https://npmjs.com/package/@angular-devkit/core) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/core/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-core-builds)
**Schematics** | [`@angular-devkit/schematics`](https://npmjs.com/package/@angular-devkit/schematics) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fschematics/latest.svg)](https://npmjs.com/package/@angular-devkit/schematics) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/schematics/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-schematics-builds)

#### Schematics

| Project | Package | Version | Links |
|---|---|---|---|
**Angular PWA Schematics** | [`@angular/pwa`](https://npmjs.com/package/@angular/pwa) | [![latest](https://img.shields.io/npm/v/%40angular%2Fpwa/latest.svg)](https://npmjs.com/package/@angular/pwa) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-pwa-builds)
**Angular Schematics** | [`@schematics/angular`](https://npmjs.com/package/@schematics/angular) | [![latest](https://img.shields.io/npm/v/%40schematics%2Fangular/latest.svg)](https://npmjs.com/package/@schematics/angular) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/schematics-angular-builds)
**Package JSON Update Schematics** | [`@schematics/package-update`](https://npmjs.com/package/@schematics/package-update) | [![latest](https://img.shields.io/npm/v/%40schematics%2Fpackage-update/latest.svg)](https://npmjs.com/package/@schematics/package-update) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/schematics-package-update-builds)
**Schematics Schematics** | [`@schematics/schematics`](https://npmjs.com/package/@schematics/schematics) | [![latest](https://img.shields.io/npm/v/%40schematics%2Fschematics/latest.svg)](https://npmjs.com/package/@schematics/schematics) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/schematics-schematics-builds)
**Package Update Schematics** | [`@schematics/update`](https://npmjs.com/package/@schematics/update) | [![latest](https://img.shields.io/npm/v/%40schematics%2Fupdate/latest.svg)](https://npmjs.com/package/@schematics/update) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/schematics-update-builds)

#### Misc

| Project | Package | Version | Links |
|---|---|---|---|
**Webpack Angular Plugin** | [`@ngtools/webpack`](https://npmjs.com/package/@ngtools/webpack) | [![latest](https://img.shields.io/npm/v/%40ngtools%2Fwebpack/latest.svg)](https://npmjs.com/package/@ngtools/webpack) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/ngtools-webpack-builds)


