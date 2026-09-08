# Portfolio Thumbs Component Specification

## Overview
- **Target file:** `src/components/sites/adhamdannaway-com/root/PortfolioThumbs.tsx`
- **Section container:** `section.dark`
- **Interaction model:** Hover elevation, animated arrow slide-in

## DOM Structure
```html
<section class="dark">
  <div class="row">
    <div class="col-12">
      <div id="content-detail">
        <div class="header-center">
          <h3>Some of my latest work</h3>
        </div>
        <ul id="thumbs" class="thumbs clearfix">
          <li>
            <a href="/portfolio/figma-design-system">
              <img src="/images/feature-figma-design-system.webp" alt="Figma design system" />
              <div class="description">
                <span class="arrow-r"></span>
                <h4>My Figma design system</h4>
                <p>Design system</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/portfolio/ui-design-book">
              <img src="/images/feature-ui-design-book.webp" alt="UI design book" />
              <div class="description">
                <span class="arrow-r"></span>
                <h4>My UI design book</h4>
                <p>Book</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/portfolio/creating-a-lean-design-system">
              <img src="/images/feature-william-hill-design-system.jpg" alt="Creating a lean design system" />
              <div class="description">
                <span class="arrow-r"></span>
                <h4>Creating a lean design system</h4>
                <p>Design system</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

## Styling Details
- **Section `section.dark`**:
  - Background: `#fafafa`
  - Inset Shadow: `box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)`
  - Border bottom: `#dddddd solid 1px`
  - Padding: `9.6rem 4.3rem` on desktop (or `6.4rem 3.2rem` on mobile)
- **Header Line `.header-center`**:
  - Height: `1px`, background: `#dddddd`, border-bottom: `#ffffff solid 1px`, margin-bottom: `3.2rem`, position: `relative`
  - `h3`:
    - Position: `absolute`, `top: -0.8rem`, `left: 50%`, `margin-left: -160px`, `width: 320px`, `text-align: center`
    - Background: `#fafafa`
    - Color: `#757575`, font-size: `14px` (`1.4rem`), letter-spacing: `0.2rem`, text-transform: `uppercase`
    - Font family: `"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, Sans-serif`
- **Cards `.thumbs li`**:
  - Background: `#ffffff`, border-radius: `12px`, padding: `0.769% 0.769% 0 0.769%` (desktop)
  - Box shadow: `0 1px 4px 0px rgba(0, 0, 0, 0.2)`
  - Hover box shadow: `0px 4px 8px 0px rgba(0, 0, 0, 0.2)`
  - Image: border-radius: `8px`, width: 100%, display: block
  - Description:
    - Padding: `1.6rem 4rem 1.6rem 1.6rem`
    - `h4`: `font-family: 'proxima nova light'`, font-size: `18px`, color: `#333`, white-space: `nowrap`, overflow: `hidden`, text-overflow: `ellipsis`
    - `p`: font-size: `16px`, color: `#757575`, line-height: 1.2
  - `.arrow-r`:
    - Desktop: `width: 32px`, `height: 32px`, `background: url(/images/sprite.png) -63px -107px no-repeat`, `position: absolute`, `top: 2.4rem`, `right: 10px`, `opacity: 0`
    - Hover: `opacity: 1`, `right: 0px`, transition: `all 0.5s`
