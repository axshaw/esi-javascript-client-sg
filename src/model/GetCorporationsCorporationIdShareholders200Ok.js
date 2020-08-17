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
    root.EveSwaggerInterface.GetCorporationsCorporationIdShareholders200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdShareholders200Ok model module.
   * @module model/GetCorporationsCorporationIdShareholders200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdShareholders200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdShareholders200Ok
   * @class
   * @param shareCount {Number} share_count integer
   * @param shareholderId {Number} shareholder_id integer
   * @param shareholderType {module:model/GetCorporationsCorporationIdShareholders200Ok.ShareholderTypeEnum} shareholder_type string
   */
  var exports = function(shareCount, shareholderId, shareholderType) {
    this.shareCount = shareCount;
    this.shareholderId = shareholderId;
    this.shareholderType = shareholderType;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdShareholders200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdShareholders200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdShareholders200Ok} The populated <code>GetCorporationsCorporationIdShareholders200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('share_count'))
        obj.shareCount = ApiClient.convertToType(data['share_count'], 'Number');
      if (data.hasOwnProperty('shareholder_id'))
        obj.shareholderId = ApiClient.convertToType(data['shareholder_id'], 'Number');
      if (data.hasOwnProperty('shareholder_type'))
        obj.shareholderType = ApiClient.convertToType(data['shareholder_type'], 'String');
    }
    return obj;
  }

  /**
   * share_count integer
   * @member {Number} shareCount
   */
  exports.prototype.shareCount = undefined;

  /**
   * shareholder_id integer
   * @member {Number} shareholderId
   */
  exports.prototype.shareholderId = undefined;

  /**
   * shareholder_type string
   * @member {module:model/GetCorporationsCorporationIdShareholders200Ok.ShareholderTypeEnum} shareholderType
   */
  exports.prototype.shareholderType = undefined;


  /**
   * Allowed values for the <code>shareholderType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ShareholderTypeEnum = {
    /**
     * value: "character"
     * @const
     */
    character: "character",

    /**
     * value: "corporation"
     * @const
     */
    corporation: "corporation"
  };

  return exports;

}));