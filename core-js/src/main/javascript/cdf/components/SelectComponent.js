/*!
 * Copyright 2002 - 2015 Webdetails, a Pentaho company. All rights reserved.
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

define(['./SelectBaseComponent'], function(SelectBaseComponent) {

  /**
   * @class cdf.components.SelectComponent
   * @amd cdf/components/SelectComponent
   * @extends cdf.components.SelectBaseComponent
   * @classdesc The select component.
   * @ignore
   */
  return SelectBaseComponent.extend(/** @lends cdf.components.SelectComponent# */{
    /**
     * Flag indicating if the default should show when the value is empty.
     *
     * @type {boolean}
     * @default
     */
    defaultIfEmpty: true,

    /**
     * Gets the value of the _select_ placeholder.
     *
     * @return {string} The value of the corresponding HTML element.
     */
    getValue: function() {
      return this.placeholder("select").val();
    }
  });

});
