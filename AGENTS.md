# AGENTS.md

> Version: 1.0
>
> Project: Mansi Industries Website
>
> This document is the permanent operating manual for every AI agent working on this repository.
>
> Every implementation, refactor, design decision, UI improvement, architecture change and code modification must follow this document.

---

# SECTION 1 — PROJECT MISSION

## Mission

Build the official digital flagship for **Mansi Industries**, a premium Indian manufacturer of 100% melamine tableware.

The website is not merely a marketing website.

It is the digital representation of the company itself.

Every decision should strengthen three perceptions:

- Manufacturing Excellence
- Professional Trust
- Premium Product Quality

The website should immediately communicate that Mansi Industries is an established manufacturer capable of supplying hotels, restaurants, caterers, dealers and distributors across India.

---

# Primary Goal

Generate qualified wholesale enquiries.

Every page should ultimately guide visitors toward requesting a quotation.

Everything else is secondary.

---

# Secondary Goals

Present products beautifully.

Increase trust.

Demonstrate manufacturing quality.

Improve brand perception.

Provide a frictionless browsing experience.

Allow buyers to quickly prepare quotation requests.

---

# What This Website Is NOT

This website is NOT:

- An ecommerce website
- A D2C brand
- A shopping website
- A marketplace
- A startup landing page
- A SaaS product
- A Shopify store
- A Bootstrap template

Never implement features commonly associated with consumer ecommerce unless explicitly requested.

---

# Target Audience

Primary audience:

- Hotels
- Restaurants
- Caterers
- Dealers
- Distributors
- Hospitality procurement teams
- Institutional buyers

Secondary audience:

- Interior designers
- Architects
- Hospitality consultants
- Commercial kitchen planners
- Export buyers

Every design decision should optimize for these users rather than retail consumers.

---

# User Intent

Typical visitor intentions include:

"I need a supplier."

"I need bulk quantities."

"I want premium products."

"I need a catalogue."

"I need pricing."

"I need to contact sales."

The website should help users achieve these objectives as quickly as possible.

---

# Business Model

Mansi Industries is a manufacturer.

Products are sold in wholesale quantities.

Retail purchases are not supported.

Single-piece ordering is unavailable.

Pricing displayed on the website represents reference pricing only.

Final wholesale pricing is determined through direct enquiry.

Quote requests are handled via WhatsApp or direct communication.

---

# Project Success Criteria

The project is successful only if a first-time visitor immediately understands:

- This company manufactures premium melamine tableware.
- Products are intended for commercial use.
- Orders are wholesale only.
- The company appears trustworthy.
- Browsing products is effortless.
- Contacting the company is simple.

---

# Long-Term Vision

The website should remain maintainable for years.

It should be easy to:

Add products.

Remove products.

Modify pricing.

Replace images.

Introduce new collections.

Expand into export markets.

Scale without requiring a complete redesign.

Every engineering decision should consider long-term maintainability.

---

# SECTION 2 — SOURCE OF TRUTH

Whenever conflicting information exists, use the following priority order.

## Level 1

docs/master-prompt.md

This file defines the overall project requirements.

Nothing should contradict it.

---

## Level 2

docs/brand.md

Defines:

Business

Customers

Brand positioning

Website goals

---

## Level 3

docs/design-principles.md

Defines:

Visual language

Layout

Typography

Spacing

Interaction philosophy

---

## Level 4

Uploaded Catalogue

The catalogue defines:

Collections

Product names

Product codes

Specifications

Reference pricing

---

## Level 5

Uploaded Product Images

Images must always correspond to the correct products.

Never reuse unrelated photographs.

---

## Level 6

Structured Product Data

Spreadsheet

JSON

Database

Structured data overrides manually typed values whenever inconsistencies occur.

---

# Repository Rule

Never invent information.

If information is missing,

ask,

or leave placeholders clearly marked for later completion.

Never fabricate:

Statistics

Years in business

Manufacturing capacity

Awards

Certifications

Customer counts

Export numbers

Testimonials

Client logos

---

# SECTION 3 — WORKING PHILOSOPHY

Every task should follow the same workflow.

## Step 1

Understand.

Read every relevant file.

Understand existing architecture.

Understand dependencies.

Understand business implications.

Never start coding immediately.

---

## Step 2

Plan.

Produce a concise implementation plan.

Consider:

Maintainability

Performance

Accessibility

Scalability

User experience

Only after planning should implementation begin.

---

## Step 3

Implement.

