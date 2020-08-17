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
    describe('GetUniverseStructuresStructureIdPosition', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetUniverseStructuresStructureIdPosition();
      });

      it('should create an instance of GetUniverseStructuresStructureIdPosition', function() {
        // TODO: update the code to test GetUniverseStructuresStructureIdPosition
        expect(instance).to.be.a(EveSwaggerInterface.GetUniverseStructuresStructureIdPosition);
      });

      it('should have the property x (base name: "x")', function() {
        // TODO: update the code to test the property x
        expect(instance).to.have.property('x');
        // expect(instance.x).to.be(expectedValueLiteral);
      });

      it('should have the property y (base name: "y")', function() {
        // TODO: update the code to test the property y
        expect(instance).to.have.property('y');
        // expect(instance.y).to.be(expectedValueLiteral);
      });

      it('should have the property z (base name: "z")', function() {
        // TODO: update the code to test the property z
        expect(instance).to.have.property('z');
        // expect(instance.z).to.be(expectedValueLiteral);
      });

    });
  });

}));
