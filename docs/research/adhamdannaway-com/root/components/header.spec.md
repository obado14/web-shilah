# Header Component Specification

## Overview
- **Target file:** `src/components/sites/adhamdannaway-com/root/Header.tsx`
- **Interaction model:** Initial load entrance animation, mobile hamburger slideToggle
- **Z-Index:** 1000

## DOM Structure
```html
<header id="header" class="header">
  <div class="row">
    <div class="col-12">
      <a id="logo" class="logo" href="/">Adham Dannaway</a>
      <div class="icon-nav">navigation</div>
      <nav>
        <ul id="nav">
          <li class="page_item"><a href="/about">about</a></li>
          <li class="page_item"><a href="/learn-ui-design">learn</a></li>
          <li class="page_item"><a href="/portfolio">portfolio</a></li>
          <li class="page_item"><a href="/blog">blog</a></li>
          <li class="page_item"><a href="/contact">contact</a></li>
          <li>
            <ul class="social">
              <li class="twitter"><a href="https://www.twitter.com/AdhamDannaway" title="Follow me on Twitter" target="_blank">twitter</a></li>
              <li class="linkedin"><a href="https://au.linkedin.com/in/adhamdannaway" title="Connect with me on Linkedin" target="_blank">linkedin</a></li>
              <li class="facebook"><a href="https://www.facebook.com/ilikeadham" title="Like me on Facebook" target="_blank">facebook</a></li>
              <li class="instagram"><a href="https://www.instagram.com/adham.dannaway" title="Follow me on Instagram" target="_blank">instagram</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```

## Computed Styles & Asset Mapping
- **Background**: `#111`
- **Height**: `62px` on mobile (< 830px), `92px` on desktop (>= 830px)
- **Logo**:
  - Desktop: `height: 92px`, `width: 62px`, `background: url(/images/sprite.png) 0px -93px no-repeat`
  - Mobile: `height: 62px`, `width: 40px`, `background: url(/images/sprite-mobile.png) 0px -63px no-repeat`
  - Hover: `opacity: 0.5`, transition: `opacity .3s`
- **Icon Nav (Mobile Hamburger)**:
  - Mobile only: `width: 27px`, `height: 62px`, `float: right`, `background: url(/images/sprite-mobile.png) -42px -63px no-repeat`
  - Active state: `opacity: 0.5`
- **Navigation Menu Items**:
  - Desktop: `height: 92px`, `line-height: 92px`, `color: #FFF`, `font-size: 18px` (`1.8rem`), `padding: 0 1em`
  - Hover: `color: #757575`, transition: `color .3s`
  - Mobile: `background: #222`, dropdown with `height: 6.4rem`, `line-height: 6.4rem`, border-top: `#212121 1px solid`, border-bottom: `#363636 1px solid`
- **Social Links**:
  - Width: `3.2rem`, `height: 3.2rem`, `display: inline-block`, `background: url(/images/sprite.png) no-repeat`
  - Twitter: `background-position: -32px -186px`
  - LinkedIn: `background-position: -96px -186px`
  - Facebook: `background-position: 0px -186px`
  - Instagram: `background-position: -163px -186px`
  - Hover: `opacity: 0.5`, transition: `opacity .3s`
