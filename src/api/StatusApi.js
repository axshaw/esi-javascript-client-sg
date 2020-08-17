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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/GatewayTimeout', 'model/GetStatusOk', 'model/InternalServerError', 'model/ServiceUnavailable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/GatewayTimeout'), require('../model/GetStatusOk'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.StatusApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetStatusOk, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.ServiceUnavailable);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, GatewayTimeout, GetStatusOk, InternalServerError, ServiceUnavailable) {
  'use strict';

  /**
   * Status service.
   * @module api/StatusApi
   * @version 1.7.2
   */

  /**
   * Constructs a new StatusApi. 
   * @alias module:api/StatusApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getStatus operation.
     * @callback module:api/StatusApi~getStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStatusOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the uptime and player counts
     * EVE Server status  ---  This route is cached for up to 30 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/StatusApi~getStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStatusOk}
     */
    this.getStatus = function(opts, callback) {
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
      var returnType = GetStatusOk;

      return this.apiClient.callApi(
        '/v1/status/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));