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

  beforeEach(function() {
    instance = new EveSwaggerInterface.BookmarksApi();
  });

  describe('(package)', function() {
    describe('BookmarksApi', function() {
      describe('getCharactersCharacterIdBookmarks', function() {
        it('should call getCharactersCharacterIdBookmarks successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdBookmarks call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCharactersCharacterIdBookmarks(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok);
              expect(data.bookmarkId).to.be.a('number');
              expect(data.bookmarkId).to.be(0);
              expect(data.coordinates).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdBookmarksCoordinates);
                    expect(data.coordinates.x).to.be.a('number');
                expect(data.coordinates.x).to.be(0.0);
                expect(data.coordinates.y).to.be.a('number');
                expect(data.coordinates.y).to.be(0.0);
                expect(data.coordinates.z).to.be.a('number');
                expect(data.coordinates.z).to.be(0.0);
              expect(data.created).to.be.a(Date);
              expect(data.created).to.be(new Date());
              expect(data.creatorId).to.be.a('number');
              expect(data.creatorId).to.be(0);
              expect(data.folderId).to.be.a('number');
              expect(data.folderId).to.be(0);
              expect(data.item).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdBookmarksItem);
                    expect(data.item.itemId).to.be.a('number');
                expect(data.item.itemId).to.be("0");
                expect(data.item.typeId).to.be.a('number');
                expect(data.item.typeId).to.be(0);
              expect(data.label).to.be.a('string');
              expect(data.label).to.be("");
              expect(data.locationId).to.be.a('number');
              expect(data.locationId).to.be(0);
              expect(data.notes).to.be.a('string');
              expect(data.notes).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdBookmarksFolders', function() {
        it('should call getCharactersCharacterIdBookmarksFolders successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdBookmarksFolders call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCharactersCharacterIdBookmarksFolders(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdBookmarksFolders200Ok);
              expect(data.folderId).to.be.a('number');
              expect(data.folderId).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdBookmarks', function() {
        it('should call getCorporationsCorporationIdBookmarks successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdBookmarks call and complete the assertions
          /*
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationsCorporationIdBookmarks(corporationId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdBookmarks200Ok);
              expect(data.bookmarkId).to.be.a('number');
              expect(data.bookmarkId).to.be(0);
              expect(data.coordinates).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdBookmarksCoordinates);
                    expect(data.coordinates.x).to.be.a('number');
                expect(data.coordinates.x).to.be(0.0);
                expect(data.coordinates.y).to.be.a('number');
                expect(data.coordinates.y).to.be(0.0);
                expect(data.coordinates.z).to.be.a('number');
                expect(data.coordinates.z).to.be(0.0);
              expect(data.created).to.be.a(Date);
              expect(data.created).to.be(new Date());
              expect(data.creatorId).to.be.a('number');
              expect(data.creatorId).to.be(0);
              expect(data.folderId).to.be.a('number');
              expect(data.folderId).to.be(0);
              expect(data.item).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdBookmarksItem);
                    expect(data.item.itemId).to.be.a('number');
                expect(data.item.itemId).to.be("0");
                expect(data.item.typeId).to.be.a('number');
                expect(data.item.typeId).to.be(0);
              expect(data.label).to.be.a('string');
              expect(data.label).to.be("");
              expect(data.locationId).to.be.a('number');
              expect(data.locationId).to.be(0);
              expect(data.notes).to.be.a('string');
              expect(data.notes).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdBookmarksFolders', function() {
        it('should call getCorporationsCorporationIdBookmarksFolders successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdBookmarksFolders call and complete the assertions
          /*
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationsCorporationIdBookmarksFolders(corporationId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdBookmarksFolders200Ok);
              expect(data.creatorId).to.be.a('number');
              expect(data.creatorId).to.be(0);
              expect(data.folderId).to.be.a('number');
              expect(data.folderId).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