Write clean, reusable code.

Prefer composition over duplication.

Separate business logic from presentation.

Follow existing architecture.

Avoid shortcuts.

---

## Step 4

Review.

Review your own implementation before considering it complete.

Check:

Responsiveness

Accessibility

Code quality

Performance

SEO

Consistency

Fix issues immediately.

---

## Step 5

Refine.

If something feels:

Generic

Template-like

Visually weak

Overcomplicated

Inconsistent

Redesign it before moving forward.

Good enough is not acceptable.

---

# Engineering Philosophy

Every implementation should optimize for:

Maintainability

Readability

Scalability

Performance

Accessibility

Consistency

Not development speed.

---

# Design Philosophy

Every screen should feel intentionally designed.

Prefer:

Large whitespace.

Elegant typography.

Large imagery.

Editorial layouts.

Minimal distractions.

Purposeful interactions.

Never add decorative elements simply because space exists.

Empty space is part of the design.

---

# Quality Philosophy

Every feature should appear as though it was designed by an experienced product designer and implemented by a senior frontend engineer.

If the feature appears AI-generated,

continue refining until it does not.

---

# SECTION 4 — AI AGENT BEHAVIOUR

Every AI agent working in this repository must behave like a senior software engineer with strong frontend, UX and product design experience.

Never blindly implement.

Challenge poor decisions.

Suggest better alternatives.

Explain trade-offs.

Prefer maintainable solutions over quick solutions.

Never introduce unnecessary complexity.

When several valid approaches exist,

choose the solution that best reflects:

Premium design

Long-term maintainability

Strong user experience

Performance

Accessibility

Clean architecture

Every code modification should improve the project rather than merely satisfy the immediate request.

End every completed task with a silent self-review before considering the work finished.
---

# SECTION 5 — REPOSITORY ARCHITECTURE

## Core Principle

Every file in this repository must have a single, well-defined responsibility.

A file should answer one question clearly.

Avoid files that become responsible for multiple unrelated concerns.

The architecture should make it immediately obvious where new features belong.

A developer unfamiliar with the project should be able to understand the repository structure within minutes.

---

## Architectural Principles

The architecture must prioritize:

- Simplicity
- Predictability
- Scalability
- Maintainability
- Reusability
- Separation of Concerns

Every architectural decision should reduce future complexity rather than create it.

---

## Folder Responsibilities

Each folder has a clearly defined purpose.

### components/

Reusable UI building blocks.

Examples:

- Buttons
- Cards
- Product tiles
- Navigation
- Footer
- Modal
- Badge
- Inputs

Components should never fetch data directly.

Components should never know where data comes from.

Components should only render UI.

---

### pages/

Route-level pages.

A page is responsible for:

- Page layout
- Fetching page data
- Composing components

Pages should avoid large amounts of business logic.

---

### layouts/

Reusable page structures.

Examples:

- Main Layout
- Catalogue Layout
- Admin Layout

Layouts manage page composition.

Layouts do not contain business logic.

---

### data/

Static structured content.

Examples:

- Product catalog
- Categories
- Collections
- Company information

Never hardcode product information inside React components.

---

### assets/

Images

Icons

Videos

Illustrations

Fonts

Brand assets

Never place business logic inside assets.

---

### hooks/

Reusable React hooks.

A hook should encapsulate one reusable behavior.

Examples:

- useWindowSize
- useScrollPosition
- useMediaQuery

Avoid hooks that perform multiple unrelated responsibilities.

---

### services/

Communication with external systems.

Examples:

- API
- WhatsApp generation
- Future CMS integration

Services should never render UI.

---

### utils/

Pure helper functions.

A utility:

- receives input
- returns output

Utilities should never:

- manipulate DOM
- fetch data
- render UI

---

### constants/

Application constants.

Examples:

Categories

Routes

Breakpoints

Theme values

Business constants

---

### types/

Global TypeScript interfaces.

Avoid duplicate interfaces.

Prefer shared types.

---

# SECTION 6 — FILE ORGANIZATION

Keep files small.

A file exceeding roughly 300–400 lines should be evaluated for splitting into smaller modules.

Avoid "God files."

Large files become difficult to review, maintain and extend.

---

## One Component Per File

Every reusable component belongs in its own file.

Avoid defining multiple unrelated components inside a single file.

---

## Co-location

Keep files that evolve together close together.

Example:

ProductCard/

- ProductCard.tsx
- ProductCard.types.ts
- ProductCard.test.tsx
- ProductCard.module.css (if applicable)

