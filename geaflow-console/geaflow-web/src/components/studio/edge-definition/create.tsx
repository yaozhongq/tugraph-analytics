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

import React, { useEffect, useState } from "react";
import { Input, Row, Col, Form, Card, Button, message } from "antd";
import {
  createEdgwDefinition,
  UpdateEdgeDefinition,
  EdgeDetail,
} from "../services/edgeDefinition";
import { GraphDefintionTab } from "./graph-tabs";

import styles from "./list.module.less";
import $i18n from "@/components/i18n";

const CreateTableDefinition = ({ currentItem, toBackList, readonly }) => {
  const currentInstance = localStorage.getItem("GEAFLOW_CURRENT_INSTANCE")
    ? JSON.parse(localStorage.getItem("GEAFLOW_CURRENT_INSTANCE"))
    : {};
  const { value: instanceName } = currentInstance;

  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [details, setDetails] = useState({});

  const defaultFields = [
    {
      id: (Date.now() + 0).toString(),
      name: "src_id",
      type: "BIGINT",
      category: "EDGE_SOURCE_ID",
      comment: $i18n.get({
        id: "openpiece-geaflow.geaflow.graph-tabs.graphDefintionEditTable.SourcePointId",
        dm: "源点ID",
      }),
    },
    {
      id: (Date.now() + 1).toString(),
      name: "dst_id",
      type: "BIGINT",
      category: "EDGE_TARGET_ID",
      comment: $i18n.get({
        id: "openpiece-geaflow.geaflow.graph-tabs.graphDefintionEditTable.TargetPointId",
        dm: "目标点ID",
      }),
    },
    {
      id: (Date.now() + 2).toString(),
      name: "ts",
      type: "BIGINT",
      category: "EDGE_TIMESTAMP",
      comment: $i18n.get({
        id: "openpiece-geaflow.geaflow.graph-tabs.graphDefintionEditTable.EdgeTimestamp",
        dm: "边时间戳",
      }),
    },
  ];

  useEffect(() => {
    if (currentItem) {
      EdgeDetail(instanceName, currentItem).then((res) => {
        if (res.success) {
          setDetails(res.data);
          form.setFieldsValue(res.data);
        }
      });
    }
  }, [currentItem]);

  const onSave = async () => {
    const values = await form.validateFields();
    const { name, comment } = values;
    const fields = Object.values(values)?.filter(
      (str) => str && Object.keys(str).indexOf("name") !== -1
    );
    const params = {
      name,
      comment,
      fields: fields,
      type: "EDGE",
    };
    setIsLoading(true);
    if (currentItem) {
      const result = await UpdateEdgeDefinition(
        instanceName,
        currentItem,
        params
      );
      if (result.code !== "SUCCESS") {
        message.error(
          $i18n.get(
            {
              id: "openpiece-geaflow.geaflow.table-definition.create.FailedToUpdateEdgeDefinition",
              dm: "更新边定义失败：{resultMessage}",
            },
            { resultMessage: result.message }
          )
        );
      } else {
        message.success(
          $i18n.get({
            id: "openpiece-geaflow.geaflow.edge-definition.create.TheTableDefinitionHasBeen",
            dm: "更新边定义成功",
          })
        );
        if (toBackList) {
          toBackList({
            visible: false,
            currentItem: null,
            realodedList: true,
            editable: false,
          });
        }
      }
      setIsLoading(false);
    } else {
      const result = await createEdgwDefinition(instanceName, params);

      if (result.code !== "SUCCESS") {
        message.error(
          $i18n.get(
            {
              id: "openpiece-geaflow.geaflow.edge-definition.create.FailedToCreateTableDefinition",
              dm: "创建边定义失败：{resultMessage}",
            },
            { resultMessage: result.message }
          )
        );
      } else {
        message.success(
          $i18n.get({
            id: "openpiece-geaflow.geaflow.edge-definition.create.TheTableDefinitionIsCreated",
            dm: "创建边定义成功",
          })
        );
        if (toBackList) {
          toBackList({
            visible: false,
            currentItem: null,
            realodedList: true,
            editable: false,
          });
        }
      }

      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (toBackList) {
      toBackList({
        visible: false,
        currentItem: null,
        realodedList: false,
        editable: false,
      });
    }
  };
  return (
    <div className={styles["graph-definition"]}>
      <p className={styles["add-title"]}>
        {readonly
          ? $i18n.get({
              id: "openpiece-geaflow.geaflow.table-definition.create.EdgeDefinitionDetails",
              dm: "边定义详情",
            })
          : currentItem
          ? $i18n.get({
              id: "openpiece-geaflow.geaflow.table-definition.create.EditEdgeDefinitions",
              dm: "编辑边定义",
            })
          : $i18n.get({
              id: "openpiece-geaflow.geaflow.table-definition.AddEdgeDefinitions",
              dm: "新增边定义",
            })}
      </p>
      <Form form={form} layout="vertical">
        <Card
          title={$i18n.get({
            id: "openpiece-geaflow.geaflow.table-definition.create.BasicInformation",
            dm: "基本信息",
          })}
          className={styles["add-col"]}
          type="inner"
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={$i18n.get({
                  id: "openpiece-geaflow.geaflow.table-definition.create.EdgeName",
                  dm: "边名称",
                })}
                name="name"
                rules={[
                  {
                    required: true,
                    message: $i18n.get({
                      id: "openpiece-geaflow.geaflow.table-definition.create.EnterAEdgeName",
                      dm: "请输入边名称",
                    }),
                  },
                ]}
              >
                <Input disabled={readonly} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={$i18n.get({
                  id: "openpiece-geaflow.geaflow.table-definition.create.Instance",
                  dm: "所属实例",
                })}
                name="instanceName"
              >
                <p>{instanceName}</p>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label={$i18n.get({
                  id: "openpiece-geaflow.geaflow.table-definition.create.EdgeDescription",
                  dm: "边描述",
                })}
                name="comment"
              >
                <Input.TextArea rows={1} disabled={readonly} />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <GraphDefintionTab
          tabsList={[
            {
              name: $i18n.get({
                id: "openpiece-geaflow.geaflow.table-definition.create.EdgeDefinition",
                dm: "边定义",
              }),
              type: "EDGE",
              editTables: currentItem ? [] : [{
                fields: defaultFields
              }],
            },
          ]}
          form={form}
          currentItem={details}
          readonly={readonly}
        />

        <div className={styles["definition-bottom"]}>
          <Button className={styles["bottom-btn"]} onClick={handleCancel}>
            {$i18n.get({
              id: "openpiece-geaflow.geaflow.table-definition.create.Cancel",
              dm: "取消",
            })}
          </Button>
          {!readonly && (
            <Button
              className={styles["bottom-btn"]}
              type="primary"
              htmlType="submit"
              onClick={onSave}
              loading={isLoading}
            >
              {$i18n.get({
                id: "openpiece-geaflow.geaflow.table-definition.create.Submit",
                dm: "提交",
              })}
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default CreateTableDefinition;
