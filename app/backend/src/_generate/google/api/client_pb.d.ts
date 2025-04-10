// package: google.api
// file: google/api/client.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_api_launch_stage_pb from "../../google/api/launch_stage_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class CommonLanguageSettings extends jspb.Message { 
    getReferenceDocsUri(): string;
    setReferenceDocsUri(value: string): CommonLanguageSettings;
    clearDestinationsList(): void;
    getDestinationsList(): Array<ClientLibraryDestination>;
    setDestinationsList(value: Array<ClientLibraryDestination>): CommonLanguageSettings;
    addDestinations(value: ClientLibraryDestination, index?: number): ClientLibraryDestination;

    hasSelectiveGapicGeneration(): boolean;
    clearSelectiveGapicGeneration(): void;
    getSelectiveGapicGeneration(): SelectiveGapicGeneration | undefined;
    setSelectiveGapicGeneration(value?: SelectiveGapicGeneration): CommonLanguageSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommonLanguageSettings.AsObject;
    static toObject(includeInstance: boolean, msg: CommonLanguageSettings): CommonLanguageSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommonLanguageSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommonLanguageSettings;
    static deserializeBinaryFromReader(message: CommonLanguageSettings, reader: jspb.BinaryReader): CommonLanguageSettings;
}

export namespace CommonLanguageSettings {
    export type AsObject = {
        referenceDocsUri: string,
        destinationsList: Array<ClientLibraryDestination>,
        selectiveGapicGeneration?: SelectiveGapicGeneration.AsObject,
    }
}

export class ClientLibrarySettings extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): ClientLibrarySettings;
    getLaunchStage(): google_api_launch_stage_pb.LaunchStage;
    setLaunchStage(value: google_api_launch_stage_pb.LaunchStage): ClientLibrarySettings;
    getRestNumericEnums(): boolean;
    setRestNumericEnums(value: boolean): ClientLibrarySettings;

    hasJavaSettings(): boolean;
    clearJavaSettings(): void;
    getJavaSettings(): JavaSettings | undefined;
    setJavaSettings(value?: JavaSettings): ClientLibrarySettings;

    hasCppSettings(): boolean;
    clearCppSettings(): void;
    getCppSettings(): CppSettings | undefined;
    setCppSettings(value?: CppSettings): ClientLibrarySettings;

    hasPhpSettings(): boolean;
    clearPhpSettings(): void;
    getPhpSettings(): PhpSettings | undefined;
    setPhpSettings(value?: PhpSettings): ClientLibrarySettings;

    hasPythonSettings(): boolean;
    clearPythonSettings(): void;
    getPythonSettings(): PythonSettings | undefined;
    setPythonSettings(value?: PythonSettings): ClientLibrarySettings;

    hasNodeSettings(): boolean;
    clearNodeSettings(): void;
    getNodeSettings(): NodeSettings | undefined;
    setNodeSettings(value?: NodeSettings): ClientLibrarySettings;

    hasDotnetSettings(): boolean;
    clearDotnetSettings(): void;
    getDotnetSettings(): DotnetSettings | undefined;
    setDotnetSettings(value?: DotnetSettings): ClientLibrarySettings;

    hasRubySettings(): boolean;
    clearRubySettings(): void;
    getRubySettings(): RubySettings | undefined;
    setRubySettings(value?: RubySettings): ClientLibrarySettings;

    hasGoSettings(): boolean;
    clearGoSettings(): void;
    getGoSettings(): GoSettings | undefined;
    setGoSettings(value?: GoSettings): ClientLibrarySettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientLibrarySettings.AsObject;
    static toObject(includeInstance: boolean, msg: ClientLibrarySettings): ClientLibrarySettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientLibrarySettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientLibrarySettings;
    static deserializeBinaryFromReader(message: ClientLibrarySettings, reader: jspb.BinaryReader): ClientLibrarySettings;
}

export namespace ClientLibrarySettings {
    export type AsObject = {
        version: string,
        launchStage: google_api_launch_stage_pb.LaunchStage,
        restNumericEnums: boolean,
        javaSettings?: JavaSettings.AsObject,
        cppSettings?: CppSettings.AsObject,
        phpSettings?: PhpSettings.AsObject,
        pythonSettings?: PythonSettings.AsObject,
        nodeSettings?: NodeSettings.AsObject,
        dotnetSettings?: DotnetSettings.AsObject,
        rubySettings?: RubySettings.AsObject,
        goSettings?: GoSettings.AsObject,
    }
}

