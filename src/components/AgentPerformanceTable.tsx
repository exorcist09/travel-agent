'use client';

import React, { useState } from 'react';
import { AgentPerformance } from '@/types';
import { ArrowUpDown, AlertCircle, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';

interface AgentPerformanceTableProps {
  agents: AgentPerformance[];
  onSelectAgent: (agent: AgentPerformance) => void;
  selectedAgentId?: string;
}

export const AgentPerformanceTable: React.FC<AgentPerformanceTableProps> = ({
  agents,
  onSelectAgent,
  selectedAgentId,
}) => {
  const [sortField, setSortField] = useState<keyof AgentPerformance>('accuracy');
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const handleSort = (field: keyof AgentPerformance) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const sortedAgents = [...agents].sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];
    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortAsc ? valA - valB : valB - valA;
    }
    return 0;
  });

  return (
    <section className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            B. Agent Performance Matrix
          </h2>
          <span className="text-[10px] font-mono text-slate-400">
            (Click any row to inspect execution profile)
          </span>
        </div>
        <div className="text-xs text-slate-400 font-mono">
          5 Autonomous Travel Agents Active
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium font-mono text-[11px]">
                <th className="py-2.5 px-4 font-semibold text-slate-700">Agent</th>
                <th className="py-2.5 px-3">Primary Model</th>
                <th
                  className="py-2.5 px-3 text-right cursor-pointer hover:text-slate-800"
                  onClick={() => handleSort('accuracy')}
                >
                  <span className="inline-flex items-center gap-1">
                    Accuracy
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </span>
                </th>
                <th
                  className="py-2.5 px-3 text-right cursor-pointer hover:text-slate-800"
                  onClick={() => handleSort('latency')}
                >
                  <span className="inline-flex items-center gap-1">
                    Latency
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </span>
                </th>
                <th
                  className="py-2.5 px-3 text-right cursor-pointer hover:text-slate-800"
                  onClick={() => handleSort('cost')}
                >
                  <span className="inline-flex items-center gap-1">
                    Cost
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </span>
                </th>
                <th className="py-2.5 px-3 text-right">Failure Rate</th>
                <th className="py-2.5 px-4 text-center">Status</th>
                <th className="py-2.5 px-2 text-center sr-only">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {sortedAgents.map((agent) => {
                const isSelected = selectedAgentId === agent.id;
                const isHealthy = agent.status === 'Healthy';

                return (
                  <tr
                    key={agent.id}
                    onClick={() => onSelectAgent(agent)}
                    className={`cursor-pointer transition-colors group ${
                      isSelected
                        ? 'bg-indigo-50/70 border-l-2 border-indigo-600'
                        : 'hover:bg-slate-50/80'
                    }`}
                  >
                    <td className="py-3 px-4 font-medium text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900"></span>
                        <div>
                          <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                            {agent.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 max-w-[260px]">
                            {agent.role}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3 font-mono text-[11px] text-slate-600">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                        <Cpu className="w-3 h-3 text-slate-400" />
                        {agent.model}
                      </span>
                    </td>

                    <td className="py-3 px-3 text-right font-mono font-medium">
                      <div className="flex items-center justify-end gap-1.5">
                        <span
                          className={`${
                            agent.accuracy >= 90
                              ? 'text-emerald-700'
                              : agent.accuracy >= 80
                              ? 'text-slate-800'
                              : 'text-amber-700 font-semibold'
                          }`}
                        >
                          {agent.accuracy}%
                        </span>
                        <div className="w-12 bg-slate-100 rounded-full h-1.5 overflow-hidden hidden sm:block">
                          <div
                            className={`h-full ${
                              agent.accuracy >= 90
                                ? 'bg-emerald-500'
                                : agent.accuracy >= 80
                                ? 'bg-slate-600'
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${agent.accuracy}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-right font-mono text-slate-800 font-medium">
                      <span
                        className={`${
                          agent.latency >= 3.0 ? 'text-amber-700 font-semibold' : 'text-slate-800'
                        }`}
                      >
                        {agent.latency}s
                      </span>
                    </td>

                    <td className="py-3 px-3 text-right font-mono text-slate-800 font-medium">
                      ${agent.cost.toFixed(3)}
                    </td>

                    <td className="py-3 px-3 text-right font-mono text-slate-600">
                      {agent.failureRate}%
                    </td>

                    <td className="py-3 px-4 text-center">
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
                          <AlertCircle className="w-3 h-3 text-amber-600" />
                        )}
                        {agent.status}
                      </span>
                    </td>

                    <td className="py-3 px-2 text-right text-slate-400 group-hover:text-slate-900">
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
