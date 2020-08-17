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
    root.EveSwaggerInterface.GetCorporationsCorporationIdMedals200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdMedals200Ok model module.
   * @module model/GetCorporationsCorporationIdMedals200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdMedals200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdMedals200Ok
   * @class
   * @param createdAt {Date} created_at string
   * @param creatorId {Number} ID of the character who created this medal
   * @param description {String} description string
   * @param medalId {Number} medal_id integer
   * @param title {String} title string
   */
  var exports = function(createdAt, creatorId, description, medalId, title) {
    this.createdAt = createdAt;
    this.creatorId = creatorId;
    this.description = description;
    this.medalId = medalId;
    this.title = title;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdMedals200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdMedals200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdMedals200Ok} The populated <code>GetCorporationsCorporationIdMedals200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('creator_id'))
        obj.creatorId = ApiClient.convertToType(data['creator_id'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('medal_id'))
        obj.medalId = ApiClient.convertToType(data['medal_id'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }

  /**
   * created_at string
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * ID of the character who created this medal
   * @member {Number} creatorId
   */
  exports.prototype.creatorId = undefined;

  /**
   * description string
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * medal_id integer
   * @member {Number} medalId
   */
  exports.prototype.medalId = undefined;

  /**
   * title string
   * @member {String} title
   */
  exports.prototype.title = undefined;

  return exports;

}));