export class Publishing extends jspb.Message { 
    clearMethodSettingsList(): void;
    getMethodSettingsList(): Array<MethodSettings>;
    setMethodSettingsList(value: Array<MethodSettings>): Publishing;
    addMethodSettings(value?: MethodSettings, index?: number): MethodSettings;
    getNewIssueUri(): string;
    setNewIssueUri(value: string): Publishing;
    getDocumentationUri(): string;
    setDocumentationUri(value: string): Publishing;
    getApiShortName(): string;
    setApiShortName(value: string): Publishing;
    getGithubLabel(): string;
    setGithubLabel(value: string): Publishing;
    clearCodeownerGithubTeamsList(): void;
    getCodeownerGithubTeamsList(): Array<string>;
    setCodeownerGithubTeamsList(value: Array<string>): Publishing;
    addCodeownerGithubTeams(value: string, index?: number): string;
    getDocTagPrefix(): string;
    setDocTagPrefix(value: string): Publishing;
    getOrganization(): ClientLibraryOrganization;
    setOrganization(value: ClientLibraryOrganization): Publishing;
    clearLibrarySettingsList(): void;
    getLibrarySettingsList(): Array<ClientLibrarySettings>;
    setLibrarySettingsList(value: Array<ClientLibrarySettings>): Publishing;
    addLibrarySettings(value?: ClientLibrarySettings, index?: number): ClientLibrarySettings;
    getProtoReferenceDocumentationUri(): string;
    setProtoReferenceDocumentationUri(value: string): Publishing;
    getRestReferenceDocumentationUri(): string;
    setRestReferenceDocumentationUri(value: string): Publishing;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Publishing.AsObject;
    static toObject(includeInstance: boolean, msg: Publishing): Publishing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Publishing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Publishing;
    static deserializeBinaryFromReader(message: Publishing, reader: jspb.BinaryReader): Publishing;
}

export namespace Publishing {
    export type AsObject = {
        methodSettingsList: Array<MethodSettings.AsObject>,
        newIssueUri: string,
        documentationUri: string,
        apiShortName: string,
        githubLabel: string,
        codeownerGithubTeamsList: Array<string>,
        docTagPrefix: string,
        organization: ClientLibraryOrganization,
        librarySettingsList: Array<ClientLibrarySettings.AsObject>,
        protoReferenceDocumentationUri: string,
        restReferenceDocumentationUri: string,
    }
}

export class JavaSettings extends jspb.Message { 
    getLibraryPackage(): string;
    setLibraryPackage(value: string): JavaSettings;

    getServiceClassNamesMap(): jspb.Map<string, string>;
    clearServiceClassNamesMap(): void;

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): CommonLanguageSettings | undefined;
    setCommon(value?: CommonLanguageSettings): JavaSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JavaSettings.AsObject;
    static toObject(includeInstance: boolean, msg: JavaSettings): JavaSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JavaSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JavaSettings;
    static deserializeBinaryFromReader(message: JavaSettings, reader: jspb.BinaryReader): JavaSettings;
}

export namespace JavaSettings {
    export type AsObject = {
        libraryPackage: string,

        serviceClassNamesMap: Array<[string, string]>,
        common?: CommonLanguageSettings.AsObject,
    }
}

export class CppSettings extends jspb.Message { 

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): CommonLanguageSettings | undefined;
    setCommon(value?: CommonLanguageSettings): CppSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CppSettings.AsObject;
    static toObject(includeInstance: boolean, msg: CppSettings): CppSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CppSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CppSettings;
    static deserializeBinaryFromReader(message: CppSettings, reader: jspb.BinaryReader): CppSettings;
}

export namespace CppSettings {
    export type AsObject = {
        common?: CommonLanguageSettings.AsObject,
    }
}

export class PhpSettings extends jspb.Message { 

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): CommonLanguageSettings | undefined;
    setCommon(value?: CommonLanguageSettings): PhpSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhpSettings.AsObject;
    static toObject(includeInstance: boolean, msg: PhpSettings): PhpSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhpSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhpSettings;
    static deserializeBinaryFromReader(message: PhpSettings, reader: jspb.BinaryReader): PhpSettings;
}

export namespace PhpSettings {
    export type AsObject = {
        common?: CommonLanguageSettings.AsObject,
    }
}

export class PythonSettings extends jspb.Message { 

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): CommonLanguageSettings | undefined;
    setCommon(value?: CommonLanguageSettings): PythonSettings;

    hasExperimentalFeatures(): boolean;
    clearExperimentalFeatures(): void;
    getExperimentalFeatures(): PythonSettings.ExperimentalFeatures | undefined;
    setExperimentalFeatures(value?: PythonSettings.ExperimentalFeatures): PythonSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PythonSettings.AsObject;
    static toObject(includeInstance: boolean, msg: PythonSettings): PythonSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PythonSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PythonSettings;
    static deserializeBinaryFromReader(message: PythonSettings, reader: jspb.BinaryReader): PythonSettings;
}

