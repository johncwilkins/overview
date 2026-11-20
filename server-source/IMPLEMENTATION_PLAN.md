# Bitter Radish implementation plan

## Stage 1 — responsive design draft
Work in this repository is a private design draft with noindex/nofollow. Public project content is limited to the clock, three games, and the planner from the supplied brief. Two clearly illustrative creative entries show how a seven-entry catalog flows. SVG project artwork and the line-art logo are provisional, not approved production branding. The clock has the supplied known destination; other projects show details rather than invented URLs. No admin or access-controlled content is implemented in this stage.

## Stage 2 — assets and content
Retrieved and visually inspected logo option 5, collage option 1, and the expanded project desk. Second design draft follows their tactile layered-paper composition. Confirmed destination: BitterRadish.com. Get actual project screenshots and URLs. Compare two or three wordmark fonts in context; settle logo geometry against the supplied reference, then produce editable SVG variants, transparent PNGs and favicon. Replace sample creative entries only with owner-approved content.

## Stage 3 — secure publishing and administration
Use a server application with metadata in D1 and image objects in R2. Require server-side admin authentication for every mutation. Provide project, gallery, external-gallery and video content types, draft/preview/publish, feature/reorder, uploads and image optimization, export and delete. Separate public records from restricted content. Server-side authorization must protect private media as well as page and API access; client-side filtering is insufficient. Unlisted links are discoverable and may only contain non-sensitive approved material. Do not create an Easter egg or private records until their content is supplied and approved.

Verify persistence across reloads, unauthorized mutation denial, unauthorized private access, gallery upload/captions/order, draft publication, unlisting, restricted image access, seven-plus project growth and mobile behavior. Current responsive CSS has a single-column mobile layout and reduced-motion support; browser visual QA has not run because the mandated browser-control skill is unavailable.

## Stage 4 — hosting and launch
Before external migration, verify current Cloudflare Pages/Workers, D1/R2 pricing, quotas and authentication choices from official current documentation; do not rely on old estimates. Back up metadata and media with a restorable export and document restore steps. Keep noindex until owner approves indexing. Prepare a DNS record-level change plan for the confirmed domain; preserve existing GoDaddy subdomains. Nameservers, existing DNS and public audience changes require explicit owner authorization. Current private Sites deployment does not attach the intended domain or modify DNS.

## Current homepage choice
The messy desk is the default homepage. Directory remains at /index.html for comparison. Descriptions appear on every picture cover on desktop and mobile. Both render the same published content.
