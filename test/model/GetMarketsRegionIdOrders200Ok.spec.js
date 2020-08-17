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
    describe('GetMarketsRegionIdOrders200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetMarketsRegionIdOrders200Ok();
      });

      it('should create an instance of GetMarketsRegionIdOrders200Ok', function() {
        // TODO: update the code to test GetMarketsRegionIdOrders200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetMarketsRegionIdOrders200Ok);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property isBuyOrder (base name: "is_buy_order")', function() {
        // TODO: update the code to test the property isBuyOrder
        expect(instance).to.have.property('isBuyOrder');
        // expect(instance.isBuyOrder).to.be(expectedValueLiteral);
      });

      it('should have the property issued (base name: "issued")', function() {
        // TODO: update the code to test the property issued
        expect(instance).to.have.property('issued');
        // expect(instance.issued).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "location_id")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property minVolume (base name: "min_volume")', function() {
        // TODO: update the code to test the property minVolume
        expect(instance).to.have.property('minVolume');
        // expect(instance.minVolume).to.be(expectedValueLiteral);
      });

      it('should have the property orderId (base name: "order_id")', function() {
        // TODO: update the code to test the property orderId
        expect(instance).to.have.property('orderId');
        // expect(instance.orderId).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property range (base name: "range")', function() {
        // TODO: update the code to test the property range
        expect(instance).to.have.property('range');
        // expect(instance.range).to.be(expectedValueLiteral);
      });

      it('should have the property systemId (base name: "system_id")', function() {
        // TODO: update the code to test the property systemId
        expect(instance).to.have.property('systemId');
        // expect(instance.systemId).to.be(expectedValueLiteral);
      });

      it('should have the property typeId (base name: "type_id")', function() {
        // TODO: update the code to test the property typeId
        expect(instance).to.have.property('typeId');
        // expect(instance.typeId).to.be(expectedValueLiteral);
      });

      it('should have the property volumeRemain (base name: "volume_remain")', function() {
        // TODO: update the code to test the property volumeRemain
        expect(instance).to.have.property('volumeRemain');
        // expect(instance.volumeRemain).to.be(expectedValueLiteral);
      });

      it('should have the property volumeTotal (base name: "volume_total")', function() {
        // TODO: update the code to test the property volumeTotal
        expect(instance).to.have.property('volumeTotal');
        // expect(instance.volumeTotal).to.be(expectedValueLiteral);
      });

    });
  });

}));
