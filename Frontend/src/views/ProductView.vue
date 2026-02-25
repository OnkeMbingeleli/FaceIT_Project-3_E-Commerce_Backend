<template>
  <div class="page">
    <AppNavbar />

    <!-- Hero -->
    <section class="prod-hero">
      <div class="hero-bg">
        <div class="bg-grid"></div>
        <div class="bg-glow"></div>
      </div>
      <div class="prod-hero-inner">
        <span class="page-label">Our Product</span>
        <h1 class="page-title">Doesn't matter if<br/>old or younger.<br/><span class="accent">It works for all.</span></h1>
        <p class="page-sub">One scan. Complete skin intelligence. A precision-crafted routine delivered instantly.</p>
        <router-link to="/login" class="cta-primary">Try It Now</router-link>
      </div>
    </section>

    <!-- How it works -->
    <section class="section">
      <div class="section-inner">
        <span class="section-label center">How It Works</span>
        <h2 class="center-heading">Three steps to your skin's truth.</h2>
        <div class="steps">
          <div class="step">
            <div class="step-num">01</div>
            <div class="step-line"></div>
            <h3>Scan</h3>
            <p>Our AI-powered device performs a comprehensive skin scan in under 3 seconds, capturing thousands of data points.</p>
          </div>
          <div class="step">
            <div class="step-num">02</div>
            <div class="step-line"></div>
            <h3>Decode</h3>
            <p>The algorithm processes your data against our skin intelligence database and identifies your exact skin profile.</p>
          </div>
          <div class="step">
            <div class="step-num">03</div>
            <div class="step-line"></div>
            <h3>Act</h3>
            <p>Receive a personalised skincare routine and product recommendations built precisely around your skin's needs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section alt">
      <div class="section-inner two-col">
        <div class="product-visual">
          <div class="device-frame">
            <div class="device-glow"></div>
            <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="60" y="40" width="180" height="300" rx="16" fill="rgba(0,85,255,0.06)" stroke="rgba(0,170,255,0.25)" stroke-width="1.5"/>
              <rect x="80" y="80" width="140" height="180" rx="8" fill="rgba(0,85,255,0.1)" stroke="rgba(0,170,255,0.2)" stroke-width="1"/>
              <!-- Face scan inside device -->
              <ellipse cx="150" cy="170" rx="45" ry="58" fill="none" stroke="#00aaff" stroke-width="1" opacity="0.5"/>
              <path d="M125 155 L135 165 L145 155" fill="none" stroke="#00aaff" stroke-width="1" opacity="0.6"/>
              <path d="M155 155 L165 165 L175 155" fill="none" stroke="#00aaff" stroke-width="1" opacity="0.6"/>
              <path d="M138 188 Q150 196 162 188" fill="none" stroke="#00aaff" stroke-width="1.2" opacity="0.7"/>
              <!-- Corner brackets on device screen -->
              <path d="M85 85 L85 95 L95 95" stroke="#00aaff" stroke-width="1.5" opacity="0.8"/>
              <path d="M215 85 L215 95 L205 95" stroke="#00aaff" stroke-width="1.5" opacity="0.8"/>
              <path d="M85 255 L85 245 L95 245" stroke="#00aaff" stroke-width="1.5" opacity="0.8"/>
              <path d="M215 255 L215 245 L205 245" stroke="#00aaff" stroke-width="1.5" opacity="0.8"/>
              <!-- Scan line animation -->
              <line x1="85" y1="170" x2="215" y2="170" stroke="#00aaff" stroke-width="0.5" opacity="0.3"/>
              <!-- Bottom controls -->
              <rect x="130" y="290" width="40" height="8" rx="4" fill="rgba(0,85,255,0.3)"/>
              <circle cx="150" cy="330" r="12" fill="none" stroke="rgba(0,170,255,0.4)" stroke-width="1.5"/>
              <circle cx="150" cy="330" r="6" fill="rgba(0,85,255,0.3)"/>
              <!-- Data readout -->
              <rect x="90" y="100" width="50" height="6" rx="3" fill="rgba(0,170,255,0.2)"/>
              <rect x="90" y="112" width="35" height="4" rx="2" fill="rgba(0,170,255,0.1)"/>
              <rect x="160" y="100" width="50" height="6" rx="3" fill="rgba(0,85,255,0.3)"/>
              <rect x="160" y="112" width="38" height="4" rx="2" fill="rgba(0,85,255,0.15)"/>
            </svg>
            <!-- Data tags -->
            <div class="dtag dtag-1">
              <span class="dtag-dot"></span>
              <div class="dtag-text">
                <div class="dtag-label">Hydration Level</div>
                <div class="dtag-val">74%</div>
              </div>
            </div>
            <div class="dtag dtag-2">
              <span class="dtag-dot green"></span>
              <div class="dtag-text">
                <div class="dtag-label">Oil Balance</div>
                <div class="dtag-val">Normal</div>
              </div>
            </div>
          </div>
        </div>

        <div class="features-list">
          <span class="section-label">What You Get</span>
          <h2>Everything your skin needs, decoded.</h2>
          <div class="feature-items">
            <div class="fitem" v-for="f in features" :key="f.title">
              <div class="fitem-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" v-html="f.icon"></svg>
              </div>
              <div>
                <h4>{{ f.title }}</h4>
                <p>{{ f.desc }}</p>
              </div>
            </div>
          </div>
          <router-link to="/login" class="cta-primary">Get Started Free</router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-strip">
      <div class="cta-strip-inner">
        <h2>One scan changes everything.</h2>
        <p>Start your personalised skin journey today — no guesswork required.</p>
        <router-link to="/login" class="cta-btn">Decode Your Skin</router-link>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

