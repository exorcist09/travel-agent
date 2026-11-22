'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Target, HelpCircle, CheckCircle } from 'lucide-react';
import { MetricCardData } from '@/types';

interface OverviewMetricsProps {
  metrics: MetricCardData[];
  isOptimized?: boolean;
}

export const OverviewMetrics: React.FC<OverviewMetricsProps> = ({ metrics, isOptimized }) => {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">A. Overview Metrics</h2>
          <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
            SIMULATED DEMO DATA
          </span>
        </div>
        <div className="text-xs text-slate-400 font-mono hidden sm:block">
          Sample size: 250 automated trips • Window: Last 24h
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {metrics.map((metric) => {
          // Adjust display if user toggled simulated optimization
          let displayVal = metric.value;
          let displayChange = metric.change;
          if (isOptimized) {
            if (metric.id === 'accuracy') {
              displayVal = '93.2%';
              displayChange = '+5.8% (Projected)';
            } else if (metric.id === 'latency') {
              displayVal = '4.9s';
              displayChange = '-3.3s (Projected)';
            } else if (metric.id === 'cost') {
              displayVal = '$0.052';
              displayChange = '-$0.032 (Projected)';
            } else if (metric.id === 'failure') {
              displayVal = '1.2%';
              displayChange = '-3.6% (Projected)';
            }
          }

          const isPositiveTrend = metric.isPositive;

          return (
            <div
              key={metric.id}
              className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:border-slate-300 transition-colors relative group"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                <span className="font-medium text-slate-600">{metric.title}</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Simulated</span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-semibold tracking-tight text-slate-900 font-mono">
                  {displayVal}
                </span>
                <span
                  className={`inline-flex items-center text-xs font-medium font-mono px-1.5 py-0.5 rounded ${
                    isPositiveTrend
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : 'bg-rose-50 text-rose-700 border border-rose-100'
                  }`}
                >
                  {isPositiveTrend ? (
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-0.5" />
                  )}
                  {displayChange}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-mono text-slate-500">
                  <Target className="w-3 h-3 text-slate-400" />
                  {metric.benchmark}
                </span>
                <span className="text-slate-400 text-[10px] truncate max-w-[140px] text-right" title={metric.description}>
                  vs Run #141
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
