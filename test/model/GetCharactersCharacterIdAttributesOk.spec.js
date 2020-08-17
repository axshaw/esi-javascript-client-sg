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
    describe('GetCharactersCharacterIdAttributesOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdAttributesOk();
      });

      it('should create an instance of GetCharactersCharacterIdAttributesOk', function() {
        // TODO: update the code to test GetCharactersCharacterIdAttributesOk
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdAttributesOk);
      });

      it('should have the property accruedRemapCooldownDate (base name: "accrued_remap_cooldown_date")', function() {
        // TODO: update the code to test the property accruedRemapCooldownDate
        expect(instance).to.have.property('accruedRemapCooldownDate');
        // expect(instance.accruedRemapCooldownDate).to.be(expectedValueLiteral);
      });

      it('should have the property bonusRemaps (base name: "bonus_remaps")', function() {
        // TODO: update the code to test the property bonusRemaps
        expect(instance).to.have.property('bonusRemaps');
        // expect(instance.bonusRemaps).to.be(expectedValueLiteral);
      });

      it('should have the property charisma (base name: "charisma")', function() {
        // TODO: update the code to test the property charisma
        expect(instance).to.have.property('charisma');
        // expect(instance.charisma).to.be(expectedValueLiteral);
      });

      it('should have the property intelligence (base name: "intelligence")', function() {
        // TODO: update the code to test the property intelligence
        expect(instance).to.have.property('intelligence');
        // expect(instance.intelligence).to.be(expectedValueLiteral);
      });

      it('should have the property lastRemapDate (base name: "last_remap_date")', function() {
        // TODO: update the code to test the property lastRemapDate
        expect(instance).to.have.property('lastRemapDate');
        // expect(instance.lastRemapDate).to.be(expectedValueLiteral);
      });

      it('should have the property memory (base name: "memory")', function() {
        // TODO: update the code to test the property memory
        expect(instance).to.have.property('memory');
        // expect(instance.memory).to.be(expectedValueLiteral);
      });

      it('should have the property perception (base name: "perception")', function() {
        // TODO: update the code to test the property perception
        expect(instance).to.have.property('perception');
        // expect(instance.perception).to.be(expectedValueLiteral);
      });

      it('should have the property willpower (base name: "willpower")', function() {
        // TODO: update the code to test the property willpower
        expect(instance).to.have.property('willpower');
        // expect(instance.willpower).to.be(expectedValueLiteral);
      });

    });
  });

}));