export namespace PythonSettings {
    export type AsObject = {
        common?: CommonLanguageSettings.AsObject,
        experimentalFeatures?: PythonSettings.ExperimentalFeatures.AsObject,
    }


    export class ExperimentalFeatures extends jspb.Message { 
        getRestAsyncIoEnabled(): boolean;
        setRestAsyncIoEnabled(value: boolean): ExperimentalFeatures;
        getProtobufPythonicTypesEnabled(): boolean;
        setProtobufPythonicTypesEnabled(value: boolean): ExperimentalFeatures;
        getUnversionedPackageDisabled(): boolean;
        setUnversionedPackageDisabled(value: boolean): ExperimentalFeatures;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExperimentalFeatures.AsObject;
        static toObject(includeInstance: boolean, msg: ExperimentalFeatures): ExperimentalFeatures.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ExperimentalFeatures, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExperimentalFeatures;
        static deserializeBinaryFromReader(message: ExperimentalFeatures, reader: jspb.BinaryReader): ExperimentalFeatures;
    }

    export namespace ExperimentalFeatures {
        export type AsObject = {
            restAsyncIoEnabled: boolean,
            protobufPythonicTypesEnabled: boolean,
            unversionedPackageDisabled: boolean,
        }
    }

}

export class NodeSettings extends jspb.Message { 

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): CommonLanguageSettings | undefined;
    setCommon(value?: CommonLanguageSettings): NodeSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeSettings.AsObject;
    static toObject(includeInstance: boolean, msg: NodeSettings): NodeSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeSettings;
    static deserializeBinaryFromReader(message: NodeSettings, reader: jspb.BinaryReader): NodeSettings;
}

export namespace NodeSettings {
    export type AsObject = {
        common?: CommonLanguageSettings.AsObject,
    }
}

export class DotnetSettings extends jspb.Message { 

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): CommonLanguageSettings | undefined;
    setCommon(value?: CommonLanguageSettings): DotnetSettings;

    getRenamedServicesMap(): jspb.Map<string, string>;
    clearRenamedServicesMap(): void;

    getRenamedResourcesMap(): jspb.Map<string, string>;
    clearRenamedResourcesMap(): void;
    clearIgnoredResourcesList(): void;
    getIgnoredResourcesList(): Array<string>;
    setIgnoredResourcesList(value: Array<string>): DotnetSettings;
    addIgnoredResources(value: string, index?: number): string;
    clearForcedNamespaceAliasesList(): void;
    getForcedNamespaceAliasesList(): Array<string>;
    setForcedNamespaceAliasesList(value: Array<string>): DotnetSettings;
    addForcedNamespaceAliases(value: string, index?: number): string;
    clearHandwrittenSignaturesList(): void;
    getHandwrittenSignaturesList(): Array<string>;
    setHandwrittenSignaturesList(value: Array<string>): DotnetSettings;
    addHandwrittenSignatures(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DotnetSettings.AsObject;
    static toObject(includeInstance: boolean, msg: DotnetSettings): DotnetSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DotnetSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DotnetSettings;
    static deserializeBinaryFromReader(message: DotnetSettings, reader: jspb.BinaryReader): DotnetSettings;
}

export namespace DotnetSettings {
    export type AsObject = {
        common?: CommonLanguageSettings.AsObject,

        renamedServicesMap: Array<[string, string]>,

        renamedResourcesMap: Array<[string, string]>,
        ignoredResourcesList: Array<string>,
        forcedNamespaceAliasesList: Array<string>,
        handwrittenSignaturesList: Array<string>,
    }
}

export class RubySettings extends jspb.Message { 

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): CommonLanguageSettings | undefined;
    setCommon(value?: CommonLanguageSettings): RubySettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RubySettings.AsObject;
    static toObject(includeInstance: boolean, msg: RubySettings): RubySettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RubySettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RubySettings;
    static deserializeBinaryFromReader(message: RubySettings, reader: jspb.BinaryReader): RubySettings;
}

export namespace RubySettings {
    export type AsObject = {
        common?: CommonLanguageSettings.AsObject,
    }
}