const features = [
  { title: 'Skin Type Detection', desc: 'Precisely identifies your skin type across all categories.', icon: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>' },
  { title: 'Hydration & Oil Analysis', desc: 'Measures moisture levels and sebum balance in real time.', icon: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>' },
  { title: 'UV & Aging Assessment', desc: 'Detects sun damage and early signs of skin aging.', icon: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>' },
  { title: 'Personalised Routine Builder', desc: 'AI-crafted morning and evening routines tailored to your profile.', icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=Playfair+Display:wght@700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
.page { background: #080b10; min-height: 100vh; color: #e8eaf0; }

.prod-hero {
  min-height: 65vh; display: flex; align-items: center;
  position: relative; overflow: hidden; padding: 140px 5% 80px;
}
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,100,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,100,255,0.06) 1px, transparent 1px);
  background-size: 44px 44px;
}
.bg-glow {
  position: absolute; width: 700px; height: 700px; border-radius: 50%;
  background: radial-gradient(circle, rgba(0,80,255,0.12) 0%, transparent 70%);
  top: -200px; left: -100px; filter: blur(60px);
}
.prod-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
.page-label {
  font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.22em;
  text-transform: uppercase; color: #0055ff; display: block; margin-bottom: 20px;
}
.page-title {
  font-family: 'Bebas Neue', sans-serif; font-size: clamp(60px, 8vw, 100px);
  line-height: 0.92; letter-spacing: 0.02em; color: #e8eaf0; margin-bottom: 24px;
}
.accent { color: #0055ff; }
.page-sub {
  font-family: 'DM Mono', monospace; font-size: 13px; line-height: 1.9;
  color: rgba(255,255,255,0.45); max-width: 480px; margin-bottom: 40px;
}

.cta-primary {
  font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 0.2em;
  background: #0055ff; color: #fff; text-decoration: none; padding: 15px 40px;
  border-radius: 2px; display: inline-block; transition: background 0.2s, box-shadow 0.2s;
}
.cta-primary:hover { background: #0040cc; box-shadow: 0 0 30px rgba(0,85,255,0.4); }

/* SECTIONS */
.section { padding: 100px 5%; }
.section.alt { background: rgba(0,85,255,0.03); border-top: 1px solid rgba(0,85,255,0.1); border-bottom: 1px solid rgba(0,85,255,0.1); }
.section-inner { max-width: 1200px; margin: 0 auto; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

.section-label {
  font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.2em;
  text-transform: uppercase; color: #0055ff; display: block; margin-bottom: 16px;
}
.section-label.center { text-align: center; }
.center-heading {
  font-family: 'Playfair Display', serif; font-size: clamp(28px, 3vw, 40px);
  color: #e8eaf0; text-align: center; margin-bottom: 60px; line-height: 1.3;
}

/* Steps */
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
.step { display: flex; flex-direction: column; }
.step-num {
  font-family: 'Bebas Neue', sans-serif; font-size: 52px; letter-spacing: 0.05em;
  color: rgba(0,85,255,0.25); line-height: 1; margin-bottom: 12px;
}
.step-line { width: 40px; height: 2px; background: #0055ff; margin-bottom: 20px; }
.step h3 {
  font-family: 'Bebas Neue', sans-serif; font-size: 24px; letter-spacing: 0.1em;
  color: #e8eaf0; margin-bottom: 12px;
}
.step p {
  font-family: 'DM Mono', monospace; font-size: 12px; line-height: 1.8;
  color: rgba(255,255,255,0.4);
}

/* Product visual */
.product-visual { display: flex; align-items: center; justify-content: center; }
.device-frame {
  position: relative; width: 300px; height: 380px;
  display: flex; align-items: center; justify-content: center;
}
.device-glow {
  position: absolute; inset: -40px; border-radius: 50%;
  background: radial-gradient(circle, rgba(0,85,255,0.1) 0%, transparent 70%);
  filter: blur(20px);
}
.device-frame svg { position: relative; z-index: 1; width: 300px; height: 380px; }

.dtag {
  position: absolute; background: rgba(8,14,28,0.92); border: 1px solid rgba(0,170,255,0.2);
  border-radius: 2px; padding: 10px 14px; display: flex; align-items: center; gap: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3); z-index: 2;
  animation: floatY 3s ease-in-out infinite;
}
.dtag-1 { top: 60px; right: -30px; }
.dtag-2 { bottom: 80px; right: -30px; animation-delay: 1s; }
.dtag-dot { width: 8px; height: 8px; background: #00aaff; border-radius: 50%; box-shadow: 0 0 6px #00aaff; flex-shrink: 0; }
.dtag-dot.green { background: #00c864; box-shadow: 0 0 6px #00c864; }
.dtag-label {
  font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.1em;
  text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 2px;
}
.dtag-val { font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 0.08em; color: #e8eaf0; }
@keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

/* Features */
.features-list h2 {
  font-family: 'Playfair Display', serif; font-size: clamp(26px, 3vw, 38px);
  color: #e8eaf0; line-height: 1.3; margin-bottom: 32px;
}
.feature-items { display: flex; flex-direction: column; gap: 20px; margin-bottom: 36px; }
.fitem { display: flex; gap: 16px; align-items: flex-start; }
.fitem-icon {
  width: 40px; height: 40px; background: rgba(0,85,255,0.1); border: 1px solid rgba(0,85,255,0.2);
  border-radius: 2px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.fitem-icon svg { width: 18px; height: 18px; color: #0055ff; }
.fitem h4 {
  font-family: 'DM Mono', monospace; font-size: 12px; letter-spacing: 0.08em;
  text-transform: uppercase; color: #e8eaf0; margin-bottom: 4px;
}
.fitem p {
  font-family: 'DM Mono', monospace; font-size: 11px; line-height: 1.7; color: rgba(255,255,255,0.4);
}

/* CTA strip */
.cta-strip { padding: 100px 5%; text-align: center; border-top: 1px solid rgba(0,85,255,0.15); }
.cta-strip-inner { max-width: 600px; margin: 0 auto; }
.cta-strip h2 {
  font-family: 'Bebas Neue', sans-serif; font-size: clamp(48px, 6vw, 72px);
  letter-spacing: 0.05em; color: #e8eaf0; margin-bottom: 16px;
}
.cta-strip p {
  font-family: 'DM Mono', monospace; font-size: 12px; color: rgba(255,255,255,0.4);
  line-height: 1.8; margin-bottom: 36px;
}
.cta-btn {
  font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 0.2em;
  background: #0055ff; color: #fff; text-decoration: none; padding: 15px 40px;
  border-radius: 2px; display: inline-block; transition: all 0.2s;
}
.cta-btn:hover { background: #0040cc; box-shadow: 0 0 30px rgba(0,85,255,0.4); }

@media (max-width: 900px) {
  .steps { grid-template-columns: 1fr; gap: 32px; }
  .two-col { grid-template-columns: 1fr; gap: 48px; }
  .dtag-1, .dtag-2 { right: -10px; }
}
</style>