function trackEvent(name) {
    analytics.track(name);
    gtag('config', 'G-58RKGVK43W', { 'send_page_view': false });
    gtag('event', name);
 }
