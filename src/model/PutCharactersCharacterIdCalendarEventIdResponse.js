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
    root.EveSwaggerInterface.PutCharactersCharacterIdCalendarEventIdResponse = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PutCharactersCharacterIdCalendarEventIdResponse model module.
   * @module model/PutCharactersCharacterIdCalendarEventIdResponse
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>PutCharactersCharacterIdCalendarEventIdResponse</code>.
   * response object
   * @alias module:model/PutCharactersCharacterIdCalendarEventIdResponse
   * @class
   * @param response {module:model/PutCharactersCharacterIdCalendarEventIdResponse.ResponseEnum} response string
   */
  var exports = function(response) {
    this.response = response;
  };

  /**
   * Constructs a <code>PutCharactersCharacterIdCalendarEventIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutCharactersCharacterIdCalendarEventIdResponse} obj Optional instance to populate.
   * @return {module:model/PutCharactersCharacterIdCalendarEventIdResponse} The populated <code>PutCharactersCharacterIdCalendarEventIdResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('response'))
        obj.response = ApiClient.convertToType(data['response'], 'String');
    }
    return obj;
  }

  /**
   * response string
   * @member {module:model/PutCharactersCharacterIdCalendarEventIdResponse.ResponseEnum} response
   */
  exports.prototype.response = undefined;


  /**
   * Allowed values for the <code>response</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResponseEnum = {
    /**
     * value: "accepted"
     * @const
     */
    accepted: "accepted",

    /**
     * value: "declined"
     * @const
     */
    declined: "declined",

    /**
     * value: "tentative"
     * @const
     */
    tentative: "tentative"
  };

  return exports;

}));
