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
    root.EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdNotificationsContacts200Ok model module.
   * @module model/GetCharactersCharacterIdNotificationsContacts200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdNotificationsContacts200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdNotificationsContacts200Ok
   * @class
   * @param message {String} message string
   * @param notificationId {Number} notification_id integer
   * @param sendDate {Date} send_date string
   * @param senderCharacterId {Number} sender_character_id integer
   * @param standingLevel {Number} A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -> Terrible | -5 -> Bad |  0 -> Neutral |  5 -> Good |  10 -> Excellent
   */
  var exports = function(message, notificationId, sendDate, senderCharacterId, standingLevel) {
    this.message = message;
    this.notificationId = notificationId;
    this.sendDate = sendDate;
    this.senderCharacterId = senderCharacterId;
    this.standingLevel = standingLevel;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdNotificationsContacts200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdNotificationsContacts200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdNotificationsContacts200Ok} The populated <code>GetCharactersCharacterIdNotificationsContacts200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('notification_id'))
        obj.notificationId = ApiClient.convertToType(data['notification_id'], 'Number');
      if (data.hasOwnProperty('send_date'))
        obj.sendDate = ApiClient.convertToType(data['send_date'], 'Date');
      if (data.hasOwnProperty('sender_character_id'))
        obj.senderCharacterId = ApiClient.convertToType(data['sender_character_id'], 'Number');
      if (data.hasOwnProperty('standing_level'))
        obj.standingLevel = ApiClient.convertToType(data['standing_level'], 'Number');
    }
    return obj;
  }

  /**
   * message string
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * notification_id integer
   * @member {Number} notificationId
   */
  exports.prototype.notificationId = undefined;

  /**
   * send_date string
   * @member {Date} sendDate
   */
  exports.prototype.sendDate = undefined;

  /**
   * sender_character_id integer
   * @member {Number} senderCharacterId
   */
  exports.prototype.senderCharacterId = undefined;

  /**
   * A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -> Terrible | -5 -> Bad |  0 -> Neutral |  5 -> Good |  10 -> Excellent
   * @member {Number} standingLevel
   */
  exports.prototype.standingLevel = undefined;

  return exports;

}));
