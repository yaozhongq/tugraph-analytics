/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package com.antgroup.geaflow.shuffle.serialize;

import com.antgroup.geaflow.common.encoder.IEncoder;
import com.antgroup.geaflow.common.errorcode.RuntimeErrors;
import com.antgroup.geaflow.common.exception.GeaflowRuntimeException;
import com.antgroup.geaflow.shuffle.pipeline.buffer.OutBuffer;
import java.io.IOException;

public class EncoderRecordSerializer<T> extends AbstractRecordSerializer<T> {

    private final IEncoder<T> encoder;

    public EncoderRecordSerializer(IEncoder<T> encoder) {
        this.encoder = encoder;
    }

    @Override
    public void doSerialize(T value, boolean isRetract, OutBuffer.BufferBuilder outBuffer) {
        try {
            this.encoder.encode(value, outBuffer.getOutputStream());
        } catch (IOException e) {
            throw new GeaflowRuntimeException(RuntimeErrors.INST.shuffleSerializeError(e.getMessage()), e);
        }
    }

}
