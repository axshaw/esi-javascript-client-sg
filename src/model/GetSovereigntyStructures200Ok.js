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
    root.EveSwaggerInterface.GetSovereigntyStructures200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetSovereigntyStructures200Ok model module.
   * @module model/GetSovereigntyStructures200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetSovereigntyStructures200Ok</code>.
   * 200 ok object
   * @alias module:model/GetSovereigntyStructures200Ok
   * @class
   * @param allianceId {Number} The alliance that owns the structure. 
   * @param solarSystemId {Number} Solar system in which the structure is located. 
   * @param structureId {Number} Unique item ID for this structure.
   * @param structureTypeId {Number} A reference to the type of structure this is. 
   */
  var exports = function(allianceId, solarSystemId, structureId, structureTypeId) {
    this.allianceId = allianceId;
    this.solarSystemId = solarSystemId;
    this.structureId = structureId;
    this.structureTypeId = structureTypeId;
  };

  /**
   * Constructs a <code>GetSovereigntyStructures200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSovereigntyStructures200Ok} obj Optional instance to populate.
   * @return {module:model/GetSovereigntyStructures200Ok} The populated <code>GetSovereigntyStructures200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alliance_id'))
        obj.allianceId = ApiClient.convertToType(data['alliance_id'], 'Number');
      if (data.hasOwnProperty('solar_system_id'))
        obj.solarSystemId = ApiClient.convertToType(data['solar_system_id'], 'Number');
      if (data.hasOwnProperty('structure_id'))
        obj.structureId = ApiClient.convertToType(data['structure_id'], 'Number');
      if (data.hasOwnProperty('structure_type_id'))
        obj.structureTypeId = ApiClient.convertToType(data['structure_type_id'], 'Number');
      if (data.hasOwnProperty('vulnerability_occupancy_level'))
        obj.vulnerabilityOccupancyLevel = ApiClient.convertToType(data['vulnerability_occupancy_level'], 'Number');
      if (data.hasOwnProperty('vulnerable_end_time'))
        obj.vulnerableEndTime = ApiClient.convertToType(data['vulnerable_end_time'], 'Date');
      if (data.hasOwnProperty('vulnerable_start_time'))
        obj.vulnerableStartTime = ApiClient.convertToType(data['vulnerable_start_time'], 'Date');
    }
    return obj;
  }

  /**
   * The alliance that owns the structure. 
   * @member {Number} allianceId
   */
  exports.prototype.allianceId = undefined;

  /**
   * Solar system in which the structure is located. 
   * @member {Number} solarSystemId
   */
  exports.prototype.solarSystemId = undefined;

  /**
   * Unique item ID for this structure.
   * @member {Number} structureId
   */
  exports.prototype.structureId = undefined;

  /**
   * A reference to the type of structure this is. 
   * @member {Number} structureTypeId
   */
  exports.prototype.structureTypeId = undefined;

  /**
   * The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure. 
   * @member {Number} vulnerabilityOccupancyLevel
   */
  exports.prototype.vulnerabilityOccupancyLevel = undefined;

  /**
   * The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to 'overtime' and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated. 
   * @member {Date} vulnerableEndTime
   */
  exports.prototype.vulnerableEndTime = undefined;

  /**
   * The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime. 
   * @member {Date} vulnerableStartTime
   */
  exports.prototype.vulnerableStartTime = undefined;

  return exports;

}));
