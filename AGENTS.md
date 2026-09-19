# Design system

This site uses an 8-point spacing system adapted from Thezis. Shared tokens live
in `style.css`; change tokens to adjust the site, rather than adding one-off sizes.

## Design principles

- **Grouping before polish.** Decide which elements belong together before styling.
  Use larger gaps between groups than between items inside a group.
- **One primary element per region.** Let the page title lead; keep navigation,
  dates, and supporting text secondary.
- **Restraint.** Every element should help readers understand content or take an
  action. Omit decorative labels, redundant descriptions, and unnecessary containers.
- **Consistency over novelty.** The homepage and every post share spacing,
  typography, and controls. Reuse the existing tokens instead of creating exceptions.
- **Clear typography.** Use sentence case, descriptive labels, and at most three
  type sizes and two weights (400 and 500) per component.
- **Accessible by default.** Keep text readable, keyboard focus visible, and
  controls usable on touch screens. Content must wrap without page-level overflow.

## Grid and typography

- Use `--ds-space-*` or semantic tokens for padding, margins, gaps, and dimensions.
  The spacing scale is 8, 16, 24, 32, and 48px at the default root font size.
- Keep the responsive page shell and all articles on the same content column.
  Widths remain fluid on small screens; maximum widths use multiples of 8.
- Use the type scale: 14px meta/code, 16px body, 24px article title.
  Line heights are 24px for body/meta/code and 32px for titles.
  Font sizes need not be multiples of 8.
- Group related items with 8–16px gaps; separate sections with 32px.
- Preserve the simple Arial typography and quiet visual style.
- Thin borders and focus outlines are optical details, exempt from the spacing grid.
- Check the homepage and all blog pages at desktop and mobile widths after changes.

## Implementation workflow

1. Set the responsive content column and outer spacing using shared tokens.
2. Group related content and establish the spacing between groups.
3. Apply the existing type scale and visual hierarchy.
4. Check whether anything can be removed without losing meaning or usability.
5. Verify the homepage and all posts on desktop and mobile, including long code
   blocks, project descriptions, keyboard focus, and the copy-prompt button.
