'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');
var path = require('path');
var mkdirp = require('mkdirp');

var RequireBackboneMarionette = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();
        
        var prompts = [{
            name: 'appName',
            message: 'Enter your project name?'
        }];
    
        this.prompt(prompts, function(props) {
            this.appName = props.appName;
            done();
        }.bind(this));
    },
    
    createFolders: function() {
        mkdirp('app');
        mkdirp('app/js');
        mkdirp('app/js/vendor');
        mkdirp('app/js/entities');
        mkdirp('app/js/entities/collections');
        mkdirp('app/js/entities/models');
        mkdirp('app/js/modules');
        mkdirp('app/js/modules/main');
        mkdirp('app/js/modules/templates');
        mkdirp('app/js/modules/views');
        this.copy("_.bowerrc", ".bowerrc");
        this.copy("_bower.json", "bower.json");
        this.copy("_require-main.js", "app/js/require-main.js");
        this.copy("_app.js", "app/js/app.js");
        this.copy("_headerView.js", "app/js/modules/main/views/headerView.js");
        this.copy("_footerView.js", "app/js/modules/main/views/footerView.js");
        this.copy("_header.tpl", "app/js/modules/main/templates/header.tpl");
        this.copy("_footer.tpl", "app/js/modules/main/templates/footer.tpl");    
    },
  
    copyFiles: function() {
        this.template("_index.html", "app/index.html");
    },
  
    runNpm: function() {
        console.log("\n Done loading files! \nInstalling Bower packages...\n");
        /*
        this.npmInstall("", function() {
            console.log("\n Done installing node modules!\n Run 'npm start' to build and serve the project");
        });
        */
        this.bowerInstall("", function() {
            console.log("\n  Done installing bower Packages\n");
        });
    }
    
});



module.exports = RequireBackboneMarionette;