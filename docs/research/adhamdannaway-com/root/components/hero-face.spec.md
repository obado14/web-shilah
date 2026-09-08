# Hero Face Component Specification

## Overview
- **Target file:** `src/components/sites/adhamdannaway-com/root/HeroFace.tsx`
- **Interaction model:** Interactive mouse-tracking spring dampened split-slider on desktop, responsive static image on mobile/tablet.

## DOM Structure
```html
<section id="section" class="light nopad-t nopad-b">
  <div class="row">
    <div class="col-12">
      <div id="face" class="face">
        <a href="/portfolio">
          <div id="designer" class="designer">
            <div id="designer-desc" class="description">
              <h1>designer</h1>
              <p>Product designer specialising in UI design and design systems.</p>
            </div>
          </div>
        </a>

        <a href="/about">
          <div id="coder" class="coder">
            <div id="coder-desc" class="description">
              <h1><span class="chevron-left">&lt;</span>coder<span class="chevron-right">&gt;</span></h1>
              <p>Front end developer who writes clean, elegant and efficient code.</p>
            </div>
          </div>
        </a>

        <!-- Fallback face image for mobile & tablet (<1140px) -->
        <img id="face-img" class="face-img" src="/images/adham-dannaway-designer-coder.jpg" alt="Adham Dannaway UI designer" />

        <!-- Desktop half-face layers (>= 1140px) -->
        <div id="designer-img" class="designer-img"></div>
        <div id="coder-img" class="coder-img"></div>
        <div id="designer-bg" class="designer-bg"></div>
        <div id="coder-bg" class="coder-bg"></div>
      </div>
    </div>
  </div>
</section>
```

## Styling & Positions
- `#face`:
  - Desktop (>= 1140px): `width: 1040px`, `height: 600px`, `margin: 0 auto`, `position: relative`
  - Mobile/Tablet: `width: 100%`, `position: relative`
- `#designer` & `#coder` overlay links:
  - Desktop: `width: 520px`, `height: 600px`, `position: absolute`, `top: 0`, `z-index: 10`
  - Designer: `left: 0`, Coder: `right: 0`
  - Typography:
    - `h1`: `font-family: 'proxima nova bold'`, `font-size: 82px` (`8.2rem`), `color: #333`, `margin-bottom: 0.8rem`
    - `p`: `font-family: 'proxima nova light'`, `font-size: 18px` (`1.8rem`), `color: #757575`, `line-height: 1.4`
- Visual Layers (Desktop >= 1140px):
  - `#designer-img`:
    - `width: 420px`, `height: 600px`, `position: absolute`, `top: 0`, `left: 100px`, `z-index: 1`
    - `background: url(/images/sprite-home.png) 0px -600px no-repeat`
  - `#coder-img`:
    - `width: 420px`, `height: 600px`, `position: absolute`, `top: 0`, `right: 100px`, `z-index: 1`
    - `background: url(/images/sprite-home.png) 100% 0px no-repeat`
  - `#designer-bg`:
    - `width: 420px`, `height: 200px`, `position: absolute`, `bottom: 0`, `left: 100px`
    - `background: url(/images/sprite-home.png) 0 -1300px no-repeat`
  - `#coder-bg`:
    - `width: 420px`, `height: 200px`, `position: absolute`, `bottom: 0`, `right: 100px`
    - `background: url(/images/sprite-home.png) 100% -1300px no-repeat`

## Interactive Behavior
- Track mouse X relative to face center (520px).
- Damped spring formula running in requestAnimationFrame:
  `xp += (targetRelX - xp) / 12;`
- Apply dynamic transforms / styles:
  - `designerImg.width = 420 + (520 - xp) * 0.5`
  - `designerImg.left = 100 + (520 - xp) * 0.1`
  - `coderImg.width = 420 + (xp - 520) * 0.5`
  - `coderImg.right = 100 - (520 - xp) * 0.1`
  - `designerBg.left = 100 + (520 - xp) * 0.05`
  - `designerBg.opacity = (1040 - xp) / 520`
  - `coderBg.right = 100 + (xp - 520) * 0.05`
  - `coderBg.opacity = xp / 520`
  - `designerDesc.opacity = (1040 - xp) / 520`
  - `coderDesc.opacity = xp / 520`
- On mouse leave: smoothly ease back to `xp = 520`.
