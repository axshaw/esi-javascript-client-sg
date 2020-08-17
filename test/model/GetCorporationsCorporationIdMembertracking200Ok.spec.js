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
    describe('GetCorporationsCorporationIdMembertracking200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdMembertracking200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdMembertracking200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdMembertracking200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdMembertracking200Ok);
      });

      it('should have the property baseId (base name: "base_id")', function() {
        // TODO: update the code to test the property baseId
        expect(instance).to.have.property('baseId');
        // expect(instance.baseId).to.be(expectedValueLiteral);
      });

      it('should have the property characterId (base name: "character_id")', function() {
        // TODO: update the code to test the property characterId
        expect(instance).to.have.property('characterId');
        // expect(instance.characterId).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "location_id")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property logoffDate (base name: "logoff_date")', function() {
        // TODO: update the code to test the property logoffDate
        expect(instance).to.have.property('logoffDate');
        // expect(instance.logoffDate).to.be(expectedValueLiteral);
      });

      it('should have the property logonDate (base name: "logon_date")', function() {
        // TODO: update the code to test the property logonDate
        expect(instance).to.have.property('logonDate');
        // expect(instance.logonDate).to.be(expectedValueLiteral);
      });

      it('should have the property shipTypeId (base name: "ship_type_id")', function() {
        // TODO: update the code to test the property shipTypeId
        expect(instance).to.have.property('shipTypeId');
        // expect(instance.shipTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "start_date")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

    });
  });

}));