'use client';

import React from 'react';
import { Terminal, Shield, Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1">
            <div className="font-semibold text-slate-800">
              Airial AI Agent Evaluation & Observability Dashboard
            </div>
            <p className="text-slate-500 max-w-xl text-[11px] leading-relaxed">
              Demonstrating systems engineering for production multi-agent architectures: evaluation harnesses, latency profiling, deterministic guardrail validation, and token unit-economic optimization.
            </p>
          </div>

          <div className="flex flex-col sm:items-end text-slate-400 text-[11px] font-mono">
            <span>Stack: Next.js 14 • React • TypeScript • Tailwind CSS • Recharts</span>
            <span className="text-slate-600 mt-1 font-semibold">
              Independent concept prototype by Adarsh Verma. Not affiliated with Airial.
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 font-mono">
          <span>&copy; {new Date().getFullYear()} Adarsh Verma • Travel Agent AI Evaluation Concept</span>
          <span className="flex items-center gap-1 text-slate-500">
            Internal Developer Preview • Staging Sandbox Mode
          </span>
        </div>
      </div>
    </footer>
  );
};