This improves discoverability.

---

# SECTION 7 — NAMING CONVENTIONS

Names should describe intent rather than implementation.

Good:

ProductCard

QuoteDrawer

HeroSection

CatalogueFilter

ProductGallery

Poor:

Card2

TempComponent

DataThing

Helper123

NewComponent

---

## Variables

Prefer descriptive names.

Good:

selectedCategory

filteredProducts

quoteItems

isDrawerOpen

Avoid abbreviations unless universally understood.

Bad:

sp

tmp

arr2

val

---

## Functions

Functions should read like actions.

Good:

calculateQuote()

filterProducts()

formatPrice()

generateWhatsAppMessage()

Bad:

doThing()

run()

execute()

handler2()

---

## Booleans

Boolean variables should read naturally.

Good:

isLoading

isSelected

isVisible

hasProducts

canSubmit

Avoid:

loading

flag

status

value

---

# SECTION 8 — REACT STANDARDS

React components should remain predictable.

A component should ideally have one responsibility.

Avoid components that simultaneously:

- fetch data
- transform data
- manage complex state
- render large UI trees

Split responsibilities into smaller components.

---

## Component Structure

Preferred order:

Imports

Types

Constants

Hooks

Derived values

Functions

Return statement

Export

Maintain consistency across every component.

---

## Props

Props should be explicit.

Avoid passing entire objects unless necessary.

Prefer:

ProductCard

receives

title

image

price

code

rather than a massive generic object unless the object naturally represents a domain model.

---

## State

Keep state as close as possible to where it is used.

Do not lift state unnecessarily.

Avoid prop drilling through many component levels.

When complexity increases, introduce appropriate state management rather than passing props through deeply nested trees.

---

## Side Effects

Side effects belong inside `useEffect`.

Never perform side effects directly during rendering.

Effects should remain focused.

Each effect should ideally address one concern.

---

## Memoization

Do not use `useMemo` or `useCallback` prematurely.

Introduce memoization only when there is a measurable performance benefit or to stabilize dependencies.

Readability is generally more valuable than unnecessary optimization.

---

# SECTION 9 — TYPESCRIPT STANDARDS

Use strict typing throughout the project.

Avoid `any`.

If a type is unknown, prefer `unknown` and refine it safely.

---

## Interfaces

Use interfaces for object shapes that may be extended.

Use type aliases for unions, mapped types, and utility types.

---

## Shared Types

If multiple components use the same domain model, define it once and reuse it.

Avoid duplicate type definitions across the project.

---

## Enums

Prefer literal union types unless a true enum provides clear value.

Example:

type Category =
  | "Dinner Set"
  | "Plate"
  | "Bowl";

This keeps types lightweight and easier to maintain.

---

## Type Safety

Never silence the compiler with unnecessary type assertions.

Prefer solving the underlying typing issue.

Compiler errors should guide better architecture rather than be bypassed.

---

# SECTION 10 — TAILWIND CSS STANDARDS

Tailwind should be used consistently.

Utility classes should remain readable.

Avoid extremely long, unstructured class lists.

If repeated utility combinations emerge, extract reusable components instead of copying class strings.

---

## Spacing

Use a consistent spacing scale.

Avoid arbitrary pixel values unless absolutely necessary.

Whitespace is an intentional design tool and should not be added or removed randomly.

---

## Responsive Design

Design mobile-first.

Enhance layouts progressively for larger screens.

Avoid desktop-first implementations that require excessive overrides.

---

## Colors

Never use random hex values directly in components.

All colors should originate from the project's design tokens or Tailwind configuration.

This ensures consistency across the entire application.

---

## Typography

Follow the typography hierarchy defined in `docs/design-principles.md`.

Do not create one-off text styles.

Every heading, paragraph, label, and caption should align with the established design system.

---

# SECTION 11 — ERROR HANDLING

Applications should fail gracefully.

Never expose raw JavaScript errors to users.

Provide clear, actionable feedback where appropriate.

Log useful debugging information during development without cluttering production output.

---

# SECTION 12 — FUTURE SCALABILITY

Every implementation should assume that the project will grow.

Future additions may include:

- CMS integration
- Authentication
- Export catalogue
- Dealer portal
- Multi-language support
- Additional product collections
- Search indexing
- Analytics dashboards

Current architectural decisions should make these future enhancements easier rather than more difficult.

Design for growth without introducing unnecessary complexity today.
---

