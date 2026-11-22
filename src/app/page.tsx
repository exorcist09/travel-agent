'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { OverviewMetrics } from '@/components/OverviewMetrics';
import { AgentPerformanceTable } from '@/components/AgentPerformanceTable';
import { AgentDetailModal } from '@/components/AgentDetailModal';
import { ExecutionTimeline } from '@/components/ExecutionTimeline';
import { EvaluationResults } from '@/components/EvaluationResults';
import { ModelComparison } from '@/components/ModelComparison';
import { Recommendations } from '@/components/Recommendations';
import { Footer } from '@/components/Footer';

import {
  EVALUATION_RUNS,
  OVERVIEW_METRICS,
  AGENT_PERFORMANCE_DATA,
  EXECUTION_TIMELINE_NODES,
  EVALUATION_TEST_CASES,
  MODEL_CONFIGURATIONS,
  ENGINEERING_RECOMMENDATIONS,
} from '@/data/mockData';
import { AgentPerformance, EvaluationRun, TimelineNode } from '@/types';

export default function DashboardPage() {
  const [selectedRun, setSelectedRun] = useState<EvaluationRun>(EVALUATION_RUNS[0]);
  const [selectedAgent, setSelectedAgent] = useState<AgentPerformance | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-hotel-search');
  const [isSimulatingRun, setIsSimulatingRun] = useState(false);
  const [isOptimized, setIsOptimized] = useState(false);

  // Handle run change
  const handleSelectRun = (run: EvaluationRun) => {
    setSelectedRun(run);
  };

  // Simulate triggering an eval run
  const handleTriggerEval = () => {
    setIsSimulatingRun(true);
    setTimeout(() => {
      setIsSimulatingRun(false);
      // Switch or update
      setSelectedRun({
        ...EVALUATION_RUNS[0],
        id: `run-${Math.floor(Math.random() * 900 + 100)}`,
        name: `Run #${Math.floor(Math.random() * 900 + 100)} — Live In-Flight Benchmark`,
        timestamp: 'Just now',
        accuracy: +(87.4 + (Math.random() * 1.5 - 0.5)).toFixed(1),
        avgLatency: +(8.2 + (Math.random() * 0.8 - 0.4)).toFixed(1),
        avgCost: +(0.084 + (Math.random() * 0.006 - 0.003)).toFixed(3),
        failureRate: +(4.8 + (Math.random() * 0.6 - 0.3)).toFixed(1),
      });
    }, 1800);
  };

  const handleJumpToRecommendations = () => {
    const el = document.getElementById('recommendations-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compute metrics based on selected run & optimization toggle
  const currentMetrics = OVERVIEW_METRICS.map((m) => {
    if (m.id === 'accuracy') {
      return { ...m, value: `${selectedRun.accuracy}%`, rawValue: selectedRun.accuracy };
    }
    if (m.id === 'latency') {
      return { ...m, value: `${selectedRun.avgLatency}s`, rawValue: selectedRun.avgLatency };
    }
    if (m.id === 'cost') {
      return { ...m, value: `$${selectedRun.avgCost.toFixed(3)}`, rawValue: selectedRun.avgCost };
    }
    if (m.id === 'failure') {
      return { ...m, value: `${selectedRun.failureRate}%`, rawValue: selectedRun.failureRate };
    }
    return m;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      {/* Header */}
      <Header
        runs={EVALUATION_RUNS}
        selectedRun={selectedRun}
        onSelectRun={handleSelectRun}
        onSimulateRun={handleTriggerEval}
        isSimulating={isSimulatingRun}
      />

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Run Details Micro Bar */}
        <div className="bg-white border border-slate-200 rounded-md px-3.5 py-2 flex flex-wrap items-center justify-between text-xs text-slate-500 shadow-sm gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-slate-400">Current Run:</span>
            <span className="font-semibold text-slate-800">{selectedRun.name}</span>
            <span className="font-mono text-[11px] text-slate-400">({selectedRun.commitHash})</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Branch: <strong className="text-slate-700">{selectedRun.branch}</strong></span>
            <span>Trips Evaluated: <strong className="text-slate-700">{selectedRun.totalTripsTested}</strong></span>
            <span>Timestamp: <strong className="text-slate-700">{selectedRun.timestamp}</strong></span>
          </div>
        </div>

        {/* Section A: Overview Metrics */}
        <OverviewMetrics metrics={currentMetrics} isOptimized={isOptimized} />

        {/* Section B: Agent Performance Table */}
        <AgentPerformanceTable
          agents={AGENT_PERFORMANCE_DATA}
          onSelectAgent={(agent) => setSelectedAgent(agent)}
          selectedAgentId={selectedAgent?.id}
        />

        {/* Section C: Execution Timeline */}
        <ExecutionTimeline
          nodes={EXECUTION_TIMELINE_NODES}
          selectedNodeId={selectedNodeId}
          onSelectNode={(node) => setSelectedNodeId(node.id)}
        />

        {/* Section D: Evaluation Results */}
        <EvaluationResults
          testCases={EVALUATION_TEST_CASES}
          onInspectAgent={(agentId) => {
            const found = AGENT_PERFORMANCE_DATA.find((a) => a.name.toLowerCase().includes(agentId.toLowerCase()));
            if (found) setSelectedAgent(found);
          }}
        />

        {/* Section E: Model Comparison */}
        <ModelComparison configurations={MODEL_CONFIGURATIONS} />

        {/* Section F: Improvement Recommendations (Most Important Section) */}
        <Recommendations
          recommendations={ENGINEERING_RECOMMENDATIONS}
          isOptimized={isOptimized}
          onToggleOptimization={() => setIsOptimized(!isOptimized)}
        />
      </main>

      {/* Agent Detail Modal */}
      <AgentDetailModal
        agent={selectedAgent}
        onClose={() => setSelectedAgent(null)}
        onJumpToRecommendation={handleJumpToRecommendations}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
