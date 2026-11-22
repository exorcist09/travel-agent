export type AgentStatus = 'Healthy' | 'Needs improvement' | 'Degraded';

export interface AgentPerformance {
  id: string;
  name: string;
  role: string;
  accuracy: number; // percentage, e.g. 96
  latency: number; // seconds, e.g. 1.2
  cost: number; // USD per trip, e.g. 0.012
  status: AgentStatus;
  model: string;
  promptTokens: number;
  completionTokens: number;
  totalCalls: number;
  failureRate: number; // percentage
  p95Latency: number; // seconds
  description: string;
  commonFailureReason?: string;
  optimizationOpportunity: string;
  recentTools: string[];
}

export interface MetricCardData {
  id: string;
  title: string;
  value: string;
  rawValue: number;
  unit?: string;
  change: string;
  isPositive: boolean;
  benchmark: string;
  description: string;
}

export type TimelineNodeStatus = 'success' | 'warning' | 'error';

export interface TimelineNode {
  id: string;
  stepNumber: number;
  name: string;
  agentId: string;
  status: TimelineNodeStatus;
  duration: string;
  durationMs: number;
  tokens: number;
  cost: string;
  summary: string;
  inputPayload: Record<string, any>;
  outputPayload: Record<string, any>;
  toolsCalled: Array<{
    name: string;
    endpoint: string;
    latencyMs: number;
    status: number;
    cached: boolean;
  }>;
  validationCheck: {
    passed: boolean;
    name: string;
    score: number;
    detail: string;
  };
}

export type TestCaseStatus = 'passed' | 'failed';

export interface EvaluationTestCase {
  id: string;
  category: 'Budget' | 'Duration' | 'Geographic' | 'Relevance' | 'Missing Info' | 'Constraints';
  name: string;
  prompt: string;
  status: TestCaseStatus;
  severity: 'critical' | 'moderate' | 'low';
  accuracyScore: number;
  executionTime: string;
  cost: string;
  explanation: string;
  expectedBehavior: string;
  actualBehavior: string;
  failedAgent?: string;
  testRunId: string;
}

export interface ModelConfiguration {
  id: string;
  name: string;
  tagline: string;
  accuracy: number; // %
  latency: number; // seconds
  costPer1kTrips: number; // USD
  costPerTrip: number; // USD
  primaryModel: string;
  routingStrategy: string;
  pros: string[];
  cons: string[];
  p99Latency: number;
  tokenEfficiency: number; // tokens/sec
}

export interface EngineeringRecommendation {
  id: string;
  priority: 'P0' | 'P1' | 'P2';
  category: 'Latency' | 'Accuracy' | 'Cost' | 'Reliability' | 'Architecture';
  title: string;
  targetAgent: string;
  observedIssue: string;
  potentialCause: string;
  suggestedImprovement: string;
  expectedImpact: string;
  implementationEffort: 'Low' | 'Medium' | 'High';
  codeSnippet?: {
    filename: string;
    diff: string;
  };
  metricsSimulated: {
    beforeMetric: string;
    afterMetric: string;
    delta: string;
  };
}

export interface EvaluationRun {
  id: string;
  name: string;
  timestamp: string;
  commitHash: string;
  branch: string;
  totalTripsTested: number;
  accuracy: number;
  avgLatency: number;
  avgCost: number;
  failureRate: number;
  status: 'passed' | 'warning' | 'failed';
}
