# Curriculum: edition 3

140 lessons · 34 chapters · 700 quiz questions · 420 exercises.

Follow a course from its first chapter, or use the prerequisite links for a specific gap. Study-time estimates include reading and tracing; independent practice takes additional time.

## DSA

### Programming from zero

Write and trace small C++ programs before choosing algorithms.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Your first C++ program: values, loops & functions](../index.html#/lesson/cpp-basics) | Foundation | None |
| [Arrays & vectors: indexing, traversal, and mutation](../index.html#/lesson/arrays-basics) | Foundation | Your first C++ program: values, loops & functions |
| [Strings: characters, bytes & frequency models](../index.html#/lesson/strings-basics) | Foundation | Arrays & vectors: indexing, traversal, and mutation |
| [C++ essentials, STL & recursion](../index.html#/lesson/cpp-foundations) | Foundation | Your first C++ program: values, loops & functions, Arrays & vectors: indexing, traversal, and mutation |

### Reasoning about efficiency

Count work, prove an invariant, and separate worst-case from amortized claims.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Big-O from first principles: count work as inputs grow](../index.html#/lesson/big-o-growth) | Foundation | Your first C++ program: values, loops & functions |
| [Best, worst, average & expected analysis](../index.html#/lesson/complexity-cases) | Foundation | Big-O from first principles: count work as inputs grow |
| [Complexity & invariants](../index.html#/lesson/complexity) | Foundation | C++ essentials, STL & recursion, Big-O from first principles: count work as inputs grow |
| [Amortized analysis: why occasional expensive work is affordable](../index.html#/lesson/amortized) | Core | Best, worst, average & expected analysis, Arrays & vectors: indexing, traversal, and mutation |

### Recursive reasoning

Define one call, prove progress, and explore or combine subproblems.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Recursion: contracts, base cases & the call stack](../index.html#/lesson/recursion-basics) | Foundation | Your first C++ program: values, loops & functions, Big-O from first principles: count work as inputs grow |
| [Recurrences & divide-and-conquer cost](../index.html#/lesson/recurrences) | Core | Recursion: contracts, base cases & the call stack |
| [Backtracking & pruning](../index.html#/lesson/backtracking) | Core | C++ essentials, STL & recursion |

### Arrays and range patterns

Preserve useful summaries instead of repeating scans.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Prefix sums: turn repeated range work into subtraction](../index.html#/lesson/prefix-sums) | Core | Arrays & vectors: indexing, traversal, and mutation, Big-O from first principles: count work as inputs grow |
| [Arrays, hashing & prefix sums](../index.html#/lesson/arrays-hashing) | Foundation | Complexity & invariants, Prefix sums: turn repeated range work into subtraction |
| [Two pointers & intervals](../index.html#/lesson/two-pointers) | Foundation | Arrays, hashing & prefix sums, Sorting & selection |
| [Sliding windows](../index.html#/lesson/sliding-window) | Core | Two pointers & intervals |
| [Binary search on values & answers](../index.html#/lesson/binary-search) | Core | Complexity & invariants, C++ essentials, STL & recursion |
| [Maximum subarray: derive a one-state dynamic program](../index.html#/lesson/kadane) | Core | Prefix sums: turn repeated range work into subtraction |

### Sorting and selection

Build order or find only the rank you need.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Sorting & selection](../index.html#/lesson/sorting) | Core | Complexity & invariants, Arrays & vectors: indexing, traversal, and mutation |
| [Merge sort: build order by combining sorted halves](../index.html#/lesson/merge-sort) | Core | Recurrences & divide-and-conquer cost, Arrays & vectors: indexing, traversal, and mutation |
| [Partitioning & quickselect: find a rank without sorting](../index.html#/lesson/quickselect) | Advanced | Sorting & selection, Arrays & vectors: indexing, traversal, and mutation |

### Linked structures

Track references, ownership, and cycles explicitly.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Linked lists & pointer discipline](../index.html#/lesson/linked-lists) | Foundation | C++ essentials, STL & recursion, Arrays & vectors: indexing, traversal, and mutation |
| [Fast & slow pointers: discover a cycle with constant space](../index.html#/lesson/fast-slow) | Core | Linked lists & pointer discipline |

### Ordered candidates

Use stacks, deques, and heaps to retain the right candidates.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Stacks, queues & monotonic structures](../index.html#/lesson/stacks) | Core | Complexity & invariants |
| [Sliding-window maximum with a monotonic deque](../index.html#/lesson/monotonic-queue) | Advanced | Sliding windows, Stacks, queues & monotonic structures |
| [Heaps & top-k patterns](../index.html#/lesson/heaps) | Core | Sorting & selection |

### Trees and prefixes

Use hierarchical structure and subtree contracts.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Trees, BSTs & recursive contracts](../index.html#/lesson/trees) | Core | C++ essentials, STL & recursion, Recursion: contracts, base cases & the call stack |
| [Tries & prefix search](../index.html#/lesson/tries) | Core | Arrays, hashing & prefix sums |

### Graph foundations

Model states and connections before selecting traversal.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Graphs from scratch: vertices, edges & representations](../index.html#/lesson/graph-modeling) | Foundation | Arrays & vectors: indexing, traversal, and mutation |
| [Graphs: BFS, DFS & grids](../index.html#/lesson/graph-traversal) | Core | Stacks, queues & monotonic structures, Graphs from scratch: vertices, edges & representations |
| [Topological order & dependency graphs](../index.html#/lesson/topological) | Core | Graphs: BFS, DFS & grids |
| [Union–find & minimum spanning trees](../index.html#/lesson/union-find) | Advanced | Trees, BSTs & recursive contracts |

### Weighted and directed graphs

Choose connectivity, path, or component algorithms by the objective.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Weighted shortest paths](../index.html#/lesson/shortest-path) | Advanced | Graphs: BFS, DFS & grids, Heaps & top-k patterns |
| [Minimum spanning trees: connect everything at minimum cost](../index.html#/lesson/mst) | Advanced | Union–find & minimum spanning trees, Sorting & selection, Graphs from scratch: vertices, edges & representations |
| [SCCs, bridges & structural graph reasoning](../index.html#/lesson/advanced-graphs) | Advanced | Graphs: BFS, DFS & grids, Topological order & dependency graphs |

### Greedy choices

Prove a local choice with an exchange argument before committing.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Greedy proofs & interval scheduling](../index.html#/lesson/greedy) | Advanced | Sorting & selection |

### Dynamic programming families

Derive states and transitions, then compress only safe dependencies.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Dynamic programming: state & recurrence](../index.html#/lesson/dp-foundations) | Core | Backtracking & pruning |
| [DP: knapsack, sequences & grids](../index.html#/lesson/dp-patterns) | Advanced | Dynamic programming: state & recurrence |
| [String DP: build edit distance from prefix states](../index.html#/lesson/dp-strings) | Advanced | Dynamic programming: state & recurrence, Strings: characters, bytes & frequency models |
| [Advanced DP: LIS, bitmasks & interval states](../index.html#/lesson/advanced-dp) | Advanced | DP: knapsack, sequences & grids, Bit manipulation & subset masks, Trees, BSTs & recursive contracts |

### Advanced techniques

Apply bit representations, modular arithmetic, matching, and range indexes.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Bit manipulation & subset masks](../index.html#/lesson/bits) | Core | C++ essentials, STL & recursion |
| [Number theory, modular arithmetic & combinatorics](../index.html#/lesson/number-theory) | Core | C++ essentials, STL & recursion, Bit manipulation & subset masks |
| [String matching: KMP & rolling hashes](../index.html#/lesson/string-matching) | Advanced | Arrays, hashing & prefix sums, C++ essentials, STL & recursion |
| [Range queries: Fenwick & segment trees](../index.html#/lesson/range-queries) | Advanced | Arrays, hashing & prefix sums, Trees, BSTs & recursive contracts, Bit manipulation & subset masks |
| [Segment trees: compose range answers with updates](../index.html#/lesson/segment-trees) | Advanced | Range queries: Fenwick & segment trees, Recurrences & divide-and-conquer cost |

## HLD

### From program to service

Start with one complete user operation, then measure its constraints.

| Lesson | Level | Prerequisites |
|---|---|---|
| [System design from zero: follow one request](../index.html#/lesson/system-foundations) | Foundation | None |
| [The SDE 2 design conversation](../index.html#/lesson/design-method) | Foundation | HTTP semantics, caching & browser requests, System design from zero: follow one request |
| [Capacity estimates & latency budgets](../index.html#/lesson/capacity) | Foundation | Complexity & invariants |

### Interfaces and traffic

Make retries, routing, deadlines, and admission behavior explicit.

| Lesson | Level | Prerequisites |
|---|---|---|
| [API contracts: retries, pagination & compatible evolution](../index.html#/lesson/api-contracts) | Core | System design from zero: follow one request, HTTP semantics, caching & browser requests |
| [APIs, networking & load balancing](../index.html#/lesson/api-network) | Foundation | HTTP semantics, caching & browser requests, Sessions, OAuth, OIDC & authorization |
| [Load balancing, proxies & admission control](../index.html#/lesson/load-balancing) | Core | System design from zero: follow one request, Packets, layers & encapsulation |

### Data placement and consistency

Choose authority, access paths, freshness, and partition boundaries.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Data models, indexes & transactions](../index.html#/lesson/storage) | Core | Relational modeling, SQL joins & NULL |
| [Caching, CDNs & invalidation](../index.html#/lesson/caching) | Core | Data models, indexes & transactions |
| [Replication, sharding & hot keys](../index.html#/lesson/replication-sharding) | Core | Data models, indexes & transactions |
| [Consistent hashing: assign keys while membership changes](../index.html#/lesson/consistent-hashing) | Advanced | Replication, sharding & hot keys |
| [Consistency, CAP & consensus](../index.html#/lesson/consistency) | Advanced | Replication, sharding & hot keys |

### Asynchronous work and reliability

Trace durable handoff, recovery, and long-running state.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Queues, streams & delivery semantics](../index.html#/lesson/queues) | Core | Data models, indexes & transactions |
| [Reliability, retries & observability](../index.html#/lesson/reliability) | Core | APIs, networking & load balancing, Queues, streams & delivery semantics |
| [Sagas, CQRS & event sourcing](../index.html#/lesson/sagas-cqrs) | Advanced | Queues, streams & delivery semantics, Isolation anomalies, MVCC & locking, State machines & valid transitions |
| [Stream processing, windows & late events](../index.html#/lesson/stream-processing) | Advanced | Queues, streams & delivery semantics, Capacity estimates & latency budgets |

### End-to-end case studies

Connect APIs, data, request paths, scale, and failure recovery.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Case study: URL shortener](../index.html#/lesson/url-shortener) | Applied | Caching, CDNs & invalidation, APIs, networking & load balancing |
| [Case study: distributed rate limiter](../index.html#/lesson/rate-limiter) | Applied | Concurrency, locks & idempotency, Caching, CDNs & invalidation |
| [Case study: real-time chat](../index.html#/lesson/chat) | Applied | Queues, streams & delivery semantics, Replication, sharding & hot keys |
| [Case study: news feed & media](../index.html#/lesson/feed) | Applied | Queues, streams & delivery semantics, Caching, CDNs & invalidation, Case study: search, indexing & document pipelines |
| [Case study: upload, process & serve large files](../index.html#/lesson/blob-storage) | Applied | System design from zero: follow one request, API contracts: retries, pagination & compatible evolution, Queues, streams & delivery semantics |
| [Case study: payments, ledgers & uncertain outcomes](../index.html#/lesson/payments) | Applied | API contracts: retries, pagination & compatible evolution, Isolation anomalies, MVCC & locking, Queues, streams & delivery semantics, Sagas, CQRS & event sourcing |
| [Case study: search, indexing & document pipelines](../index.html#/lesson/search-platform) | Applied | Queues, streams & delivery semantics, B-trees, LSM trees & query plans, Stream processing, windows & late events, Threat modeling & trust boundaries |

### Architecture and evolution

Own boundaries, recovery, migration, evidence, and economics.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Domain boundaries: modular monoliths & microservices](../index.html#/lesson/domain-boundaries) | Advanced | The SDE 2 design conversation, Object modeling & invariants, Data models, indexes & transactions |
| [Multi-region design & disaster recovery](../index.html#/lesson/multi-region) | Advanced | Consistency, CAP & consensus, Replication, sharding & hot keys, WAL, checkpoints, backups & restore |
| [Safe migrations & the strangler pattern](../index.html#/lesson/migrations) | Advanced | Domain boundaries: modular monoliths & microservices, CI/CD, rollout strategies & schema evolution, WAL, checkpoints, backups & restore |
| [Architectural decisions, quality attributes & governance](../index.html#/lesson/architecture-decisions) | Advanced | Domain boundaries: modular monoliths & microservices, Multi-region design & disaster recovery |
| [Performance, capacity & cost architecture](../index.html#/lesson/cost-performance) | Advanced | Capacity estimates & latency budgets, Metrics, logs, traces & useful SLOs, How a computer executes your program |

## LLD

### Object-oriented foundations

Learn state, behavior, identity, relationships, and Java contracts.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Objects from zero: state, behavior & encapsulation](../index.html#/lesson/oop-foundations) | Foundation | None |
| [Inheritance, interfaces & dynamic dispatch](../index.html#/lesson/inheritance-polymorphism) | Core | Objects from zero: state, behavior & encapsulation |
| [Object relationships, ownership & useful UML](../index.html#/lesson/relationships-uml) | Core | Objects from zero: state, behavior & encapsulation |
| [Java equality, generics & collection contracts](../index.html#/lesson/java-contracts) | Core | Object modeling & invariants |

### Design a working feature

Turn scenarios and invariants into a small coherent model.

| Lesson | Level | Prerequisites |
|---|---|---|
| [A complete LLD conversation: from rules to executable design](../index.html#/lesson/lld-method) | Foundation | Objects from zero: state, behavior & encapsulation, Object relationships, ownership & useful UML |
| [Object modeling & invariants](../index.html#/lesson/object-modeling) | Foundation | Objects from zero: state, behavior & encapsulation |
| [SOLID & composition](../index.html#/lesson/solid) | Core | Object modeling & invariants, Objects from zero: state, behavior & encapsulation |
| [Aggregates, invariants & domain events](../index.html#/lesson/domain-aggregates) | Advanced | Object modeling & invariants, Isolation anomalies, MVCC & locking, Domain boundaries: modular monoliths & microservices |
| [Ports, adapters & clean dependency boundaries](../index.html#/lesson/hexagonal) | Advanced | SOLID & composition, Aggregates, invariants & domain events |

### Patterns through requirements

Introduce variation and lifecycle patterns for concrete reasons.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Strategy, factory & dependency injection](../index.html#/lesson/strategy-factory) | Core | SOLID & composition |
| [Observer, decorator & adapter](../index.html#/lesson/observer-decorator) | Core | SOLID & composition |
| [State machines & valid transitions](../index.html#/lesson/state-machines) | Core | Object modeling & invariants |
| [Command, builder, chain & template patterns](../index.html#/lesson/pattern-toolbox) | Core | Strategy, factory & dependency injection, Observer, decorator & adapter |

### Concurrency and resource ownership

Protect compound invariants and handle stale or repeated execution.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Concurrency, locks & idempotency](../index.html#/lesson/concurrency) | Advanced | Mutexes, semaphores & condition variables |
| [Case study: LRU cache](../index.html#/lesson/lru-cache) | Applied | Heaps & top-k patterns, Java equality, generics & collection contracts |
| [Case study: durable job scheduler](../index.html#/lesson/job-scheduler) | Applied | Heaps & top-k patterns, Concurrency, locks & idempotency, Queues, streams & delivery semantics, State machines & valid transitions |

### Complete LLD exercises

Follow a feature through state changes, errors, and tests.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Case study: parking lot](../index.html#/lesson/parking) | Applied | Strategy, factory & dependency injection, Concurrency, locks & idempotency |
| [Case study: elevator controller](../index.html#/lesson/elevator) | Applied | State machines & valid transitions |
| [Case study: expense sharing](../index.html#/lesson/splitwise) | Applied | Object modeling & invariants, Isolation anomalies, MVCC & locking |
| [Case study: seat booking & payments](../index.html#/lesson/booking) | Applied | State machines & valid transitions, Concurrency, locks & idempotency, APIs, networking & load balancing |
| [Case study: an in-memory hierarchical file store](../index.html#/lesson/file-system) | Applied | Object relationships, ownership & useful UML, Java equality, generics & collection contracts |
| [Case study: a turn-based game with explicit state transitions](../index.html#/lesson/board-game) | Applied | State machines & valid transitions, Objects from zero: state, behavior & encapsulation |

### Testing the design

Prove observable behavior with controlled dependencies.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Testing contracts & presenting LLD](../index.html#/lesson/testing-design) | Core | Object modeling & invariants |

## CS

### Language and machine

Connect source, objects, instructions, and memory visibility.

| Lesson | Level | Prerequisites |
|---|---|---|
| [How a computer executes your program](../index.html#/lesson/computer-architecture) | Foundation | None |
| [Compilation, linking, runtimes & garbage collection](../index.html#/lesson/compilers) | Core | How a computer executes your program |
| [OOP under the hood: binding, copying & object lifetime](../index.html#/lesson/oop-runtime) | Core | Objects from zero: state, behavior & encapsulation, Inheritance, interfaces & dynamic dispatch |
| [CPU caches, atomics & memory ordering](../index.html#/lesson/memory-model) | Advanced | How a computer executes your program, Mutexes, semaphores & condition variables |

### OS processes and coordination

Understand execution, scheduling, communication, waiting, and deadlock.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Processes, threads & system calls](../index.html#/lesson/os-process) | Foundation | How a computer executes your program |
| [CPU scheduling & queueing](../index.html#/lesson/os-scheduling) | Core | Processes, threads & system calls |
| [Processes communicating: pipes, shared memory & sockets](../index.html#/lesson/os-ipc) | Core | Processes, threads & system calls |
| [Mutexes, semaphores & condition variables](../index.html#/lesson/os-sync) | Core | Processes, threads & system calls |
| [Mutexes, semaphores, monitors & coordination problems](../index.html#/lesson/os-semaphores) | Core | Mutexes, semaphores & condition variables |
| [Deadlocks, starvation & livelock](../index.html#/lesson/os-deadlocks) | Core | Mutexes, semaphores & condition variables |
| [Deadlock avoidance: work through the Banker safety test](../index.html#/lesson/os-bankers) | Advanced | Deadlocks, starvation & livelock |

### OS memory and storage

Trace mappings, allocation, files, devices, and I/O pressure.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Virtual memory, paging & page faults](../index.html#/lesson/os-memory) | Core | Processes, threads & system calls, How a computer executes your program |
| [Memory allocation, fragmentation & replacement policies](../index.html#/lesson/os-allocation) | Core | Virtual memory, paging & page faults |
| [Filesystems, durability & crash consistency](../index.html#/lesson/os-files) | Core | Virtual memory, paging & page faults |
| [Files, allocation layouts & disk scheduling](../index.html#/lesson/os-disk) | Core | Filesystems, durability & crash consistency |
| [Blocking I/O, event loops & backpressure](../index.html#/lesson/os-io) | Core | Processes, threads & system calls, Mutexes, semaphores & condition variables |

### Network addressing

Follow names, addresses, links, and routing decisions.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Packets, layers & encapsulation](../index.html#/lesson/net-layers) | Foundation | Processes, threads & system calls |
| [IP addressing, CIDR, NAT & IPv6](../index.html#/lesson/net-subnets) | Core | Packets, layers & encapsulation |
| [Ethernet, ARP, switching & error detection](../index.html#/lesson/net-link) | Core | IP addressing, CIDR, NAT & IPv6 |
| [Subnets, routing, NAT & network diagnosis](../index.html#/lesson/net-routing) | Core | Packets, layers & encapsulation, TCP, UDP, QUIC & stream framing |
| [DNS resolution, caching & service discovery](../index.html#/lesson/net-dns) | Core | Packets, layers & encapsulation |

### Network protocols and diagnosis

Trace a connection and application request, then diagnose by evidence.

| Lesson | Level | Prerequisites |
|---|---|---|
| [TCP, UDP, QUIC & stream framing](../index.html#/lesson/net-tcp) | Core | Packets, layers & encapsulation |
| [TCP connections: handshake, windows & graceful close](../index.html#/lesson/net-transport-lifecycle) | Core | TCP, UDP, QUIC & stream framing |
| [HTTP semantics, caching & browser requests](../index.html#/lesson/net-http) | Core | TCP, UDP, QUIC & stream framing, DNS resolution, caching & service discovery |
| [TLS, certificates & trust boundaries](../index.html#/lesson/net-tls) | Core | HTTP semantics, caching & browser requests |
| [Application protocols: HTTP, mail, file transfer & sessions](../index.html#/lesson/net-application-protocols) | Core | HTTP semantics, caching & browser requests, DNS resolution, caching & service discovery, TLS, certificates & trust boundaries |
| [From URL to response: diagnose one layer at a time](../index.html#/lesson/net-diagnostics) | Core | Application protocols: HTTP, mail, file transfer & sessions, Subnets, routing, NAT & network diagnosis, Ethernet, ARP, switching & error detection |

### Database query reasoning

Model relations and predict query rows, indexes, and rankings.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Relational modeling, SQL joins & NULL](../index.html#/lesson/db-relational) | Foundation | None |
| [Normalization, dependencies & denormalization](../index.html#/lesson/db-normalization) | Core | Relational modeling, SQL joins & NULL |
| [B-trees, LSM trees & query plans](../index.html#/lesson/db-indexes) | Core | Relational modeling, SQL joins & NULL, Data models, indexes & transactions |
| [SQL joins, grouping & NULL: predict the rows first](../index.html#/lesson/db-joins) | Core | Relational modeling, SQL joins & NULL |
| [SQL window functions: ranking without collapsing rows](../index.html#/lesson/db-windows) | Core | SQL joins, grouping & NULL: predict the rows first |

### Database correctness

Protect transactions, recover data, and compare storage models.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Isolation anomalies, MVCC & locking](../index.html#/lesson/db-isolation) | Advanced | Relational modeling, SQL joins & NULL, Mutexes, semaphores & condition variables, Data models, indexes & transactions |
| [Transactions: lost updates, locks & retry boundaries](../index.html#/lesson/db-locking) | Advanced | Isolation anomalies, MVCC & locking |
| [WAL, checkpoints, backups & restore](../index.html#/lesson/db-recovery) | Advanced | Isolation anomalies, MVCC & locking, Filesystems, durability & crash consistency |
| [Relational, document, key-value, column & graph models](../index.html#/lesson/db-nosql) | Core | Relational modeling, SQL joins & NULL, Data models, indexes & transactions |

### Security foundations

Connect threats, identity, authorization, cryptography, and web boundaries.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Threat modeling & trust boundaries](../index.html#/lesson/security-threats) | Core | TLS, certificates & trust boundaries, Object modeling & invariants |
| [Sessions, OAuth, OIDC & authorization](../index.html#/lesson/security-auth) | Core | HTTP semantics, caching & browser requests, TLS, certificates & trust boundaries |
| [Hashing, encryption, passwords & keys](../index.html#/lesson/security-crypto) | Core | TLS, certificates & trust boundaries |
| [Injection, XSS, CSRF & secure input handling](../index.html#/lesson/security-web) | Core | Threat modeling & trust boundaries, HTTP semantics, caching & browser requests, Relational modeling, SQL joins & NULL |

### Engineering practice

Ship, observe, test, and debug software with reviewable evidence.

| Lesson | Level | Prerequisites |
|---|---|---|
| [Git, code review & change safety](../index.html#/lesson/eng-git) | Foundation | None |
| [Unit, integration, contract & property tests](../index.html#/lesson/eng-testing) | Core | Git, code review & change safety, Testing contracts & presenting LLD |
| [CI/CD, rollout strategies & schema evolution](../index.html#/lesson/eng-delivery) | Core | Git, code review & change safety, Unit, integration, contract & property tests |
| [Containers, orchestration & resource limits](../index.html#/lesson/eng-containers) | Core | Processes, threads & system calls, Virtual memory, paging & page faults, CI/CD, rollout strategies & schema evolution |
| [Metrics, logs, traces & useful SLOs](../index.html#/lesson/eng-observability) | Core | Reliability, retries & observability, HTTP semantics, caching & browser requests |
| [Debugging, profiling & incident response](../index.html#/lesson/eng-debugging) | Core | Metrics, logs, traces & useful SLOs, Blocking I/O, event loops & backpressure |

