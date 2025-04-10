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

import { Modal, Form, Input, message, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { createUpload } from "../services/file-manage";
import { InboxOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";
import $i18n from "@/components/i18n";

const { Dragger } = Upload;
interface AddTemplateProps {
  isAddMd?: any;
  setTemplateList?: any;
  temeplateList?: any;
  id: string;
}

export const AddTemplateModal: React.FC<AddTemplateProps> = ({
  isAddMd,
  setTemplateList,
  temeplateList,
  id,
}) => {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    loading: false,
    fileList: [],
  });
  const handleCancel = () => {
    setTemplateList({ ...temeplateList, isAddMd: false });
    form.resetFields();
  };
  const handleOk = async () => {
    const values = await form.validateFields();

    setState({
      ...state,
      loading: true,
    });
    const { file } = values;

    const formData = new FormData();
    !isEmpty(file) &&
      file.forEach((item) => {
        formData.append("file", item.originFileObj);
      });

    const resp = await createUpload(id, formData);

    setState({
      ...state,
      loading: false,
    });
    if (resp?.success) {
      message.success(
        $i18n.get({
          id: "openpiece-geaflow.geaflow.jar-file-manage.uploadModal.UploadedSuccessfully",
          dm: "上传成功",
        })
      );
      setTemplateList({ ...temeplateList, isAddMd: false });
      form.resetFields();
    } else {
      message.error(resp?.message);
    }
  };

  const normFile = (e: any) => {
    console.log(e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList.slice(-1);
  };

  return (
    <Modal
      title={$i18n.get({
        id: "openpiece-geaflow.geaflow.jar-file-manage.uploadModal.UploadFiles",
        dm: "上传文件",
      })}
      visible={isAddMd}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={state.loading}
      width={700}
      okText={$i18n.get({
        id: "openpiece-geaflow.geaflow.jar-file-manage.uploadModal.Confirm",
        dm: "确认",
      })}
      cancelText={$i18n.get({
        id: "openpiece-geaflow.geaflow.jar-file-manage.uploadModal.Cancel",
        dm: "取消",
      })}
    >
      <Form form={form}>
        <Form.Item
          label={$i18n.get({
            id: "openpiece-geaflow.geaflow.jar-file-manage.uploadModal.JarFile",
            dm: "Jar文件",
          })}
        >
          <Form.Item
            name="file"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                {$i18n.get({
                  id: "openpiece-geaflow.geaflow.jar-file-manage.uploadModal.DragOrClickSelectFile",
                  dm: "拖拽或点击选择文件",
                })}
              </p>
              <p className="ant-upload-hint">
                {$i18n.get({
                  id: "openpiece-geaflow.geaflow.jar-file-manage.uploadModal.OnlyJarFilesAreSupported",
                  dm: "只支持 jar 文件。",
                })}
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
};
