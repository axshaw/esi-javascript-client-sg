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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PostCharactersCharacterIdAssetsLocations200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.PostCharactersCharacterIdAssetsLocations200Ok();
      });

      it('should create an instance of PostCharactersCharacterIdAssetsLocations200Ok', function() {
        // TODO: update the code to test PostCharactersCharacterIdAssetsLocations200Ok
        expect(instance).to.be.a(EveSwaggerInterface.PostCharactersCharacterIdAssetsLocations200Ok);
      });

      it('should have the property itemId (base name: "item_id")', function() {
        // TODO: update the code to test the property itemId
        expect(instance).to.have.property('itemId');
        // expect(instance.itemId).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

    });
  });

}));
