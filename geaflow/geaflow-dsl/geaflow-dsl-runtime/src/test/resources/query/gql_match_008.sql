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

CREATE TABLE v_person (
  name varchar,
  age int,
  id bigint
) WITH (
	type='file',
	geaflow.dsl.window.size = -1,
	geaflow.dsl.file.path = 'resource:///data/modern_vertex_person_reorder.txt'
);

CREATE TABLE v_software (
  name varchar,
  lang varchar,
  id bigint
) WITH (
	type='file',
	geaflow.dsl.window.size = -1,
	geaflow.dsl.file.path = 'resource:///data/modern_vertex_software_reorder.txt'
);

CREATE TABLE e_knows_ts (
  srcId bigint,
  targetId bigint,
  ts bigint
) WITH (
	type='file',
	geaflow.dsl.file.path = 'resource:///data/modern_edge_knows_ts.txt'
);

CREATE TABLE e_created_ts (
  srcId bigint,
  targetId bigint,
  ts bigint
) WITH (
	type='file',
	geaflow.dsl.file.path = 'resource:///data/modern_edge_created_ts.txt'
);

CREATE GRAPH modern_ts (
	Vertex person using v_person WITH ID(id),
	Vertex software using v_software WITH ID(id),
	Edge knows using e_knows_ts WITH ID(srcId, targetId), TIMESTAMP(ts),
	Edge created using e_created_ts WITH ID(srcId, targetId), TIMESTAMP(ts)
) WITH (
	storeType='memory',
	shardCount = 2
);

CREATE TABLE tbl_result (
  a_id bigint,
  weight bigint,
  b_id bigint
) WITH (
	type='file',
	geaflow.dsl.file.path='${target}'
);

USE GRAPH modern_ts;

INSERT INTO tbl_result
SELECT
	a_id,
	ts,
	b_id
FROM (
Match
(a WHERE id in (1,2,3,4,5,6))-[e
WHERE (ts = 1 or ts = 2 or 3 <= ts and 3 >= ts) and (ts = 2 or ts = 3 or 6 = ts)]-(b)
RETURN a.id as a_id, e.ts as ts, b.id as b_id
)
