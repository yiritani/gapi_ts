// package: google.api
// file: google/api/field_info.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class FieldInfo extends jspb.Message { 
    getFormat(): FieldInfo.Format;
    setFormat(value: FieldInfo.Format): FieldInfo;
    clearReferencedTypesList(): void;
    getReferencedTypesList(): Array<TypeReference>;
    setReferencedTypesList(value: Array<TypeReference>): FieldInfo;
    addReferencedTypes(value?: TypeReference, index?: number): TypeReference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FieldInfo): FieldInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldInfo;
    static deserializeBinaryFromReader(message: FieldInfo, reader: jspb.BinaryReader): FieldInfo;
}

export namespace FieldInfo {
    export type AsObject = {
        format: FieldInfo.Format,
        referencedTypesList: Array<TypeReference.AsObject>,
    }

    export enum Format {
    FORMAT_UNSPECIFIED = 0,
    UUID4 = 1,
    IPV4 = 2,
    IPV6 = 3,
    IPV4_OR_IPV6 = 4,
    }

}

export class TypeReference extends jspb.Message { 
    getTypeName(): string;
    setTypeName(value: string): TypeReference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeReference.AsObject;
    static toObject(includeInstance: boolean, msg: TypeReference): TypeReference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeReference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeReference;
    static deserializeBinaryFromReader(message: TypeReference, reader: jspb.BinaryReader): TypeReference;
}

export namespace TypeReference {
    export type AsObject = {
        typeName: string,
    }
}

export const fieldInfo: jspb.ExtensionFieldInfo<FieldInfo>;
