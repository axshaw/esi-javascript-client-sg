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
    root.EveSwaggerInterface.GetAlliancesAllianceIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetAlliancesAllianceIdOk model module.
   * @module model/GetAlliancesAllianceIdOk
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetAlliancesAllianceIdOk</code>.
   * 200 ok object
   * @alias module:model/GetAlliancesAllianceIdOk
   * @class
   * @param creatorCorporationId {Number} ID of the corporation that created the alliance
   * @param creatorId {Number} ID of the character that created the alliance
   * @param dateFounded {Date} date_founded string
   * @param name {String} the full name of the alliance
   * @param ticker {String} the short name of the alliance
   */
  var exports = function(creatorCorporationId, creatorId, dateFounded, name, ticker) {
    this.creatorCorporationId = creatorCorporationId;
    this.creatorId = creatorId;
    this.dateFounded = dateFounded;
    this.name = name;
    this.ticker = ticker;
  };

  /**
   * Constructs a <code>GetAlliancesAllianceIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAlliancesAllianceIdOk} obj Optional instance to populate.
   * @return {module:model/GetAlliancesAllianceIdOk} The populated <code>GetAlliancesAllianceIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('creator_corporation_id'))
        obj.creatorCorporationId = ApiClient.convertToType(data['creator_corporation_id'], 'Number');
      if (data.hasOwnProperty('creator_id'))
        obj.creatorId = ApiClient.convertToType(data['creator_id'], 'Number');
      if (data.hasOwnProperty('date_founded'))
        obj.dateFounded = ApiClient.convertToType(data['date_founded'], 'Date');
      if (data.hasOwnProperty('executor_corporation_id'))
        obj.executorCorporationId = ApiClient.convertToType(data['executor_corporation_id'], 'Number');
      if (data.hasOwnProperty('faction_id'))
        obj.factionId = ApiClient.convertToType(data['faction_id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('ticker'))
        obj.ticker = ApiClient.convertToType(data['ticker'], 'String');
    }
    return obj;
  }

  /**
   * ID of the corporation that created the alliance
   * @member {Number} creatorCorporationId
   */
  exports.prototype.creatorCorporationId = undefined;

  /**
   * ID of the character that created the alliance
   * @member {Number} creatorId
   */
  exports.prototype.creatorId = undefined;

  /**
   * date_founded string
   * @member {Date} dateFounded
   */
  exports.prototype.dateFounded = undefined;

  /**
   * the executor corporation ID, if this alliance is not closed
   * @member {Number} executorCorporationId
   */
  exports.prototype.executorCorporationId = undefined;

  /**
   * Faction ID this alliance is fighting for, if this alliance is enlisted in factional warfare
   * @member {Number} factionId
   */
  exports.prototype.factionId = undefined;

  /**
   * the full name of the alliance
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * the short name of the alliance
   * @member {String} ticker
   */
  exports.prototype.ticker = undefined;

  return exports;

}));