export const REPO_URL = 'https://github.com/whatsnextclarity00/agents-towards-production'

export type Category =
  | 'Orchestration'
  | 'Memory & Knowledge'
  | 'Tools & Integrations'
  | 'Security'
  | 'Evaluation & Observability'
  | 'Deployment & Serving'
  | 'Model Customization'
  | 'Interfaces'

export interface Tutorial {
  /** Folder name under `tutorials/`. */
  slug: string
  title: string
  description: string
  category: Category
}

export const tutorials: Tutorial[] = [
  {
    slug: 'LangGraph-agent',
    title: 'Stateful Agents with LangGraph',
    description: 'Model an agent as a graph of steps with shared state, branching and loops.',
    category: 'Orchestration',
  },
  {
    slug: 'a2a',
    title: 'Agent-to-Agent (A2A) Protocol',
    description: 'Let independent agents discover each other and collaborate over a standard protocol.',
    category: 'Orchestration',
  },
  {
    slug: 'kotlin-agent-with-koog',
    title: 'AI Agents in Kotlin with Koog',
    description: 'Build agents on the JVM with JetBrains’ Koog framework.',
    category: 'Orchestration',
  },
  {
    slug: 'agent-RAG-with-Contextual',
    title: 'Production-Ready RAG Agents with Contextual AI',
    description: 'Ground agent answers in your documents with a managed retrieval pipeline.',
    category: 'Memory & Knowledge',
  },
  {
    slug: 'agent-memory-with-mem0',
    title: 'Persistent Memory with Mem0',
    description: 'Give agents long-term memory of users and past conversations.',
    category: 'Memory & Knowledge',
  },
  {
    slug: 'agent-memory-with-redis',
    title: 'Agent Memory with Redis',
    description: 'Short- and long-term memory backed by Redis and vector search.',
    category: 'Memory & Knowledge',
  },
  {
    slug: 'ai-memory-with-cognee',
    title: 'AI Memory with Cognee',
    description: 'Build a knowledge graph your agent can reason over.',
    category: 'Memory & Knowledge',
  },
  {
    slug: 'agent-with-mcp',
    title: 'Tools via Model Context Protocol (MCP)',
    description: 'Expose tools and data to agents through MCP servers.',
    category: 'Tools & Integrations',
  },
  {
    slug: 'agent-with-tavily-web-access',
    title: 'Web Access with Tavily',
    description: 'Add real-time web search and extraction to your agent.',
    category: 'Tools & Integrations',
  },
  {
    slug: 'agent-with-brightdata',
    title: 'Web Scraping Agents with Bright Data',
    description: 'Combine LangGraph and Bright Data to collect data from the live web.',
    category: 'Tools & Integrations',
  },
  {
    slug: 'agent-file-conversion-with-hushvert',
    title: 'Local File Conversion with Hushvert',
    description: 'Let agents convert files locally and privately.',
    category: 'Tools & Integrations',
  },
  {
    slug: 'arcade-secure-tool-calling',
    title: 'Multi-User Tool Calling with Arcade',
    description: 'Authenticate per user so agents act on real accounts safely.',
    category: 'Security',
  },
  {
    slug: 'agent-security-with-llamafirewall',
    title: 'Guardrails with LlamaFirewall',
    description: 'Detect prompt injection and unsafe actions before they happen.',
    category: 'Security',
  },
  {
    slug: 'agent-security-apex',
    title: 'Agent Security Evaluation with Apex',
    description: 'Red-team your agent and measure how it holds up to attacks.',
    category: 'Security',
  },
  {
    slug: 'agent-evaluation-intellagent',
    title: 'Agent Evaluation with IntellAgent',
    description: 'Generate realistic scenarios and score agent behaviour at scale.',
    category: 'Evaluation & Observability',
  },
  {
    slug: 'tracing-with-langsmith',
    title: 'Tracing with LangSmith',
    description: 'Trace every step and tool call to debug and monitor agents.',
    category: 'Evaluation & Observability',
  },
  {
    slug: 'docker-intro',
    title: 'Introduction to Docker',
    description: 'Package an agent and its dependencies into a reproducible container.',
    category: 'Deployment & Serving',
  },
  {
    slug: 'fastapi-agent',
    title: 'Serving Agents with FastAPI',
    description: 'Wrap an agent in a production HTTP API with streaming and tests.',
    category: 'Deployment & Serving',
  },
  {
    slug: 'on-prem-llm-ollama',
    title: 'On-Prem LLMs with Ollama',
    description: 'Run open models locally and point your agent at them.',
    category: 'Deployment & Serving',
  },
  {
    slug: 'runpod-gpu-deploy',
    title: 'GPU Deployment with RunPod Serverless',
    description: 'Deploy agents and models to on-demand GPUs.',
    category: 'Deployment & Serving',
  },
  {
    slug: 'aws_agentcore',
    title: 'Deploying on AWS Bedrock AgentCore',
    description: 'Host agents on AWS managed agent infrastructure.',
    category: 'Deployment & Serving',
  },
  {
    slug: 'fine-tuning-agents',
    title: 'Fine-Tuning Agents',
    description: 'Adapt a model to your agent’s tasks and tool-use patterns.',
    category: 'Model Customization',
  },
  {
    slug: 'agent-with-streamlit-ui',
    title: 'Chat UI with Streamlit',
    description: 'Put a chat interface in front of your agent in a few lines of Python.',
    category: 'Interfaces',
  },
]

export const tutorialUrl = (slug: string) => `${REPO_URL}/tree/main/tutorials/${slug}`
