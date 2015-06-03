'use strict';

require('angular/angular');
require('/home/rainer/class-folder/sea-d37/jun_2_services_directives/bower_components/angular-bootstrap/ui-bootstrap-tpls'); //*************

var notesApp = angular.module('notesApp', ['ui.bootstrap']);

// services
require('./services/copy')(notesApp);
require('./services/rest_resource')(notesApp);

//controllers
require('./notes/controllers/notes_controller')(notesApp);
require('./alert_controller')(notesApp); //*******************
require('./carousel_controller')(notesApp); //****************

//directives
require('./directives/simple_directive')(notesApp);
