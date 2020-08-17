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
    instance = new EveSwaggerInterface.SkillsApi();
  });

  describe('(package)', function() {
    describe('SkillsApi', function() {
      describe('getCharactersCharacterIdAttributes', function() {
        it('should call getCharactersCharacterIdAttributes successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdAttributes call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdAttributes(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdAttributesOk);
            expect(data.accruedRemapCooldownDate).to.be.a(Date);
            expect(data.accruedRemapCooldownDate).to.be(new Date());
            expect(data.bonusRemaps).to.be.a('number');
            expect(data.bonusRemaps).to.be(0);
            expect(data.charisma).to.be.a('number');
            expect(data.charisma).to.be(0);
            expect(data.intelligence).to.be.a('number');
            expect(data.intelligence).to.be(0);
            expect(data.lastRemapDate).to.be.a(Date);
            expect(data.lastRemapDate).to.be(new Date());
            expect(data.memory).to.be.a('number');
            expect(data.memory).to.be(0);
            expect(data.perception).to.be.a('number');
            expect(data.perception).to.be(0);
            expect(data.willpower).to.be.a('number');
            expect(data.willpower).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdSkillqueue', function() {
        it('should call getCharactersCharacterIdSkillqueue successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdSkillqueue call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdSkillqueue(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdSkillqueue200Ok);
              expect(data.finishDate).to.be.a(Date);
              expect(data.finishDate).to.be(new Date());
              expect(data.finishedLevel).to.be.a('number');
              expect(data.finishedLevel).to.be(0);
              expect(data.levelEndSp).to.be.a('number');
              expect(data.levelEndSp).to.be(0);
              expect(data.levelStartSp).to.be.a('number');
              expect(data.levelStartSp).to.be(0);
              expect(data.queuePosition).to.be.a('number');
              expect(data.queuePosition).to.be(0);
              expect(data.skillId).to.be.a('number');
              expect(data.skillId).to.be(0);
              expect(data.startDate).to.be.a(Date);
              expect(data.startDate).to.be(new Date());
              expect(data.trainingStartSp).to.be.a('number');
              expect(data.trainingStartSp).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdSkills', function() {
        it('should call getCharactersCharacterIdSkills successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdSkills call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdSkills(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdSkillsOk);
            {
              let dataCtr = data.skills;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdSkillsSkill);
                expect(data.activeSkillLevel).to.be.a('number');
                expect(data.activeSkillLevel).to.be(0);
                expect(data.skillId).to.be.a('number');
                expect(data.skillId).to.be(0);
                expect(data.skillpointsInSkill).to.be.a('number');
                expect(data.skillpointsInSkill).to.be("0");
                expect(data.trainedSkillLevel).to.be.a('number');
                expect(data.trainedSkillLevel).to.be(0);

                      }
            }
            expect(data.totalSp).to.be.a('number');
            expect(data.totalSp).to.be("0");
            expect(data.unallocatedSp).to.be.a('number');
            expect(data.unallocatedSp).to.be(0);

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
