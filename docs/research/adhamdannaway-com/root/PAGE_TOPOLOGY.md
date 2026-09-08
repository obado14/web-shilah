# Page Topology for adhamdannaway.com (Home Page)

## Layout Structure

```
[Header: Fixed/Absolute z-index 1000]
  ├── Logo (left)
  ├── Navigation Menu (right desktop / hamburger dropdown mobile)
  └── Social Links (Twitter, LinkedIn, Facebook, Instagram)

[Hero Face Section: section.light]
  └── Container (max-width: 1040px)
        └── #face (relative, height 600px desktop)
              ├── Designer Column (#designer): title, subtitle, click -> /portfolio
              ├── Coder Column (#coder): title, subtitle, click -> /about
              ├── Fallback Face Image (#face-img: mobile/tablet < 1140px)
              ├── Designer Face Half Layer (#designer-img)
              ├── Coder Face Half Layer (#coder-img)
              ├── Designer Background Gradient Layer (#designer-bg)
              └── Coder Background Gradient Layer (#coder-bg)

[Featured Work Section: section.dark]
  └── Container (max-width: 1040px)
        ├── Centered Header (.header-center) with divider line and "SOME OF MY LATEST WORK"
        └── Portfolio Cards List (.thumbs)
              ├── Card 1: My Figma design system (thumbnail + title + tag)
              ├── Card 2: My UI design book (thumbnail + title + tag)
              └── Card 3: Creating a lean design system (thumbnail + title + tag)

[Footer: #footer]
  ├── Gradient White top overlay with "Back to top" sprite arrow
  └── Container (.row)
        ├── Copyright: © 2026 Adham Dannaway (left)
        └── Footer Nav (right desktop: about, learn, portfolio, blog, contact)
```

## Section Interaction Models
- **Header**: Load-driven entrance animation, click-driven mobile dropdown
- **Hero Face**: Interactive mouse-position-driven spring dampening split slider (Desktop), static responsive image (Mobile)
- **Featured Work**: Hover-driven card elevation and animated arrow slide-in
- **Footer**: Hover-driven arrow bobbing, click-to-scroll-to-top
