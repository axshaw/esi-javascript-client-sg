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
    define(['ApiClient', 'model/GetFwLeaderboardsCorporationsActiveTotalActiveTotal1', 'model/GetFwLeaderboardsCorporationsLastWeekLastWeek1', 'model/GetFwLeaderboardsCorporationsYesterdayYesterday1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwLeaderboardsCorporationsActiveTotalActiveTotal1'), require('./GetFwLeaderboardsCorporationsLastWeekLastWeek1'), require('./GetFwLeaderboardsCorporationsYesterdayYesterday1'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwLeaderboardsCorporationsVictoryPoints = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetFwLeaderboardsCorporationsActiveTotalActiveTotal1, root.EveSwaggerInterface.GetFwLeaderboardsCorporationsLastWeekLastWeek1, root.EveSwaggerInterface.GetFwLeaderboardsCorporationsYesterdayYesterday1);
  }
}(this, function(ApiClient, GetFwLeaderboardsCorporationsActiveTotalActiveTotal1, GetFwLeaderboardsCorporationsLastWeekLastWeek1, GetFwLeaderboardsCorporationsYesterdayYesterday1) {
  'use strict';

  /**
   * The GetFwLeaderboardsCorporationsVictoryPoints model module.
   * @module model/GetFwLeaderboardsCorporationsVictoryPoints
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCorporationsVictoryPoints</code>.
   * Top 10 rankings of corporations by victory points from yesterday, last week and in total
   * @alias module:model/GetFwLeaderboardsCorporationsVictoryPoints
   * @class
   * @param activeTotal {Array.<module:model/GetFwLeaderboardsCorporationsActiveTotalActiveTotal1>} Top 10 ranking of corporations active in faction warfare by total victory points. A corporation is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @param lastWeek {Array.<module:model/GetFwLeaderboardsCorporationsLastWeekLastWeek1>} Top 10 ranking of corporations by victory points in the past week
   * @param yesterday {Array.<module:model/GetFwLeaderboardsCorporationsYesterdayYesterday1>} Top 10 ranking of corporations by victory points in the past day
   */
  var exports = function(activeTotal, lastWeek, yesterday) {
    this.activeTotal = activeTotal;
    this.lastWeek = lastWeek;
    this.yesterday = yesterday;
  };

  /**
   * Constructs a <code>GetFwLeaderboardsCorporationsVictoryPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCorporationsVictoryPoints} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCorporationsVictoryPoints} The populated <code>GetFwLeaderboardsCorporationsVictoryPoints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active_total'))
        obj.activeTotal = ApiClient.convertToType(data['active_total'], [GetFwLeaderboardsCorporationsActiveTotalActiveTotal1]);
      if (data.hasOwnProperty('last_week'))
        obj.lastWeek = ApiClient.convertToType(data['last_week'], [GetFwLeaderboardsCorporationsLastWeekLastWeek1]);
      if (data.hasOwnProperty('yesterday'))
        obj.yesterday = ApiClient.convertToType(data['yesterday'], [GetFwLeaderboardsCorporationsYesterdayYesterday1]);
    }
    return obj;
  }

  /**
   * Top 10 ranking of corporations active in faction warfare by total victory points. A corporation is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @member {Array.<module:model/GetFwLeaderboardsCorporationsActiveTotalActiveTotal1>} activeTotal
   */
  exports.prototype.activeTotal = undefined;

  /**
   * Top 10 ranking of corporations by victory points in the past week
   * @member {Array.<module:model/GetFwLeaderboardsCorporationsLastWeekLastWeek1>} lastWeek
   */
  exports.prototype.lastWeek = undefined;

  /**
   * Top 10 ranking of corporations by victory points in the past day
   * @member {Array.<module:model/GetFwLeaderboardsCorporationsYesterdayYesterday1>} yesterday
   */
  exports.prototype.yesterday = undefined;

  return exports;

}));