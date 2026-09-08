# Footer Component Specification

## Overview
- **Target file:** `src/components/sites/adhamdannaway-com/root/Footer.tsx`
- **Interaction model:** Hover elevation of "back to top" arrow, click to smooth scroll to top.

## DOM Structure
```html
<footer id="footer" role="contentinfo">
  <div class="row">
    <div class="col-12">
      <div class="left">
        <a class="transition" href="/">&copy; 2026 Adham Dannaway</a>
      </div>
      <nav id="nav-footer">
        <ul>
          <li class="page_item"><a href="/about">about</a></li>
          <li class="page_item"><a href="/learn-ui-design">learn</a></li>
          <li class="page_item"><a href="/portfolio">portfolio</a></li>
          <li class="page_item"><a href="/blog">blog</a></li>
          <li class="page_item"><a href="/contact">contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="gradient-white">
    <a class="top" href="#top">Back to top</a>
  </div>
</footer>
```

## Styling Details
- **Footer Container**:
  - Background: `#f5f5f5`
  - Height: `50px`
  - Padding: `40px 5% 0 5%`
  - Color: `#757575`, font-size: `16px` (`1.6rem`)
  - Inset shadow: `inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)`
  - Position: `relative`
- **Gradient Top (`.gradient-white`)**:
  - Position: `absolute`, `top: -50px`, `left: 0`, `width: 100%`, `height: 50px`
  - Background: `linear-gradient(rgba(255, 255, 255, 0), #ffffff)`
- **Back to top button (`footer a.top`)**:
  - Position: `absolute`, `left: 50%`, `margin-left: -59px`, `bottom: -40px`, `width: 118px`, `height: 90px`
  - Background: `url(/images/sprite.png) 0 -217px no-repeat`
  - Text: indented `-9999px`
  - Hover: `bottom: -35px`, transition: `all .3s`
  - Click: smooth scroll to top `window.scrollTo({ top: 0, behavior: 'smooth' })`
- **Navigation & Links**:
  - `.left a`: color `#757575`, hover `#333333`, transition `color .3s`
  - `footer nav li a`: `margin-right: 20px`, color `#757575`, hover `#333333`
