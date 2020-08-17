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
    root.EveSwaggerInterface.GetCharactersCharacterIdOnlineOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdOnlineOk model module.
   * @module model/GetCharactersCharacterIdOnlineOk
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdOnlineOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdOnlineOk
   * @class
   * @param online {Boolean} If the character is online
   */
  var exports = function(online) {
    this.online = online;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdOnlineOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdOnlineOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdOnlineOk} The populated <code>GetCharactersCharacterIdOnlineOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last_login'))
        obj.lastLogin = ApiClient.convertToType(data['last_login'], 'Date');
      if (data.hasOwnProperty('last_logout'))
        obj.lastLogout = ApiClient.convertToType(data['last_logout'], 'Date');
      if (data.hasOwnProperty('logins'))
        obj.logins = ApiClient.convertToType(data['logins'], 'Number');
      if (data.hasOwnProperty('online'))
        obj.online = ApiClient.convertToType(data['online'], 'Boolean');
    }
    return obj;
  }

  /**
   * Timestamp of the last login
   * @member {Date} lastLogin
   */
  exports.prototype.lastLogin = undefined;

  /**
   * Timestamp of the last logout
   * @member {Date} lastLogout
   */
  exports.prototype.lastLogout = undefined;

  /**
   * Total number of times the character has logged in
   * @member {Number} logins
   */
  exports.prototype.logins = undefined;

  /**
   * If the character is online
   * @member {Boolean} online
   */
  exports.prototype.online = undefined;

  return exports;

}));