# SECTION 13 — DESIGN PHILOSOPHY

## Core Principle

Every interface should communicate quality before the user reads a single word.

Users form an opinion within seconds.

That opinion should be:

- Premium
- Professional
- Trustworthy
- Modern
- Elegant
- Purposeful

The interface should never feel crowded, noisy or generic.

Every element must exist for a reason.

If an element does not improve usability, clarity or storytelling, it should not exist.

---

## Design Identity

The visual identity should resemble a luxury industrial brand rather than a retail storefront.

The experience should feel closer to browsing an architectural magazine than an online shopping website.

The website should communicate confidence through restraint.

Never attempt to impress users through excessive decoration.

Instead, impress them through:

- Layout
- Typography
- Photography
- White space
- Consistency
- Precision

---

## Emotional Response

Every visitor should subconsciously feel:

"This company looks established."

"This company looks professional."

"This company pays attention to detail."

"If their website is this refined, their products are likely to be of similar quality."

The interface should quietly build trust rather than aggressively demand attention.

---

# SECTION 14 — VISUAL HIERARCHY

Visual hierarchy is one of the most important aspects of the design.

Users should always know:

1. Where to look first.
2. What is important.
3. What action comes next.

Every page should establish a clear reading order.

Never allow multiple elements to compete equally for attention.

---

## Hierarchy Rules

Large elements communicate importance.

Whitespace creates separation.

Typography creates emphasis.

Photography attracts attention.

Color should reinforce hierarchy rather than create it.

Movement should support hierarchy, not replace it.

---

## Priority Order

When designing a page, prioritize information in this order:

1. Product imagery
2. Page heading
3. Supporting description
4. Primary call-to-action
5. Secondary actions
6. Additional details

If users are uncertain where to look first, the hierarchy has failed.

---

# SECTION 15 — LAYOUT PRINCIPLES

Layout should create rhythm.

A page should feel calm rather than dense.

Avoid placing too many sections close together.

Give content room to breathe.

Whitespace is an active design element.

It should never be treated as empty space that needs filling.

---

## Alignment

Maintain consistent alignment throughout the interface.

Avoid arbitrary positioning.

Elements should align to a predictable grid.

Misalignment creates an impression of poor craftsmanship.

---

## Balance

Every page should feel visually balanced.

Avoid clustering all content into one area.

Large visual elements should be balanced by generous spacing.

Dense sections should be followed by calmer sections.

The page should have a natural visual rhythm.

---

## Section Flow

Each section should transition naturally into the next.

Users should never feel abruptly moved between unrelated content.

The page should tell a story.

---

# SECTION 16 — TYPOGRAPHY PRINCIPLES

Typography is one of the strongest indicators of quality.

Choose clarity over decoration.

Typography should support the content rather than compete with it.

---

## Headings

Headings should be concise.

Avoid overly long headlines.

Good headings are memorable and direct.

Every heading should communicate one primary idea.

---

## Body Text

Body text should be highly readable.

Avoid long paragraphs.

Break complex information into smaller sections.

Line length should remain comfortable for reading.

---

## Consistency

Maintain a consistent type hierarchy.

Each heading level should have a clearly defined purpose.

Never create one-off font sizes for individual components.

---

## Text Alignment

Use left alignment for nearly all body content.

Avoid centered paragraphs.

Centered text should be reserved for short, intentional moments such as hero sections or key messages.

---

# SECTION 17 — COLOR PHILOSOPHY

Color should support the content, not dominate it.

The products should remain the most colorful part of the interface.

The surrounding interface should feel restrained and sophisticated.

---

## Color Usage

Use color intentionally.

Avoid decorative color.

Every color should communicate meaning.

Examples include:

- Primary actions
- Success states
- Errors
- Warnings
- Interactive elements

Color should never be used simply to make the interface appear more exciting.

---

## Contrast

Maintain strong contrast for readability.

Text should always remain legible.

Interactive elements should clearly communicate their state.

Accessibility must never be sacrificed for aesthetics.

---

# SECTION 18 — COMPONENT DESIGN

Every reusable component should follow the same design language.

Users should immediately recognize related components.

Consistency builds familiarity.

Familiarity builds trust.

---

## Simplicity

Components should solve one problem well.

Avoid adding optional features that increase complexity without improving usability.

When in doubt, remove rather than add.

---

## Consistency

Spacing

Corners

Typography

Animations

Padding

Shadows

Borders

Interaction states

should all remain consistent across similar components.

