'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Zap,
  Sliders,
  ChevronRight,
  Compass,
} from 'lucide-react';

import {
  AGENT_PERFORMANCE_DATA,
  EXECUTION_TIMELINE_NODES,
  EVALUATION_TEST_CASES,
  ENGINEERING_RECOMMENDATIONS,
} from '@/data/mockData';
import { AgentPerformance } from '@/types';
import { AgentDetailModal } from '@/components/AgentDetailModal';

export default function CleanLandingPage() {
  const [isOptimized, setIsOptimized] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<AgentPerformance | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-hotel-search');
  const [filterTestStatus, setFilterTestStatus] = useState<'all' | 'failed' | 'passed'>('all');
  const [expandedRecId, setExpandedRecId] = useState<string | null>('rec-01');
  const [expandedTestId, setExpandedTestId] = useState<string | null>('tc-002');

  const activeNode =
    EXECUTION_TIMELINE_NODES.find((n) => n.id === selectedNodeId) ||
    EXECUTION_TIMELINE_NODES[3];

  const filteredTests = EVALUATION_TEST_CASES.filter((tc) => {
    if (filterTestStatus === 'passed' && tc.status !== 'passed') return false;
    if (filterTestStatus === 'failed' && tc.status !== 'failed') return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 font-sans selection:bg-blue-600/30 selection:text-white">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-40 bg-[#0c0c0e]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white font-semibold text-sm tracking-tight">
            <Compass className="w-4 h-4 text-blue-500" />
            <span>Travel AI Engine</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#matrix" className="hover:text-white transition-colors">Metrics</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#guardrails" className="hover:text-white transition-colors">Guardrails</a>
            <a href="#improvements" className="hover:text-white transition-colors">Roadmap</a>
          </div>

          <button
            onClick={() => setIsOptimized(!isOptimized)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              isOptimized
                ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{isOptimized ? 'Revert Baseline' : 'Simulate 40% Latency Drop'}</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        {/* ========================================================= */}
        {/* SECTION 1: HERO & CORE METRICS — WHAT IT DOES            */}
        {/* ========================================================= */}
        <section id="overview" className="space-y-6 pt-2">
          <div className="max-w-2xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Evaluating & Optimizing Multi-Agent Travel AI
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 leading-normal">
              Monitor latency, accuracy, and unit economics across specialized travel agents in real time.
            </p>
          </div>

          {/* 4 Core Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Accuracy */}
            <div className="bg-[#121214] border border-white/10 rounded-lg p-4">
              <div className="text-xs text-zinc-500 font-mono">Accuracy</div>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-white mt-1">
                {isOptimized ? '93.2%' : '87.4%'}
              </div>
              <div className="mt-2 text-[11px] font-mono text-emerald-400">
                {isOptimized ? '+5.8% Projected' : '+2.1% vs prev'}
              </div>
            </div>

            {/* Latency */}
            <div className="bg-[#121214] border border-white/10 rounded-lg p-4">
              <div className="text-xs text-zinc-500 font-mono">Execution Time</div>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-white mt-1">
                {isOptimized ? '4.9s' : '8.2s'}
              </div>
              <div className="mt-2 text-[11px] font-mono text-emerald-400">
                {isOptimized ? '-3.3s (-40%)' : '-0.8s vs prev'}
              </div>
            </div>

            {/* Cost */}
            <div className="bg-[#121214] border border-white/10 rounded-lg p-4">
              <div className="text-xs text-zinc-500 font-mono">Cost per Trip</div>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-white mt-1">
                {isOptimized ? '$0.052' : '$0.084'}
              </div>
              <div className="mt-2 text-[11px] font-mono text-emerald-400">
                {isOptimized ? '-$0.032 (-38%)' : '-$0.012 vs prev'}
              </div>
            </div>

            {/* Failure Rate */}
            <div className="bg-[#121214] border border-white/10 rounded-lg p-4">
              <div className="text-xs text-zinc-500 font-mono">Failure Rate</div>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-white mt-1">
                {isOptimized ? '1.2%' : '4.8%'}
              </div>
              <div className="mt-2 text-[11px] font-mono text-emerald-400">
                {isOptimized ? '-3.6% Resilient' : '-0.4% vs prev'}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: LIVE PERFORMANCE MATRIX — WHAT IT MONITORS     */}
        {/* ========================================================= */}
        <section id="matrix" className="space-y-4">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Agent Performance Matrix
            </h2>
            <span className="text-xs text-zinc-500 font-mono">
              Click row to inspect
            </span>
          </div>

          <div className="bg-[#121214] border border-white/10 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#16161a] border-b border-white/10 text-zinc-400 font-mono text-[11px]">
                    <th className="py-2.5 px-4 font-medium text-zinc-300">Agent</th>
                    <th className="py-2.5 px-3">Model</th>
                    <th className="py-2.5 px-3 text-right">Accuracy</th>
                    <th className="py-2.5 px-3 text-right">Latency</th>
                    <th className="py-2.5 px-3 text-right">Cost</th>
                    <th className="py-2.5 px-4 text-center">Status</th>
                    <th className="py-2.5 px-3 text-right sr-only">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {AGENT_PERFORMANCE_DATA.map((agent) => {
                    const isHealthy = agent.status === 'Healthy';

                    return (
                      <tr
                        key={agent.id}
                        onClick={() => setSelectedAgent(agent)}
                        className="cursor-pointer hover:bg-white/[0.03] transition-colors group"
                      >
                        <td className="py-3 px-4 font-sans font-medium text-white">
                          <div>{agent.name}</div>
                          <div className="text-[11px] text-zinc-500 line-clamp-1 font-normal font-sans">
                            {agent.role}
                          </div>
                        </td>

                        <td className="py-3 px-3 text-zinc-400 text-[11px]">
                          {agent.model}
                        </td>

                        <td className="py-3 px-3 text-right font-medium">
                          <span className={agent.accuracy >= 90 ? 'text-emerald-400' : 'text-amber-400'}>
                            {agent.accuracy}%
                          </span>
                        </td>

                        <td className="py-3 px-3 text-right text-zinc-300">
                          {agent.latency}s
                        </td>

                        <td className="py-3 px-3 text-right text-zinc-300">
                          ${agent.cost.toFixed(3)}
                        </td>

                        <td className="py-3 px-4 text-center">
                          <span
                            className={`text-[11px] font-medium ${
                              isHealthy ? 'text-emerald-400' : 'text-amber-400'
                            }`}
                          >
                            {agent.status}
                          </span>
                        </td>

                        <td className="py-3 px-3 text-right text-zinc-500 group-hover:text-blue-400">
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: HOW IMPLEMENTATION HAPPENS (THE TRAVEL DAG)    */}
        {/* ========================================================= */}
        <section id="architecture" className="space-y-4">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Multi-Agent Travel Graph
            </h2>
            <span className="text-xs text-zinc-500 font-mono">
              End-to-end execution pipeline
            </span>
          </div>

          {/* Workflow DAG Nodes */}
          <div className="bg-[#121214] border border-white/10 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <div className="flex items-center min-w-[700px] justify-between">
              {EXECUTION_TIMELINE_NODES.map((node, index) => {
                const isSelected = node.id === activeNode.id;
                const isLast = index === EXECUTION_TIMELINE_NODES.length - 1;

                return (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`flex-1 min-w-[100px] max-w-[130px] text-left p-2.5 rounded-md border transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-600/10 text-white'
                          : 'border-white/10 bg-[#16161a] hover:bg-white/5 text-zinc-300'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-zinc-500 mb-0.5">
                        0{node.stepNumber}
                      </div>
                      <div className="font-medium text-xs truncate text-white">
                        {node.name}
                      </div>
                      <div className="mt-1 text-[10px] font-mono text-zinc-400 flex justify-between">
                        <span>{node.duration}</span>
                        <span>{node.tokens} tok</span>
                      </div>
                    </button>

                    {!isLast && (
                      <div className="px-1 text-zinc-600 shrink-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Active Node Inspector */}
          <div className="bg-[#121214] border border-white/10 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs">
              <div className="font-semibold text-white">
                Step {activeNode.stepNumber}: {activeNode.name}
              </div>
              <div className="font-mono text-zinc-400 flex gap-3 text-[11px]">
                <span>{activeNode.duration}</span>
                <span>•</span>
                <span>{activeNode.tokens} tokens</span>
                <span>•</span>
                <span>{activeNode.cost}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Tools & APIs:</span>
                <div className="space-y-1">
                  {activeNode.toolsCalled.map((tool, i) => (
                    <div
                      key={i}
                      className="p-2 rounded bg-[#16161a] border border-white/5 flex items-center justify-between font-mono text-[11px]"
                    >
                      <span className="text-zinc-200">{tool.name}</span>
                      <span className="text-zinc-400">{tool.latencyMs}ms</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Guardrail Check:</span>
                <div className="p-2.5 rounded bg-[#16161a] border border-white/5 text-xs space-y-1">
                  <div className="font-mono font-medium text-zinc-200 flex justify-between">
                    <span>{activeNode.validationCheck.name}</span>
                    <span className={activeNode.validationCheck.passed ? 'text-emerald-400' : 'text-amber-400'}>
                      {Math.round(activeNode.validationCheck.score * 100)}%
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {activeNode.validationCheck.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: TEST HARNESS & GUARDRAIL ASSERTIONS            */}
        {/* ========================================================= */}
        <section id="guardrails" className="space-y-4">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Test Harness & Assertions
            </h2>
            <div className="flex gap-1 text-xs">
              <button
                onClick={() => setFilterTestStatus('all')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  filterTestStatus === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'text-zinc-400 hover:text-white bg-[#16161a]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterTestStatus('failed')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  filterTestStatus === 'failed'
                    ? 'bg-rose-600 text-white'
                    : 'text-rose-400 hover:text-rose-300 bg-[#16161a]'
                }`}
              >
                Failed (2)
              </button>
              <button
                onClick={() => setFilterTestStatus('passed')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  filterTestStatus === 'passed'
                    ? 'bg-emerald-600 text-white'
                    : 'text-emerald-400 hover:text-emerald-300 bg-[#16161a]'
                }`}
              >
                Passed (6)
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {filteredTests.map((tc) => {
              const isExpanded = expandedTestId === tc.id;
              const isPassed = tc.status === 'passed';

              return (
                <div
                  key={tc.id}
                  className="bg-[#121214] border border-white/10 rounded-lg overflow-hidden text-xs"
                >
                  <div
                    onClick={() => setExpandedTestId(isExpanded ? null : tc.id)}
                    className="p-3 cursor-pointer flex items-center justify-between gap-2 hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {isPassed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                      <div className="truncate">
                        <span className="font-medium text-white">{tc.name}</span>
                        <span className="text-zinc-500 ml-2 hidden sm:inline">&ldquo;{tc.prompt}&rdquo;</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 font-mono text-[11px]">
                      <span className={isPassed ? 'text-emerald-400' : 'text-rose-400'}>
                        {tc.accuracyScore}%
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 text-zinc-500 transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-white/5 p-3 bg-[#16161a] text-[11px] space-y-2">
                      <div className="text-zinc-300 leading-relaxed">
                        <strong className={isPassed ? 'text-emerald-400' : 'text-rose-400'}>
                          {isPassed ? 'Passed: ' : 'Root Cause: '}
                        </strong>
                        {tc.explanation}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400 font-mono">
                        <div>Expected: {tc.expectedBehavior}</div>
                        <div>Actual: {tc.actualBehavior}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: HOW IMPROVEMENTS HAPPEN (ROADMAP)              */}
        {/* ========================================================= */}
        <section id="improvements" className="space-y-4">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Engineering Improvements
            </h2>
            <span className="text-xs text-zinc-500 font-mono">
              Actionable optimizations
            </span>
          </div>

          <div className="space-y-2.5">
            {ENGINEERING_RECOMMENDATIONS.slice(0, 4).map((rec) => {
              const isExpanded = expandedRecId === rec.id;

              return (
                <div
                  key={rec.id}
                  className="bg-[#121214] border border-white/10 rounded-lg overflow-hidden text-xs"
                >
                  <div
                    onClick={() => setExpandedRecId(isExpanded ? null : rec.id)}
                    className="p-3.5 cursor-pointer flex items-center justify-between gap-3 hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                          rec.priority === 'P0' ? 'bg-rose-950 text-rose-300' : 'bg-amber-950 text-amber-300'
                        }`}
                      >
                        {rec.priority}
                      </span>
                      <span className="font-semibold text-white truncate">{rec.title}</span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 font-mono text-[11px]">
                      <span className="text-emerald-400">{rec.metricsSimulated.delta}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 text-zinc-500 transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-white/5 p-4 bg-[#16161a] space-y-3 text-[11px]">
                      <div className="text-zinc-300 leading-relaxed">
                        <strong className="text-zinc-100">Fix: </strong>
                        {rec.suggestedImprovement}
                      </div>

                      <div className="font-mono text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-900/50 flex justify-between">
                        <span>Expected Impact: {rec.metricsSimulated.beforeMetric} → {rec.metricsSimulated.afterMetric}</span>
                        <span>{rec.metricsSimulated.delta}</span>
                      </div>

                      {rec.codeSnippet && (
                        <div className="bg-[#0e0e12] text-zinc-300 p-3 rounded font-mono text-[11px] overflow-x-auto border border-white/5">
                          <div className="text-[10px] text-zinc-500 mb-1">{rec.codeSnippet.filename}</div>
                          <pre className="whitespace-pre">{rec.codeSnippet.diff}</pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0c0c0e] py-8 mt-16 text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-medium text-zinc-300 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-blue-500" />
            <span>Travel AI Engine</span>
          </div>
          <div className="text-[11px] font-mono text-zinc-500">
            Independent concept prototype by Adarsh Verma.
          </div>
        </div>
      </footer>

      {/* Agent Detail Modal */}
      <AgentDetailModal
        agent={selectedAgent}
        onClose={() => setSelectedAgent(null)}
        onJumpToRecommendation={() => {
          const el = document.getElementById('improvements');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}
