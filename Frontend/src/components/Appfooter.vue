<template>
  <footer class="footer">
    <div class="footer-grid-bg"></div>
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="logo">
          <span class="logo-dot"></span>
          <span class="logo-text">FACE<span class="logo-accent">.IT</span></span>
        </div>
        <p class="footer-tagline">AI-powered skincare intelligence.<br/>Built for every skin type.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <span class="col-label">Navigate</span>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/product">Product</router-link>
          <router-link to="/brands">Brands</router-link>
          <router-link to="/brands">Brands</router-link>
        </div>
        <div class="footer-col">
          <span class="col-label">Account</span>
          <router-link to="/login">Sign In</router-link>
          <router-link to="/login">Register</router-link>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Decode. All rights reserved.</span>
      <span class="footer-status">
        <span class="status-dot"></span> All systems operational
      </span>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

.footer {
  background: #060810;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(0,85,255,0.15);
}
.footer-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,85,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,85,255,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 5% 40px;
  display: flex;
  gap: 80px;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}

.footer-brand { max-width: 300px; }
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.logo-dot {
  width: 8px; height: 8px;
  background: #0055ff;
  border-radius: 50%;
  box-shadow: 0 0 8px #0055ff;
}
.logo-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.15em;
  color: #e8eaf0;
}
.logo-accent { color: #0055ff; }
.footer-tagline {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  line-height: 1.8;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.04em;
}

.footer-links {
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
}
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.col-label {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  margin-bottom: 4px;
}
.footer-col a {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.45);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-col a:hover { color: #fff; }

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 5%;
  border-top: 1px solid rgba(255,255,255,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: rgba(255,255,255,0.2);
  letter-spacing: 0.06em;
  position: relative;
}
.footer-status {
  display: flex;
  align-items: center;
  gap: 6px;
}
.status-dot {
  width: 6px; height: 6px;
  background: #00c864;
  border-radius: 50%;
  box-shadow: 0 0 6px #00c864;
  animation: statusPulse 2s ease-in-out infinite;
}
@keyframes statusPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
</style>