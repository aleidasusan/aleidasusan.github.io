function trackPage(name) {
    analytics.page(name);
    gtag('set', 'page_path', name);
    gtag('event', 'page_view');
 }
