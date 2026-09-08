# Behaviors Specification for adhamdannaway.com (Home Page)

## Interaction Sweep Findings

### 1. Initial Page Load Animation
- **Trigger**: DOM Ready / Image Preloading
- **Header**:
  - Initial state: `top: -92px`, `opacity: 0`
  - Target state: `top: 0px`, `opacity: 1`
  - Transition: 1000ms easing (`easeOutExpo` / smooth cubic-bezier)
- **Face Section Elements**:
  - `#designer-img`: slides in from `left: -500px` to `left: 100px`, `opacity: 0 -> 1` (1000ms)
  - `#coder-img`: slides in from `right: -500px` to `right: 100px`, `opacity: 0 -> 1` (1000ms)
  - `#designer-bg`: slides in from `left: -500px` to `left: 100px`, `opacity: 0 -> 1` (1500ms `easeOutBack`)
  - `#coder-bg`: slides in from `right: -500px` to `right: 100px`, `opacity: 0 -> 1` (1500ms `easeOutBack`)
  - `#designer` text & `#coder` text: delay 1500ms, fade in `opacity: 0 -> 1` (500ms)
- **Detail Content (#content-detail & #footer)**:
  - Slide up from `top: 50px`, `opacity: 0 -> 1` (500ms)

### 2. Interactive Split Face Slider (Desktop >= 1140px)
- **Trigger**: Mouse movement within `#section` / `#face` container
- **Physics / Interpolation**:
  - Damped interpolation (Zeno's paradox / spring smoothing): `xp += (relMouseX - xp) / 12`
  - Base width: 420px
  - Center position: `xp = 520` (out of 1040)
- **Dynamic CSS calculations**:
  - `designerImg.width`: `420 + (520 - xp) * 0.5`
  - `designerImg.left`: `100 + (520 - xp) * 0.1`
  - `coderImg.width`: `420 + (xp - 520) * 0.5`
  - `coderImg.right`: `100 - (520 - xp) * 0.1`
  - `designerBg.left`: `100 + (520 - xp) * 0.05`
  - `designerBg.opacity`: `(1040 - xp) / 520`
  - `coderBg.right`: `100 + (xp - 520) * 0.05`
  - `coderBg.opacity`: `xp / 520`
  - `designerDesc.opacity`: `(1040 - xp) / 520`
  - `coderDesc.opacity`: `xp / 520`
- **Mouse Leave**:
  - Smoothly resets `xp` to 520:
  - `designerImg`: width: 420px, left: 100px
  - `coderImg`: width: 420px, right: 100px
  - `designerBg`: left: 100px, opacity: 1
  - `coderBg`: right: 100px, opacity: 1
  - `designerDesc`: opacity: 1
  - `coderDesc`: opacity: 1
  - Duration: 500ms easing `easeOutQuad`

### 3. Portfolio Card Hover Interaction
- **Trigger**: Mouse enter on `.thumbs li`
- **Card**:
  - Shadow transitions from `0 1px 4px 0px rgba(0, 0, 0, 0.2)` to `0px 4px 8px 0px rgba(0, 0, 0, 0.2)`
- **Arrow Indicator (.arrow-r)**:
  - Initial state: `opacity: 0`, `right: 10px`
  - Hover state: `opacity: 1`, `right: 0px`
  - Duration: 500ms smooth transition
- **Mouse leave**:
  - Arrow returns to `opacity: 0`, `right: 10px`

### 4. Back To Top Hover & Click
- **Hover**:
  - Arrow bottom offset moves from `bottom: -40px` to `bottom: -35px` (300ms)
- **Click**:
  - Smooth scroll back to `top: 0`

### 5. Mobile Navigation
- **Breakpoint**: `< 830px`
- **Trigger**: Click on `.icon-nav`
- **Behavior**: Toggles dropdown navigation menu with slide animation and active state.
