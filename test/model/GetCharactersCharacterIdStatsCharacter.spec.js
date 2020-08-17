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
    describe('GetCharactersCharacterIdStatsCharacter', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdStatsCharacter();
      });

      it('should create an instance of GetCharactersCharacterIdStatsCharacter', function() {
        // TODO: update the code to test GetCharactersCharacterIdStatsCharacter
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStatsCharacter);
      });

      it('should have the property daysOfActivity (base name: "days_of_activity")', function() {
        // TODO: update the code to test the property daysOfActivity
        expect(instance).to.have.property('daysOfActivity');
        // expect(instance.daysOfActivity).to.be(expectedValueLiteral);
      });

      it('should have the property minutes (base name: "minutes")', function() {
        // TODO: update the code to test the property minutes
        expect(instance).to.have.property('minutes');
        // expect(instance.minutes).to.be(expectedValueLiteral);
      });

      it('should have the property sessionsStarted (base name: "sessions_started")', function() {
        // TODO: update the code to test the property sessionsStarted
        expect(instance).to.have.property('sessionsStarted');
        // expect(instance.sessionsStarted).to.be(expectedValueLiteral);
      });

    });
  });

}));