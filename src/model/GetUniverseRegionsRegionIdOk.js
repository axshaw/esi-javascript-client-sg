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
    root.EveSwaggerInterface.GetUniverseRegionsRegionIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetUniverseRegionsRegionIdOk model module.
   * @module model/GetUniverseRegionsRegionIdOk
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetUniverseRegionsRegionIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseRegionsRegionIdOk
   * @class
   * @param constellations {Array.<Number>} constellations array
   * @param name {String} name string
   * @param regionId {Number} region_id integer
   */
  var exports = function(constellations, name, regionId) {
    this.constellations = constellations;
    this.name = name;
    this.regionId = regionId;
  };

  /**
   * Constructs a <code>GetUniverseRegionsRegionIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseRegionsRegionIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseRegionsRegionIdOk} The populated <code>GetUniverseRegionsRegionIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('constellations'))
        obj.constellations = ApiClient.convertToType(data['constellations'], ['Number']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('region_id'))
        obj.regionId = ApiClient.convertToType(data['region_id'], 'Number');
    }
    return obj;
  }

  /**
   * constellations array
   * @member {Array.<Number>} constellations
   */
  exports.prototype.constellations = undefined;

  /**
   * description string
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * region_id integer
   * @member {Number} regionId
   */
  exports.prototype.regionId = undefined;

  return exports;

}));
