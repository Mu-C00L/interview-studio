window.LEARNING_PATHS = [
  {
    "id": "sde1",
    "name": "Student → SDE 1",
    "tag": "Build your foundation",
    "description": "Learn how programs run, solve core problems in C++, and ship a small tested application. Move on when you can explain and demonstrate each checkpoint.",
    "milestones": [
      [
        "Your first programs and complexity",
        [
          "cpp-basics",
          "arrays-basics",
          "strings-basics",
          "big-o-growth",
          "complexity-cases",
          "recursion-basics"
        ],
        "Trace a program and count its operations before using asymptotic notation."
      ],
      [
        "Language & machine",
        [
          "cpp-foundations",
          "complexity",
          "computer-architecture",
          "memory-model",
          "compilers",
          "eng-git"
        ],
        "Compile a C++ program, debug a memory mistake, and explain its time and space costs."
      ],
      [
        "Build and trace the patterns",
        [
          "prefix-sums",
          "kadane",
          "merge-sort",
          "graph-modeling"
        ],
        "Derive a range sum and a recurrence; draw a graph from a word problem."
      ],
      [
        "Core problem solving",
        [
          "arrays-hashing",
          "two-pointers",
          "sliding-window",
          "binary-search",
          "sorting",
          "linked-lists",
          "stacks",
          "trees",
          "heaps"
        ],
        "Solve unseen easy/medium problems and explain an invariant before coding."
      ],
      [
        "Objects and requests from scratch",
        [
          "oop-foundations",
          "inheritance-polymorphism",
          "relationships-uml",
          "lld-method",
          "system-foundations",
          "api-contracts"
        ],
        "Model one operation, its state changes, public contract, and failure cases."
      ],
      [
        "Queries and network addresses",
        [
          "db-joins",
          "db-windows",
          "net-subnets",
          "net-link",
          "oop-runtime"
        ],
        "Predict SQL rows including NULLs and ties; identify the next hop for an IP packet."
      ],
      [
        "Graphs & decisions",
        [
          "graph-traversal",
          "backtracking",
          "dp-foundations",
          "greedy",
          "bits"
        ],
        "Choose BFS, recursion, or DP from the problem constraints; test disconnected and empty cases."
      ],
      [
        "The application stack",
        [
          "os-process",
          "os-memory",
          "net-layers",
          "net-dns",
          "net-tcp",
          "net-http",
          "db-relational",
          "db-normalization",
          "db-indexes"
        ],
        "Trace a request from DNS through HTTP to a SQL query and its index."
      ],
      [
        "Build & explain",
        [
          "object-modeling",
          "solid",
          "java-contracts",
          "testing-design",
          "eng-testing",
          "design-method",
          "security-auth",
          "security-web"
        ],
        "Build the task-board capstone, write tests, and defend its data model."
      ]
    ]
  },
  {
    "id": "sde2",
    "name": "SDE 1 → SDE 2",
    "tag": "Own a service",
    "description": "Deepen algorithms, model reliable components, and design services with explicit failure behavior. Use the foundation path to fill gaps.",
    "milestones": [
      [
        "Strengthen algorithm reasoning",
        [
          "amortized",
          "recurrences",
          "quickselect",
          "fast-slow",
          "monotonic-queue",
          "mst",
          "dp-strings",
          "segment-trees"
        ],
        "Explain an invariant and complexity model for each algorithm, including its worst case."
      ],
      [
        "Harder algorithm patterns",
        [
          "tries",
          "topological",
          "shortest-path",
          "union-find",
          "dp-patterns",
          "string-matching",
          "range-queries",
          "advanced-dp"
        ],
        "Solve two unfamiliar medium problems in a timed session; justify correctness and complexity."
      ],
      [
        "Traffic, placement, and durable state",
        [
          "load-balancing",
          "consistent-hashing",
          "blob-storage",
          "payments"
        ],
        "Trace retries, data ownership, and recovery without double-applying an operation."
      ],
      [
        "Model complete components",
        [
          "file-system",
          "board-game"
        ],
        "Implement a behavior contract, invalid operations, and deterministic state-transition tests."
      ],
      [
        "Contracts & concurrency",
        [
          "strategy-factory",
          "observer-decorator",
          "state-machines",
          "concurrency",
          "lru-cache",
          "parking",
          "elevator",
          "splitwise",
          "booking",
          "domain-aggregates",
          "os-sync",
          "os-deadlocks"
        ],
        "Model lifecycle transitions, prevent an invariant violation, and test a concurrent race."
      ],
      [
        "Scale & persistence",
        [
          "capacity",
          "api-network",
          "storage",
          "caching",
          "replication-sharding",
          "consistency",
          "db-isolation",
          "db-recovery"
        ],
        "Estimate load, choose a database, and explain retries, stale reads, and transaction boundaries."
      ],
      [
        "Operate the service",
        [
          "queues",
          "reliability",
          "rate-limiter",
          "eng-delivery",
          "eng-containers",
          "eng-observability",
          "eng-debugging",
          "security-threats",
          "net-tls"
        ],
        "Define an SLO, inject a failure, and show how an operator diagnoses it."
      ],
      [
        "Practice full interviews",
        [
          "url-shortener",
          "chat",
          "feed",
          "job-scheduler"
        ],
        "Deliver the booking capstone and a 45-minute design with APIs, schema, bottlenecks, and trade-offs."
      ]
    ]
  },
  {
    "id": "senior",
    "name": "Senior → Staff",
    "tag": "Connect teams & systems",
    "description": "Work across ownership boundaries, reason about migrations and distributed workflows, and make performance claims measurable.",
    "milestones": [
      [
        "OS mechanisms and resource trade-offs",
        [
          "os-ipc",
          "os-semaphores",
          "os-bankers",
          "os-allocation",
          "os-disk"
        ],
        "Trace waiting, resource acquisition, safe-state checks, and storage access costs."
      ],
      [
        "Strengthen the internals",
        [
          "advanced-graphs",
          "number-theory",
          "os-scheduling",
          "os-files",
          "os-io",
          "net-routing",
          "security-crypto"
        ],
        "Explain how scheduling, storage, and networks constrain service behavior; profile before optimizing."
      ],
      [
        "Protocol and transaction failure analysis",
        [
          "db-locking",
          "db-nosql",
          "net-transport-lifecycle",
          "net-application-protocols",
          "net-diagnostics"
        ],
        "Diagnose an incident from protocol and transaction evidence instead of guessing."
      ],
      [
        "Evolve software boundaries",
        [
          "hexagonal",
          "pattern-toolbox",
          "domain-boundaries",
          "architecture-decisions"
        ],
        "Compare two decompositions with domain invariants, team ownership, and reversibility."
      ],
      [
        "Move data safely",
        [
          "sagas-cqrs",
          "stream-processing",
          "migrations",
          "search-platform"
        ],
        "Build a replayable pipeline; demonstrate deduplication and backfill/rebuild behavior."
      ],
      [
        "Lead reliable delivery",
        [
          "multi-region",
          "cost-performance",
          "reliability",
          "eng-observability"
        ],
        "Run a failure exercise, attach a cost model, and write an actionable incident review."
      ]
    ]
  },
  {
    "id": "architect",
    "name": "Staff → Architect",
    "tag": "Make durable decisions",
    "description": "Synthesize the other paths into architecture decisions with business constraints, evolutionary plans, operational evidence, and accountable ownership.",
    "milestones": [
      [
        "Frame the decision",
        [
          "design-method",
          "domain-boundaries",
          "architecture-decisions",
          "security-threats"
        ],
        "Write constraints, quality attributes, alternatives, and measurable acceptance criteria before a diagram."
      ],
      [
        "Data & global correctness",
        [
          "consistency",
          "replication-sharding",
          "db-isolation",
          "sagas-cqrs",
          "multi-region"
        ],
        "Identify authoritative writers, conflict policy, recovery objectives, and regional failure behavior."
      ],
      [
        "Economics & operations",
        [
          "capacity",
          "cost-performance",
          "reliability",
          "security-auth",
          "eng-delivery",
          "eng-observability"
        ],
        "Compare two architectures using latency, availability, cost, security, and operating ownership."
      ],
      [
        "Evolution & governance",
        [
          "migrations",
          "stream-processing",
          "search-platform",
          "hexagonal"
        ],
        "Complete the migration capstone: a staged rollout, compatibility strategy, rollback, and review evidence."
      ]
    ]
  }
];
window.PROJECTS = [
  {
    "id": "task-board",
    "title": "A dependable task board",
    "role": "Student / SDE 1",
    "brief": "Build a small task service with users, projects, tasks, and status transitions. Start locally with Java and a relational database; a CLI or minimal HTTP API is enough.",
    "lessons": [
      "object-modeling",
      "db-relational",
      "db-indexes",
      "eng-testing",
      "security-auth"
    ],
    "deliverables": [
      "Define task ownership and allowed status transitions; show the domain model.",
      "Create a normalized schema and SQL for overdue tasks per project; inspect an index choice.",
      "Implement create, assign, list, and complete operations with input validation.",
      "Write unit and integration tests, including nonexistent tasks and unauthorized access.",
      "Provide a README with setup, trade-offs, and a five-minute demonstration."
    ],
    "scenarios": [
      "Two users try to complete the same task: define whether the second call is idempotent or a conflict.",
      "A user requests another team’s task: the server must enforce authorization."
    ],
    "rubric": [
      "Correctness: enforce ownership and status invariants in the service.",
      "Design: separate domain rules from I/O without unnecessary abstraction.",
      "Evidence: tests reproduce failures and a clean checkout can run locally."
    ]
  },
  {
    "id": "booking-service",
    "title": "Bookings that never oversell",
    "role": "SDE 2",
    "brief": "Model a ticket inventory with expiring holds and a simulated payment provider. Build one service first; use a real database transaction to protect inventory.",
    "lessons": [
      "booking",
      "db-isolation",
      "state-machines",
      "queues",
      "reliability"
    ],
    "deliverables": [
      "State the seat/hold/payment invariants and draw the lifecycle.",
      "Implement hold, confirm, expire, and cancel with transactional conflict handling.",
      "Accept an idempotency key and define its scope and replay behavior.",
      "Use a durable outbox or explain the failure window in direct event publishing.",
      "Load-test the final seat and report successes, conflicts, and observed latency."
    ],
    "scenarios": [
      "One hundred requests contend for one seat: at most one confirmed booking is allowed.",
      "Payment succeeds but the client times out: a retry must not charge twice.",
      "The hold expires while payment completes: document and test a compensation policy."
    ],
    "rubric": [
      "Correctness: invariants survive concurrency and retries.",
      "Reliability: retries are bounded, observable, and safe.",
      "Communication: justify locking/isolation and show evidence from tests."
    ]
  },
  {
    "id": "event-pipeline",
    "title": "A replayable event pipeline",
    "role": "Senior / Staff",
    "brief": "Ingest order events and build a searchable read model. Model duplicates, out-of-order delivery, consumer crashes, and a full rebuild from durable history.",
    "lessons": [
      "stream-processing",
      "sagas-cqrs",
      "search-platform",
      "eng-observability"
    ],
    "deliverables": [
      "Define event identity, schema version, ordering key, and retention.",
      "Implement deduplication and idempotent projection updates; state the storage boundary.",
      "Demonstrate crash-after-write-before-ack and recovery.",
      "Rebuild into a new projection, validate it, and switch readers with rollback.",
      "Record lag, failure counts, recovery time, and a short incident exercise."
    ],
    "scenarios": [
      "Deliver the same event ten times: the projection must apply its effect once.",
      "Deliver an older update after a newer update: enforce an explicit ordering policy.",
      "A schema changes during replay: maintain compatibility or transform deliberately."
    ],
    "rubric": [
      "Semantics: distinguish broker delivery from application effects.",
      "Operations: show backlog recovery without uncontrolled retry amplification.",
      "Evolution: compatibility and rebuild strategies are executable."
    ]
  },
  {
    "id": "migration-plan",
    "title": "Design a regional migration",
    "role": "Architect",
    "brief": "Prepare an architecture review for a hypothetical booking product expanding into a second region. Inputs: 5,000 peak requests/s, 80% reads, 150 ms regional p95 target, 99.9% service SLO. Treat these as scenario assumptions, not measured benchmarks.",
    "lessons": [
      "multi-region",
      "migrations",
      "architecture-decisions",
      "cost-performance",
      "security-threats"
    ],
    "deliverables": [
      "Clarify residency, authoritative writes, correctness requirements, RPO, and RTO with stakeholders.",
      "Compare single-writer regional failover and partitioned regional ownership; document rejected alternatives.",
      "Draw deployment and data flows with trust boundaries and failure domains.",
      "Plan expand/migrate/contract phases, validation, abort thresholds, and rollback limitations.",
      "Build a capacity/cost worksheet and run a tabletop region-loss exercise.",
      "Write an ADR and assign owners for SLOs, security controls, compatibility, and runbooks."
    ],
    "scenarios": [
      "The network partitions but both regions remain healthy: explain who may accept writes.",
      "A backfill is incomplete at cutover: show measurable readiness checks and abort behavior.",
      "Rollback meets newly written data: explain reconciliation rather than assuming instant reversal."
    ],
    "rubric": [
      "Fitness: choices trace to business constraints and quantified objectives.",
      "Correctness: consistency and failure behavior are explicit.",
      "Evolution: rollout, rollback, cost, and ownership are reviewable.",
      "Evidence: distinguish measured results from assumptions and open questions."
    ]
  }
];
