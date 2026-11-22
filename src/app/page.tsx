import React from 'react';

export default function AgentLensLandingPage() {
  const agentPerformanceData = [
    { name: 'Destination Research', accuracy: '96%', latency: '1.2s', cost: '$0.012' },
    { name: 'Flight Research', accuracy: '91%', latency: '2.8s', cost: '$0.025' },
    { name: 'Hotel Research', accuracy: '84%', latency: '3.1s', cost: '$0.030' },
    { name: 'Activities Research', accuracy: '89%', latency: '1.8s', cost: '$0.010' },
    { name: 'Itinerary Planner', accuracy: '78%', latency: '4.2s', cost: '$0.007' },
  ];

  const evaluationAreas = [
    {
      title: 'Agent Performance',
      description: 'Checks if each agent completes its assigned task successfully and produces quality results.',
    },
    {
      title: 'Accuracy',
      description: 'Checks whether the final answer follows user rules, correct dates, and budget limits.',
    },
    {
      title: 'Execution Speed',
      description: 'Measures how long each step takes so developers can find and fix slow agents.',
    },
    {
      title: 'Token Usage and Cost',
      description: 'Tracks how many tokens each model uses to keep running costs low.',
    },
    {
      title: 'Reliability',
      description: 'Finds failed API calls, network timeouts, and errors so the system stays dependable.',
    },
  ];

  const improvements = [
    {
      title: 'Reduce execution time through parallel processing',
      problem: 'Agents wait for each other in a line, making the entire request slow.',
      solution: 'Run independent tasks at the same time to cut overall waiting time.',
    },
    {
      title: 'Improve accuracy through validation and structured outputs',
      problem: 'AI models can make up numbers or ignore important user constraints.',
      solution: 'Use strict data formats and check answers against rules before saving them.',
    },
    {
      title: 'Reduce costs through caching and better model selection',
      problem: 'Sending every question to large expensive models wastes money.',
      solution: 'Save common answers in a cache and use smaller models for simple work.',
    },
    {
      title: 'Improve reliability through retries and fallback mechanisms',
      problem: 'A single failed external tool call can break the whole workflow.',
      solution: 'Automatically try failed calls again and switch to backup services when needed.',
    },
  ];

  const futureImprovements = [
    {
      title: 'Better model selection',
      sentence: 'Choose the right model for each task based on speed, cost, and difficulty.',
    },
    {
      title: 'Smarter agent coordination',
      sentence: 'Send tasks only to the agents that actually need to run.',
    },
    {
      title: 'Automated testing',
      sentence: 'Test agent workflows with realistic test cases before releasing updates.',
    },
    {
      title: 'Detecting performance regressions',
      sentence: 'Spot speed or quality drops as soon as new code is written.',
    },
    {
      title: 'Reducing unnecessary context',
      sentence: 'Trim extra words from prompts so models run faster and cheaper.',
    },
    {
      title: 'Continuous evaluation',
      sentence: 'Monitor real runs regularly to catch new errors before users see them.',
    },
  ];

  const problemsAndSolutions = [
    { problem: 'Slow AI workflows', solution: 'Find slow execution steps' },
    { problem: 'Incorrect AI results', solution: 'Validate generated outputs' },
    { problem: 'High API costs', solution: 'Track and reduce model usage' },
    { problem: 'API failures', solution: 'Add retries and fallbacks' },
    { problem: 'Difficult debugging', solution: 'Inspect individual agent executions' },
    { problem: 'Performance regressions', solution: 'Run repeatable evaluations' },
  ];

  const myContributions = [
    'Build and improve multi-agent workflows.',
    'Develop backend APIs and execution pipelines.',
    'Integrate LLMs, tools and external APIs.',
    'Improve AI accuracy, latency and cost.',
    'Build systems for testing and monitoring AI agents.',
    'Develop clean, easy-to-use interfaces.',
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-[#0c0c0e]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-sm tracking-tight text-white">
            AgentLens
          </span>
          <span className="text-xs text-zinc-500 font-mono">
            Conceptual Presentation
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* ========================================================= */}
        {/* 1. INTRODUCTION                                           */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Making AI Agents Faster, Smarter and More Reliable.
          </h1>

          <p className="text-base text-zinc-300 leading-relaxed">
            AgentLens helps developers understand how multiple AI agents work together, find problems in their execution, measure accuracy, speed and cost, and identify ways to improve the overall system.
          </p>
        </section>

        {/* ========================================================= */}
        {/* 2. WHAT IT EVALUATES                                      */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What It Evaluates
            </h2>
            <p className="text-sm text-zinc-400">
              AgentLens tracks five essential areas across every agent execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {evaluationAreas.map((area) => (
              <div
                key={area.title}
                className="border border-white/10 bg-[#121214] rounded-lg p-4 space-y-1.5"
              >
                <h3 className="font-semibold text-sm text-white">
                  {area.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Sample Agent Performance Table */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-medium text-zinc-300">Sample Agent Performance</span>
              <span className="font-mono text-zinc-500 text-[11px]">Illustrative metrics</span>
            </div>

            <div className="border border-white/10 bg-[#121214] rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#16161a] border-b border-white/10 font-mono text-[11px] text-zinc-400">
                    <th className="py-2.5 px-4 font-medium text-zinc-300">Agent</th>
                    <th className="py-2.5 px-4 text-right">Accuracy</th>
                    <th className="py-2.5 px-4 text-right">Latency</th>
                    <th className="py-2.5 px-4 text-right">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {agentPerformanceData.map((row) => (
                    <tr key={row.name}>
                      <td className="py-3 px-4 font-sans text-white">
                        {row.name}
                      </td>
                      <td className="py-3 px-4 text-right text-zinc-300">
                        {row.accuracy}
                      </td>
                      <td className="py-3 px-4 text-right text-zinc-300">
                        {row.latency}
                      </td>
                      <td className="py-3 px-4 text-right text-zinc-300">
                        {row.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] font-mono text-zinc-500 text-right">
              All numbers above are illustrative simulated values.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. HOW PERFORMANCE CAN BE IMPROVED                        */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              How Performance Can Be Improved
            </h2>
            <p className="text-sm text-zinc-400">
              Turn observed problems into practical improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {improvements.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-[#121214] rounded-lg p-5 space-y-3"
              >
                <h3 className="font-semibold text-sm text-white">
                  {item.title}
                </h3>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-0.5">
                      Problem
                    </span>
                    <p className="text-zinc-300 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-0.5">
                      Solution
                    </span>
                    <p className="text-zinc-400 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. WHAT MORE CAN BE IMPROVED                              */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What More Can Be Improved
            </h2>
            <p className="text-sm text-zinc-400">
              Future engineering possibilities for AI agent workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {futureImprovements.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-[#121214] rounded-lg p-4 space-y-1"
              >
                <h3 className="font-semibold text-sm text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.sentence}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. PROBLEMS IT SOLVES                                     */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Problems It Solves
            </h2>
            <p className="text-sm text-zinc-400">
              A quick map of common agent challenges and their fixes.
            </p>
          </div>

          <div className="border border-white/10 bg-[#121214] rounded-lg overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#16161a] border-b border-white/10 font-mono text-[11px] text-zinc-400">
                  <th className="py-3 px-5 font-medium text-zinc-300 w-1/2">
                    Problem
                  </th>
                  <th className="py-3 px-5 font-medium text-zinc-300 w-1/2">
                    Solution
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {problemsAndSolutions.map((row) => (
                  <tr key={row.problem}>
                    <td className="py-3 px-5 text-zinc-300">
                      {row.problem}
                    </td>
                    <td className="py-3 px-5 text-zinc-400">
                      {row.solution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. HOW I CAN CONTRIBUTE                                   */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              How I Can Contribute
            </h2>
            <p className="text-sm text-zinc-400">
              Key engineering areas where I can add direct value:
            </p>
          </div>

          <div className="border border-white/10 bg-[#121214] rounded-lg p-6">
            <ul className="space-y-3 text-sm text-zinc-300">
              {myContributions.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="text-zinc-500 select-none">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* 7. FOOTER                                                 */}
      {/* ========================================================= */}
      <footer className="border-t border-white/10 bg-[#0c0c0e] py-12 mt-20 text-xs text-zinc-500">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="font-medium text-zinc-300">
            AgentLens — AI Agent Evaluation & Optimisation
          </div>
          <div className="font-mono text-zinc-500 text-[11px]">
            Independent engineering concept by Adarsh Verma.
          </div>
        </div>
      </footer>
    </div>
  );
}
