'use client';

import React, { useState } from 'react';
import { EvaluationTestCase, TestCaseStatus } from '@/types';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  AlertOctagon,
} from 'lucide-react';

interface EvaluationResultsProps {
  testCases: EvaluationTestCase[];
  onInspectAgent?: (agentId: string) => void;
}

export const EvaluationResults: React.FC<EvaluationResultsProps> = ({
  testCases,
  onInspectAgent,
}) => {
  const [filterStatus, setFilterStatus] = useState<'all' | 'passed' | 'failed'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('tc-002'); // Expand failed case by default for deep dive

  const categories = ['all', 'Budget', 'Geographic', 'Duration', 'Relevance', 'Missing Info', 'Constraints'];

  const filteredCases = testCases.filter((tc) => {
    if (filterStatus === 'passed' && tc.status !== 'passed') return false;
    if (filterStatus === 'failed' && tc.status !== 'failed') return false;
    if (selectedCategory !== 'all' && tc.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        tc.name.toLowerCase().includes(q) ||
        tc.prompt.toLowerCase().includes(q) ||
        tc.explanation.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalPassed = testCases.filter((tc) => tc.status === 'passed').length;
  const totalFailed = testCases.filter((tc) => tc.status === 'failed').length;

  return (
    <section className="space-y-3">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            D. Evaluation Scenarios & Guardrail Assertions
          </h2>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
            {totalPassed} Passed • {totalFailed} Failed
          </span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Status Segmented Buttons */}
          <div className="inline-flex rounded-md border border-slate-200 bg-white p-0.5 text-xs shadow-sm">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                filterStatus === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({testCases.length})
            </button>
            <button
              onClick={() => setFilterStatus('failed')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                filterStatus === 'failed'
                  ? 'bg-rose-600 text-white'
                  : 'text-rose-700 hover:bg-rose-50'
              }`}
            >
              Failed ({totalFailed})
            </button>
            <button
              onClick={() => setFilterStatus('passed')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                filterStatus === 'passed'
                  ? 'bg-emerald-600 text-white'
                  : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              Passed ({totalPassed})
            </button>
          </div>

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-xs bg-white border border-slate-200 rounded-md px-2 py-1 text-slate-700 focus:outline-none shadow-sm cursor-pointer"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                Category: {c === 'all' ? 'All' : c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter scenarios by prompt text, destination, or assertion keyword..."
          className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900 shadow-sm placeholder:text-slate-400"
        />
      </div>

      {/* Test Scenarios List */}
      <div className="space-y-2">
        {filteredCases.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-lg p-8 text-center text-xs text-slate-500">
            No test cases match your filter criteria.
          </div>
        ) : (
          filteredCases.map((tc) => {
            const isExpanded = expandedId === tc.id;
            const isPassed = tc.status === 'passed';

            return (
              <div
                key={tc.id}
                className={`bg-white border rounded-lg overflow-hidden shadow-sm transition-all ${
                  !isPassed
                    ? 'border-rose-200 hover:border-rose-300'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header row */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : tc.id)}
                  className={`p-3 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ${
                    !isPassed ? 'bg-rose-50/20' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-2.5">
                    {isPassed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5 sm:mt-0" />
                    )}

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-slate-900">{tc.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                          {tc.category}
                        </span>
                        {!isPassed && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-100 text-rose-800 font-semibold border border-rose-200">
                            SEVERITY: {tc.severity.toUpperCase()}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        <span className="font-mono text-slate-400">Prompt:</span> &ldquo;{tc.prompt}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Right metrics & toggle */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 text-[11px] font-mono shrink-0 pl-6 sm:pl-0">
                    <span
                      className={`font-semibold ${
                        isPassed ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      Score: {tc.accuracyScore}%
                    </span>
                    <span className="text-slate-400 hidden md:inline">{tc.executionTime}</span>
                    <span className="text-slate-400 hidden md:inline">{tc.cost}</span>
                    <button className="text-slate-400 hover:text-slate-700">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Pane */}
                {isExpanded && (
                  <div className="border-t border-slate-100 p-4 bg-slate-50/70 text-xs space-y-3">
                    {/* Prompt Box */}
                    <div>
                      <span className="font-mono text-[10px] uppercase font-semibold text-slate-500 block mb-1">
                        Full Test Scenario Prompt:
                      </span>
                      <p className="bg-white p-2.5 rounded border border-slate-200 font-mono text-[11px] text-slate-800">
                        {tc.prompt}
                      </p>
                    </div>

                    {/* Explanation */}
                    <div
                      className={`p-3 rounded border ${
                        isPassed
                          ? 'bg-emerald-50/40 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50/50 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="font-semibold font-mono text-[11px] mb-1 flex items-center gap-1.5">
                        {isPassed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <AlertOctagon className="w-3.5 h-3.5 text-rose-600" />
                        )}
                        <span>{isPassed ? 'Evaluation Passed:' : 'Evaluation Failure Root Cause:'}</span>
                        {tc.failedAgent && (
                          <span className="font-mono text-[10px] px-1.5 py-0.2 bg-white rounded border border-rose-300 text-rose-800">
                            Failed Agent: {tc.failedAgent}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-700">{tc.explanation}</p>
                    </div>

                    {/* Expected vs Actual Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-mono">
                      <div className="bg-white p-2.5 rounded border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase mb-0.5">
                          Expected Guardrail Spec:
                        </span>
                        <p className="text-slate-800">{tc.expectedBehavior}</p>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase mb-0.5">
                          Actual Agent Engine Behavior:
                        </span>
                        <p className={isPassed ? 'text-slate-800' : 'text-rose-700 font-medium'}>
                          {tc.actualBehavior}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
