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

CREATE TABLE jdbc_source (
	id bigint,
	name varchar,
	age long
) WITH (
	type='jdbc',
	geaflow.dsl.jdbc.driver = 'org.h2.Driver',
	geaflow.dsl.jdbc.url = 'jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1',
	geaflow.dsl.jdbc.username = 'h2_user',
	geaflow.dsl.jdbc.password = 'h2_pwd',
	geaflow.dsl.jdbc.table.name = 'users',
	geaflow.dsl.jdbc.`partition`.num = '4',
	geaflow.dsl.jdbc.`partition`.column = 'id',
	geaflow.dsl.jdbc.`partition`.lowerbound = '2',
	geaflow.dsl.jdbc.`partition`.upperbound = '4'
);

CREATE TABLE tbl_result (
	id bigint,
	name varchar,
	age long
) WITH (
	type='file',
	geaflow.dsl.file.path='${target}'
);

INSERT INTO tbl_result
SELECT *
FROM jdbc_source;
