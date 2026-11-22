'use client';

import React, { useState } from 'react';
import { TimelineNode } from '@/types';
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Layers,
  Code2,
  Terminal,
  Activity,
  Zap,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ExecutionTimelineProps {
  nodes: TimelineNode[];
  selectedNodeId: string;
  onSelectNode: (node: TimelineNode) => void;
}

export const ExecutionTimeline: React.FC<ExecutionTimelineProps> = ({
  nodes,
  selectedNodeId,
  onSelectNode,
}) => {
  const [showJsonRaw, setShowJsonRaw] = useState(false);

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  return (
    <section className="space-y-3">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            C. Multi-Agent Execution Timeline & DAG Trace
          </h2>
          <span className="text-[10px] font-mono text-slate-400">
            (Select any stage to inspect trace)
          </span>
        </div>
        <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
          <span>End-to-End Latency: <strong>8.2s</strong></span>
          <span>•</span>
          <span>Tokens: <strong>14,150</strong></span>
        </div>
      </div>

      {/* Visual Workflow Steps (DAG) */}
      <div className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 shadow-sm overflow-x-auto">
        <div className="flex items-center min-w-[760px] justify-between relative">
          {nodes.map((node, index) => {
            const isSelected = node.id === activeNode.id;
            const isWarning = node.status === 'warning';
            const isLast = index === nodes.length - 1;

            return (
              <React.Fragment key={node.id}>
                {/* Node Box */}
                <button
                  onClick={() => onSelectNode(node)}
                  className={`flex-1 min-w-[105px] max-w-[135px] text-left p-2.5 rounded-md border transition-all relative ${
                    isSelected
                      ? 'border-slate-900 bg-slate-900 text-white shadow-sm ring-1 ring-slate-900'
                      : isWarning
                      ? 'border-amber-200 bg-amber-50/40 hover:border-amber-300 text-slate-800'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-mono font-medium ${
                        isSelected ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      Step 0{node.stepNumber}
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

                  <div className="font-medium text-xs truncate" title={node.name}>
                    {node.name}
                  </div>

                  <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono">
                    <span className={isSelected ? 'text-slate-300' : 'text-slate-600'}>
                      {node.duration}
                    </span>
                    <span className={isSelected ? 'text-slate-400' : 'text-slate-400'}>
                      {node.tokens} tok
                    </span>
                  </div>
                </button>

                {/* Connecting Arrow */}
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

      {/* Selected Node Inspector Pane */}
      {activeNode && (
        <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm space-y-4">
          {/* Node Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-800"></span>
              <h3 className="text-sm font-semibold text-slate-900">
                Step {activeNode.stepNumber}: {activeNode.name}
              </h3>
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                  activeNode.status === 'success'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}
              >
                {activeNode.status === 'success' ? 'Completed (Within SLA)' : 'Warning: Latency / Geo Deviation'}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Duration: <strong className="text-slate-800">{activeNode.duration}</strong> ({activeNode.durationMs}ms)
              </span>
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                Tokens: <strong className="text-slate-800">{activeNode.tokens}</strong>
              </span>
              <span className="hidden sm:inline">
                Cost: <strong className="text-slate-800">{activeNode.cost}</strong>
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100">
            <strong className="text-slate-900 font-medium">Summary:</strong> {activeNode.summary}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
            {/* Left: Tool API Calls */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] font-medium text-slate-500 uppercase flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-slate-400" />
                External API & Tool Invocations ({activeNode.toolsCalled.length}):
              </span>
              <div className="space-y-1.5">
                {activeNode.toolsCalled.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded border border-slate-100 bg-slate-50/70 font-mono text-[11px] flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <span>{tool.name}</span>
                        {tool.cached && (
                          <span className="px-1 py-0.2 text-[9px] bg-slate-200 text-slate-600 rounded">
                            CACHE HIT
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate max-w-[280px]">
                        {tool.endpoint}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-700 font-medium">{tool.latencyMs}ms</span>
                      <div className="text-[10px] text-emerald-600">HTTP {tool.status}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Validation Check Box */}
              <div
                className={`mt-3 p-2.5 rounded border text-xs ${
                  activeNode.validationCheck.passed
                    ? 'bg-emerald-50/50 border-emerald-200'
                    : 'bg-amber-50/60 border-amber-200'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] mb-1">
                  <span className="font-semibold text-slate-800">
                    {activeNode.validationCheck.name}
                  </span>
                  <span
                    className={`font-semibold ${
                      activeNode.validationCheck.passed ? 'text-emerald-700' : 'text-amber-700'
                    }`}
                  >
                    Score: {Math.round(activeNode.validationCheck.score * 100)}%
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {activeNode.validationCheck.detail}
                </p>
              </div>
            </div>

            {/* Right: Payload Inspection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-medium text-slate-500 uppercase flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-slate-400" />
                  Synthesized Output Payload:
                </span>
                <button
                  onClick={() => setShowJsonRaw(!showJsonRaw)}
                  className="text-[11px] font-mono text-slate-500 hover:text-slate-800 inline-flex items-center gap-0.5"
                >
                  {showJsonRaw ? (
                    <>
                      <span>Compact</span>
                      <ChevronUp className="w-3 h-3" />
                    </>
                  ) : (
                    <>
                      <span>Raw JSON</span>
                      <ChevronDown className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-md p-3 font-mono text-[11px] max-h-56 overflow-y-auto border border-slate-800">
                <pre className="whitespace-pre-wrap leading-relaxed">
                  {showJsonRaw
                    ? JSON.stringify(activeNode.outputPayload, null, 2)
                    : JSON.stringify(
                        {
                          status: "ok",
                          node_id: activeNode.id,
                          agent: activeNode.agentId,
                          latency_ms: activeNode.durationMs,
                          data: activeNode.outputPayload,
                        },
                        null,
                        2
                      )}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