---

## Composition

Build complex interfaces by composing simple components.

Avoid creating large, monolithic components.

Smaller components are easier to:

- Understand
- Test
- Maintain
- Reuse

---

# SECTION 19 — IMAGERY

Photography is the strongest storytelling element on the website.

Images should demonstrate craftsmanship.

Poor imagery immediately reduces perceived product quality.

---

## Image Standards

Use only:

High-resolution

Professionally lit

Well-composed

Consistent

Authentic product photography.

Avoid cluttered backgrounds.

Avoid inconsistent lighting.

Avoid heavy editing.

---

## Product Images

Products should remain the hero.

Backgrounds should support the product rather than compete with it.

Maintain consistent framing across product collections.

Never distort images.

Never stretch aspect ratios.

Never crop products carelessly.

---

## Lifestyle Photography

Lifestyle imagery should communicate product usage in premium hospitality environments.

Scenes should feel authentic.

Avoid obvious stock photography.

---

# SECTION 20 — ICONOGRAPHY

Icons exist to improve comprehension.

They should never become decorative artwork.

Use icons sparingly.

Maintain consistent stroke weight, style and visual scale.

Avoid mixing icon libraries with noticeably different styles.

---

# SECTION 21 — MICROCOPY

Every word matters.

The interface should sound:

Professional

Friendly

Confident

Helpful

Never overly corporate.

Never overly casual.

Never exaggerated.

Avoid marketing clichés.

Avoid empty buzzwords.

Write like a knowledgeable business partner rather than a salesperson.

---

## Button Labels

Buttons should describe actions clearly.

Good examples:

Request Quote

Browse Collection

View Details

Contact Sales

Download Catalogue

Avoid vague labels such as:

Click Here

Learn More

Proceed

Submit

---

# SECTION 22 — TRUST SIGNALS

Trust should be established through evidence rather than claims.

Whenever possible, prioritize:

Real product photography

Clear specifications

Consistent branding

Professional layouts

Accurate information

Avoid artificial credibility indicators.

Never invent:

Awards

Customer counts

Years of experience

Certifications

Partner logos

Statistics

If information is unavailable, omit it rather than fabricate it.

---

# SECTION 23 — DESIGN REVIEW CHECKLIST

Before considering any interface complete, verify:

- Is the hierarchy immediately obvious?
- Does the layout feel balanced?
- Is there sufficient whitespace?
- Are components visually consistent?
- Is typography readable?
- Does the imagery reinforce quality?
- Are interactions intuitive?
- Does the interface feel premium?
- Would this design still look modern in five years?
- Does every element serve a purpose?

If the answer to any question is "no", continue refining the design before implementation is considered complete.
---

# SECTION 24 — USER EXPERIENCE PHILOSOPHY

## Core Principle

Every interaction should reduce friction.

Users should never need to think about how to use the interface.

The interface should feel obvious.

If a feature requires explanation, redesign the feature before adding instructions.

The best interface teaches itself.

---

## UX Goals

Every visitor should feel that the website is:

- Fast
- Calm
- Predictable
- Professional
- Effortless
- Trustworthy

Every interaction should move users closer to requesting a quotation.

---

## Decision Framework

Whenever designing a feature, ask:

- Is this obvious?
- Is this necessary?
- Does it reduce effort?
- Does it improve confidence?
- Does it help users accomplish their goal faster?

If the answer is "no", reconsider the implementation.

---

# SECTION 25 — NAVIGATION

Navigation is a map, not a menu.

Users should always know:

- Where they are.
- Where they can go.
- How to return.

Navigation should remain consistent across the entire website.

Never reorganize navigation between pages.

---

## Navigation Principles

Keep the primary navigation short and focused.

Avoid overwhelming users with excessive menu items.

Group related information logically.

Prioritize the most important user journeys.

---

## Active States

Users should always know which page is currently active.

Active navigation should be visually distinct but subtle.

Never rely solely on color to indicate active state.

---

## Sticky Navigation

If a sticky header is used:

- It should consume minimal vertical space.
- It should never hide content.
- It should appear and disappear smoothly.
- It should not distract from browsing.

---

# SECTION 26 — USER FLOWS

Every page exists to support a user journey.

Each journey should require the fewest reasonable steps.

Avoid unnecessary clicks.

Avoid unnecessary decisions.

Avoid unnecessary forms.

---

## Primary Journey

Landing Page

↓

Browse Collections

↓

View Product

↓

Add to Quote

↓

