# Airial AI Agent Evaluation Dashboard

> **Independent Concept Prototype by Adarsh Verma**  
> *Demonstrating AI Systems Engineering, Multi-Agent Observability, Latency Optimization, and Unit-Economic Cost Containment for Airial.*  
> *(Not affiliated with Airial. Built strictly as an engineering proposal and prototype using simulated benchmark data).*

---

## 🎯 Executive Summary & Objective

This project demonstrates how an engineering team can evaluate, monitor, and optimize a multi-agent AI travel engine (such as Airial's). 

Rather than treating LLMs as a single black box, this prototype models the travel planning pipeline as a **Directed Acyclic Graph (DAG)** of 5 specialized agents:
1. **Destination Research** (`Claude 3.5 Haiku`)
2. **Flight Research** (`GPT-4o mini`)
3. **Hotel Research** (`GPT-4o`)
4. **Activities Research** (`Claude 3.5 Haiku`)
5. **Itinerary Planner** (`GPT-4o`)
6. **Validation & Quality Guardrails** (Deterministic Rules Engine)

Through this observability harness, we monitor the 5 vital metrics of autonomous AI travel engines:
- **Evaluation Accuracy** (feasibility, spatial sanity, and constraint satisfaction)
- **Execution Latency** (end-to-end pipeline time and critical-path supplier bottlenecks)
- **Token Consumption** (prompt overhead vs completion efficiency)
- **API Failure & Dropout Rate** (supplier rate limits and recovery resiliency)
- **Unit Cost per Itinerary** (marginal LLM inference cost)

---

## 🏗️ Architecture & Dashboard Layout

### 1. Overview Metrics (Simulated Baseline)
- **Evaluation Accuracy:** `87.4%` (Target: >90%)
- **Average Execution Time:** `8.2s` (SLA Target: <7.0s)
- **Average Cost per Trip:** `$0.084` (Target: <$0.075)
- **Agent Failure Rate:** `4.8%` (SLO Limit: <3.0%)

### 2. Agent Performance Matrix
| Agent | Accuracy | Latency | Cost / Trip | Failure Rate | Status | Primary Model |
|---|---:|---:|---:|---:|---|---|
| **Destination Research** | 96% | 1.2s | $0.012 | 0.8% | `Healthy` | Claude 3.5 Haiku |
| **Flight Research** | 91% | 2.8s | $0.025 | 2.4% | `Healthy` | GPT-4o mini |
| **Hotel Research** | 84% | 3.1s | $0.030 | 3.6% | `Needs improvement` | GPT-4o |
| **Activities Research** | 89% | 1.8s | $0.010 | 1.2% | `Healthy` | Claude 3.5 Haiku |
| **Itinerary Planner** | 78% | 4.2s | $0.007 | 6.8% | `Needs improvement` | GPT-4o |

*Interactive: Clicking any row opens an in-depth execution profile modal with token breakdown, recent tool endpoints, and root-cause bottleneck diagnosis.*

### 3. Execution Timeline (DAG Trace)
Visual pipeline tracking:
$$\text{User Request} \longrightarrow \text{Destination Research} \longrightarrow \text{Flight Search} \longrightarrow \text{Hotel Search} \longrightarrow \text{Activities Search} \longrightarrow \text{Itinerary Generation} \longrightarrow \text{Validation}$$
- Step-by-step duration, token usage, cost, and health status.
- Tool invocation inspector: API endpoints (`Amadeus`, `Hotelbeds`, `Google Places`, `Viator`), HTTP status, cache hit flags, and assertion scores.
- Collapsible synthesized output JSON payload viewer.

### 4. Evaluation Scenarios & Guardrail Assertions
Covers 8 realistic production evaluation scenarios:
- **Budget Constraint Validation** (e.g. Strict $2,500 total budget ceiling for 7-day Tokyo trip).
- **Geographic Consistency** (e.g. Detects impossible 25-minute Kyoto-to-Osaka checkout transfers).
- **Travel Duration & Jetlag Buffer** (Late arrival day buffer validation in Rome).
- **Activity Relevance** (Stroller-accessible, kid-friendly constraints in London).
- **Missing Information Detection** (Detects ambiguous departure origins before booking).
- **Dietary & Religious Constraints** (Verified Celiac gluten-free certification in Barcelona).

*Interactive: Filter by All / Failed / Passed, filter by category tag, and search by prompt keyword.*

### 5. Model Architecture & Orchestration Comparison
Empirical benchmark comparison between 3 architectures:
1. **Airial Baseline:** `GPT-4o` + `GPT-4o mini` (Accuracy: 87.4%, Latency: 8.2s, Cost: $84 / 1k trips).
2. **Airial Fast-Route:** `Claude 3.5 Sonnet` + `Claude 3.5 Haiku` (Accuracy: 89.2%, Latency: 5.6s, Cost: $62 / 1k trips) — *Recommended*.
3. **Airial Hybrid Ensemble:** Custom LoRA Router + `Llama 3.3 70B` self-hosted + Claude fallback (Accuracy: 85.8%, Latency: 6.4s, Cost: $41.5 / 1k trips).

*Interactive: Toggle charts across Accuracy, Latency, and Cost; view pros, cons, and routing trade-offs.*

### 6. Actionable Engineering Recommendations (Core Contribution)
Actionable proposals with code diffs:
1. **Hotel Research High Latency:** Parallelize supplier calls via `Promise.allSettled`, introduce 12h Redis semantic caching for top 200 cities, and prune raw amenity schemas.
   - *Estimated Impact:* 3.1s → 1.4s (-54.8% latency).
2. **Itinerary Planner Accuracy:** Introduce deterministic Pre-Synthesis Spatial Graph Validator (OSRM distance matrix) and strict Zod schema validation.
   - *Estimated Impact:* 78.0% → 92.4% (+14.4% accuracy).
3. **Repeated Model Calls & Token Cost:** Route low-entropy classification (airport lookups, weather, destination themes) to distilled SLMs.
   - *Estimated Impact:* $0.084 → $0.055 (-34.5% cost).
4. **API Failures & Supplier Reliability:** Implement exponential backoff with full jitter and circuit breakers to secondary aggregators (Duffel/Skyscanner).
   - *Estimated Impact:* 4.8% → 1.1% failure rate (-77.1%).
5. **Speculative Parallel DAG Execution:** Fan-out Flight, Hotel, and Activities search concurrently once dates and IATA destination are resolved.
   - *Estimated Impact:* Additional 2.1s pipeline overlap savings.

*Interactive: Click "Simulate Projected Optimization Impact" on the dashboard to see immediate projected before/after metric recalculations.*

---

## 💻 Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS (Minimalist developer-tool aesthetic inspired by Linear, Vercel, and Stripe)
- **Charts:** Recharts (Responsive bar charts with custom tooltips)
- **Icons:** Lucide React
- **Data & State:** React state hooks with deterministic simulated evaluation data

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

To build for production:
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Push this repo to GitHub.
2. In the Vercel dashboard, click **"Add New Project"** and select this GitHub repository.
3. Keep default settings (`Framework Preset: Next.js`).
4. Click **Deploy**.

---

## 📄 License & Attribution

Independent concept prototype created by **Adarsh Verma**.  
Not affiliated with, sponsored by, or endorsed by Airial. All product names and brand marks belong to their respective owners.
