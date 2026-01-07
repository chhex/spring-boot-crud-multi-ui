[![CI (frontend + backend + docker)](https://github.com/chhex/spring-boot-crud-multi-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/chhex/spring-boot-crud-multi-ui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

# Multi UI's & Spring Boot CRUD Backend

Revisited Baeldung Tutorial CRUD Application with intiallty with React and Spring Boot — see [https://www.baeldung.com/spring-boot-react-crud](https://www.baeldung.com/spring-boot-react-crud)

I migrated the initial tutorial to the Vite starter [Template Vitamin 2.0](https://github.com/wtchnm/Vitamin), see [spring-boot-react-crud-revisited2](https://github.com/chhex/spring-boot-react-crud-revisited2)

The intention of this project is to show 3 different Frontend Stacks (React, Svelte and Spring MVS with Thymeleaf) using the same Spring Boot Server Backend.

Rather than showcasing a single framework, the goal is to examine how architectural decisions change when using:

* server-side MVC (Thymeleaf)
* client-side SPAs (e.g. Svelte, React)

while keeping the domain model, validation rules, persistence layer, and error semantics identical.

By sharing one backend across multiple UI paradigms, the differences become explicit:

* where validation belongs
* how errors are propagated and handled
* how much state lives on the client vs the server
* and how complexity, maintainability, and developer experience evolve.

The intent is not to declare a “best” approach, but to make trade-offs visible and concrete through working code and thus make change and evolution of code possible. 

This is work in progress.