Review Quote

↓

Contact via WhatsApp

Every feature should strengthen this journey.

---

## Secondary Journeys

Visitors may also:

- Download catalogue
- Contact sales
- Learn about the company
- Explore product categories

These journeys should remain straightforward.

---

# SECTION 27 — INTERACTION DESIGN

Interactions should provide immediate feedback.

Every user action should receive a response.

Examples:

Hover

Focus

Click

Selection

Loading

Success

Error

Never leave users wondering whether something happened.

---

## Hover States

Hover effects should communicate interactivity.

They should never exist purely for decoration.

Hover animations should remain subtle.

Preferred effects:

- Slight elevation
- Soft shadow
- Gentle color transition
- Small image zoom
- Underline animation

Avoid dramatic effects.

---

## Focus States

Keyboard users must always know which element has focus.

Never remove focus outlines without replacing them with a more accessible alternative.

Focus indicators should be highly visible.

---

## Click Feedback

Buttons should feel responsive.

Clicks should provide immediate visual feedback.

Avoid delayed interaction responses.

---

# SECTION 28 — FORMS

Forms should minimize effort.

Ask only for information that is genuinely necessary.

Reduce typing wherever possible.

---

## Form Principles

Labels should always be visible.

Never rely solely on placeholder text.

Group related fields together.

Provide helpful validation messages.

Do not overwhelm users with long forms.

---

## Validation

Validate early where appropriate.

Error messages should explain:

- What went wrong.
- Why.
- How to fix it.

Avoid technical language.

---

## Required Fields

Clearly indicate required fields.

Avoid making every field mandatory.

Only request information essential for generating a quotation.

---

# SECTION 29 — RESPONSIVE DESIGN

The website must work equally well across devices.

Responsive design is not an afterthought.

It is part of the initial design process.

---

## Mobile First

Design for the smallest practical screen first.

Progressively enhance layouts for larger screens.

Avoid creating separate mobile and desktop experiences.

The experience should feel consistent.

---

## Breakpoints

Layouts should adapt naturally.

Avoid designs that appear broken between breakpoints.

Never optimize only for common screen sizes.

---

## Touch Targets

Interactive elements must be easy to tap.

Avoid placing buttons too closely together.

Users should never accidentally activate adjacent controls.

---

## Content Prioritization

On smaller screens:

Prioritize essential content.

Reduce visual complexity.

Avoid hiding important functionality.

---

# SECTION 30 — ACCESSIBILITY

Accessibility is a quality requirement.

It is never optional.

Every feature must be usable by the widest possible audience.

---

## Semantic HTML

Use semantic elements whenever appropriate.

Examples:

header

main

nav

section

article

footer

button

Avoid excessive use of generic containers.

---

## Keyboard Navigation

Every interactive element must be operable using only a keyboard.

Users should never become trapped inside dialogs or menus.

Tab order should follow visual order.

---

## Screen Readers

Every meaningful element should have appropriate labels.

Decorative elements should be ignored by assistive technologies.

Images conveying information require descriptive alternative text.

---

## Color Accessibility

Never rely solely on color to communicate information.

Use:

Icons

Labels

Text

Patterns

or additional visual indicators.

---

## Motion Accessibility

Support users who prefer reduced motion.

Animations should respect the operating system's reduced-motion preference.

If motion is disabled, functionality must remain identical.

---

# SECTION 31 — MOTION DESIGN

Animation exists to clarify interactions.

It should never become entertainment.

Motion should support usability.

---

## Principles

Animations should be:

Fast

Natural

Subtle

Consistent

Purposeful

Every animation should answer one question:

"What information does this motion communicate?"

If the answer is "nothing", remove it.

---

## Appropriate Uses

Motion can communicate:

Navigation

Hierarchy

State change

Loading

Success

Expansion

Focus

Spatial relationships

Avoid decorative animation.

---

## Timing

Animations should complete quickly.

Avoid slow transitions that delay interaction.

The interface should always feel responsive.

---

## Consistency

All animations should share a common motion language.

Avoid mixing dramatically different easing curves and durations.

Movement should feel unified across the entire website.

---

# SECTION 32 — LOADING STATES

Users should always understand what is happening.

Never display empty interfaces while waiting for data.

Provide meaningful loading indicators.

---

## Skeleton Screens

Prefer skeleton placeholders over generic spinners for content-heavy pages.

Skeletons preserve layout and reduce perceived waiting time.

---

## Progress Feedback