export class GoSettings extends jspb.Message { 

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): CommonLanguageSettings | undefined;
    setCommon(value?: CommonLanguageSettings): GoSettings;

    getRenamedServicesMap(): jspb.Map<string, string>;
    clearRenamedServicesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GoSettings.AsObject;
    static toObject(includeInstance: boolean, msg: GoSettings): GoSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GoSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GoSettings;
    static deserializeBinaryFromReader(message: GoSettings, reader: jspb.BinaryReader): GoSettings;
}

export namespace GoSettings {
    export type AsObject = {
        common?: CommonLanguageSettings.AsObject,

        renamedServicesMap: Array<[string, string]>,
    }
}

export class MethodSettings extends jspb.Message { 
    getSelector(): string;
    setSelector(value: string): MethodSettings;

    hasLongRunning(): boolean;
    clearLongRunning(): void;
    getLongRunning(): MethodSettings.LongRunning | undefined;
    setLongRunning(value?: MethodSettings.LongRunning): MethodSettings;
    clearAutoPopulatedFieldsList(): void;
    getAutoPopulatedFieldsList(): Array<string>;
    setAutoPopulatedFieldsList(value: Array<string>): MethodSettings;
    addAutoPopulatedFields(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MethodSettings.AsObject;
    static toObject(includeInstance: boolean, msg: MethodSettings): MethodSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MethodSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MethodSettings;
    static deserializeBinaryFromReader(message: MethodSettings, reader: jspb.BinaryReader): MethodSettings;
}

export namespace MethodSettings {
    export type AsObject = {
        selector: string,
        longRunning?: MethodSettings.LongRunning.AsObject,
        autoPopulatedFieldsList: Array<string>,
    }


    export class LongRunning extends jspb.Message { 

        hasInitialPollDelay(): boolean;
        clearInitialPollDelay(): void;
        getInitialPollDelay(): google_protobuf_duration_pb.Duration | undefined;
        setInitialPollDelay(value?: google_protobuf_duration_pb.Duration): LongRunning;
        getPollDelayMultiplier(): number;
        setPollDelayMultiplier(value: number): LongRunning;

        hasMaxPollDelay(): boolean;
        clearMaxPollDelay(): void;
        getMaxPollDelay(): google_protobuf_duration_pb.Duration | undefined;
        setMaxPollDelay(value?: google_protobuf_duration_pb.Duration): LongRunning;

        hasTotalPollTimeout(): boolean;
        clearTotalPollTimeout(): void;
        getTotalPollTimeout(): google_protobuf_duration_pb.Duration | undefined;
        setTotalPollTimeout(value?: google_protobuf_duration_pb.Duration): LongRunning;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): LongRunning.AsObject;
        static toObject(includeInstance: boolean, msg: LongRunning): LongRunning.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: LongRunning, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): LongRunning;
        static deserializeBinaryFromReader(message: LongRunning, reader: jspb.BinaryReader): LongRunning;
    }

    export namespace LongRunning {
        export type AsObject = {
            initialPollDelay?: google_protobuf_duration_pb.Duration.AsObject,
            pollDelayMultiplier: number,
            maxPollDelay?: google_protobuf_duration_pb.Duration.AsObject,
            totalPollTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        }
    }

}

export class SelectiveGapicGeneration extends jspb.Message { 
    clearMethodsList(): void;
    getMethodsList(): Array<string>;
    setMethodsList(value: Array<string>): SelectiveGapicGeneration;
    addMethods(value: string, index?: number): string;
    getGenerateOmittedAsInternal(): boolean;
    setGenerateOmittedAsInternal(value: boolean): SelectiveGapicGeneration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectiveGapicGeneration.AsObject;
    static toObject(includeInstance: boolean, msg: SelectiveGapicGeneration): SelectiveGapicGeneration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectiveGapicGeneration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectiveGapicGeneration;
    static deserializeBinaryFromReader(message: SelectiveGapicGeneration, reader: jspb.BinaryReader): SelectiveGapicGeneration;
}

export namespace SelectiveGapicGeneration {
    export type AsObject = {
        methodsList: Array<string>,
        generateOmittedAsInternal: boolean,
    }
}

export const methodSignature: jspb.ExtensionFieldInfo<string>;

export const defaultHost: jspb.ExtensionFieldInfo<string>;

export const oauthScopes: jspb.ExtensionFieldInfo<string>;

export const apiVersion: jspb.ExtensionFieldInfo<string>;

export enum ClientLibraryOrganization {
    CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
    CLOUD = 1,
    ADS = 2,
    PHOTOS = 3,
    STREET_VIEW = 4,
    SHOPPING = 5,
    GEO = 6,
    GENERATIVE_AI = 7,
}

export enum ClientLibraryDestination {
    CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
    GITHUB = 10,
    PACKAGE_MANAGER = 20,
}
