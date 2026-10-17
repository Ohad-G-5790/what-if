# What-IF — Product Vision

## One-line vision

**What-IF helps small-business owners explore what could happen before they make their next big or small decision.**

## Product promise

Small businesses do not need another dashboard full of numbers. They need to know what to try next.

What-IF is an AI plugin that turns a business owner's real information into clear, practical “what if?” scenarios. An owner can ask what might happen if they change a price, launch an offer, increase marketing spend, extend opening hours, hire someone, or respond to a local change. What-IF lays out plausible outcomes, explains what each outcome depends on, and suggests a low-risk next step.

What-IF does not claim to predict the future. It helps owners make better-informed decisions by showing possible futures and the assumptions behind them.

## The problem

Owners of independent businesses make consequential decisions with limited time, fragmented information, and little access to financial or marketing expertise. They may have sales figures, costs, social-media performance, customer feedback, and local news, but those signals rarely come together in a form that answers a practical question:

- Can I afford to try this promotion?
- What would a small price change do to revenue and margins?
- Is a slow month a temporary dip or a trend I should act on?
- Would this marketing idea be worth testing?
- What local changes could affect my customers or operating costs?

A traditional dashboard can show what already happened. A generic chatbot can suggest possibilities, but it may lack the business's actual numbers, local evidence, and a consistent way to model trade-offs.

## Who it is for

The first users are owners and managers of independent, neighborhood businesses who make frequent operating and marketing decisions but do not have an in-house analyst or finance team.

For the hackathon, the initial example is a Berlin café. The product can later adapt to other local businesses such as restaurants, shops, salons, and service providers, with appropriate data and assumptions for each category.

## The core experience

1. **Ask a decision question.** The owner asks a question in ordinary language, such as “What if I run a weekday lunch offer?”
2. **Understand the business.** What-IF uses information the owner has provided or connected, such as average spend, customer volume, costs, cash position, marketing results, or opening hours.
3. **Add relevant context.** Where useful, What-IF brings in dated, sourced external signals, such as nearby competitor activity or a published local development plan. It distinguishes observed facts from estimates and interpretation.
4. **Compare possibilities.** What-IF shows a small set of scenarios—such as cautious, expected, and optimistic—with the assumptions that drive each outcome.
5. **Choose a next step.** It recommends a small experiment, explains why it may help, and identifies what the owner should measure.
6. **Learn from the result.** The owner can report what happened. What-IF compares the result with the scenario and uses that learning to improve the next discussion.

## Product principles

### Possibilities, not promises

Use scenarios and ranges rather than presenting one outcome as certain. Make uncertainty visible and explain which assumptions matter most.

### Constructive honesty

Be supportive without hiding a difficult signal. If a business appears to be under pressure, explain what the available information suggests, what remains uncertain, and which practical steps the owner could consider.

### Evidence beside advice

Show where important data came from, when it was collected, and whether a statement is a fact, an estimate, or an inference. Never invent local statistics or imply access to private competitor information.

### Clear calculations

Use transparent, reproducible calculations for numeric projections. Use AI to interpret the owner's question, explain results in plain language, and help shape an experiment—not to fabricate financial outputs.

### Small actions first

Prefer low-cost, reversible tests before recommending large commitments. Help the owner learn before spending more time or money.

### Respectful use of business data

Give owners control over what they share and connect. Collect only what is needed for the scenario and explain how their information supports the result.

## What makes What-IF useful beyond a general AI model

A general model can brainstorm possible outcomes. What-IF should make those possibilities specific and reviewable by combining:

- structured information about the owner's business;
- transparent scenario calculations;
- relevant local and industry context with source dates;
- a repeatable decision workflow that ends in an experiment;
- follow-up on actual results, so the owner can learn over time.

The product's advantage is not simply generating advice. It is connecting the owner's data and context to an explainable decision and a feedback loop.

## Hackathon MVP

### Goal

Demonstrate one useful decision scenario for one Berlin café in a clear, short flow.

### Example question

“What if I run a weekday lunch offer to bring in more customers?”

### Inputs

Use a small, understandable set of manually entered or sample values, such as:

- average customers per weekday;
- average spend per customer;
- estimated variable cost per sale;
- monthly fixed costs or a simplified operating-cost figure;
- the proposed offer and its expected cost;
- an estimated change in customer visits, clearly marked as an assumption.

### Output

- a simple current path and a comparison of possible offer scenarios;
- estimated impact on revenue and gross contribution, with assumptions shown;
- a brief explanation of the biggest uncertainty;
- one small test the owner could run before expanding the offer;
- a simple measure to check after the test, such as redemptions or weekday customer count.

For the prototype, use sample data or a short form. Do not imply that live bank, accounting, social-media, or competitor integrations are already available. Clearly label demo data and estimates.

## Longer-term direction

### Stage 1: Decision coach

Support a few common questions with owner-provided data and transparent scenario logic.

### Stage 2: Connected business context

Let owners optionally connect finance, sales, and social-media tools so scenarios can use more current business information. Use public competitor activity only where it is permitted and clearly distinguish it from private account analytics.

### Stage 3: Local context and business-specific learning

Add reliable, dated local signals—such as relevant public plans, neighborhood changes, seasonality, and business-category benchmarks. Track which recommendations owners tried and what happened, so future guidance becomes more relevant to their business.

### Stage 4: Growth actions

Help owners turn a chosen scenario into practical work: draft a campaign, prepare a social post, create an offer, or set up a simple loyalty reward. These actions should remain optional and connected to a measurable goal.

## What-IF is not

- a fortune teller or a guarantee of business success;
- a substitute for an accountant, lawyer, lender, or qualified professional;
- a generic analytics dashboard that adds more charts without helping the owner decide;
- a system that claims to know competitor revenue, private customer data, or the exact effects of a local news story;
- an autonomous system that makes consequential business changes without the owner's review.

## How to measure progress

Early success should be measured by whether owners understand and use the scenarios, not by how sophisticated the charts look. Useful measures include:

- whether an owner can explain the scenario's assumptions after seeing it;
- whether the recommended experiment feels relevant and feasible;
- whether the owner tries the experiment;
- whether they return to compare the result with the scenario;
- whether repeat use helps them make decisions with greater clarity.

## Short pitch

> Small businesses don’t need another dashboard full of numbers. They need to know what to try next. What-IF is an AI plugin that helps business owners explore possible futures before they make a decision. Ask “What if I change my prices?” or “What if I run this offer?” What-IF uses the business’s information to compare plausible outcomes, explain the assumptions, and suggest a low-risk next step. It doesn’t claim to predict the future—it helps owners make a more informed move.
