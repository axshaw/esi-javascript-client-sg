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
    describe('GetUniverseSchematicsSchematicIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetUniverseSchematicsSchematicIdOk();
      });

      it('should create an instance of GetUniverseSchematicsSchematicIdOk', function() {
        // TODO: update the code to test GetUniverseSchematicsSchematicIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetUniverseSchematicsSchematicIdOk);
      });

      it('should have the property cycleTime (base name: "cycle_time")', function() {
        // TODO: update the code to test the property cycleTime
        expect(instance).to.have.property('cycleTime');
        // expect(instance.cycleTime).to.be(expectedValueLiteral);
      });

      it('should have the property schematicName (base name: "schematic_name")', function() {
        // TODO: update the code to test the property schematicName
        expect(instance).to.have.property('schematicName');
        // expect(instance.schematicName).to.be(expectedValueLiteral);
      });

    });
  });

}));