Long-running operations should communicate progress whenever possible.

Avoid leaving users uncertain whether the application is still working.

---

# SECTION 33 — EMPTY STATES

Empty states should be informative.

Examples:

No products found.

No quote items added.

No search results.

An empty state should explain:

- Why nothing is displayed.
- What the user can do next.

Avoid blank pages.

---

# SECTION 34 — ERROR STATES

Errors should be calm and constructive.

Never blame the user.

Provide:

A clear explanation.

A suggested solution.

A recovery action where possible.

Technical error details should remain hidden from end users.

---

# SECTION 35 — SUCCESS STATES

Successful actions should provide reassurance.

Examples:

Quote item added.

Catalogue downloaded.

Message prepared.

Enquiry submitted.

Feedback should be immediate but unobtrusive.

Avoid excessive celebration animations.

---

# SECTION 36 — MICRO-INTERACTIONS

Micro-interactions are small details that improve perceived quality.

Examples include:

Button hover

Card elevation

Image zoom

Icon transitions

Accordion expansion

Drawer opening

Navigation underline

These interactions should remain subtle.

Their purpose is refinement rather than attention.

---

# SECTION 37 — UX REVIEW CHECKLIST

Before considering any feature complete, verify:

- Can a first-time visitor understand it immediately?
- Is the interaction predictable?
- Is feedback immediate?
- Is keyboard navigation fully supported?
- Is the experience usable without a mouse?
- Are touch interactions comfortable?
- Does the design work across screen sizes?
- Are loading, empty and error states handled gracefully?
- Are animations purposeful rather than decorative?
- Would removing any interaction improve clarity?

If any answer indicates uncertainty, refine the experience before marking the feature as complete.
---

# SECTION 53 — SEARCH ENGINE OPTIMIZATION (SEO)

## Philosophy

SEO is the result of building a fast, accessible, structured website.

Never sacrifice user experience for search rankings.

The website should first satisfy real users.

Search engines should naturally understand the content.

---

## Technical SEO

Every page must include:

- Unique page title
- Unique meta description
- Canonical URL
- Open Graph metadata
- Twitter Card metadata
- Proper heading hierarchy
- Structured semantic HTML

---

## Heading Hierarchy

Each page should contain:

One H1

Logical H2 sections

Nested H3 headings where appropriate

Never skip heading levels purely for visual reasons.

---

## URL Structure

URLs should be:

Short

Readable

Descriptive

Stable

Examples:

/products

/products/dinner-sets

/products/premium-dinner-set-24

Avoid unnecessary parameters.

Avoid auto-generated URL fragments.

---

## Images

Every meaningful image requires:

Descriptive filename

Alt text

Proper dimensions

Responsive sizing

Optimized format

Decorative images should be hidden from screen readers.

---

## Structured Data

When appropriate, implement structured data using Schema.org.

Potential schemas:

Organization

Product

Breadcrumb

Website

CollectionPage

Never include structured data containing fabricated information.

---

# SECTION 54 — PERFORMANCE

## Philosophy

Performance is a feature.

A premium website should feel instant.

Users should never wait unnecessarily.

Every added dependency must justify its existence.

---

## Performance Goals

Aim for:

Performance ≥95

Accessibility ≥95

SEO ≥95

Best Practices ≥95

(Lighthouse)

---

## JavaScript

Ship as little JavaScript as practical.

Prefer native browser capabilities where possible.

Avoid unnecessary libraries.

Lazy-load large features.

Split code intelligently.

---

## Images

Images should be:

Compressed

Responsive

Modern format when supported

Lazy-loaded below the fold

Never load oversized images.

---

## Fonts

Load only required font weights.

Avoid unnecessary font families.

Prevent layout shifts during font loading.

---

## Rendering

Avoid unnecessary re-renders.

Avoid excessive state updates.

Keep rendering predictable.

---

# SECTION 55 — SECURITY

## Philosophy

Security begins with good engineering.

Do not expose sensitive information.

Do not trust user input.

Validate data consistently.

---

## Secrets

Never commit:

API keys

Passwords

Access tokens

Private credentials

Secrets belong in environment variables.

---

## Input Validation

Validate all user input.

Never assume external data is correct.

Escape untrusted content before rendering.

---

## External Links

External links should:

Open safely.

Prevent reverse tabnabbing.

Clearly indicate when users leave the website.

---

# SECTION 56 — TESTING

## Philosophy

Every feature should be verified before completion.

Testing is part of development.

