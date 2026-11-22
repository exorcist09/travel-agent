'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Target,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Zap,
  Code2,
  Sliders,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Terminal,
  Activity,
  ShieldCheck,
  Compass,
  DollarSign,
  Clock,
  Wrench,
  Search,
} from 'lucide-react';

import {
  OVERVIEW_METRICS,
  AGENT_PERFORMANCE_DATA,
  EXECUTION_TIMELINE_NODES,
  EVALUATION_TEST_CASES,
  MODEL_CONFIGURATIONS,
  ENGINEERING_RECOMMENDATIONS,
} from '@/data/mockData';
import { AgentPerformance, TimelineNode, EvaluationTestCase } from '@/types';
import { AgentDetailModal } from '@/components/AgentDetailModal';

export default function LandingPage() {
  const [isOptimized, setIsOptimized] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<AgentPerformance | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-hotel-search');
  const [filterTestStatus, setFilterTestStatus] = useState<'all' | 'failed' | 'passed'>('all');
  const [expandedRecId, setExpandedRecId] = useState<string | null>('rec-01');
  const [expandedTestId, setExpandedTestId] = useState<string | null>('tc-002');
  const [testSearch, setTestSearch] = useState('');

  const activeNode =
    EXECUTION_TIMELINE_NODES.find((n) => n.id === selectedNodeId) ||
    EXECUTION_TIMELINE_NODES[3];

  const filteredTests = EVALUATION_TEST_CASES.filter((tc) => {
    if (filterTestStatus === 'passed' && tc.status !== 'passed') return false;
    if (filterTestStatus === 'failed' && tc.status !== 'failed') return false;
    if (testSearch.trim()) {
      const q = testSearch.toLowerCase();
      return (
        tc.name.toLowerCase().includes(q) ||
        tc.prompt.toLowerCase().includes(q) ||
        tc.explanation.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-slate-200">
      {/* Top Advisory Pill Banner */}
      <div className="bg-slate-900 text-slate-100 px-4 py-2 text-xs flex flex-wrap items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[11px] font-medium border border-indigo-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Engineering Proposal
          </span>
          <span className="text-slate-300">
            Independent Concept Prototype by <strong className="text-white font-medium">Adarsh Verma</strong> for Airial
          </span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
          <span>Simulated Demo Benchmark Data</span>
          <span className="h-3 w-px bg-slate-700"></span>
          <span className="text-slate-300 font-mono">Not affiliated with Airial</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm">
              A
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-slate-900">
                Airial AI Engine
              </span>
              <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                Observability & Eval
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs text-slate-600 font-medium">
            <a href="#overview" className="hover:text-slate-900 transition-colors">
              1. What It Does
            </a>
            <a href="#matrix" className="hover:text-slate-900 transition-colors">
              2. Live Metrics
            </a>
            <a href="#architecture" className="hover:text-slate-900 transition-colors">
              3. Implementation
            </a>
            <a href="#guardrails" className="hover:text-slate-900 transition-colors">
              4. Eval Guardrails
            </a>
            <a href="#improvements" className="hover:text-slate-900 transition-colors">
              5. How Improvements Happen
            </a>
          </div>

          <button
            onClick={() => setIsOptimized(!isOptimized)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border shadow-sm transition-all ${
              isOptimized
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{isOptimized ? 'Revert Baseline' : 'Simulate Projected 40% Impact'}</span>
          </button>
        </div>
      </nav>

      {/* MAIN LANDING CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-20">
        {/* ========================================================= */}
        {/* SECTION 1: HERO — WHAT IT DOES                           */}
        {/* ========================================================= */}
        <section id="overview" className="space-y-6 pt-4">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
              <Compass className="w-3.5 h-3.5 text-indigo-600" />
              <span>Multi-Agent AI Observability, Latency Profiling & Unit Economics</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
              How Airial can monitor, evaluate, and scale its multi-agent travel engine.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Travel itinerary planning is not a single prompt—it is a distributed graph of specialized agents querying live flights, bed banks, and attractions. Without dedicated observability, multi-agent engines suffer from <strong>supplier latency bottlenecks</strong>, <strong>spatial scheduling hallucinations</strong>, and <strong>uncontrolled token costs</strong>.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed">
              This concept prototype demonstrates an internal engineering evaluation system that runs continuous regression suites against multi-agent trip outputs, profiles critical-path latencies, and generates deterministic optimizations to cut latency and marginal cost.
            </p>
          </div>

          {/* 4 Core Hero Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 pt-4">
            {/* Accuracy */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-medium text-slate-600">Evaluation Accuracy</span>
                <span className="text-[10px] font-mono text-slate-400">250 TRIPS</span>
              </div>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-slate-900">
                {isOptimized ? '93.2%' : '87.4%'}
              </div>
              <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100 pt-2 font-mono">
                <span className="text-emerald-700 font-medium">
                  {isOptimized ? '+5.8% (Projected)' : '+2.1% vs Run #141'}
                </span>
                <span className="text-slate-400">Goal: &gt;90%</span>
              </div>
            </div>

            {/* Latency */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-medium text-slate-600">Avg Execution Time</span>
                <span className="text-[10px] font-mono text-slate-400">END-TO-END</span>
              </div>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-slate-900">
                {isOptimized ? '4.9s' : '8.2s'}
              </div>
              <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100 pt-2 font-mono">
                <span className="text-emerald-700 font-medium">
                  {isOptimized ? '-3.3s (-40%)' : '-0.8s vs Run #141'}
                </span>
                <span className="text-slate-400">SLA: &lt;7.0s</span>
              </div>
            </div>

            {/* Cost */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-medium text-slate-600">Cost per Trip</span>
                <span className="text-[10px] font-mono text-slate-400">MARGINAL LLM</span>
              </div>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-slate-900">
                {isOptimized ? '$0.052' : '$0.084'}
              </div>
              <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100 pt-2 font-mono">
                <span className="text-emerald-700 font-medium">
                  {isOptimized ? '-$0.032 (-38%)' : '-$0.012 vs Run #141'}
                </span>
                <span className="text-slate-400">Budget: &lt;$0.075</span>
              </div>
            </div>

            {/* Failure Rate */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-medium text-slate-600">Agent Failure Rate</span>
                <span className="text-[10px] font-mono text-slate-400">API & SCHEMA</span>
              </div>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-slate-900">
                {isOptimized ? '1.2%' : '4.8%'}
              </div>
              <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100 pt-2 font-mono">
                <span className="text-emerald-700 font-medium">
                  {isOptimized ? '-3.6% (Resilient)' : '-0.4% vs Run #141'}
                </span>
                <span className="text-slate-400">SLO: &lt;3.0%</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: LIVE METRICS & AGENT PERFORMANCE MATRIX       */}
        {/* ========================================================= */}
        <section id="matrix" className="space-y-4">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Section 2 • Live Performance Matrix
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
                Monitoring 5 Autonomous Travel Sub-Agents
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Click any agent row to inspect execution profile & root causes
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px]">
                    <th className="py-3 px-4 font-semibold text-slate-700">Agent Name & Role</th>
                    <th className="py-3 px-3">Model</th>
                    <th className="py-3 px-3 text-right">Accuracy</th>
                    <th className="py-3 px-3 text-right">Avg Latency</th>
                    <th className="py-3 px-3 text-right">Cost / Trip</th>
                    <th className="py-3 px-4 text-center">Health Status</th>
                    <th className="py-3 px-3 text-right">Diagnosis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {AGENT_PERFORMANCE_DATA.map((agent) => {
                    const isHealthy = agent.status === 'Healthy';

                    return (
                      <tr
                        key={agent.id}
                        onClick={() => setSelectedAgent(agent)}
                        className="cursor-pointer hover:bg-slate-50/80 transition-colors group"
                      >
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                            <span>{agent.name}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 max-w-xs mt-0.5">
                            {agent.role}
                          </div>
                        </td>

                        <td className="py-3.5 px-3 font-mono text-[11px] text-slate-600">
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                            {agent.model}
                          </span>
                        </td>

                        <td className="py-3.5 px-3 text-right font-mono font-medium">
                          <span
                            className={
                              agent.accuracy >= 90
                                ? 'text-emerald-700 font-semibold'
                                : agent.accuracy >= 80
                                ? 'text-slate-800'
                                : 'text-amber-700 font-semibold'
                            }
                          >
                            {agent.accuracy}%
                          </span>
                        </td>

                        <td className="py-3.5 px-3 text-right font-mono font-medium">
                          <span
                            className={
                              agent.latency >= 3.0 ? 'text-amber-700 font-semibold' : 'text-slate-800'
                            }
                          >
                            {agent.latency}s
                          </span>
                        </td>

                        <td className="py-3.5 px-3 text-right font-mono text-slate-800">
                          ${agent.cost.toFixed(3)}
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium font-mono border ${
                              isHealthy
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : 'bg-amber-50 text-amber-700 border-amber-200'
                            }`}
                          >
                            {isHealthy ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <AlertTriangle className="w-3 h-3 text-amber-600" />
                            )}
                            {agent.status}
                          </span>
                        </td>

                        <td className="py-3.5 px-3 text-right font-mono text-[11px] text-slate-400 group-hover:text-slate-800">
                          <span className="inline-flex items-center gap-1">
                            Inspect
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
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
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Section 3 • Implementation Architecture
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
                How Implementation Happens: Multi-Agent Travel Graph
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Visual pipeline from user intent to validated travel booking
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Rather than relying on a single monolithic LLM prompt, the engine implements a staged Directed Acyclic Graph (DAG). Each specialized agent is assigned a strict role, scoped tool permissions, and structured JSON output schemas validated by a deterministic quality gate.
          </p>

          {/* Visual Step Workflow (DAG) */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm overflow-x-auto">
            <div className="flex items-center min-w-[760px] justify-between">
              {EXECUTION_TIMELINE_NODES.map((node, index) => {
                const isSelected = node.id === activeNode.id;
                const isWarning = node.status === 'warning';
                const isLast = index === EXECUTION_TIMELINE_NODES.length - 1;

                return (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`flex-1 min-w-[110px] max-w-[140px] text-left p-2.5 rounded-md border transition-all ${
                        isSelected
                          ? 'border-slate-900 bg-slate-900 text-white shadow-sm ring-1 ring-slate-900'
                          : isWarning
                          ? 'border-amber-200 bg-amber-50/40 text-slate-800 hover:border-amber-300'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                        <span className={isSelected ? 'text-slate-300' : 'text-slate-500'}>
                          0{node.stepNumber}
                        </span>
                        {node.status === 'success' ? (
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${
                              isSelected ? 'text-emerald-300' : 'text-emerald-600'
                            }`}
                          />
                        ) : (
                          <AlertTriangle
                            className={`w-3.5 h-3.5 ${
                              isSelected ? 'text-amber-300' : 'text-amber-600'
                            }`}
                          />
                        )}
                      </div>
                      <div className="font-semibold text-xs truncate">{node.name}</div>
                      <div className="mt-1 flex items-center justify-between text-[10px] font-mono">
                        <span className={isSelected ? 'text-slate-300' : 'text-slate-600'}>
                          {node.duration}
                        </span>
                        <span className={isSelected ? 'text-slate-400' : 'text-slate-400'}>
                          {node.tokens} tok
                        </span>
                      </div>
                    </button>

                    {!isLast && (
                      <div className="px-1 text-slate-300 flex items-center justify-center shrink-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Active Node Live Inspector */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                <span className="text-xs font-semibold text-slate-900">
                  Step {activeNode.stepNumber}: {activeNode.name} Inspector
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  Agent: {activeNode.agentId}
                </span>
              </div>
              <div className="text-xs font-mono text-slate-500 flex items-center gap-3">
                <span>Duration: <strong>{activeNode.duration}</strong> ({activeNode.durationMs}ms)</span>
                <span>•</span>
                <span>Tokens: <strong>{activeNode.tokens}</strong></span>
                <span>•</span>
                <span>Cost: <strong>{activeNode.cost}</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase block">
                  Connected APIs & Tools ({activeNode.toolsCalled.length}):
                </span>
                <div className="space-y-1">
                  {activeNode.toolsCalled.map((tool, i) => (
                    <div
                      key={i}
                      className="p-2 rounded bg-slate-50 border border-slate-100 flex items-center justify-between font-mono text-[11px]"
                    >
                      <div>
                        <div className="font-semibold text-slate-800">{tool.name}</div>
                        <div className="text-[10px] text-slate-400 truncate max-w-[220px]">
                          {tool.endpoint}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-700">{tool.latencyMs}ms</span>
                        <div className="text-[10px] text-emerald-600">HTTP {tool.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase block">
                  Deterministic Guardrail Assertion:
                </span>
                <div
                  className={`p-3 rounded border text-xs ${
                    activeNode.validationCheck.passed
                      ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950'
                      : 'bg-amber-50/60 border-amber-200 text-amber-950'
                  }`}
                >
                  <div className="font-mono font-semibold text-[11px] flex items-center justify-between mb-1">
                    <span>{activeNode.validationCheck.name}</span>
                    <span>Score: {Math.round(activeNode.validationCheck.score * 100)}%</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-700">
                    {activeNode.validationCheck.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: HOW EVALUATION & GUARDRAILS WORK IN PRACTICE  */}
        {/* ========================================================= */}
        <section id="guardrails" className="space-y-4">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Section 4 • Test Harness & Assertions
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
                Automated Test Scenarios & Edge-Case Guardrails
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-flex rounded-md border border-slate-200 bg-white p-0.5 text-xs shadow-sm">
                <button
                  onClick={() => setFilterTestStatus('all')}
                  className={`px-2.5 py-1 rounded text-xs font-medium ${
                    filterTestStatus === 'all'
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({EVALUATION_TEST_CASES.length})
                </button>
                <button
                  onClick={() => setFilterTestStatus('failed')}
                  className={`px-2.5 py-1 rounded text-xs font-medium ${
                    filterTestStatus === 'failed'
                      ? 'bg-rose-600 text-white'
                      : 'text-rose-700 hover:bg-rose-50'
                  }`}
                >
                  Failed Only (2)
                </button>
                <button
                  onClick={() => setFilterTestStatus('passed')}
                  className={`px-2.5 py-1 rounded text-xs font-medium ${
                    filterTestStatus === 'passed'
                      ? 'bg-emerald-600 text-white'
                      : 'text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  Passed Only (6)
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {filteredTests.map((tc) => {
              const isExpanded = expandedTestId === tc.id;
              const isPassed = tc.status === 'passed';

              return (
                <div
                  key={tc.id}
                  className={`bg-white border rounded-lg overflow-hidden shadow-sm transition-all ${
                    !isPassed ? 'border-rose-200' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div
                    onClick={() => setExpandedTestId(isExpanded ? null : tc.id)}
                    className="p-3.5 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                  >
                    <div className="flex items-start sm:items-center gap-2.5">
                      {isPassed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5 sm:mt-0" />
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-slate-900">{tc.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                            {tc.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          &ldquo;{tc.prompt}&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono shrink-0 pl-6 sm:pl-0">
                      <span
                        className={`font-semibold ${
                          isPassed ? 'text-emerald-700' : 'text-rose-700'
                        }`}
                      >
                        Score: {tc.accuracyScore}%
                      </span>
                      <span className="text-slate-400">{tc.executionTime}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-slate-100 p-4 bg-slate-50/70 text-xs space-y-3">
                      <div
                        className={`p-3 rounded border ${
                          isPassed
                            ? 'bg-emerald-50/40 border-emerald-200 text-emerald-950'
                            : 'bg-rose-50/50 border-rose-200 text-rose-950'
                        }`}
                      >
                        <div className="font-semibold font-mono text-[11px] mb-1">
                          {isPassed ? '✓ Verification Passed:' : '✗ Failure Diagnosis:'}
                          {tc.failedAgent && (
                            <span className="ml-2 font-mono text-[10px] px-1.5 py-0.2 bg-white rounded border border-rose-300 text-rose-800">
                              Attributed: {tc.failedAgent}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-700">
                          {tc.explanation}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="bg-white p-2.5 rounded border border-slate-200">
                          <span className="text-slate-400 block text-[10px] uppercase mb-0.5">
                            Expected Behavior:
                          </span>
                          <span className="text-slate-800">{tc.expectedBehavior}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded border border-slate-200">
                          <span className="text-slate-400 block text-[10px] uppercase mb-0.5">
                            Actual Engine Output:
                          </span>
                          <span className={isPassed ? 'text-slate-800' : 'text-rose-700'}>
                            {tc.actualBehavior}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: HOW IMPROVEMENTS HAPPEN (ENGINEERING ROADMAP) */}
        {/* ========================================================= */}
        <section id="improvements" className="space-y-4">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Section 5 • The Engineering Roadmap
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
                How Improvements Happen: From Telemetry to Production
              </h2>
            </div>
            <button
              onClick={() => setIsOptimized(!isOptimized)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border shadow-sm transition-all ${
                isOptimized
                  ? 'bg-emerald-600 text-white border-emerald-600 ring-2 ring-emerald-500/30'
                  : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>
                {isOptimized ? 'Revert to Raw Telemetry' : 'Simulate Projected 40% Impact'}
              </span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Evaluation is only as valuable as the engineering fixes it unlocks. Below are four targeted improvements synthesized directly from the simulated metrics to solve Hotel latency, Itinerary spatial errors, token waste, and supplier dropouts.
          </p>

          <div className="space-y-3">
            {ENGINEERING_RECOMMENDATIONS.slice(0, 4).map((rec) => {
              const isExpanded = expandedRecId === rec.id;

              return (
                <div
                  key={rec.id}
                  className={`bg-white border rounded-lg overflow-hidden shadow-sm transition-all ${
                    isExpanded
                      ? 'border-slate-400 ring-1 ring-slate-300'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div
                    onClick={() => setExpandedRecId(isExpanded ? null : rec.id)}
                    className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-slate-50/70 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span
                        className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded border ${
                          rec.priority === 'P0'
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        {rec.priority}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-semibold text-slate-900">{rec.title}</h3>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                            Target: {rec.targetAgent}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {rec.observedIssue}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 text-xs font-mono">
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        {rec.metricsSimulated.delta}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border border-slate-200">
                          <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 block mb-1">
                            Observed Telemetry Issue:
                          </span>
                          <p className="text-slate-700 text-[11px] leading-relaxed">
                            {rec.observedIssue}
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded border border-slate-200">
                          <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 block mb-1">
                            Root Cause Diagnosis:
                          </span>
                          <p className="text-slate-700 text-[11px] leading-relaxed">
                            {rec.potentialCause}
                          </p>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded border border-slate-200">
                        <span className="text-[10px] font-mono font-semibold uppercase text-indigo-700 block mb-1">
                          Suggested Engineering Implementation:
                        </span>
                        <p className="text-slate-800 text-xs leading-relaxed">
                          {rec.suggestedImprovement}
                        </p>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200 p-3 rounded">
                        <div className="flex items-center justify-between font-mono text-[11px] text-emerald-900 font-semibold mb-1">
                          <span>Expected Impact (Estimated):</span>
                          <span>{rec.metricsSimulated.beforeMetric} → {rec.metricsSimulated.afterMetric}</span>
                        </div>
                        <p className="text-emerald-950 text-xs leading-relaxed">
                          {rec.expectedImpact}
                        </p>
                      </div>

                      {rec.codeSnippet && (
                        <div className="bg-slate-900 text-slate-200 p-3 rounded font-mono text-[11px] overflow-x-auto border border-slate-800">
                          <div className="text-[10px] text-slate-400 pb-1 border-b border-slate-800 mb-1">
                            {rec.codeSnippet.filename}
                          </div>
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

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="space-y-0.5">
            <div className="font-semibold text-slate-900">
              Airial AI Agent Evaluation Dashboard Concept
            </div>
            <p className="text-[11px] text-slate-500">
              Multi-Agent Observability, Latency Profiling, and Constraint Validation Architecture.
            </p>
          </div>
          <div className="text-[11px] font-mono text-slate-600 sm:text-right">
            Independent concept prototype by Adarsh Verma. Not affiliated with Airial.
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
