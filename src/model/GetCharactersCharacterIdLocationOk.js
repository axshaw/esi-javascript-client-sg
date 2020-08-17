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
    root.EveSwaggerInterface.GetCharactersCharacterIdLocationOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdLocationOk model module.
   * @module model/GetCharactersCharacterIdLocationOk
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdLocationOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdLocationOk
   * @class
   * @param solarSystemId {Number} solar_system_id integer
   */
  var exports = function(solarSystemId) {
    this.solarSystemId = solarSystemId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdLocationOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdLocationOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdLocationOk} The populated <code>GetCharactersCharacterIdLocationOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('solar_system_id'))
        obj.solarSystemId = ApiClient.convertToType(data['solar_system_id'], 'Number');
      if (data.hasOwnProperty('station_id'))
        obj.stationId = ApiClient.convertToType(data['station_id'], 'Number');
      if (data.hasOwnProperty('structure_id'))
        obj.structureId = ApiClient.convertToType(data['structure_id'], 'Number');
    }
    return obj;
  }

  /**
   * solar_system_id integer
   * @member {Number} solarSystemId
   */
  exports.prototype.solarSystemId = undefined;

  /**
   * station_id integer
   * @member {Number} stationId
   */
  exports.prototype.stationId = undefined;

  /**
   * structure_id integer
   * @member {Number} structureId
   */
  exports.prototype.structureId = undefined;

  return exports;

}));
