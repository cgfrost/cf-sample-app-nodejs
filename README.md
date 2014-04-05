# [NodeJS Getting Started] [![dependency Status](https://david-dm.org/cgfrost/nodejs-cf-sample-app /status.png?theme=shields.io)](https://david-dm.org/cgfrost/nodejs-cf-sample-app #info=dependencies) [![devDependency Status](https://david-dm.org/cgfrost/nodejs-cf-sample-app /dev-status.png?theme=shields.io)](https://david-dm.org/cgfrost/nodejs-cf-sample-app #info=devDependencies)



<!--
[![Build Status](https://travis-ci.org/cloudfoundry/java-buildpack.png?branch=master)](https://travis-ci.org/cloudfoundry/java-buildpack)
[![Dependency Status](https://gemnasium.com/cloudfoundry/java-buildpack.png)](http://gemnasium.com/cloudfoundry/java-buildpack)
[![Code Climate](https://codeclimate.com/repos/5224adaec7f3a3415107004c/badges/bc49f7d7f8dfc47057c8/gpa.png)](https://codeclimate.com/repos/5224adaec7f3a3415107004c/feed)
[![Code Climate](https://codeclimate.com/repos/5224adaec7f3a3415107004c/badges/bc49f7d7f8dfc47057c8/coverage.png)](https://codeclimate.com/repos/5224adaec7f3a3415107004c/feed)
-->

A sample NodeJS application to demonstrate project structure, building and deployments.

Folder Layout
-------------

* lib - Locally defined modules, business logic that isn't anything to do with Express.
* public - Anything that can be downloaded to a client/browser.
* routes - Express routes.
* test - Jasmine tests coming soon.
* views - Jade views.

Root Files
----------

* gulpfile.js - Gulp task runner task definitions.
* manifest.yml - Cloudfoundry v2 deployment descriptor.
* package.json - NPM package definition.
* server.js - The usual entry point in to the NodeJS application.
