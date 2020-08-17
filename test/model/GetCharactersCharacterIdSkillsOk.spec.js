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
    describe('GetCharactersCharacterIdSkillsOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdSkillsOk();
      });

      it('should create an instance of GetCharactersCharacterIdSkillsOk', function() {
        // TODO: update the code to test GetCharactersCharacterIdSkillsOk
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdSkillsOk);
      });

      it('should have the property skills (base name: "skills")', function() {
        // TODO: update the code to test the property skills
        expect(instance).to.have.property('skills');
        // expect(instance.skills).to.be(expectedValueLiteral);
      });

      it('should have the property totalSp (base name: "total_sp")', function() {
        // TODO: update the code to test the property totalSp
        expect(instance).to.have.property('totalSp');
        // expect(instance.totalSp).to.be(expectedValueLiteral);
      });

      it('should have the property unallocatedSp (base name: "unallocated_sp")', function() {
        // TODO: update the code to test the property unallocatedSp
        expect(instance).to.have.property('unallocatedSp');
        // expect(instance.unallocatedSp).to.be(expectedValueLiteral);
      });

    });
  });

}));
