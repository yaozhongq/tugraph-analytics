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

package com.antgroup.geaflow.dsl.runtime.plan;

import com.antgroup.geaflow.dsl.runtime.QueryContext;
import com.antgroup.geaflow.dsl.runtime.RuntimeTable;
import com.antgroup.geaflow.dsl.schema.GeaFlowView;
import java.util.List;
import org.apache.calcite.plan.RelOptCluster;
import org.apache.calcite.plan.RelOptCost;
import org.apache.calcite.plan.RelOptPlanner;
import org.apache.calcite.plan.RelOptTable;
import org.apache.calcite.plan.RelTraitSet;
import org.apache.calcite.rel.RelNode;
import org.apache.calcite.rel.core.TableScan;
import org.apache.calcite.rel.metadata.RelMetadataQuery;

public class PhysicViewRelNode extends TableScan implements PhysicRelNode<RuntimeTable> {

    public PhysicViewRelNode(RelOptCluster cluster, RelTraitSet traitSet,
                             RelOptTable table) {
        super(cluster, traitSet, table);
    }

    @Override
    public RelOptCost computeSelfCost(RelOptPlanner planner,
        RelMetadataQuery mq) {
        return super.computeSelfCost(planner, mq);
    }

    @Override
    public RelNode copy(RelTraitSet traitSet, List<RelNode> inputs) {
        return new PhysicViewRelNode(getCluster(), traitSet, getTable());
    }

    @Override
    public RuntimeTable translate(QueryContext context) {
        GeaFlowView view = table.unwrap(GeaFlowView.class);
        return (RuntimeTable) context.getDataViewByViewName(view.getName());
    }

    @Override
    public String showSQL() {
        return table.toString();
    }
}
