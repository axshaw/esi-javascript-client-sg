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
    root.EveSwaggerInterface.GetCharactersCharacterIdFittingsItem = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdFittingsItem model module.
   * @module model/GetCharactersCharacterIdFittingsItem
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdFittingsItem</code>.
   * item object
   * @alias module:model/GetCharactersCharacterIdFittingsItem
   * @class
   * @param flag {module:model/GetCharactersCharacterIdFittingsItem.FlagEnum} flag string
   * @param quantity {Number} quantity integer
   * @param typeId {Number} type_id integer
   */
  var exports = function(flag, quantity, typeId) {
    this.flag = flag;
    this.quantity = quantity;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdFittingsItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdFittingsItem} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdFittingsItem} The populated <code>GetCharactersCharacterIdFittingsItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('flag'))
        obj.flag = ApiClient.convertToType(data['flag'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * flag string
   * @member {module:model/GetCharactersCharacterIdFittingsItem.FlagEnum} flag
   */
  exports.prototype.flag = undefined;

  /**
   * quantity integer
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  /**
   * Allowed values for the <code>flag</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FlagEnum = {
    /**
     * value: "Cargo"
     * @const
     */
    cargo: "Cargo",

    /**
     * value: "DroneBay"
     * @const
     */
    droneBay: "DroneBay",

    /**
     * value: "FighterBay"
     * @const
     */
    fighterBay: "FighterBay",

    /**
     * value: "HiSlot0"
     * @const
     */
    hiSlot0: "HiSlot0",

    /**
     * value: "HiSlot1"
     * @const
     */
    hiSlot1: "HiSlot1",

    /**
     * value: "HiSlot2"
     * @const
     */
    hiSlot2: "HiSlot2",

    /**
     * value: "HiSlot3"
     * @const
     */
    hiSlot3: "HiSlot3",

    /**
     * value: "HiSlot4"
     * @const
     */
    hiSlot4: "HiSlot4",

    /**
     * value: "HiSlot5"
     * @const
     */
    hiSlot5: "HiSlot5",

    /**
     * value: "HiSlot6"
     * @const
     */
    hiSlot6: "HiSlot6",

    /**
     * value: "HiSlot7"
     * @const
     */
    hiSlot7: "HiSlot7",

    /**
     * value: "Invalid"
     * @const
     */
    invalid: "Invalid",

    /**
     * value: "LoSlot0"
     * @const
     */
    loSlot0: "LoSlot0",

    /**
     * value: "LoSlot1"
     * @const
     */
    loSlot1: "LoSlot1",

    /**
     * value: "LoSlot2"
     * @const
     */
    loSlot2: "LoSlot2",

    /**
     * value: "LoSlot3"
     * @const
     */
    loSlot3: "LoSlot3",

    /**
     * value: "LoSlot4"
     * @const
     */
    loSlot4: "LoSlot4",

    /**
     * value: "LoSlot5"
     * @const
     */
    loSlot5: "LoSlot5",

    /**
     * value: "LoSlot6"
     * @const
     */
    loSlot6: "LoSlot6",

    /**
     * value: "LoSlot7"
     * @const
     */
    loSlot7: "LoSlot7",

    /**
     * value: "MedSlot0"
     * @const
     */
    medSlot0: "MedSlot0",

    /**
     * value: "MedSlot1"
     * @const
     */
    medSlot1: "MedSlot1",

    /**
     * value: "MedSlot2"
     * @const
     */
    medSlot2: "MedSlot2",

    /**
     * value: "MedSlot3"
     * @const
     */
    medSlot3: "MedSlot3",

    /**
     * value: "MedSlot4"
     * @const
     */
    medSlot4: "MedSlot4",

    /**
     * value: "MedSlot5"
     * @const
     */
    medSlot5: "MedSlot5",

    /**
     * value: "MedSlot6"
     * @const
     */
    medSlot6: "MedSlot6",

    /**
     * value: "MedSlot7"
     * @const
     */
    medSlot7: "MedSlot7",

    /**
     * value: "RigSlot0"
     * @const
     */
    rigSlot0: "RigSlot0",

    /**
     * value: "RigSlot1"
     * @const
     */
    rigSlot1: "RigSlot1",

    /**
     * value: "RigSlot2"
     * @const
     */
    rigSlot2: "RigSlot2",

    /**
     * value: "ServiceSlot0"
     * @const
     */
    serviceSlot0: "ServiceSlot0",

    /**
     * value: "ServiceSlot1"
     * @const
     */
    serviceSlot1: "ServiceSlot1",

    /**
     * value: "ServiceSlot2"
     * @const
     */
    serviceSlot2: "ServiceSlot2",

    /**
     * value: "ServiceSlot3"
     * @const
     */
    serviceSlot3: "ServiceSlot3",

    /**
     * value: "ServiceSlot4"
     * @const
     */
    serviceSlot4: "ServiceSlot4",

    /**
     * value: "ServiceSlot5"
     * @const
     */
    serviceSlot5: "ServiceSlot5",

    /**
     * value: "ServiceSlot6"
     * @const
     */
    serviceSlot6: "ServiceSlot6",

    /**
     * value: "ServiceSlot7"
     * @const
     */
    serviceSlot7: "ServiceSlot7",

    /**
     * value: "SubSystemSlot0"
     * @const
     */
    subSystemSlot0: "SubSystemSlot0",

    /**
     * value: "SubSystemSlot1"
     * @const
     */
    subSystemSlot1: "SubSystemSlot1",

    /**
     * value: "SubSystemSlot2"
     * @const
     */
    subSystemSlot2: "SubSystemSlot2",

    /**
     * value: "SubSystemSlot3"
     * @const
     */
    subSystemSlot3: "SubSystemSlot3"
  };

  return exports;

}));
