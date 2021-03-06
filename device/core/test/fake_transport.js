// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict'

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var results = require('azure-iot-common').results;

function FakeTransport() {
  EventEmitter.call(this);
  this.connect = function (callback) {
    callback(null, new results.Connected());
  };

  this.disconnect = function (callback) {
    callback(null, new results.Disconnected());
  };

  this.sendEvent = function (msg, callback) {
    callback(null, new results.MessageEnqueued());
  };

  this.sendEventBatch = function (msg, callback) {
    callback(null, new results.MessageEnqueued());
  };

  this.complete = function (msg, callback) {
    callback(null, new results.MessageCompleted());
  };

  this.abandon = function (msg, callback) {
    callback(null, new results.MessageAbandoned());
  };

  this.reject = function (msg, callback) {
    callback(null, new results.MessageRejected());
  };

  this.getReceiver = function (callback) {
    callback(null, new EventEmitter());
  };

  this.updateSharedAccessSignature = function (newSas, callback) {
    callback(null, new results.SharedAccessSignatureUpdated(false));
  };

  this.setOptions = function (newSas, callback) {
    callback(null, new results.TransportConfigured());
  };
}

util.inherits(FakeTransport, EventEmitter);

module.exports = FakeTransport;