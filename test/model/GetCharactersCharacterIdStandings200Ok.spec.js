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
    describe('GetCharactersCharacterIdStandings200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdStandings200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdStandings200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdStandings200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStandings200Ok);
      });

      it('should have the property fromId (base name: "from_id")', function() {
        // TODO: update the code to test the property fromId
        expect(instance).to.have.property('fromId');
        // expect(instance.fromId).to.be(expectedValueLiteral);
      });

      it('should have the property fromType (base name: "from_type")', function() {
        // TODO: update the code to test the property fromType
        expect(instance).to.have.property('fromType');
        // expect(instance.fromType).to.be(expectedValueLiteral);
      });

      it('should have the property standing (base name: "standing")', function() {
        // TODO: update the code to test the property standing
        expect(instance).to.have.property('standing');
        // expect(instance.standing).to.be(expectedValueLiteral);
      });

    });
  });

}));
