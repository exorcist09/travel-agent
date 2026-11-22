import React from 'react';

export default function AgentLensLandingPage() {
  const workflowNodes = [
    {
      name: 'User Input',
      type: 'Ingress',
      meta: [
        { label: 'Latency', value: '14ms' },
        { label: 'Status', value: 'Parsed' },
      ],
    },
    {
      name: 'Agent Orchestrator',
      type: 'Routing DAG',
      meta: [
        { label: 'Latency', value: '160ms' },
        { label: 'Tokens', value: '240 tok' },
      ],
    },
    {
      name: 'Research Agents',
      type: 'Sub-Agent Pool',
      meta: [
        { label: 'Latency', value: '2.8s' },
        { label: 'Accuracy', value: '91%' },
      ],
    },
    {
      name: 'External Tools',
      type: 'Suppliers & APIs',
      meta: [
        { label: 'Latency', value: '1.9s' },
        { label: 'Calls', value: '4 endpoints' },
      ],
    },
    {
      name: 'Result Validation',
      type: 'Guardrail Engine',
      meta: [
        { label: 'Latency', value: '120ms' },
        { label: 'Status', value: 'Passed' },
      ],
    },
    {
      name: 'Final Output',
      type: 'Delivery',
      meta: [
        { label: 'Total Time', value: '4.9s' },
        { label: 'Est. Cost', value: '$0.078' },
      ],
    },
  ];

  const agentData = [
    { name: 'Destination Research', accuracy: '96%', latency: '1.2s', cost: '$0.012' },
    { name: 'Flight Research', accuracy: '91%', latency: '2.8s', cost: '$0.025' },
    { name: 'Hotel Research', accuracy: '84%', latency: '3.1s', cost: '$0.030' },
    { name: 'Activities Research', accuracy: '89%', latency: '1.8s', cost: '$0.010' },
    { name: 'Itinerary Planner', accuracy: '78%', latency: '4.2s', cost: '$0.007' },
  ];

  const evaluationDimensions = [
    {
      title: 'Agent Performance',
      description: 'Measure individual agent execution time, success rate and output quality.',
    },
    {
      title: 'Accuracy & Constraint Validation',
      description: 'Check whether generated results satisfy user requirements and business constraints.',
    },
    {
      title: 'Latency',
      description: 'Identify slow agents, expensive tool calls and unnecessary sequential operations.',
    },
    {
      title: 'Token Usage & Cost',
      description: 'Track model consumption and estimate the cost of individual executions.',
    },
    {
      title: 'Reliability',
      description: 'Identify failed tool calls, timeouts, retries and inconsistent outputs.',
    },
  ];

  const improvementExamples = [
    {
      title: 'Reduce Latency',
      problem: 'Independent agents execute sequentially.',
      improvement: 'Run independent research tasks concurrently and optimise orchestration.',
      metricNote: 'Estimated 35–45% latency reduction via async fan-out.',
    },
    {
      title: 'Improve Accuracy',
      problem: 'Generated itineraries violate budget, timing or location constraints.',
      improvement: 'Introduce deterministic validation, structured outputs and verification steps.',
      metricNote: 'Enforces strict JSON schema validation before final delivery.',
    },
    {
      title: 'Reduce Cost',
      problem: 'Repeated model calls increase token consumption.',
      improvement: 'Use model routing, caching and smaller models for simpler tasks.',
      metricNote: 'Routes deterministic lookup queries to lightweight distilled models.',
    },
    {
      title: 'Improve Reliability',
      problem: 'External API failures interrupt workflows.',
      improvement: 'Introduce retries, timeouts, fallbacks and graceful degradation.',
      metricNote: 'Exponential backoff with circuit breaker failovers.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans">
      {/* Top Header Bar */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm tracking-tight text-zinc-950">
              AgentLens
            </span>
            <span className="text-zinc-400 font-mono text-xs">/</span>
            <span className="text-zinc-500 font-mono text-xs">
              Engineering Concept
            </span>
          </div>
          <span className="text-xs text-zinc-500 font-mono">
            Conceptual Presentation
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-28">
        {/* ========================================================= */}
        {/* SECTION ONE — INTRODUCTION                                */}
        {/* ========================================================= */}
        <section className="space-y-12">
          {/* Centered Explanatory Narrative */}
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase">
              AI Agent Evaluation & Optimisation
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Making AI Agents More Accurate, Faster and More Reliable.
            </h1>

            <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
              Multi-agent AI systems coordinate models, tools and external APIs to complete complex tasks. But as workflows become more sophisticated, understanding their performance becomes increasingly difficult.
            </p>

            <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              AgentLens is a proposed evaluation and optimisation layer that makes agent behaviour measurable, exposes execution bottlenecks and identifies opportunities for improvement.
            </p>
          </div>

          {/* Technical Visualisation of Multi-Agent Workflow */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Multi-Agent Execution Pipeline</span>
              <span>Sequential & Concurrent Graph</span>
            </div>

            <div className="border border-zinc-200 bg-white rounded-lg p-5">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {workflowNodes.map((node, index) => {
                  const isLast = index === workflowNodes.length - 1;

                  return (
                    <div
                      key={node.name}
                      className="border border-zinc-200 rounded p-3 bg-zinc-50/50 flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                          Step 0{index + 1}
                        </span>
                        <div className="font-semibold text-xs text-zinc-900 leading-snug">
                          {node.name}
                        </div>
                        <span className="text-[11px] text-zinc-500 block">
                          {node.type}
                        </span>
                      </div>

                      <div className="border-t border-zinc-200/60 pt-2 space-y-1 font-mono text-[11px]">
                        {node.meta.map((m) => (
                          <div key={m.label} className="flex justify-between text-zinc-600">
                            <span className="text-zinc-400">{m.label}:</span>
                            <span className="font-medium text-zinc-800">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>User Input → Agent Orchestrator → Research Agents → External Tools → Result Validation → Final Output</span>
                <span>Simulated Trace Data</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION TWO — WHAT IT EVALUATES                           */}
        {/* ========================================================= */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase">
              Evaluation Dimensions
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
              Understand every step of an AI workflow.
            </h2>
          </div>

          {/* The Five Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {evaluationDimensions.map((dim, idx) => (
              <div
                key={dim.title}
                className="border border-zinc-200 bg-white rounded-lg p-5 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-400">0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                </div>
                <h3 className="font-semibold text-sm text-zinc-950">
                  {dim.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {dim.description}
                </p>
              </div>
            ))}

            {/* Explanatory summary tile */}
            <div className="border border-zinc-200 bg-zinc-100/60 rounded-lg p-5 flex flex-col justify-between space-y-2">
              <span className="font-mono text-xs text-zinc-500 uppercase">
                Observability Scope
              </span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                By capturing performance across all five dimensions simultaneously, engineering teams can detect regressions immediately upon deployment.
              </p>
              <span className="text-[11px] font-mono text-zinc-400">
                Deterministic + Statistical Metrics
              </span>
            </div>
          </div>

          {/* Sample Agent Execution Timeline Table */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span className="font-semibold text-zinc-700">Sample Agent Execution Profile</span>
              <span className="font-mono text-zinc-400">Illustrative simulated data</span>
            </div>

            <div className="border border-zinc-200 bg-white rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200 font-mono text-[11px] text-zinc-500">
                    <th className="py-3 px-5 font-semibold text-zinc-700">Agent</th>
                    <th className="py-3 px-4 text-right">Accuracy</th>
                    <th className="py-3 px-4 text-right">Latency</th>
                    <th className="py-3 px-4 text-right">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 font-mono">
                  {agentData.map((row) => (
                    <tr key={row.name} className="hover:bg-zinc-50/50">
                      <td className="py-3.5 px-5 font-sans font-medium text-zinc-900">
                        {row.name}
                      </td>
                      <td className="py-3.5 px-4 text-right text-zinc-800">
                        {row.accuracy}
                      </td>
                      <td className="py-3.5 px-4 text-right text-zinc-800">
                        {row.latency}
                      </td>
                      <td className="py-3.5 px-4 text-right text-zinc-800">
                        {row.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] font-mono text-zinc-400 text-right">
              All values shown above are illustrative benchmarks, not live telemetry.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION THREE — HOW PERFORMANCE CAN BE IMPROVED           */}
        {/* ========================================================= */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase">
              Engineering Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
              From observing problems to engineering solutions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {improvementExamples.map((item, index) => (
              <div
                key={item.title}
                className="border border-zinc-200 bg-white rounded-lg p-6 space-y-4"
              >
                <div className="flex items-baseline justify-between border-b border-zinc-100 pb-3">
                  <h3 className="font-semibold text-sm text-zinc-950">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-0.5">
                      Problem
                    </span>
                    <p className="text-zinc-700 font-medium">
                      {item.problem}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-0.5">
                      Improvement
                    </span>
                    <p className="text-zinc-600">
                      {item.improvement}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
                    {item.metricNote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-10 mt-20 text-xs text-zinc-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-900">AgentLens</span>
            <span>•</span>
            <span>AI Agent Evaluation & Optimisation Concept</span>
          </div>
          <div className="font-mono text-[11px] text-zinc-400">
            Conceptual engineering presentation by Adarsh Verma. Simulated illustrative data.
          </div>
        </div>
      </footer>
    </div>
  );
}
