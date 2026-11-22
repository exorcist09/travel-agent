'use client';

import React, { useState } from 'react';
import { EngineeringRecommendation } from '@/types';
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Zap,
  TrendingDown,
  TrendingUp,
  Code2,
  CheckCircle2,
  Wrench,
  Sliders,
} from 'lucide-react';

interface RecommendationsProps {
  recommendations: EngineeringRecommendation[];
  isOptimized: boolean;
  onToggleOptimization: () => void;
}

export const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
  isOptimized,
  onToggleOptimization,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>('rec-01'); // First one expanded by default
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Latency', 'Accuracy', 'Cost', 'Reliability', 'Architecture'];

  const filtered = recommendations.filter((r) => {
    if (selectedCategory !== 'all' && r.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section className="space-y-3" id="recommendations-section">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            F. Actionable Engineering Recommendations
          </h2>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
            CORE CONTRIBUTION
          </span>
        </div>

        {/* Interactive Optimization Simulator Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleOptimization}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border shadow-sm transition-all ${
              isOptimized
                ? 'bg-emerald-600 text-white border-emerald-600 ring-2 ring-emerald-500/30'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>
              {isOptimized ? 'Revert to Baseline Metrics' : 'Simulate Projected Optimization Impact'}
            </span>
          </button>
        </div>
      </div>

      {/* Context Explainer Banner */}
      <div className="bg-slate-900 text-slate-100 p-4 rounded-lg border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <div className="font-semibold text-white flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            AI Systems Engineering & Production Optimization Plan
          </div>
          <p className="text-slate-300 text-[11px] mt-0.5 max-w-2xl">
            Derived directly from simulated execution traces. Addressing Hotel latency, Itinerary Planner spatial hallucinations, supplier retries, and token routing will yield a projected <strong className="text-emerald-400 font-mono">40% latency reduction</strong> and <strong className="text-emerald-400 font-mono">35% cost savings</strong>.
          </p>
        </div>

        {/* Quick Category Filter */}
        <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2 py-1 rounded transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations Cards */}
      <div className="space-y-3">
        {filtered.map((rec, index) => {
          const isExpanded = expandedId === rec.id;

          return (
            <div
              key={rec.id}
              className={`bg-white border rounded-lg overflow-hidden shadow-sm transition-all ${
                isExpanded ? 'border-slate-400 ring-1 ring-slate-300' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Card Summary Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : rec.id)}
                className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-slate-50/70 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span
                    className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded border ${
                      rec.priority === 'P0'
                        ? 'bg-rose-50 text-rose-700 border-rose-200'
                        : rec.priority === 'P1'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {rec.priority}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-semibold text-slate-900">{rec.title}</h3>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        Agent: {rec.targetAgent}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-500">
                        Effort: {rec.implementationEffort}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {rec.observedIssue}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 text-xs">
                  <span className="font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {rec.metricsSimulated.delta}
                  </span>
                  <button className="text-slate-400 hover:text-slate-700 p-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Detailed Breakdown Pane */}
              {isExpanded && (
                <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs space-y-3.5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {/* Observed Issue */}
                    <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                      <span className="font-mono text-[10px] uppercase font-semibold text-slate-500 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-500" />
                        Observed Metric Issue:
                      </span>
                      <p className="text-slate-700 leading-relaxed text-[11px]">{rec.observedIssue}</p>
                    </div>

                    {/* Potential Cause */}
                    <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                      <span className="font-mono text-[10px] uppercase font-semibold text-slate-500 flex items-center gap-1">
                        <Wrench className="w-3 h-3 text-slate-400" />
                        Root Cause Diagnosis:
                      </span>
                      <p className="text-slate-700 leading-relaxed text-[11px]">{rec.potentialCause}</p>
                    </div>
                  </div>

                  {/* Suggested Improvement */}
                  <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                    <span className="font-mono text-[10px] uppercase font-semibold text-indigo-700 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-indigo-600" />
                      Suggested Engineering Implementation:
                    </span>
                    <p className="text-slate-800 leading-relaxed text-xs">{rec.suggestedImprovement}</p>
                  </div>

                  {/* Expected Impact (Clearly Marked as Estimate) */}
                  <div className="bg-emerald-50/70 border border-emerald-200 p-3 rounded space-y-1">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="font-semibold text-emerald-900 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Expected Engineering Impact (Estimated):
                      </span>
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                        {rec.metricsSimulated.beforeMetric} → {rec.metricsSimulated.afterMetric}
                      </span>
                    </div>
                    <p className="text-emerald-950 text-xs leading-relaxed font-sans">
                      {rec.expectedImpact}
                    </p>
                  </div>

                  {/* Code Diff Snippet */}
                  {rec.codeSnippet && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 px-1">
                        <span className="flex items-center gap-1 text-slate-700 font-semibold">
                          <Code2 className="w-3 h-3 text-slate-400" />
                          Proposed Architecture Patch: {rec.codeSnippet.filename}
                        </span>
                        <span>Unified Diff</span>
                      </div>
                      <div className="bg-slate-900 text-slate-200 p-3 rounded font-mono text-[11px] overflow-x-auto border border-slate-800 max-h-48 leading-relaxed">
                        <pre className="whitespace-pre">
                          {rec.codeSnippet.diff}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
