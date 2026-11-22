import React from 'react';

export default function AgentLensLandingPage() {
  const workflowNodes = [
    {
      name: 'User Input',
      type: 'Ingress & Intent',
      meta: [
        { label: 'Latency', value: '14ms' },
        { label: 'Status', value: 'Parsed' },
      ],
    },
    {
      name: 'Agent Orchestrator',
      type: 'Routing Graph',
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
      type: 'APIs & Providers',
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
      type: 'Delivery Payload',
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
      description: 'Measure individual agent execution time, success rate and output quality across each task.',
    },
    {
      title: 'Accuracy & Constraint Validation',
      description: 'Check whether generated results satisfy user requirements, hard constraints, and business rules.',
    },
    {
      title: 'Latency',
      description: 'Identify slow agents, expensive tool calls and unnecessary sequential operations along the critical path.',
    },
    {
      title: 'Token Usage & Cost',
      description: 'Track prompt and completion consumption across models and estimate the marginal cost of individual executions.',
    },
    {
      title: 'Reliability',
      description: 'Identify failed tool calls, upstream API timeouts, retries, and inconsistent schema formatting.',
    },
  ];

  const improvementExamples = [
    {
      title: 'Reduce Latency',
      problem: 'Independent agents execute sequentially, causing idle waiting and high cumulative runtimes.',
      improvement: 'Run independent research tasks concurrently and optimise orchestration with asynchronous DAG fan-out.',
      impact: 'Estimated 35–45% latency reduction by parallelizing supplier queries.',
    },
    {
      title: 'Improve Accuracy',
      problem: 'Generated itineraries violate budget, timing or location constraints due to unconstrained LLM generation.',
      improvement: 'Introduce deterministic validation, structured outputs and programmatic verification steps.',
      impact: 'Enforces strict Pydantic/Zod schema guarantees prior to final output.',
    },
    {
      title: 'Reduce Cost',
      problem: 'Repeated model calls for deterministic classifications inflate prompt token consumption.',
      improvement: 'Use model routing, caching and smaller models for simpler classification and data extraction tasks.',
      impact: 'Cuts marginal execution cost by ~35% using distilled SLMs for routine steps.',
    },
    {
      title: 'Improve Reliability',
      problem: 'External API failures, supplier rate limits and network timeouts interrupt complete multi-agent workflows.',
      improvement: 'Introduce retries with jitter, timeouts, fallbacks and graceful degradation across secondary providers.',
      impact: 'Preserves pipeline completion rate above 99% during third-party supplier outages.',
    },
  ];

  const futureOptimisations = [
    {
      title: 'Model Selection',
      description: 'Dynamically selecting the optimal foundation or distilled model per task based on benchmarked complexity, latency requirements, and unit budget.',
    },
    {
      title: 'Adaptive Agent Routing',
      description: 'Routing requests through specialized sub-graphs based on intent confidence, task entropy, and runtime error signals.',
    },
    {
      title: 'Evaluation Benchmarks',
      description: 'Curating domain-specific test suites with realistic edge cases to quantitatively score agent performance prior to deployment.',
    },
    {
      title: 'Regression Testing',
      description: 'Automating regression suites across pull requests to detect prompt drift, latency degradations, or schema regressions early.',
    },
    {
      title: 'Context Optimisation',
      description: 'Compressing tool responses, pruning redundant historical turns, and structuring context windows to minimize token waste.',
    },
    {
      title: 'Continuous Evaluation',
      description: 'Sampling production traces in near-real-time to detect anomalous output patterns, unexpected error spikes, and gradual model drift.',
    },
  ];

  const problemsSolvedMapping = [
    { problem: 'Unpredictable AI outputs', solution: 'Automated evaluation' },
    { problem: 'Slow agent execution', solution: 'Execution tracing and latency analysis' },
    { problem: 'High LLM costs', solution: 'Token tracking and model routing' },
    { problem: 'External API failures', solution: 'Retries and fallback strategies' },
    { problem: 'Invalid generated results', solution: 'Constraint validation' },
    { problem: 'Performance regressions', solution: 'Repeatable benchmarks' },
    { problem: 'Difficult debugging', solution: 'Agent-level execution traces' },
  ];

  const contributions = [
    {
      title: 'Agent Orchestration',
      description: 'Build and optimise multi-agent workflows, tool calling and execution pipelines.',
      experience: 'Architected node-based execution DAGs and dynamic workflow orchestration in Kairo, coordinating complex asynchronous steps with clear state machines.',
    },
    {
      title: 'Backend Engineering',
      description: 'Design scalable APIs, asynchronous processing, retries and reliable integrations.',
      experience: 'Engineered high-throughput job schedulers, resilient external API clients with jittered backoff, and robust rate-limiting infrastructure for production systems.',
    },
    {
      title: 'AI Engineering',
      description: 'Implement LLM integrations, structured outputs, evaluation pipelines and model optimisation.',
      experience: 'Integrated foundation models with strict JSON-schema enforcement, structured tool-calling interfaces, and automated prompt evaluation suites.',
    },
    {
      title: 'Performance Engineering',
      description: 'Identify bottlenecks and improve latency, accuracy and cost.',
      experience: 'Profiled end-to-end execution paths, eliminated sequential blockers via concurrent async execution, and optimized token budgets with semantic caching.',
    },
    {
      title: 'Product Engineering',
      description: 'Build intuitive interfaces for monitoring, debugging and interacting with AI systems.',
      experience: 'Designed and developed high-performance developer tools, canvas-based visual workflow builders in Kairo, and dense execution observability dashboards.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Static Top Header */}
      <header className="border-b border-white/10 bg-[#0c0c0e]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm tracking-tight text-white">
              AgentLens
            </span>
            <span className="text-zinc-600 font-mono text-xs">/</span>
            <span className="text-zinc-400 font-mono text-xs">
              AI Agent Evaluation & Optimisation
            </span>
          </div>
          <span className="text-xs text-zinc-500 font-mono">
            Conceptual Presentation
          </span>
        </div>
      </header>

      {/* Main Long-Scrolling Presentation */}
      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        {/* ========================================================= */}
        {/* SECTION 1: INTRODUCTION                                   */}
        {/* ========================================================= */}
        <section className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase block">
              Section 01 • Introduction
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Making AI Agents More Accurate, Faster and More Reliable.
            </h1>

            <p className="text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto">
              Multi-agent AI systems coordinate models, tools and external APIs to complete complex tasks. But as workflows become more sophisticated, understanding their performance becomes increasingly difficult.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              AgentLens is a proposed evaluation and optimisation layer that makes agent behaviour measurable, exposes execution bottlenecks and identifies opportunities for improvement.
            </p>
          </div>

          {/* Visual Workflow: User Input → Orchestrator → Agents → Tools → Validation → Output */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Multi-Agent Execution Workflow</span>
              <span>Linear & Concurrent Directed Graph</span>
            </div>

            <div className="border border-white/10 bg-[#121214] rounded-lg p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {workflowNodes.map((node, index) => (
                  <div
                    key={node.name}
                    className="border border-white/5 rounded p-3.5 bg-[#16161a] flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
                        Step 0{index + 1}
                      </span>
                      <div className="font-semibold text-xs text-white leading-snug">
                        {node.name}
                      </div>
                      <span className="text-[11px] text-zinc-400 block">
                        {node.type}
                      </span>
                    </div>

                    <div className="border-t border-white/5 pt-2.5 space-y-1 font-mono text-[11px]">
                      {node.meta.map((m) => (
                        <div key={m.label} className="flex justify-between text-zinc-400">
                          <span className="text-zinc-500">{m.label}:</span>
                          <span className="font-medium text-zinc-200">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3.5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-zinc-500 gap-1">
                <span>User Input → Agent Orchestrator → Research Agents → External Tools → Result Validation → Final Output</span>
                <span>Illustrative Trace Metadata</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: WHAT IT EVALUATES                              */}
        {/* ========================================================= */}
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase block">
              Section 02 • Evaluation Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Understand every step of an AI workflow.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
              When multiple autonomous agents collaborate, failure modes compound. Evaluating the pipeline requires continuous instrumentation across five essential operational dimensions:
            </p>
          </div>

          {/* The Five Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {evaluationDimensions.map((dim, idx) => (
              <div
                key={dim.title}
                className="border border-white/10 bg-[#121214] rounded-lg p-5 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500">Dimension 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                </div>
                <h3 className="font-semibold text-sm text-white">
                  {dim.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {dim.description}
                </p>
              </div>
            ))}

            <div className="border border-white/10 bg-[#16161a] rounded-lg p-5 flex flex-col justify-between space-y-2">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                Full-Lifecycle Telemetry
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                By capturing performance across these five dimensions simultaneously, engineers isolate exact points of degradation rather than treating the system as an opaque black box.
              </p>
              <span className="text-[11px] font-mono text-zinc-500">
                Deterministic verification + Statistical tracing
              </span>
            </div>
          </div>

          {/* Sample Agent Performance Table */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-semibold text-zinc-200">Sample Agent Performance Profile</span>
              <span className="font-mono text-zinc-500">Illustrative simulated data</span>
            </div>

            <div className="border border-white/10 bg-[#121214] rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#16161a] border-b border-white/10 font-mono text-[11px] text-zinc-400">
                    <th className="py-3 px-5 font-medium text-zinc-300">Agent</th>
                    <th className="py-3 px-4 text-right">Accuracy</th>
                    <th className="py-3 px-4 text-right">Latency</th>
                    <th className="py-3 px-4 text-right">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {agentData.map((row) => (
                    <tr key={row.name} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 px-5 font-sans font-medium text-white">
                        {row.name}
                      </td>
                      <td className="py-3.5 px-4 text-right text-zinc-300">
                        {row.accuracy}
                      </td>
                      <td className="py-3.5 px-4 text-right text-zinc-300">
                        {row.latency}
                      </td>
                      <td className="py-3.5 px-4 text-right text-zinc-300">
                        {row.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] font-mono text-zinc-500 text-right">
              All metrics above are illustrative benchmarks intended for conceptual evaluation.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: HOW PERFORMANCE CAN BE IMPROVED                 */}
        {/* ========================================================= */}
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase block">
              Section 03 • Actionable Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              From observing problems to engineering solutions.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Observability is only valuable when paired with engineering solutions. Telemetry directly informs concrete architectural interventions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {improvementExamples.map((item, index) => (
              <div
                key={item.title}
                className="border border-white/10 bg-[#121214] rounded-lg p-6 space-y-4"
              >
                <div className="flex items-baseline justify-between border-b border-white/5 pb-3">
                  <h3 className="font-semibold text-sm text-white">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">
                    Example 0{index + 1}
                  </span>
                </div>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
                      Problem
                    </span>
                    <p className="text-zinc-300 font-medium">
                      {item.problem}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
                      Improvement
                    </span>
                    <p className="text-zinc-400">
                      {item.improvement}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-zinc-400">
                    {item.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: WHAT MORE CAN BE OPTIMISED?                    */}
        {/* ========================================================= */}
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase block">
              Section 04 • Advanced Optimisation
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Beyond monitoring. Towards intelligent optimisation.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Static evaluation provides baseline visibility. Mature multi-agent platforms extend this foundation into automated, adaptive optimization mechanisms across model selection, prompt context, and continuous benchmarking:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureOptimisations.map((opt, idx) => (
              <div
                key={opt.title}
                className="border border-white/10 bg-[#121214] rounded-lg p-5 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500">0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                </div>
                <h3 className="font-semibold text-sm text-white">
                  {opt.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {opt.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: PROBLEMS IT SOLVES                             */}
        {/* ========================================================= */}
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase block">
              Section 05 • Problem-Solution Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Making complex AI systems easier to engineer.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Multi-agent architectures introduce failure modes that cannot be diagnosed with traditional application logging alone. AgentLens maps each core engineering hurdle directly to an architectural solution:
            </p>
          </div>

          <div className="border border-white/10 bg-[#121214] rounded-lg overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#16161a] border-b border-white/10 font-mono text-[11px] text-zinc-400">
                  <th className="py-3.5 px-6 font-medium text-zinc-300 w-1/2">
                    Engineering problem
                  </th>
                  <th className="py-3.5 px-6 font-medium text-zinc-300 w-1/2">
                    Proposed solution
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-[12px]">
                {problemsSolvedMapping.map((row) => (
                  <tr key={row.problem} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-6 text-zinc-300 font-sans">
                      {row.problem}
                    </td>
                    <td className="py-3 px-6 text-zinc-400 font-sans">
                      {row.solution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: HOW I CAN CONTRIBUTE                           */}
        {/* ========================================================= */}
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase block">
              Section 06
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How I Can Contribute
            </h2>
            <p className="text-lg text-zinc-300 font-medium">
              Turning complex AI workflows into production-ready systems.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Moving agentic systems from speculative demos to resilient production requires deep full-stack execution across orchestration, distributed backend systems, and model-level guardrails:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contributions.map((item, idx) => (
              <div
                key={item.title}
                className="border border-white/10 bg-[#121214] rounded-lg p-6 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <h3 className="font-semibold text-sm text-white">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">0{idx + 1}</span>
                </div>

                <p className="text-xs text-zinc-200 font-medium leading-relaxed">
                  {item.description}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed pt-1 border-t border-white/5 font-sans">
                  {item.experience}
                </p>
              </div>
            ))}
          </div>

          {/* Personal Engineering Philosophy Closing Card */}
          <div className="border border-white/10 bg-[#16161a] rounded-lg p-6 sm:p-8 space-y-4">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block">
              Engineering Ownership
            </span>
            <blockquote className="text-base sm:text-lg text-white font-medium leading-relaxed italic border-l-2 border-zinc-600 pl-4">
              &ldquo;I enjoy taking ownership of complex engineering problems, moving from an idea to a working product, and building systems that are reliable, scalable and useful.&rdquo;
            </blockquote>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl pt-2">
              From building <strong>Kairo</strong>—a visual workflow automation platform and high-performance execution engine—to architecting real-world AI integrations, I focus on system reliability, observable state machines, and clean software architecture.
            </p>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* SECTION 7: FOOTER                                         */}
      {/* ========================================================= */}
      <footer className="border-t border-white/10 bg-[#0c0c0e] py-12 mt-24 text-xs text-zinc-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-medium text-white text-sm">
              AgentLens — AI Agent Evaluation & Optimisation
            </div>
            <p className="text-[11px] text-zinc-500">
              Conceptual engineering presentation on multi-agent evaluation and performance optimization.
            </p>
          </div>
          <div className="font-mono text-[11px] text-zinc-400 text-center sm:text-right">
            Independent engineering concept by Adarsh Verma.
          </div>
        </div>
      </footer>
    </div>
  );
}
