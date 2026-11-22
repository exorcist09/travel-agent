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
  ChevronRight,
  Terminal,
  Activity,
  ShieldCheck,
  Compass,
  Clock,
  DollarSign,
  Wrench,
  Search,
} from 'lucide-react';

import {
  OVERVIEW_METRICS,
  AGENT_PERFORMANCE_DATA,
  EXECUTION_TIMELINE_NODES,
  EVALUATION_TEST_CASES,
  ENGINEERING_RECOMMENDATIONS,
} from '@/data/mockData';
import { AgentPerformance, TimelineNode, EvaluationTestCase } from '@/types';
import { AgentDetailModal } from '@/components/AgentDetailModal';

export default function KairoStyleLandingPage() {
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
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 font-sans selection:bg-blue-600/30 selection:text-white relative overflow-hidden">
      {/* Background Top Glow Gradient (Kairo Style) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,235,0.18),rgba(255,255,255,0))] pointer-events-none -z-10" />

      {/* Modern Dark Navbar */}
      <nav className="sticky top-0 z-40 bg-[#0c0c0e]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.25)] group-hover:border-blue-400 transition-colors">
              <Compass className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-blue-300 transition-colors">
                Travel AI Engine
              </span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">
                EVAL
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-xs text-zinc-400 font-medium">
            <a href="#overview" className="hover:text-white transition-colors">
              1. Overview
            </a>
            <a href="#matrix" className="hover:text-white transition-colors">
              2. Live Metrics
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
              3. Implementation
            </a>
            <a href="#guardrails" className="hover:text-white transition-colors">
              4. Guardrails
            </a>
            <a href="#improvements" className="hover:text-white transition-colors">
              5. Roadmap
            </a>
          </div>

          {/* Right Action */}
          <button
            onClick={() => setIsOptimized(!isOptimized)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              isOptimized
                ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.35)]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{isOptimized ? 'Revert to Baseline' : 'Simulate 40% Latency Drop'}</span>
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-24">
        {/* ========================================================= */}
        {/* SECTION 1: HERO — WHAT IT DOES                           */}
        {/* ========================================================= */}
        <section id="overview" className="space-y-8 pt-4">
          <div className="max-w-3xl space-y-4">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span>MULTI-AGENT EVALUATION & OBSERVABILITY PLATFORM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Evaluating & Optimizing Multi-Agent Travel Intelligence at Scale.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Travel itinerary planning is not a single prompt—it is a distributed graph of specialized agents querying live flights, bed banks, and attractions. Without dedicated observability, agents suffer from <strong>supplier latency bottlenecks</strong>, <strong>spatial scheduling hallucinations</strong>, and <strong>uncontrolled token costs</strong>.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              This system demonstrates an internal engineering evaluation harness that continuously tests multi-agent trip outputs, profiles critical-path latencies across upstream providers, and generates deterministic optimizations to drive down latency and marginal cost.
            </p>
          </div>

          {/* 4 Core Hero Metric Cards (Kairo Dark Style) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {/* Accuracy */}
            <div className="bg-[#121214] border border-white/10 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1 font-mono">
                <span>Evaluation Accuracy</span>
                <span className="text-[10px] text-zinc-500">250 TRIPS</span>
              </div>
              <div className="text-3xl font-semibold font-mono text-white tracking-tight mt-1">
                {isOptimized ? '93.2%' : '87.4%'}
              </div>
              <div className="mt-3 text-[11px] font-mono flex items-center justify-between border-t border-white/5 pt-2.5">
                <span className="text-emerald-400 font-medium">
                  {isOptimized ? '+5.8% (Projected)' : '+2.1% vs Run #141'}
                </span>
                <span className="text-zinc-500">Goal: &gt;90%</span>
              </div>
            </div>

            {/* Latency */}
            <div className="bg-[#121214] border border-white/10 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1 font-mono">
                <span>Avg Execution Time</span>
                <span className="text-[10px] text-zinc-500">END-TO-END</span>
              </div>
              <div className="text-3xl font-semibold font-mono text-white tracking-tight mt-1">
                {isOptimized ? '4.9s' : '8.2s'}
              </div>
              <div className="mt-3 text-[11px] font-mono flex items-center justify-between border-t border-white/5 pt-2.5">
                <span className="text-emerald-400 font-medium">
                  {isOptimized ? '-3.3s (-40%)' : '-0.8s vs Run #141'}
                </span>
                <span className="text-zinc-500">SLA: &lt;7.0s</span>
              </div>
            </div>

            {/* Cost */}
            <div className="bg-[#121214] border border-white/10 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1 font-mono">
                <span>Cost per Trip</span>
                <span className="text-[10px] text-zinc-500">MARGINAL LLM</span>
              </div>
              <div className="text-3xl font-semibold font-mono text-white tracking-tight mt-1">
                {isOptimized ? '$0.052' : '$0.084'}
              </div>
              <div className="mt-3 text-[11px] font-mono flex items-center justify-between border-t border-white/5 pt-2.5">
                <span className="text-emerald-400 font-medium">
                  {isOptimized ? '-$0.032 (-38%)' : '-$0.012 vs Run #141'}
                </span>
                <span className="text-zinc-500">Budget: &lt;$0.075</span>
              </div>
            </div>

            {/* Failure Rate */}
            <div className="bg-[#121214] border border-white/10 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1 font-mono">
                <span>Agent Failure Rate</span>
                <span className="text-[10px] text-zinc-500">API & SCHEMA</span>
              </div>
              <div className="text-3xl font-semibold font-mono text-white tracking-tight mt-1">
                {isOptimized ? '1.2%' : '4.8%'}
              </div>
              <div className="mt-3 text-[11px] font-mono flex items-center justify-between border-t border-white/5 pt-2.5">
                <span className="text-emerald-400 font-medium">
                  {isOptimized ? '-3.6% (Resilient)' : '-0.4% vs Run #141'}
                </span>
                <span className="text-zinc-500">SLO: &lt;3.0%</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: LIVE PERFORMANCE MATRIX — WHAT IT MONITORS     */}
        {/* ========================================================= */}
        <section id="matrix" className="space-y-5">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                Section 2 • Live Performance Matrix
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                Monitoring 5 Autonomous Travel Sub-Agents
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Click any agent row to inspect execution profile & root causes
            </p>
          </div>

          <div className="bg-[#121214] border border-white/10 rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#16161a] border-b border-white/10 text-zinc-400 font-mono text-[11px]">
                    <th className="py-3 px-4 font-semibold text-zinc-200">Agent Name & Role</th>
                    <th className="py-3 px-3">Model</th>
                    <th className="py-3 px-3 text-right">Accuracy</th>
                    <th className="py-3 px-3 text-right">Avg Latency</th>
                    <th className="py-3 px-3 text-right">Cost / Trip</th>
                    <th className="py-3 px-4 text-center">Health Status</th>
                    <th className="py-3 px-4 text-right">Diagnosis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans">
                  {AGENT_PERFORMANCE_DATA.map((agent) => {
                    const isHealthy = agent.status === 'Healthy';

                    return (
                      <tr
                        key={agent.id}
                        onClick={() => setSelectedAgent(agent)}
                        className="cursor-pointer hover:bg-white/[0.03] transition-colors group"
                      >
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-white flex items-center gap-1.5">
                            <span>{agent.name}</span>
                          </div>
                          <div className="text-[11px] text-zinc-400 line-clamp-1 max-w-xs mt-0.5 font-normal">
                            {agent.role}
                          </div>
                        </td>

                        <td className="py-3.5 px-3 font-mono text-[11px] text-zinc-300">
                          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            {agent.model}
                          </span>
                        </td>

                        <td className="py-3.5 px-3 text-right font-mono font-medium">
                          <span
                            className={
                              agent.accuracy >= 90
                                ? 'text-emerald-400 font-semibold'
                                : agent.accuracy >= 80
                                ? 'text-zinc-200'
                                : 'text-amber-400 font-semibold'
                            }
                          >
                            {agent.accuracy}%
                          </span>
                        </td>

                        <td className="py-3.5 px-3 text-right font-mono font-medium">
                          <span
                            className={
                              agent.latency >= 3.0 ? 'text-amber-400 font-semibold' : 'text-zinc-200'
                            }
                          >
                            {agent.latency}s
                          </span>
                        </td>

                        <td className="py-3.5 px-3 text-right font-mono text-zinc-200">
                          ${agent.cost.toFixed(3)}
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium font-mono border ${
                              isHealthy
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                            }`}
                          >
                            {isHealthy ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <AlertTriangle className="w-3 h-3 text-amber-400" />
                            )}
                            {agent.status}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-right font-mono text-[11px] text-zinc-500 group-hover:text-blue-400 transition-colors">
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
        <section id="architecture" className="space-y-5">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                Section 3 • Implementation Architecture
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                How Implementation Happens: Multi-Agent Travel Graph
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Visual pipeline from user intent to validated travel booking
            </p>
          </div>

          <p className="text-sm text-zinc-300 max-w-3xl leading-relaxed">
            Rather than relying on a single monolithic LLM prompt, the engine implements a staged Directed Acyclic Graph (DAG). Each specialized agent is assigned a strict role, scoped tool permissions, and structured JSON output schemas validated by a deterministic quality gate.
          </p>

          {/* Visual Step Workflow (DAG) */}
          <div className="bg-[#121214] border border-white/10 rounded-xl p-4 sm:p-5 shadow-xl overflow-x-auto">
            <div className="flex items-center min-w-[760px] justify-between">
              {EXECUTION_TIMELINE_NODES.map((node, index) => {
                const isSelected = node.id === activeNode.id;
                const isWarning = node.status === 'warning';
                const isLast = index === EXECUTION_TIMELINE_NODES.length - 1;

                return (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`flex-1 min-w-[110px] max-w-[140px] text-left p-3 rounded-lg border transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-600/15 text-white shadow-[0_0_15px_rgba(37,99,235,0.25)]'
                          : isWarning
                          ? 'border-amber-500/30 bg-amber-500/5 text-zinc-200 hover:border-amber-400/50'
                          : 'border-white/10 bg-[#16161a] hover:bg-white/5 text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                        <span className={isSelected ? 'text-blue-300' : 'text-zinc-500'}>
                          0{node.stepNumber}
                        </span>
                        {node.status === 'success' ? (
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${
                              isSelected ? 'text-blue-400' : 'text-emerald-400'
                            }`}
                          />
                        ) : (
                          <AlertTriangle
                            className={`w-3.5 h-3.5 ${
                              isSelected ? 'text-amber-300' : 'text-amber-400'
                            }`}
                          />
                        )}
                      </div>
                      <div className="font-semibold text-xs truncate text-white">{node.name}</div>
                      <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono">
                        <span className={isSelected ? 'text-blue-200' : 'text-zinc-400'}>
                          {node.duration}
                        </span>
                        <span className="text-zinc-500">{node.tokens} tok</span>
                      </div>
                    </button>

                    {!isLast && (
                      <div className="px-1 text-zinc-600 flex items-center justify-center shrink-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Active Node Live Inspector */}
          <div className="bg-[#121214] border border-white/10 rounded-xl p-5 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/5 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-white">
                  Step {activeNode.stepNumber}: {activeNode.name} Inspector
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">
                  Agent: {activeNode.agentId}
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-3">
                <span>Duration: <strong className="text-white">{activeNode.duration}</strong> ({activeNode.durationMs}ms)</span>
                <span>•</span>
                <span>Tokens: <strong className="text-white">{activeNode.tokens}</strong></span>
                <span>•</span>
                <span>Cost: <strong className="text-white">{activeNode.cost}</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <span className="font-mono text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">
                  Connected APIs & Tools ({activeNode.toolsCalled.length}):
                </span>
                <div className="space-y-1.5">
                  {activeNode.toolsCalled.map((tool, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-[#16161a] border border-white/5 flex items-center justify-between font-mono text-[11px]"
                    >
                      <div>
                        <div className="font-semibold text-zinc-200">{tool.name}</div>
                        <div className="text-[10px] text-zinc-500 truncate max-w-[220px]">
                          {tool.endpoint}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-zinc-300">{tool.latencyMs}ms</span>
                        <div className="text-[10px] text-emerald-400">HTTP {tool.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">
                  Deterministic Guardrail Assertion:
                </span>
                <div
                  className={`p-3.5 rounded-lg border text-xs ${
                    activeNode.validationCheck.passed
                      ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300'
                      : 'bg-amber-500/5 border-amber-500/20 text-amber-300'
                  }`}
                >
                  <div className="font-mono font-semibold text-[11px] flex items-center justify-between mb-1.5">
                    <span>{activeNode.validationCheck.name}</span>
                    <span>Score: {Math.round(activeNode.validationCheck.score * 100)}%</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-400">
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
        <section id="guardrails" className="space-y-5">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                Section 4 • Test Harness & Assertions
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                Automated Test Scenarios & Edge-Case Guardrails
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-flex rounded-lg border border-white/10 bg-[#16161a] p-1 text-xs">
                <button
                  onClick={() => setFilterTestStatus('all')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    filterTestStatus === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  All ({EVALUATION_TEST_CASES.length})
                </button>
                <button
                  onClick={() => setFilterTestStatus('failed')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    filterTestStatus === 'failed'
                      ? 'bg-rose-600 text-white'
                      : 'text-rose-400 hover:text-rose-300'
                  }`}
                >
                  Failed Only (2)
                </button>
                <button
                  onClick={() => setFilterTestStatus('passed')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    filterTestStatus === 'passed'
                      ? 'bg-emerald-600 text-white'
                      : 'text-emerald-400 hover:text-emerald-300'
                  }`}
                >
                  Passed Only (6)
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            {filteredTests.map((tc) => {
              const isExpanded = expandedTestId === tc.id;
              const isPassed = tc.status === 'passed';

              return (
                <div
                  key={tc.id}
                  className={`bg-[#121214] border rounded-xl overflow-hidden shadow-lg transition-all ${
                    !isPassed ? 'border-rose-500/30' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div
                    onClick={() => setExpandedTestId(isExpanded ? null : tc.id)}
                    className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      {isPassed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 sm:mt-0" />
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-white">{tc.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-zinc-400 border border-white/10">
                            {tc.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                          &ldquo;{tc.prompt}&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono shrink-0 pl-7 sm:pl-0">
                      <span
                        className={`font-semibold ${
                          isPassed ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        Score: {tc.accuracyScore}%
                      </span>
                      <span className="text-zinc-500">{tc.executionTime}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-white/5 p-4 bg-[#16161a] text-xs space-y-3">
                      <div
                        className={`p-3.5 rounded-lg border ${
                          isPassed
                            ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300'
                            : 'bg-rose-500/5 border-rose-500/20 text-rose-300'
                        }`}
                      >
                        <div className="font-semibold font-mono text-[11px] mb-1.5">
                          {isPassed ? '✓ Verification Passed:' : '✗ Failure Diagnosis:'}
                          {tc.failedAgent && (
                            <span className="ml-2 font-mono text-[10px] px-1.5 py-0.2 bg-rose-500/20 rounded border border-rose-500/30 text-rose-300">
                              Attributed: {tc.failedAgent}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] leading-relaxed text-zinc-400 font-sans">
                          {tc.explanation}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-mono">
                        <div className="bg-[#121214] p-3 rounded-lg border border-white/5">
                          <span className="text-zinc-500 block text-[10px] uppercase mb-1">
                            Expected Behavior:
                          </span>
                          <span className="text-zinc-200">{tc.expectedBehavior}</span>
                        </div>
                        <div className="bg-[#121214] p-3 rounded-lg border border-white/5">
                          <span className="text-zinc-500 block text-[10px] uppercase mb-1">
                            Actual Engine Output:
                          </span>
                          <span className={isPassed ? 'text-zinc-200' : 'text-rose-400'}>
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
        <section id="improvements" className="space-y-5">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                Section 5 • The Engineering Roadmap
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                How Improvements Happen: From Telemetry to Production
              </h2>
            </div>
            <button
              onClick={() => setIsOptimized(!isOptimized)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium border shadow-lg transition-all ${
                isOptimized
                  ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'bg-white/5 text-zinc-200 border-white/10 hover:bg-white/10'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              <span>
                {isOptimized ? 'Revert to Raw Telemetry' : 'Simulate Projected 40% Impact'}
              </span>
            </button>
          </div>

          <p className="text-sm text-zinc-300 max-w-3xl leading-relaxed">
            Evaluation is only as valuable as the engineering fixes it unlocks. Below are four targeted improvements synthesized directly from the simulated metrics to solve Hotel latency, Itinerary spatial errors, token waste, and supplier dropouts.
          </p>

          <div className="space-y-3.5">
            {ENGINEERING_RECOMMENDATIONS.slice(0, 4).map((rec) => {
              const isExpanded = expandedRecId === rec.id;

              return (
                <div
                  key={rec.id}
                  className={`bg-[#121214] border rounded-xl overflow-hidden shadow-xl transition-all ${
                    isExpanded
                      ? 'border-blue-500/40 ring-1 ring-blue-500/20'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div
                    onClick={() => setExpandedRecId(isExpanded ? null : rec.id)}
                    className="p-4 sm:p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <span
                        className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded border ${
                          rec.priority === 'P0'
                            ? 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                            : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                        }`}
                      >
                        {rec.priority}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-semibold text-white">{rec.title}</h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                            Target: {rec.targetAgent}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 line-clamp-1 mt-1 font-normal">
                          {rec.observedIssue}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 text-xs font-mono">
                      <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                        {rec.metricsSimulated.delta}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-5 bg-[#16161a] border-t border-white/5 text-xs space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        <div className="bg-[#121214] p-3.5 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono font-semibold uppercase text-zinc-500 block mb-1">
                            Observed Telemetry Issue:
                          </span>
                          <p className="text-zinc-300 text-[11px] leading-relaxed">
                            {rec.observedIssue}
                          </p>
                        </div>
                        <div className="bg-[#121214] p-3.5 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono font-semibold uppercase text-zinc-500 block mb-1">
                            Root Cause Diagnosis:
                          </span>
                          <p className="text-zinc-300 text-[11px] leading-relaxed">
                            {rec.potentialCause}
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#121214] p-3.5 rounded-lg border border-white/5">
                        <span className="text-[10px] font-mono font-semibold uppercase text-blue-400 block mb-1">
                          Suggested Engineering Implementation:
                        </span>
                        <p className="text-zinc-200 text-xs leading-relaxed font-normal">
                          {rec.suggestedImprovement}
                        </p>
                      </div>

                      <div className="bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-lg">
                        <div className="flex items-center justify-between font-mono text-[11px] text-emerald-300 font-semibold mb-1">
                          <span>Expected Impact (Estimated):</span>
                          <span>{rec.metricsSimulated.beforeMetric} → {rec.metricsSimulated.afterMetric}</span>
                        </div>
                        <p className="text-emerald-200 text-xs leading-relaxed font-sans">
                          {rec.expectedImpact}
                        </p>
                      </div>

                      {rec.codeSnippet && (
                        <div className="bg-[#0e0e12] text-zinc-300 p-4 rounded-lg font-mono text-[11px] overflow-x-auto border border-white/10 shadow-inner">
                          <div className="text-[10px] text-zinc-500 pb-1.5 border-b border-white/5 mb-2 flex items-center justify-between">
                            <span className="text-zinc-300">{rec.codeSnippet.filename}</span>
                            <span>UNIFIED DIFF</span>
                          </div>
                          <pre className="whitespace-pre leading-relaxed">{rec.codeSnippet.diff}</pre>
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

      {/* Sleek Dark Footer */}
      <footer className="border-t border-white/10 bg-[#0e0e10] py-10 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="space-y-1">
            <div className="font-semibold text-zinc-200 flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400" />
              Travel AI Engine
            </div>
            <p className="text-[11px] text-zinc-500">
              Multi-Agent Observability, Latency Profiling, and Constraint Validation Platform.
            </p>
          </div>
          <div className="text-[11px] font-mono text-zinc-400 sm:text-right">
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
