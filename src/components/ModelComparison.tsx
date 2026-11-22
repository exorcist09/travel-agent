'use client';

import React, { useState } from 'react';
import { ModelConfiguration } from '@/types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { Cpu, Check, AlertCircle, Info, Zap } from 'lucide-react';

interface ModelComparisonProps {
  configurations: ModelConfiguration[];
}

export const ModelComparison: React.FC<ModelComparisonProps> = ({ configurations }) => {
  const [activeMetric, setActiveMetric] = useState<'all' | 'accuracy' | 'latency' | 'cost'>('all');
  const [selectedConfigId, setSelectedConfigId] = useState<string>('config-b');

  const chartData = configurations.map((cfg) => ({
    name: cfg.name.replace('Airial ', ''),
    accuracy: cfg.accuracy,
    latency: cfg.latency,
    cost: cfg.costPer1kTrips,
    costPerTrip: cfg.costPerTrip * 100, // cents
  }));

  const activeConfig = configurations.find((c) => c.id === selectedConfigId) || configurations[0];

  return (
    <section className="space-y-3">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            E. Model Architecture & Orchestration Comparison
          </h2>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
            3 BENCHMARK ARCHITECTURES
          </span>
        </div>
        <div className="text-[11px] text-slate-400 font-mono italic">
          Illustrative benchmark results, not actual Airial model performance.
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm space-y-4">
        {/* Metric Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="text-xs text-slate-600 font-medium">
            Comparative Evaluation (Normalized per 1,000 itineraries):
          </div>
          <div className="inline-flex rounded-md border border-slate-200 bg-slate-50 p-0.5 text-xs">
            <button
              onClick={() => setActiveMetric('all')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeMetric === 'all'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Metrics
            </button>
            <button
              onClick={() => setActiveMetric('accuracy')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeMetric === 'accuracy'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Accuracy (%)
            </button>
            <button
              onClick={() => setActiveMetric('latency')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeMetric === 'latency'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Latency (s)
            </button>
            <button
              onClick={() => setActiveMetric('cost')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeMetric === 'cost'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cost ($/1k Trips)
            </button>
          </div>
        </div>

        {/* Recharts Comparison Chart */}
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 15, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: '#475569', fontFamily: 'monospace' }}
                axisLine={{ stroke: '#cbd5e1' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'monospace' }}
                axisLine={{ stroke: '#cbd5e1' }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '6px',
                  color: '#f8fafc',
                  fontSize: '11px',
                  fontFamily: 'monospace',
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: '11px', paddingTop: '10px', fontFamily: 'monospace' }}
              />

              {(activeMetric === 'all' || activeMetric === 'accuracy') && (
                <Bar
                  dataKey="accuracy"
                  name="Accuracy (%)"
                  fill="#0284c7"
                  radius={[4, 4, 0, 0]}
                  barSize={activeMetric === 'all' ? 22 : 44}
                />
              )}
              {(activeMetric === 'all' || activeMetric === 'latency') && (
                <Bar
                  dataKey="latency"
                  name="Avg Latency (s)"
                  fill="#f59e0b"
                  radius={[4, 4, 0, 0]}
                  barSize={activeMetric === 'all' ? 22 : 44}
                />
              )}
              {(activeMetric === 'all' || activeMetric === 'cost') && (
                <Bar
                  dataKey="cost"
                  name="Cost ($ / 1k trips)"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                  barSize={activeMetric === 'all' ? 22 : 44}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Interactive Configuration Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {configurations.map((cfg) => {
            const isSelected = cfg.id === selectedConfigId;

            return (
              <div
                key={cfg.id}
                onClick={() => setSelectedConfigId(cfg.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-slate-900 bg-slate-50/70 shadow-sm ring-1 ring-slate-900'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-slate-900">{cfg.name}</span>
                  {cfg.id === 'config-b' && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="text-[11px] text-slate-500 line-clamp-1 mb-2 font-mono">
                  {cfg.primaryModel}
                </div>

                <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-100 font-mono text-[11px]">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Accuracy</span>
                    <span className="font-semibold text-slate-900">{cfg.accuracy}%</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Latency</span>
                    <span className="font-semibold text-slate-900">{cfg.latency}s</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Per 1k</span>
                    <span className="font-semibold text-slate-900">${cfg.costPer1kTrips}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Config Deep Dive Card */}
        {activeConfig && (
          <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 text-xs space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-slate-700" />
                <span className="font-semibold text-slate-900 text-xs">
                  {activeConfig.name} — Architecture Analysis
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-500">
                Routing: {activeConfig.routingStrategy}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {/* Pros */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-semibold text-emerald-800 uppercase flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" />
                  Engineering Advantages:
                </span>
                <ul className="space-y-1 text-slate-600 text-[11px]">
                  {activeConfig.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-semibold text-amber-800 uppercase flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-amber-600" />
                  Trade-offs & Constraints:
                </span>
                <ul className="space-y-1 text-slate-600 text-[11px]">
                  {activeConfig.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
