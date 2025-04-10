// source: google/api/backend.proto
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

goog.exportSymbol('proto.google.api.Backend', null, global);
goog.exportSymbol('proto.google.api.BackendRule', null, global);
goog.exportSymbol('proto.google.api.BackendRule.AuthenticationCase', null, global);
goog.exportSymbol('proto.google.api.BackendRule.PathTranslation', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Backend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Backend.repeatedFields_, null);
};
goog.inherits(proto.google.api.Backend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Backend.displayName = 'proto.google.api.Backend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.BackendRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.api.BackendRule.oneofGroups_);
};
goog.inherits(proto.google.api.BackendRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.BackendRule.displayName = 'proto.google.api.BackendRule';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Backend.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Backend.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Backend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Backend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Backend.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.google.api.BackendRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Backend}
 */
proto.google.api.Backend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Backend;
  return proto.google.api.Backend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Backend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Backend}
 */
proto.google.api.Backend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.api.BackendRule;
      reader.readMessage(value,proto.google.api.BackendRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Backend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Backend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Backend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Backend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.api.BackendRule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BackendRule rules = 1;
 * @return {!Array<!proto.google.api.BackendRule>}
 */
proto.google.api.Backend.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.google.api.BackendRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.BackendRule, 1));
};


/**
 * @param {!Array<!proto.google.api.BackendRule>} value
 * @return {!proto.google.api.Backend} returns this
*/
proto.google.api.Backend.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.api.BackendRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.BackendRule}
 */
proto.google.api.Backend.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.api.BackendRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Backend} returns this
 */
proto.google.api.Backend.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.api.BackendRule.oneofGroups_ = [[7,8]];

/**
 * @enum {number}
 */
proto.google.api.BackendRule.AuthenticationCase = {
  AUTHENTICATION_NOT_SET: 0,
  JWT_AUDIENCE: 7,
  DISABLE_AUTH: 8
};

/**
 * @return {proto.google.api.BackendRule.AuthenticationCase}
 */
proto.google.api.BackendRule.prototype.getAuthenticationCase = function() {
  return /** @type {proto.google.api.BackendRule.AuthenticationCase} */(jspb.Message.computeOneofCase(this, proto.google.api.BackendRule.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.BackendRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.BackendRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.BackendRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.BackendRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deadline: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    minDeadline: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    operationDeadline: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    pathTranslation: jspb.Message.getFieldWithDefault(msg, 6, 0),
    jwtAudience: jspb.Message.getFieldWithDefault(msg, 7, ""),
    disableAuth: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    protocol: jspb.Message.getFieldWithDefault(msg, 9, ""),
    overridesByRequestProtocolMap: (f = msg.getOverridesByRequestProtocolMap()) ? f.toObject(includeInstance, proto.google.api.BackendRule.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.BackendRule}
 */
proto.google.api.BackendRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.BackendRule;
  return proto.google.api.BackendRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.BackendRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.BackendRule}
 */
proto.google.api.BackendRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDeadline(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinDeadline(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOperationDeadline(value);
      break;
    case 6:
      var value = /** @type {!proto.google.api.BackendRule.PathTranslation} */ (reader.readEnum());
      msg.setPathTranslation(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setJwtAudience(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableAuth(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    case 10:
      var value = msg.getOverridesByRequestProtocolMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.api.BackendRule.deserializeBinaryFromReader, "", new proto.google.api.BackendRule());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.BackendRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.BackendRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.BackendRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.BackendRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeadline();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMinDeadline();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getOperationDeadline();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getPathTranslation();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getOverridesByRequestProtocolMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.api.BackendRule.serializeBinaryToWriter);
  }
};


/**
 * @enum {number}
 */
proto.google.api.BackendRule.PathTranslation = {
  PATH_TRANSLATION_UNSPECIFIED: 0,
  CONSTANT_ADDRESS: 1,
  APPEND_PATH_TO_ADDRESS: 2
};

/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.BackendRule.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.setSelector = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.google.api.BackendRule.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double deadline = 3;
 * @return {number}
 */
proto.google.api.BackendRule.prototype.getDeadline = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.setDeadline = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double min_deadline = 4;
 * @return {number}
 */
proto.google.api.BackendRule.prototype.getMinDeadline = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.setMinDeadline = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double operation_deadline = 5;
 * @return {number}
 */
proto.google.api.BackendRule.prototype.getOperationDeadline = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.setOperationDeadline = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional PathTranslation path_translation = 6;
 * @return {!proto.google.api.BackendRule.PathTranslation}
 */
proto.google.api.BackendRule.prototype.getPathTranslation = function() {
  return /** @type {!proto.google.api.BackendRule.PathTranslation} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.google.api.BackendRule.PathTranslation} value
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.setPathTranslation = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string jwt_audience = 7;
 * @return {string}
 */
proto.google.api.BackendRule.prototype.getJwtAudience = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.setJwtAudience = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.google.api.BackendRule.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.clearJwtAudience = function() {
  return jspb.Message.setOneofField(this, 7, proto.google.api.BackendRule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.BackendRule.prototype.hasJwtAudience = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool disable_auth = 8;
 * @return {boolean}
 */
proto.google.api.BackendRule.prototype.getDisableAuth = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.setDisableAuth = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.google.api.BackendRule.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.clearDisableAuth = function() {
  return jspb.Message.setOneofField(this, 8, proto.google.api.BackendRule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.BackendRule.prototype.hasDisableAuth = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string protocol = 9;
 * @return {string}
 */
proto.google.api.BackendRule.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * map<string, BackendRule> overrides_by_request_protocol = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.api.BackendRule>}
 */
proto.google.api.BackendRule.prototype.getOverridesByRequestProtocolMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.api.BackendRule>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.google.api.BackendRule));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.api.BackendRule} returns this
 */
proto.google.api.BackendRule.prototype.clearOverridesByRequestProtocolMap = function() {
  this.getOverridesByRequestProtocolMap().clear();
  return this;};


goog.object.extend(exports, proto.google.api);
