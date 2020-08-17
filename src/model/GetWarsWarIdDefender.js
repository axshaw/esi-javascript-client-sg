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
    root.EveSwaggerInterface.GetWarsWarIdDefender = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetWarsWarIdDefender model module.
   * @module model/GetWarsWarIdDefender
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetWarsWarIdDefender</code>.
   * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
   * @alias module:model/GetWarsWarIdDefender
   * @class
   * @param iskDestroyed {Number} ISK value of ships the defender has killed
   * @param shipsKilled {Number} The number of ships the defender has killed
   */
  var exports = function(iskDestroyed, shipsKilled) {
    this.iskDestroyed = iskDestroyed;
    this.shipsKilled = shipsKilled;
  };

  /**
   * Constructs a <code>GetWarsWarIdDefender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWarsWarIdDefender} obj Optional instance to populate.
   * @return {module:model/GetWarsWarIdDefender} The populated <code>GetWarsWarIdDefender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alliance_id'))
        obj.allianceId = ApiClient.convertToType(data['alliance_id'], 'Number');
      if (data.hasOwnProperty('corporation_id'))
        obj.corporationId = ApiClient.convertToType(data['corporation_id'], 'Number');
      if (data.hasOwnProperty('isk_destroyed'))
        obj.iskDestroyed = ApiClient.convertToType(data['isk_destroyed'], 'Number');
      if (data.hasOwnProperty('ships_killed'))
        obj.shipsKilled = ApiClient.convertToType(data['ships_killed'], 'Number');
    }
    return obj;
  }

  /**
   * Alliance ID if and only if the defender is an alliance
   * @member {Number} allianceId
   */
  exports.prototype.allianceId = undefined;

  /**
   * Corporation ID if and only if the defender is a corporation
   * @member {Number} corporationId
   */
  exports.prototype.corporationId = undefined;

  /**
   * ISK value of ships the defender has killed
   * @member {Number} iskDestroyed
   */
  exports.prototype.iskDestroyed = undefined;

  /**
   * The number of ships the defender has killed
   * @member {Number} shipsKilled
   */
  exports.prototype.shipsKilled = undefined;

  return exports;

}));
