// @generated by protobuf-ts 2.9.3 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "google/rpc/status.proto" (package "google.rpc", syntax proto3)
// tslint:disable
//
// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../protobuf/any";
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 *
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 *
 * @generated from protobuf message google.rpc.Status
 */
export interface Status {
    /**
     * The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
     *
     * @generated from protobuf field: int32 code = 1;
     */
    code: number;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
     *
     * @generated from protobuf field: string message = 2;
     */
    message: string;
    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     *
     * @generated from protobuf field: repeated google.protobuf.Any details = 3;
     */
    details: Any[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Status$Type extends MessageType<Status> {
    constructor() {
        super("google.rpc.Status", [
            { no: 1, name: "code", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "details", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any }
        ]);
    }
    create(value?: PartialMessage<Status>): Status {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.code = 0;
        message.message = "";
        message.details = [];
        if (value !== undefined)
            reflectionMergePartial<Status>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Status): Status {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 code */ 1:
                    message.code = reader.int32();
                    break;
                case /* string message */ 2:
                    message.message = reader.string();
                    break;
                case /* repeated google.protobuf.Any details */ 3:
                    message.details.push(Any.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Status, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 code = 1; */
        if (message.code !== 0)
            writer.tag(1, WireType.Varint).int32(message.code);
        /* string message = 2; */
        if (message.message !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.message);
        /* repeated google.protobuf.Any details = 3; */
        for (let i = 0; i < message.details.length; i++)
            Any.internalBinaryWrite(message.details[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.rpc.Status
 */
export const Status = new Status$Type();
