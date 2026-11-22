'use client';

import React from 'react';
import { AgentPerformance } from '@/types';
import { X, Cpu, AlertTriangle, CheckCircle2, Zap, ArrowRight, Wrench } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div
        className="bg-[#121214] border border-white/10 rounded-xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-start justify-between bg-[#16161a]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <h3 className="text-base font-semibold text-white tracking-tight">{agent.name}</h3>
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium border ${
                  isHealthy
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                }`}
              >
                {isHealthy ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                {agent.status}
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 max-w-lg leading-relaxed">{agent.role}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-5 space-y-4 text-xs">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-lg border border-white/5 bg-[#18181c]">
              <span className="text-zinc-500 text-[10px] uppercase font-mono block">Accuracy</span>
              <span className="text-lg font-semibold font-mono text-white">{agent.accuracy}%</span>
              <span className="text-[10px] text-zinc-500 block mt-0.5">250 trip evals</span>
            </div>
            <div className="p-3 rounded-lg border border-white/5 bg-[#18181c]">
              <span className="text-zinc-500 text-[10px] uppercase font-mono block">Avg Latency</span>
              <span className="text-lg font-semibold font-mono text-white">{agent.latency}s</span>
              <span className="text-[10px] text-zinc-500 block mt-0.5">p95: {agent.p95Latency}s</span>
            </div>
            <div className="p-3 rounded-lg border border-white/5 bg-[#18181c]">
              <span className="text-zinc-500 text-[10px] uppercase font-mono block">Cost / Trip</span>
              <span className="text-lg font-semibold font-mono text-white">${agent.cost.toFixed(3)}</span>
              <span className="text-[10px] text-zinc-500 block mt-0.5 font-mono">
                {(agent.promptTokens + agent.completionTokens).toLocaleString()} tok
              </span>
            </div>
            <div className="p-3 rounded-lg border border-white/5 bg-[#18181c]">
              <span className="text-zinc-500 text-[10px] uppercase font-mono block">Failure Rate</span>
              <span className="text-lg font-semibold font-mono text-white">{agent.failureRate}%</span>
              <span className="text-[10px] text-zinc-500 block mt-0.5">Timeout / schema</span>
            </div>
          </div>

          {/* Model & Token Spec */}
          <div className="border border-white/10 rounded-lg p-3.5 bg-[#16161a] space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pb-2 border-b border-white/5">
              <span className="flex items-center gap-1.5 font-medium text-zinc-200">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                Model Inference Spec:
              </span>
              <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10 text-zinc-300">
                {agent.model}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-1 font-mono text-[11px]">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Prompt Context:</span>
                <span className="text-zinc-200">{agent.promptTokens.toLocaleString()} tokens avg</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Generated Output:</span>
                <span className="text-zinc-200">{agent.completionTokens.toLocaleString()} tokens avg</span>
              </div>
            </div>
          </div>

          {/* Connected APIs & Tools */}
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block">
              Integrated Tools & External APIs:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {agent.recentTools.map((tool, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1c1c22] text-zinc-300 font-mono text-[11px] border border-white/5"
                >
                  <Wrench className="w-3 h-3 text-zinc-500" />
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Diagnosis & Optimization Advisory */}
          <div className="border border-white/10 rounded-lg p-3.5 bg-[#16161a] space-y-1.5">
            <span className="text-[11px] font-mono font-semibold text-zinc-200 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              Observed Bottleneck & Engineering Opportunity:
            </span>
            <p className="text-zinc-400 leading-relaxed text-xs">{agent.optimizationOpportunity}</p>
            {agent.commonFailureReason && (
              <p className="text-amber-400 text-[11px] font-mono pt-2 border-t border-white/5 mt-2">
                <strong>Failure Root Cause:</strong> {agent.commonFailureReason}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#16161a] flex items-center justify-between">
          <span className="text-[11px] text-zinc-500 font-mono">ID: {agent.id}</span>
          <div className="flex items-center gap-2">
            {onJumpToRecommendation && (
              <button
                onClick={() => {
                  onClose();
                  onJumpToRecommendation();
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span>View Proposed Fix</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
