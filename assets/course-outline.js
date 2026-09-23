window.COURSE_OUTLINE = {
  "dsa": [
    {
      "id": "dsa-1",
      "title": "Programming from zero",
      "description": "Write and trace small C++ programs before choosing algorithms.",
      "lessons": [
        "cpp-basics",
        "arrays-basics",
        "strings-basics",
        "cpp-foundations"
      ]
    },
    {
      "id": "dsa-2",
      "title": "Reasoning about efficiency",
      "description": "Count work, prove an invariant, and separate worst-case from amortized claims.",
      "lessons": [
        "big-o-growth",
        "complexity-cases",
        "complexity",
        "amortized"
      ]
    },
    {
      "id": "dsa-3",
      "title": "Recursive reasoning",
      "description": "Define one call, prove progress, and explore or combine subproblems.",
      "lessons": [
        "recursion-basics",
        "recurrences",
        "backtracking"
      ]
    },
    {
      "id": "dsa-4",
      "title": "Arrays and range patterns",
      "description": "Preserve useful summaries instead of repeating scans.",
      "lessons": [
        "prefix-sums",
        "arrays-hashing",
        "two-pointers",
        "sliding-window",
        "binary-search",
        "kadane"
      ]
    },
    {
      "id": "dsa-5",
      "title": "Sorting and selection",
      "description": "Build order or find only the rank you need.",
      "lessons": [
        "sorting",
        "merge-sort",
        "quickselect"
      ]
    },
    {
      "id": "dsa-6",
      "title": "Linked structures",
      "description": "Track references, ownership, and cycles explicitly.",
      "lessons": [
        "linked-lists",
        "fast-slow"
      ]
    },
    {
      "id": "dsa-7",
      "title": "Ordered candidates",
      "description": "Use stacks, deques, and heaps to retain the right candidates.",
      "lessons": [
        "stacks",
        "monotonic-queue",
        "heaps"
      ]
    },
    {
      "id": "dsa-8",
      "title": "Trees and prefixes",
      "description": "Use hierarchical structure and subtree contracts.",
      "lessons": [
        "trees",
        "tries"
      ]
    },
    {
      "id": "dsa-9",
      "title": "Graph foundations",
      "description": "Model states and connections before selecting traversal.",
      "lessons": [
        "graph-modeling",
        "graph-traversal",
        "topological",
        "union-find"
      ]
    },
    {
      "id": "dsa-10",
      "title": "Weighted and directed graphs",
      "description": "Choose connectivity, path, or component algorithms by the objective.",
      "lessons": [
        "shortest-path",
        "mst",
        "advanced-graphs"
      ]
    },
    {
      "id": "dsa-11",
      "title": "Greedy choices",
      "description": "Prove a local choice with an exchange argument before committing.",
      "lessons": [
        "greedy"
      ]
    },
    {
      "id": "dsa-12",
      "title": "Dynamic programming families",
      "description": "Derive states and transitions, then compress only safe dependencies.",
      "lessons": [
        "dp-foundations",
        "dp-patterns",
        "dp-strings",
        "advanced-dp"
      ]
    },
    {
      "id": "dsa-13",
      "title": "Advanced techniques",
      "description": "Apply bit representations, modular arithmetic, matching, and range indexes.",
      "lessons": [
        "bits",
        "number-theory",
        "string-matching",
        "range-queries",
        "segment-trees"
      ]
    }
  ],
  "hld": [
    {
      "id": "hld-1",
      "title": "From program to service",
      "description": "Start with one complete user operation, then measure its constraints.",
      "lessons": [
        "system-foundations",
        "design-method",
        "capacity"
      ]
    },
    {
      "id": "hld-2",
      "title": "Interfaces and traffic",
      "description": "Make retries, routing, deadlines, and admission behavior explicit.",
      "lessons": [
        "api-contracts",
        "api-network",
        "load-balancing"
      ]
    },
    {
      "id": "hld-3",
      "title": "Data placement and consistency",
      "description": "Choose authority, access paths, freshness, and partition boundaries.",
      "lessons": [
        "storage",
        "caching",
        "replication-sharding",
        "consistent-hashing",
        "consistency"
      ]
    },
    {
      "id": "hld-4",
      "title": "Asynchronous work and reliability",
      "description": "Trace durable handoff, recovery, and long-running state.",
      "lessons": [
        "queues",
        "reliability",
        "sagas-cqrs",
        "stream-processing"
      ]
    },
    {
      "id": "hld-5",
      "title": "End-to-end case studies",
      "description": "Connect APIs, data, request paths, scale, and failure recovery.",
      "lessons": [
        "url-shortener",
        "rate-limiter",
        "chat",
        "feed",
        "blob-storage",
        "payments",
        "search-platform"
      ]
    },
    {
      "id": "hld-6",
      "title": "Architecture and evolution",
      "description": "Own boundaries, recovery, migration, evidence, and economics.",
      "lessons": [
        "domain-boundaries",
        "multi-region",
        "migrations",
        "architecture-decisions",
        "cost-performance"
      ]
    }
  ],
  "lld": [
    {
      "id": "lld-1",
      "title": "Object-oriented foundations",
      "description": "Learn state, behavior, identity, relationships, and Java contracts.",
      "lessons": [
        "oop-foundations",
        "inheritance-polymorphism",
        "relationships-uml",
        "java-contracts"
      ]
    },
    {
      "id": "lld-2",
      "title": "Design a working feature",
      "description": "Turn scenarios and invariants into a small coherent model.",
      "lessons": [
        "lld-method",
        "object-modeling",
        "solid",
        "domain-aggregates",
        "hexagonal"
      ]
    },
    {
      "id": "lld-3",
      "title": "Patterns through requirements",
      "description": "Introduce variation and lifecycle patterns for concrete reasons.",
      "lessons": [
        "strategy-factory",
        "observer-decorator",
        "state-machines",
        "pattern-toolbox"
      ]
    },
    {
      "id": "lld-4",
      "title": "Concurrency and resource ownership",
      "description": "Protect compound invariants and handle stale or repeated execution.",
      "lessons": [
        "concurrency",
        "lru-cache",
        "job-scheduler"
      ]
    },
    {
      "id": "lld-5",
      "title": "Complete LLD exercises",
      "description": "Follow a feature through state changes, errors, and tests.",
      "lessons": [
        "parking",
        "elevator",
        "splitwise",
        "booking",
        "file-system",
        "board-game"
      ]
    },
    {
      "id": "lld-6",
      "title": "Testing the design",
      "description": "Prove observable behavior with controlled dependencies.",
      "lessons": [
        "testing-design"
      ]
    }
  ],
  "cs": [
    {
      "id": "cs-1",
      "title": "Language and machine",
      "description": "Connect source, objects, instructions, and memory visibility.",
      "lessons": [
        "computer-architecture",
        "compilers",
        "oop-runtime",
        "memory-model"
      ]
    },
    {
      "id": "cs-2",
      "title": "OS processes and coordination",
      "description": "Understand execution, scheduling, communication, waiting, and deadlock.",
      "lessons": [
        "os-process",
        "os-scheduling",
        "os-ipc",
        "os-sync",
        "os-semaphores",
        "os-deadlocks",
        "os-bankers"
      ]
    },
    {
      "id": "cs-3",
      "title": "OS memory and storage",
      "description": "Trace mappings, allocation, files, devices, and I/O pressure.",
      "lessons": [
        "os-memory",
        "os-allocation",
        "os-files",
        "os-disk",
        "os-io"
      ]
    },
    {
      "id": "cs-4",
      "title": "Network addressing",
      "description": "Follow names, addresses, links, and routing decisions.",
      "lessons": [
        "net-layers",
        "net-subnets",
        "net-link",
        "net-routing",
        "net-dns"
      ]
    },
    {
      "id": "cs-5",
      "title": "Network protocols and diagnosis",
      "description": "Trace a connection and application request, then diagnose by evidence.",
      "lessons": [
        "net-tcp",
        "net-transport-lifecycle",
        "net-http",
        "net-tls",
        "net-application-protocols",
        "net-diagnostics"
      ]
    },
    {
      "id": "cs-6",
      "title": "Database query reasoning",
      "description": "Model relations and predict query rows, indexes, and rankings.",
      "lessons": [
        "db-relational",
        "db-normalization",
        "db-indexes",
        "db-joins",
        "db-windows"
      ]
    },
    {
      "id": "cs-7",
      "title": "Database correctness",
      "description": "Protect transactions, recover data, and compare storage models.",
      "lessons": [
        "db-isolation",
        "db-locking",
        "db-recovery",
        "db-nosql"
      ]
    },
    {
      "id": "cs-8",
      "title": "Security foundations",
      "description": "Connect threats, identity, authorization, cryptography, and web boundaries.",
      "lessons": [
        "security-threats",
        "security-auth",
        "security-crypto",
        "security-web"
      ]
    },
    {
      "id": "cs-9",
      "title": "Engineering practice",
      "description": "Ship, observe, test, and debug software with reviewable evidence.",
      "lessons": [
        "eng-git",
        "eng-testing",
        "eng-delivery",
        "eng-containers",
        "eng-observability",
        "eng-debugging"
      ]
    }
  ]
};
