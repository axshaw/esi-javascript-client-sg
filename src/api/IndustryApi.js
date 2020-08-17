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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdIndustryJobs200Ok', 'model/GetCharactersCharacterIdMining200Ok', 'model/GetCorporationCorporationIdMiningExtractions200Ok', 'model/GetCorporationCorporationIdMiningObservers200Ok', 'model/GetCorporationCorporationIdMiningObserversObserverId200Ok', 'model/GetCorporationsCorporationIdIndustryJobs200Ok', 'model/GetIndustryFacilities200Ok', 'model/GetIndustrySystems200Ok', 'model/InternalServerError', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdIndustryJobs200Ok'), require('../model/GetCharactersCharacterIdMining200Ok'), require('../model/GetCorporationCorporationIdMiningExtractions200Ok'), require('../model/GetCorporationCorporationIdMiningObservers200Ok'), require('../model/GetCorporationCorporationIdMiningObserversObserverId200Ok'), require('../model/GetCorporationsCorporationIdIndustryJobs200Ok'), require('../model/GetIndustryFacilities200Ok'), require('../model/GetIndustrySystems200Ok'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.IndustryApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetCharactersCharacterIdIndustryJobs200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdMining200Ok, root.EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok, root.EveSwaggerInterface.GetCorporationCorporationIdMiningObservers200Ok, root.EveSwaggerInterface.GetCorporationCorporationIdMiningObserversObserverId200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdIndustryJobs200Ok, root.EveSwaggerInterface.GetIndustryFacilities200Ok, root.EveSwaggerInterface.GetIndustrySystems200Ok, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdIndustryJobs200Ok, GetCharactersCharacterIdMining200Ok, GetCorporationCorporationIdMiningExtractions200Ok, GetCorporationCorporationIdMiningObservers200Ok, GetCorporationCorporationIdMiningObserversObserverId200Ok, GetCorporationsCorporationIdIndustryJobs200Ok, GetIndustryFacilities200Ok, GetIndustrySystems200Ok, InternalServerError, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Industry service.
   * @module api/IndustryApi
   * @version 1.7.2
   */

  /**
   * Constructs a new IndustryApi. 
   * @alias module:api/IndustryApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdIndustryJobs operation.
     * @callback module:api/IndustryApi~getCharactersCharacterIdIndustryJobsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdIndustryJobs200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List character industry jobs
     * List industry jobs placed by a character  ---  This route is cached for up to 300 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Boolean} opts.includeCompleted Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/IndustryApi~getCharactersCharacterIdIndustryJobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdIndustryJobs200Ok>}
     */
    this.getCharactersCharacterIdIndustryJobs = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdIndustryJobs");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'include_completed': opts['includeCompleted'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdIndustryJobs200Ok];

      return this.apiClient.callApi(
        '/v1/characters/{character_id}/industry/jobs/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdMining operation.
     * @callback module:api/IndustryApi~getCharactersCharacterIdMiningCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdMining200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Character mining ledger
     * Paginated record of all mining done by a character for the past 30 days  ---  This route is cached for up to 600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/IndustryApi~getCharactersCharacterIdMiningCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdMining200Ok>}
     */
    this.getCharactersCharacterIdMining = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdMining");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdMining200Ok];

      return this.apiClient.callApi(
        '/v1/characters/{character_id}/mining/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationCorporationIdMiningExtractions operation.
     * @callback module:api/IndustryApi~getCorporationCorporationIdMiningExtractionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationCorporationIdMiningExtractions200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Moon extraction timers
     * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.  ---  This route is cached for up to 1800 seconds  --- Requires one of the following EVE corporation role(s): Station_Manager
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/IndustryApi~getCorporationCorporationIdMiningExtractionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationCorporationIdMiningExtractions200Ok>}
     */
    this.getCorporationCorporationIdMiningExtractions = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationCorporationIdMiningExtractions");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCorporationCorporationIdMiningExtractions200Ok];

      return this.apiClient.callApi(
        '/v1/corporation/{corporation_id}/mining/extractions/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationCorporationIdMiningObservers operation.
     * @callback module:api/IndustryApi~getCorporationCorporationIdMiningObserversCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationCorporationIdMiningObservers200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Corporation mining observers
     * Paginated list of all entities capable of observing and recording mining for a corporation  ---  This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/IndustryApi~getCorporationCorporationIdMiningObserversCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationCorporationIdMiningObservers200Ok>}
     */
    this.getCorporationCorporationIdMiningObservers = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationCorporationIdMiningObservers");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCorporationCorporationIdMiningObservers200Ok];

      return this.apiClient.callApi(
        '/v1/corporation/{corporation_id}/mining/observers/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationCorporationIdMiningObserversObserverId operation.
     * @callback module:api/IndustryApi~getCorporationCorporationIdMiningObserversObserverIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationCorporationIdMiningObserversObserverId200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Observed corporation mining
     * Paginated record of all mining seen by an observer  ---  This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant
     * @param {Number} corporationId An EVE corporation ID
     * @param {Number} observerId A mining observer id
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/IndustryApi~getCorporationCorporationIdMiningObserversObserverIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationCorporationIdMiningObserversObserverId200Ok>}
     */
    this.getCorporationCorporationIdMiningObserversObserverId = function(corporationId, observerId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationCorporationIdMiningObserversObserverId");
      }

      // verify the required parameter 'observerId' is set
      if (observerId === undefined || observerId === null) {
        throw new Error("Missing the required parameter 'observerId' when calling getCorporationCorporationIdMiningObserversObserverId");
      }


      var pathParams = {
        'corporation_id': corporationId,
        'observer_id': observerId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCorporationCorporationIdMiningObserversObserverId200Ok];

      return this.apiClient.callApi(
        '/v1/corporation/{corporation_id}/mining/observers/{observer_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdIndustryJobs operation.
     * @callback module:api/IndustryApi~getCorporationsCorporationIdIndustryJobsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdIndustryJobs200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List corporation industry jobs
     * List industry jobs run by a corporation  ---  This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): Factory_Manager
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Boolean} opts.includeCompleted Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days (default to false)
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/IndustryApi~getCorporationsCorporationIdIndustryJobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdIndustryJobs200Ok>}
     */
    this.getCorporationsCorporationIdIndustryJobs = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdIndustryJobs");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'include_completed': opts['includeCompleted'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCorporationsCorporationIdIndustryJobs200Ok];

      return this.apiClient.callApi(
        '/v1/corporations/{corporation_id}/industry/jobs/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIndustryFacilities operation.
     * @callback module:api/IndustryApi~getIndustryFacilitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetIndustryFacilities200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List industry facilities
     * Return a list of industry facilities  ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/IndustryApi~getIndustryFacilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetIndustryFacilities200Ok>}
     */
    this.getIndustryFacilities = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetIndustryFacilities200Ok];

      return this.apiClient.callApi(
        '/v1/industry/facilities/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIndustrySystems operation.
     * @callback module:api/IndustryApi~getIndustrySystemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetIndustrySystems200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List solar system cost indices
     * Return cost indices for solar systems  ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/IndustryApi~getIndustrySystemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetIndustrySystems200Ok>}
     */
    this.getIndustrySystems = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetIndustrySystems200Ok];

      return this.apiClient.callApi(
        '/v1/industry/systems/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
