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
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsIsk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdStatsIsk model module.
   * @module model/GetCharactersCharacterIdStatsIsk
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsIsk</code>.
   * isk object
   * @alias module:model/GetCharactersCharacterIdStatsIsk
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsIsk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsIsk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsIsk} The populated <code>GetCharactersCharacterIdStatsIsk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('in'))
        obj._in = ApiClient.convertToType(data['in'], 'Number');
      if (data.hasOwnProperty('out'))
        obj.out = ApiClient.convertToType(data['out'], 'Number');
    }
    return obj;
  }

  /**
   * in integer
   * @member {Number} _in
   */
  exports.prototype._in = undefined;

  /**
   * out integer
   * @member {Number} out
   */
  exports.prototype.out = undefined;

  return exports;

}));
