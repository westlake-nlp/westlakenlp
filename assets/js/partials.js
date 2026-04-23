/* ==========================================================================
   partials.js — shared header + footer, injected via document.write() so
   there's no flash of unstyled content and no build step required.
   Include BEFORE the header/footer insertion points on every page.
   ========================================================================== */

window.SITE = window.SITE || {};

window.SITE.HEADER_HTML = `
<header class="site-header">
    <div class="container">
        <a class="brand" href="index.html">
            <img class="brand-logo" src="assets/images/sch-300x300.png" alt="WestlakeNLP logo">
            <span>WestlakeNLP</span>
        </a>
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <nav class="nav" aria-label="Main navigation">
            <a href="index.html" data-page="index">Home</a>
            <a href="team.html" data-page="team">Team</a>
            <a href="publications.html" data-page="publications">Publications</a>
            <a href="teaching.html" data-page="teaching">Teaching</a>
            <a href="work.html" data-page="work">Our Work</a>
        </nav>
    </div>
</header>
`;

window.SITE.FOOTER_HTML = `
<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <strong>WestlakeNLP</strong> &middot; Natural Language Processing Lab<br>
                School of Engineering, Westlake University, Hangzhou
            </div>
            <div class="social">
                <a href="mailto:zhangyue@westlake.edu.cn" aria-label="Email">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
                <a href="https://x.com/NlpWestlake" aria-label="X / Twitter" target="_blank" rel="noopener">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://space.bilibili.com/639900532" aria-label="Bilibili" target="_blank" rel="noopener">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="3"/><path d="m7 2 3 4M17 2l-3 4"/><path d="M8 13v2M16 13v2"/></svg>
                </a>
            </div>
        </div>
        <div class="footer-legal">
            &copy; <span id="current-year">2026</span> WestlakeNLP &middot; School of Engineering, Westlake University
        </div>
    </div>
</footer>
`;
