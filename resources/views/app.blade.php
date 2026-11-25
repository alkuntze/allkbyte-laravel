<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ALLKByte | Backend PHP/Laravel — APIs e Web Scraping</title>
    <meta name="description" content="Alessandro Kuntze — desenvolvedor backend sênior PHP/Laravel. Especialista em integrações com APIs e web scraping resiliente. Disponível para projetos PJ." />
    <meta name="author" content="ALLKByte Digital Solution" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
    <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
    <meta property="og:title" content="ALLKByte | Backend PHP/Laravel — APIs e Web Scraping" />
    <meta property="og:description" content="Backend sênior PHP/Laravel. Integrações com APIs e web scraping de alta resiliência. Disponível para projetos PJ." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="contact-webhook-url" content="{{ config('services.n8n.contact_webhook_url') }}" />
    <meta name="turnstile-site-key" content="{{ config('services.turnstile.site_key') }}" />
    <link rel="preconnect" href="https://challenges.cloudflare.com" />
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" async defer></script>
    @vite(['resources/css/app.css', 'resources/js/main.tsx'])
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
