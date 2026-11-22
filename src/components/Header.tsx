'use client';

import React, { useState } from 'react';
import { Play, Download, CheckCircle2, RefreshCw, Terminal, Layers, Activity } from 'lucide-react';
import { EvaluationRun } from '@/types';

interface HeaderProps {
  runs: EvaluationRun[];
  selectedRun: EvaluationRun;
  onSelectRun: (run: EvaluationRun) => void;
  onSimulateRun: () => void;
  isSimulating: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  runs,
  selectedRun,
  onSelectRun,
  onSimulateRun,
  isSimulating,
}) => {
  const [showExportToast, setShowExportToast] = useState(false);

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(selectedRun, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `airial-eval-${selectedRun.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setShowExportToast(true);
    setTimeout(() => setShowExportToast(false), 3000);
  };

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-30">
      {/* Top Advisory Banner */}
      <div className="bg-slate-900 text-slate-100 px-4 py-2 text-xs flex flex-wrap items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[11px] font-medium border border-indigo-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Independent Concept
          </span>
          <span className="text-slate-300">
            Designed by <strong className="text-white font-medium">Adarsh Verma</strong> to demonstrate multi-agent AI evaluation and observability for Airial.
          </span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
          <span className="hidden sm:inline">Frontend Prototype • Simulated Demo Data</span>
          <span className="h-3 w-px bg-slate-700 hidden sm:inline"></span>
          <span className="text-slate-300 font-mono">Not affiliated with Airial</span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Brand & Meta */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold font-mono text-base shadow-sm">
            A
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-slate-900 tracking-tight">Airial AI Agent Evaluation</h1>
              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                v2.4-eval
              </span>
            </div>
            <p className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
              <span>Multi-Agent Travel Engine Observability</span>
              <span>•</span>
              <span className="font-mono text-slate-600">Env: Staging (us-west-2)</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Run Selector */}
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-md px-2 py-1 text-xs">
            <Layers className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
            <select
              value={selectedRun.id}
              onChange={(e) => {
                const target = runs.find((r) => r.id === e.target.value);
                if (target) onSelectRun(target);
              }}
              className="bg-transparent text-slate-700 font-medium focus:outline-none cursor-pointer text-xs pr-1"
            >
              {runs.map((run) => (
                <option key={run.id} value={run.id}>
                  {run.name}
                </option>
              ))}
            </select>
          </div>

          {/* Trigger Eval Button */}
          <button
            onClick={onSimulateRun}
            disabled={isSimulating}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors border shadow-sm ${
              isSimulating
                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
            }`}
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Evaluating (250 trips)...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Trigger Eval Run</span>
              </>
            )}
          </button>

          {/* Export JSON Button */}
          <button
            onClick={handleExport}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors shadow-sm"
            title="Download Run Evaluation Artifacts"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Export JSON</span>
          </button>
        </div>
      </div>

      {/* Export Toast Notification */}
      {showExportToast && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-md shadow-lg text-xs flex items-center gap-2 border border-slate-700">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Evaluation artifacts exported to JSON successfully.</span>
        </div>
      )}
    </header>
  );
};
