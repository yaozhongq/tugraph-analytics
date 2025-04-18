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

import React, { useState, useEffect } from "react";
import { Collapse, Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import $i18n from "@/components/i18n";

const { Panel } = Collapse;

type colChild = {
  exportName?: string;
  exportCode?: string;
  configList?: any;
};

interface ColProps {
  colData: colChild[];
  placeholder: string;
}

export const AddCollapse: React.FC<ColProps> = ({ colData, placeholder }) => {
  const [colList, setColList] = useState<colChild[]>(colData);
  const { t } = useTranslation();
  // 新增
  const addPanel = (index: number) => {
    const { configList } = colList[index];
    const addData = colList;
    const dataItem = {
      name: `${t("i18n.key.task")}${configList.length + 1}`,
    };
    addData[index].configList.push(dataItem);
    setColList([...addData]);
  };

  // 删除
  const genExtra = (index: number, configIndex: Number) => (
    <Popconfirm
      title={$i18n.get({
        id: "openpiece-geaflow.geaflow.graph-tabs.add.AreYouSureYouWant",
        dm: "你确定要删除吗?",
      })}
      placement="topRight"
      onConfirm={(event) => {
        event.stopPropagation();
        const deleteData = [...colList];
        deleteData[index].configList.splice(configIndex, 1);
        deleteData[index].configList.forEach((item, i) => {
          item.name = `${t("i18n.key.task")}${i + 1}`;
        });
        setColList([...deleteData]);
      }}
      okText={$i18n.get({
        id: "openpiece-geaflow.geaflow.graph-tabs.add.Confirm",
        dm: "确认",
      })}
      cancelText={$i18n.get({
        id: "openpiece-geaflow.geaflow.graph-tabs.add.Cancel",
        dm: "取消",
      })}
    >
      <DeleteOutlined
        onClick={(event) => {
          event.stopPropagation();
          console.log(event, "event");
        }}
      />
    </Popconfirm>
  );

  return (
    <div>
      {colList?.map((item, index) => {
        return (
          <div>
            <Collapse defaultActiveKey={item.configList[0]?.code}>
              {item.configList.map((e: any, configIndex: number) => {
                return (
                  <Panel
                    header={`${t("i18n.key.task")}${configIndex + 1}`}
                    key={e.code}
                    extra={genExtra(index, configIndex)}
                  ></Panel>
                );
              })}
            </Collapse>
            <Button
              type="dashed"
              style={{ width: "100%", marginTop: 16 }}
              onClick={() => addPanel(index)}
            >
              + {placeholder}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
