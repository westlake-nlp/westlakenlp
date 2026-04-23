/* ==========================================================================
   main.js — UI behaviours
     - active nav link
     - mobile nav toggle
     - publications rendering + year filter
     - reveal-on-scroll
     - footer year
   Note: site-header and site-footer are injected by partials.js via
   document.write(), so they exist synchronously before this script runs.
   ========================================================================== */

(function () {
    "use strict";

    function ready(fn) {
        if (document.readyState !== "loading") fn();
        else document.addEventListener("DOMContentLoaded", fn);
    }

    // --- active nav link -----------------------------------------------------
    function markActiveLink() {
        const page = document.body.getAttribute("data-page") || "index";
        document.querySelectorAll(".nav a").forEach(function (a) {
            if (a.getAttribute("data-page") === page) a.classList.add("active");
        });
    }

    // --- mobile nav toggle ---------------------------------------------------
    function initNavToggle() {
        const toggle = document.querySelector(".nav-toggle");
        const nav    = document.querySelector(".nav");
        if (!toggle || !nav) return;
        toggle.addEventListener("click", function () {
            const open = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open);
        });
        nav.addEventListener("click", function (e) {
            if (e.target.tagName === "A") nav.classList.remove("open");
        });
    }

    // --- publications --------------------------------------------------------
    const VENUE_PATTERNS = [
        ["ICLR",    /ICLR\s*\d*/i],
        ["NeurIPS", /NeurIPS\s*\d*/i],
        ["ACL",     /\bACL\s*\d*/i],
        ["EMNLP",   /EMNLP\s*\d*/i],
        ["NAACL",   /NAACL\s*\d*/i],
        ["COLING",  /COLING\s*\d*/i],
        ["AAAI",    /AAAI\s*\d*/i],
        ["IJCAI",   /IJCAI\s*\d*/i],
        ["ICML",    /ICML\s*\d*/i],
        ["CVPR",    /CVPR\s*\d*/i],
        ["TACL",    /\bTACL\b/i],
        ["TASLP",   /TASLP/i],
        ["CL",      /Computational Linguistics/i],
        ["JAIR",    /Journal of Artificial Intelligence Research/i],
    ];

    function escapeHTML(s) {
        return s.replace(/[&<>]/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
        });
    }

    function slugify(s) {
        return s.replace(/\W+/g, "") || "x";
    }

    function renderItem(text) {
        for (const [name, re] of VENUE_PATTERNS) {
            if (re.test(text)) {
                return '<span class="venue">' + name + '</span>' + escapeHTML(text);
            }
        }
        return escapeHTML(text);
    }

    function renderBlocks(blocks) {
        return blocks.map(function (b) {
            if (!b.items || !b.items.length) return "";
            const slug = slugify(b.year);
            return [
                '<div class="year-block" data-year="' + slug + '">',
                '<h2>' + escapeHTML(b.year) + '</h2>',
                '<ol class="pub-list">',
                b.items.map(function (it) { return '<li>' + renderItem(it) + '</li>'; }).join(""),
                '</ol>',
                '</div>'
            ].join("");
        }).join("");
    }

    function renderPublications() {
        const host = document.querySelector("#publications-root");
        const data = window.PUBLICATIONS;
        if (!host || !data) return;

        // build year filter from conference blocks (most comprehensive)
        const years = data.conference.map(function (b) {
            return { label: b.year, slug: slugify(b.year) };
        });
        const filterHTML = [
            '<div class="pub-filter">',
            '<button class="active" data-year="all">All</button>',
            years.map(function (y) {
                return '<button data-year="' + y.slug + '">' + escapeHTML(y.label) + '</button>';
            }).join(""),
            '</div>'
        ].join("");

        host.innerHTML =
            filterHTML +
            renderBlocks(data.conference) +
            (data.journal.length
                ? '<h2 class="pub-section-title">Journal Articles</h2>' + renderBlocks(data.journal)
                : "") +
            (data.books.length
                ? '<h2 class="pub-section-title">Books &amp; Book Chapters</h2>' + renderBlocks(data.books)
                : "");

        initPubFilter();
    }

    function initPubFilter() {
        const filter  = document.querySelector(".pub-filter");
        if (!filter) return;
        const buttons = filter.querySelectorAll("button");
        const blocks  = document.querySelectorAll(".year-block");
        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const year = btn.getAttribute("data-year");
                buttons.forEach(function (b) { b.classList.remove("active"); });
                btn.classList.add("active");
                blocks.forEach(function (block) {
                    const match = (year === "all") || (block.getAttribute("data-year") === year);
                    block.style.display = match ? "" : "none";
                });
                const section = document.querySelector(".section");
                if (section) {
                    window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
                }
            });
        });
    }

    // --- reveal on scroll ----------------------------------------------------
    function initReveal() {
        const els = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window) || !els.length) {
            els.forEach(function (el) { el.classList.add("visible"); });
            return;
        }
        const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add("visible");
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.08 });
        els.forEach(function (el) { io.observe(el); });
    }

    // --- footer year ---------------------------------------------------------
    function setYear() {
        const y = document.querySelector("#current-year");
        if (y) y.textContent = new Date().getFullYear();
    }

    ready(function () {
        markActiveLink();
        initNavToggle();
        renderPublications();
        initReveal();
        setYear();
    });
})();
