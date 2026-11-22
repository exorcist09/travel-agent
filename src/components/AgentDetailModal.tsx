'use client';

import React from 'react';
import { AgentPerformance } from '@/types';
import { X, Cpu, Clock, DollarSign, AlertTriangle, CheckCircle2, Zap, ArrowRight, Wrench } from 'lucide-react';

interface AgentDetailModalProps {
  agent: AgentPerformance | null;
  onClose: () => void;
  onJumpToRecommendation?: () => void;
}

export const AgentDetailModal: React.FC<AgentDetailModalProps> = ({
  agent,
  onClose,
  onJumpToRecommendation,
}) => {
  if (!agent) return null;

  const isHealthy = agent.status === 'Healthy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-[1px] p-4">
      <div
        className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-start justify-between bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              <h3 className="text-base font-semibold text-slate-900">{agent.name}</h3>
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium border ${
                  isHealthy
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}
              >
                {isHealthy ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                {agent.status}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 max-w-lg">{agent.role}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-5 space-y-4 text-xs">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-2.5 rounded border border-slate-100 bg-slate-50">
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Accuracy</span>
              <span className="text-lg font-semibold font-mono text-slate-900">{agent.accuracy}%</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">250 trip evals</span>
            </div>
            <div className="p-2.5 rounded border border-slate-100 bg-slate-50">
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Avg Latency</span>
              <span className="text-lg font-semibold font-mono text-slate-900">{agent.latency}s</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">p95: {agent.p95Latency}s</span>
            </div>
            <div className="p-2.5 rounded border border-slate-100 bg-slate-50">
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Cost / Trip</span>
              <span className="text-lg font-semibold font-mono text-slate-900">${agent.cost.toFixed(3)}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">{(agent.promptTokens + agent.completionTokens).toLocaleString()} tokens</span>
            </div>
            <div className="p-2.5 rounded border border-slate-100 bg-slate-50">
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Failure Rate</span>
              <span className="text-lg font-semibold font-mono text-slate-900">{agent.failureRate}%</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Timeout / schema</span>
            </div>
          </div>

          {/* Model & Token Spec */}
          <div className="border border-slate-200 rounded-lg p-3 bg-white space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 pb-2 border-b border-slate-100">
              <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                <Cpu className="w-3.5 h-3.5 text-slate-500" />
                Model Inference Spec:
              </span>
              <span className="px-2 py-0.5 bg-slate-100 rounded border border-slate-200 text-slate-700">
                {agent.model}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-1 font-mono text-[11px]">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Prompt Context:</span>
                <span className="text-slate-800 font-medium">{agent.promptTokens.toLocaleString()} tokens avg</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Generated Output:</span>
                <span className="text-slate-800 font-medium">{agent.completionTokens.toLocaleString()} tokens avg</span>
              </div>
            </div>
          </div>

          {/* Connected APIs & Tools */}
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block">
              Integrated Tools & External APIs:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {agent.recentTools.map((tool, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-slate-700 font-mono text-[11px] border border-slate-200"
                >
                  <Wrench className="w-3 h-3 text-slate-400" />
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Diagnosis & Optimization Advisory */}
          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-1.5">
            <span className="text-[11px] font-mono font-semibold text-slate-800 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-indigo-600" />
              Observed Bottleneck & Engineering Opportunity:
            </span>
            <p className="text-slate-600 leading-relaxed">{agent.optimizationOpportunity}</p>
            {agent.commonFailureReason && (
              <p className="text-amber-800 text-[11px] font-mono pt-1 border-t border-slate-200/60">
                <strong>Failure Root Cause:</strong> {agent.commonFailureReason}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">Agent ID: {agent.id}</span>
          <div className="flex items-center gap-2">
            {onJumpToRecommendation && (
              <button
                onClick={() => {
                  onClose();
                  onJumpToRecommendation();
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <span>View Proposed Fix</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded text-xs font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