Not something performed afterward.

---

## Manual Testing Checklist

Verify:

Desktop

Tablet

Mobile

Keyboard navigation

Screen reader compatibility

Dark/light compatibility if supported

Loading states

Error states

Empty states

Responsive layouts

Broken images

Broken links

Console errors

---

## Regression Testing

Before merging changes:

Verify existing functionality still works.

New features should never silently break previous functionality.

---

# SECTION 57 — GIT WORKFLOW

## Branch Strategy

Never develop large features directly on the main branch.

Create focused branches.

Each branch should represent one logical change.

---

## Commit Messages

Write meaningful commit messages.

Good:

Add quote drawer persistence

Improve catalogue filtering

Refactor product card layout

Bad:

Update

Fix stuff

Changes

Commit 2

---

## Pull Requests

Every pull request should explain:

Purpose

Implementation summary

Potential impact

Testing performed

Known limitations

---

# SECTION 58 — CODE REVIEW

Before considering any implementation complete, review it as though another senior engineer will maintain it for years.

Ask:

Is this understandable?

Can it be simplified?

Is it reusable?

Is naming clear?

Does it follow project standards?

Would I be comfortable maintaining this in two years?

If not, continue refining.

---

## Review Categories

Review every implementation for:

Architecture

Readability

Accessibility

Performance

Responsiveness

Security

SEO

Consistency

Maintainability

Business correctness

---

# SECTION 59 — DEFINITION OF DONE

A task is complete only when ALL of the following are true.

Business Requirements

✓ Correct

Design

✓ Consistent

Responsiveness

✓ Complete

Accessibility

✓ Verified

Performance

✓ Acceptable

SEO

✓ Included

Code Quality

✓ Maintainable

Naming

✓ Clear

Documentation

✓ Updated if required

Testing

✓ Completed

No obvious regressions introduced.

Anything less is considered incomplete.

---

# SECTION 60 — AI SELF-REVIEW PROTOCOL

Before completing any task, perform an internal review.

Ask:

Did I fully understand the requirement?

Did I follow the repository documentation?

Did I introduce unnecessary complexity?

Can this be simplified?

Does the implementation feel premium?

Does it feel handcrafted rather than AI-generated?

Would an experienced frontend engineer approve this?

If any answer is uncertain, refine the implementation before considering it complete.

---

# SECTION 61 — DECISION MAKING

Whenever multiple solutions exist:

Choose the solution that maximizes:

Maintainability

Readability

Accessibility

Scalability

Performance

Consistency

Business value

Never choose an implementation solely because it requires fewer lines of code.

---

# SECTION 62 — FUTURE EVOLUTION

This repository is expected to evolve.

Potential future additions include:

Dealer Portal

Authentication

Customer Dashboard

Admin CMS

ERP Integration

Inventory Visibility

Export Catalogue

Product Comparison

Analytics

Dealer Pricing

Internationalization

Dark Mode

Offline Support

Architecture decisions made today should not prevent these future enhancements.

---

# SECTION 63 — CONTINUOUS IMPROVEMENT

Whenever working within the repository:

Leave the project better than you found it.

Examples:

Improve naming.

Reduce duplication.

Increase accessibility.

Improve responsiveness.

Clarify documentation.

Remove dead code.

Simplify logic.

Improve consistency.

Small improvements accumulate into long-term quality.

---

# SECTION 64 — NON-NEGOTIABLE PRINCIPLES

These principles override convenience.

Never:

Invent business information.

Invent testimonials.

Invent certifications.

Invent statistics.

Hardcode product information into UI components.

Ignore accessibility.

Ignore responsiveness.

Ignore performance.

Ignore maintainability.

Ignore documentation.

Implement features inconsistent with the brand.

Compromise long-term quality for short-term speed.

---

# SECTION 65 — FINAL DIRECTIVE

Every contribution to this repository should move the project closer to becoming the definitive digital presence of Mansi Industries.

Write code that is:

Professional.

Readable.

Elegant.

Scalable.

Maintainable.

Accessible.

Performant.

Business-focused.

Design interfaces that inspire confidence.

Engineer systems that remain reliable as the company grows.

Favor thoughtful craftsmanship over unnecessary complexity.

The objective is not merely to complete tasks.

The objective is to create a website that accurately reflects the quality, professionalism, and long-term vision of Mansi Industries.

End every task with the mindset that another engineer, designer, or business stakeholder should be able to continue the work confidently without needing to reinterpret your intentions.

---

