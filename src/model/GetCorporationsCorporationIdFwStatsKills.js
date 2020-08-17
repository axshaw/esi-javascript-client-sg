/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.7.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCorporationsCorporationIdFwStatsKills = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdFwStatsKills model module.
   * @module model/GetCorporationsCorporationIdFwStatsKills
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdFwStatsKills</code>.
   * Summary of kills done by the given corporation against enemy factions
   * @alias module:model/GetCorporationsCorporationIdFwStatsKills
   * @class
   * @param lastWeek {Number} Last week's total number of kills by members of the given corporation against enemy factions
   * @param total {Number} Total number of kills by members of the given corporation against enemy factions since the corporation enlisted
   * @param yesterday {Number} Yesterday's total number of kills by members of the given corporation against enemy factions
   */
  var exports = function(lastWeek, total, yesterday) {
    this.lastWeek = lastWeek;
    this.total = total;
    this.yesterday = yesterday;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdFwStatsKills</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdFwStatsKills} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdFwStatsKills} The populated <code>GetCorporationsCorporationIdFwStatsKills</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last_week'))
        obj.lastWeek = ApiClient.convertToType(data['last_week'], 'Number');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('yesterday'))
        obj.yesterday = ApiClient.convertToType(data['yesterday'], 'Number');
    }
    return obj;
  }

  /**
   * Last week's total number of kills by members of the given corporation against enemy factions
   * @member {Number} lastWeek
   */
  exports.prototype.lastWeek = undefined;

  /**
   * Total number of kills by members of the given corporation against enemy factions since the corporation enlisted
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * Yesterday's total number of kills by members of the given corporation against enemy factions
   * @member {Number} yesterday
   */
  exports.prototype.yesterday = undefined;

  return exports;

}));
