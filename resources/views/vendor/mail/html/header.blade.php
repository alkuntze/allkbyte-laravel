@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 32" width="80" height="32" style="display:block;">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1f3a"/>
      <stop offset="100%" stop-color="#0d1020"/>
    </linearGradient>
    <linearGradient id="lA" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c8cdd8"/>
      <stop offset="60%" stop-color="#a0a8b8"/>
      <stop offset="100%" stop-color="#b066f5"/>
    </linearGradient>
    <linearGradient id="lK" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b066f5"/>
      <stop offset="100%" stop-color="#cc88ff"/>
    </linearGradient>
  </defs>
  <rect width="80" height="32" rx="7" ry="7" fill="url(#bg)"/>
  <text x="5" y="23" font-family="'Arial Black', Arial, sans-serif" font-weight="900" font-size="17" fill="url(#lA)" letter-spacing="-1">A</text>
  <text x="17" y="23" font-family="'Arial Black', Arial, sans-serif" font-weight="900" font-size="17" fill="url(#lK)">K</text>
  <text x="33" y="22" font-family="Arial, sans-serif" font-weight="600" font-size="11" fill="#c8cdd8" letter-spacing="0.5">ALLKByte</text>
</svg>
</a>
</td>
</tr>
