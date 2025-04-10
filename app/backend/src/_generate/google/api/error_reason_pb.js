// source: google/api/error_reason.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.google.api.ErrorReason', null, global);
/**
 * @enum {number}
 */
proto.google.api.ErrorReason = {
  ERROR_REASON_UNSPECIFIED: 0,
  SERVICE_DISABLED: 1,
  BILLING_DISABLED: 2,
  API_KEY_INVALID: 3,
  API_KEY_SERVICE_BLOCKED: 4,
  API_KEY_HTTP_REFERRER_BLOCKED: 7,
  API_KEY_IP_ADDRESS_BLOCKED: 8,
  API_KEY_ANDROID_APP_BLOCKED: 9,
  API_KEY_IOS_APP_BLOCKED: 13,
  RATE_LIMIT_EXCEEDED: 5,
  RESOURCE_QUOTA_EXCEEDED: 6,
  LOCATION_TAX_POLICY_VIOLATED: 10,
  USER_PROJECT_DENIED: 11,
  CONSUMER_SUSPENDED: 12,
  CONSUMER_INVALID: 14,
  SECURITY_POLICY_VIOLATED: 15,
  ACCESS_TOKEN_EXPIRED: 16,
  ACCESS_TOKEN_SCOPE_INSUFFICIENT: 17,
  ACCOUNT_STATE_INVALID: 18,
  ACCESS_TOKEN_TYPE_UNSUPPORTED: 19,
  CREDENTIALS_MISSING: 20,
  RESOURCE_PROJECT_INVALID: 21,
  SESSION_COOKIE_INVALID: 23,
  USER_BLOCKED_BY_ADMIN: 24,
  RESOURCE_USAGE_RESTRICTION_VIOLATED: 25,
  SYSTEM_PARAMETER_UNSUPPORTED: 26,
  ORG_RESTRICTION_VIOLATION: 27,
  ORG_RESTRICTION_HEADER_INVALID: 28,
  SERVICE_NOT_VISIBLE: 29,
  GCP_SUSPENDED: 30,
  LOCATION_POLICY_VIOLATED: 31,
  MISSING_ORIGIN: 33,
  OVERLOADED_CREDENTIALS: 34
};

goog.object.extend(exports, proto.google.api);
