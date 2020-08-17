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
    describe('GetSearchOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetSearchOk();
      });

      it('should create an instance of GetSearchOk', function() {
        // TODO: update the code to test GetSearchOk
        expect(instance).to.be.a(EveSwaggerInterface.GetSearchOk);
      });

      it('should have the property agent (base name: "agent")', function() {
        // TODO: update the code to test the property agent
        expect(instance).to.have.property('agent');
        // expect(instance.agent).to.be(expectedValueLiteral);
      });

      it('should have the property alliance (base name: "alliance")', function() {
        // TODO: update the code to test the property alliance
        expect(instance).to.have.property('alliance');
        // expect(instance.alliance).to.be(expectedValueLiteral);
      });

      it('should have the property character (base name: "character")', function() {
        // TODO: update the code to test the property character
        expect(instance).to.have.property('character');
        // expect(instance.character).to.be(expectedValueLiteral);
      });

      it('should have the property constellation (base name: "constellation")', function() {
        // TODO: update the code to test the property constellation
        expect(instance).to.have.property('constellation');
        // expect(instance.constellation).to.be(expectedValueLiteral);
      });

      it('should have the property corporation (base name: "corporation")', function() {
        // TODO: update the code to test the property corporation
        expect(instance).to.have.property('corporation');
        // expect(instance.corporation).to.be(expectedValueLiteral);
      });

      it('should have the property faction (base name: "faction")', function() {
        // TODO: update the code to test the property faction
        expect(instance).to.have.property('faction');
        // expect(instance.faction).to.be(expectedValueLiteral);
      });

      it('should have the property inventoryType (base name: "inventory_type")', function() {
        // TODO: update the code to test the property inventoryType
        expect(instance).to.have.property('inventoryType');
        // expect(instance.inventoryType).to.be(expectedValueLiteral);
      });

      it('should have the property region (base name: "region")', function() {
        // TODO: update the code to test the property region
        expect(instance).to.have.property('region');
        // expect(instance.region).to.be(expectedValueLiteral);
      });

      it('should have the property solarSystem (base name: "solar_system")', function() {
        // TODO: update the code to test the property solarSystem
        expect(instance).to.have.property('solarSystem');
        // expect(instance.solarSystem).to.be(expectedValueLiteral);
      });

      it('should have the property station (base name: "station")', function() {
        // TODO: update the code to test the property station
        expect(instance).to.have.property('station');
        // expect(instance.station).to.be(expectedValueLiteral);
      });

    });
  });

}));
