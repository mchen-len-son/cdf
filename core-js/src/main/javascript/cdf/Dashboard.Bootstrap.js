/*!
 * Copyright 2002 - 2016 Webdetails, a Pentaho company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/**
 * @class cdf."Dashboard.Bootstrap"
 * @amd cdf/Dashboard.Bootstrap
 * @summary Represents a {@link http://getbootstrap.com|bootstrap} dashboard.
 * @classdesc Represents a {@link http://getbootstrap.com|bootstrap} dashboard
 *            aggregating all the classes in the Dashboard hierarchy.
 *            It's a specialization of the base abstract
 *            {@link cdf.dashboard.Dashboard|Dashboard} class.
 * @see {@link cdf.dashboard.Dashboard|Dashboard}
 * @see http://www.getbootstrap.com
 * @extends cdf.dashboard.Dashboard
 * @example
 *
 *      require(['cdf/Dashboard.Bootstrap', 'cdf/components/ButtonComponent'],
 *        function(Dashboard, ButtonComponent) {
 *          var dashboard = new Dashboard();
 *
 *          dashboard.addParameter("input", "");
 *
 *          dashboard.addComponent(new ButtonComponent({
 *            name: "buttonComponent",
 *            type: "button",
 *            listeners:[],
 *            htmlObject: "buttonObject",
 *            label: "A button",
 *            expression: function() {
 *              this.setLabel('Yes, a clickable button');
 *              alert('Button was clicked');
 *            },
 *            executeAtStart: true,
 *            preChange: function() { return true; },
 *            postChange: function() { return true; },
 *            successCallback: function(data) {},
 *            failureCallback: function() {}
 *          }));
 *          dashboard.init();
 *      });
 */
define([
  './Dashboard',
  'amd!./lib/bootstrap',
  'css!cdf/lib/font-awesome/css/font-awesome.css',
  './lib/html5shiv',
  './lib/respond'
 ], function(Dashboard) {

  return Dashboard;

});
