# Metadata Standard

## Purpose

Metadata helps make projects easier to find, compare, reference, and connect.

The goal is not bureaucracy.
The goal is navigability.

Clear metadata allows contributors to understand quickly:

- what a project is about,
- who is responsible for it,
- what stage it is in,
- what concepts it uses,
- and where collaboration may be possible.

---

# Recommended Metadata Block

Each project entry page may include a metadata block at the top of the file.

Example:

```yaml
---
title: Information Distinction Theory
authors:
  - Isaid Cornejo
status: exploratory
formality: partial
tags:
  - information
  - distinction
  - geometry
languages:
  - en
  - es
related_projects: []
last_updated: 2026-05-10
---
```

---

# Fields

## `title`

The full name of the project.

---

## `authors`

The people responsible for developing or maintaining the project page.

---

## `status`

The current stage of the project.

Suggested values:

- idea
- exploratory
- conceptual
- partially-formalized
- formalized
- computational
- under-validation
- published

---

## `formality`

The current level of technical maturity.

Suggested values:

- intuition
- exploratory
- partial
- formal
- validation
- speculative

---

## `tags`

Keywords that help others find the project.

Tags should be simple and descriptive.

Examples:

- information
- geometry
- complexity
- cognition
- thermodynamics
- computation

---

## `languages`

Languages currently available for the project page.

Example:

```yaml
languages:
  - en
  - es
```

---

## `related_projects`

Other projects that may be conceptually, mathematically, or methodologically related.

This field should encourage integration before duplication.

---

## `last_updated`

The last meaningful update to the project page.

Use ISO format:

```yaml
last_updated: 2026-05-10
```

---

# Local Project Concepts

Projects may define their own important concepts locally.

This may include:

- key terms,
- internal definitions,
- notation,
- conceptual assumptions,
- domain-specific translations,
- or distinctions from similar terms used elsewhere.

The platform does not impose a universal conceptual ontology across all projects.

Instead, each project should make its own conceptual structure clear enough for others to understand and evaluate.

---

# Minimal Required Metadata

At minimum, each project should include:

```yaml
---
title:
authors:
status:
tags:
last_updated:
---
```

---

# Principle

Metadata should reduce friction, not create administrative weight.

Use enough structure to make the project discoverable and understandable, but not so much that contributors need a ceremonial robe and three approvals to write a paragraph.
