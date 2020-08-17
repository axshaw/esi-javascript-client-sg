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
    describe('PutCharactersCharacterIdMailMailIdContents', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.PutCharactersCharacterIdMailMailIdContents();
      });

      it('should create an instance of PutCharactersCharacterIdMailMailIdContents', function() {
        // TODO: update the code to test PutCharactersCharacterIdMailMailIdContents
        expect(instance).to.be.a(EveSwaggerInterface.PutCharactersCharacterIdMailMailIdContents);
      });

      it('should have the property labels (base name: "labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property read (base name: "read")', function() {
        // TODO: update the code to test the property read
        expect(instance).to.have.property('read');
        // expect(instance.read).to.be(expectedValueLiteral);
      });

    });
  });

}));