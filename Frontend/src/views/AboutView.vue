<template>
  <div class="page">
    <AppNavbar />

    <section class="about-hero">
      <div class="hero-bg">
        <div class="bg-grid"></div>
        <div class="bg-glow"></div>
      </div>
      <div class="about-hero-inner">
        <span class="page-label">Who We Are</span>
        <h1 class="page-title">Built for your<br/><span class="accent">skin's truth.</span></h1>
        <p class="page-sub">Tech T is a company driven by one goal — helping people reach their true beauty through the power of AI and data.</p>
      </div>
    </section>

    <!-- Mission -->
    <section class="section">
      <div class="section-inner two-col">
        <div class="text-block">
          <span class="section-label">Our Mission</span>
          <h2>We are focused on optimal and precise skincare solutions.</h2>
          <p>Generic skincare advice is outdated. Your skin is unique — it deserves a unique approach. We built Decode to give every person access to the same level of precision skincare analysis that was previously only available to dermatologists.</p>
          <p>Our AI analyses thousands of data points from a single scan, delivering personalised insights you can act on immediately.</p>
        </div>
        <div class="visual-block">
          <div class="stat-cards">
            <div class="scard scard-blue">
              <span class="scard-num">98%</span>
              <span class="scard-label">Analysis accuracy</span>
            </div>
            <div class="scard scard-dark">
              <span class="scard-num">50k+</span>
              <span class="scard-label">Skin profiles decoded</span>
            </div>
            <div class="scard scard-outline">
              <span class="scard-num">3s</span>
              <span class="scard-label">Avg. scan time</span>
            </div>
            <div class="scard scard-outline">
              <span class="scard-num">24/7</span>
              <span class="scard-label">AI assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section alt">
      <div class="section-inner">
        <span class="section-label center">What Drives Us</span>
        <h2 class="center-heading">Three principles behind everything we do.</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>Precision</h3>
            <p>Every recommendation is generated from real skin data — not generalised skin type guesses.</p>
          </div>
          <div class="value-card value-card-blue">
            <div class="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3>Inclusivity</h3>
            <p>Doesn't matter your age or skin type — our product helps all that seek it.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Trust</h3>
            <p>Clinically-informed algorithms backed by dermatology research and real-world validation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-strip">
      <div class="cta-strip-inner">
        <h2>Ready to start?</h2>
        <p>Join thousands already on their personalised skincare journey.</p>
        <router-link to="/login" class="cta-btn">Create Free Account</router-link>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
.page { background: #080b10; min-height: 100vh; color: #e8eaf0; }

/* HERO */
.about-hero {
  min-height: 60vh; display: flex; align-items: center;
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
  top: -200px; right: -100px; filter: blur(60px);
}
.about-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
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
  color: rgba(255,255,255,0.45); max-width: 540px;
}

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
.text-block h2 {
  font-family: 'Playfair Display', serif; font-size: clamp(28px, 3.5vw, 42px);
  line-height: 1.25; color: #e8eaf0; margin-bottom: 20px;
}
.text-block p {
  font-family: 'DM Mono', monospace; font-size: 12px; line-height: 1.9;
  color: rgba(255,255,255,0.45); margin-bottom: 16px;
}

.stat-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.scard {
  padding: 28px 24px; border-radius: 2px;
  display: flex; flex-direction: column; gap: 8px;
}
.scard-blue { background: #0055ff; }
.scard-dark { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); }
.scard-outline { border: 1px solid rgba(0,85,255,0.25); background: rgba(0,85,255,0.05); }
.scard-num {
  font-family: 'Bebas Neue', sans-serif; font-size: 48px;
  letter-spacing: 0.05em; color: #e8eaf0; line-height: 1;
}
.scard-blue .scard-num { color: #fff; }
.scard-label {
  font-family: 'DM Mono', monospace; font-size: 10px;
  letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.5);
}

.center-heading {
  font-family: 'Playfair Display', serif; font-size: clamp(28px, 3vw, 40px);
  color: #e8eaf0; text-align: center; margin-bottom: 56px; line-height: 1.3;
}
.values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.value-card {
  padding: 36px 28px; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 2px; background: rgba(255,255,255,0.02); transition: border-color 0.3s;
}
.value-card:hover { border-color: rgba(0,85,255,0.4); }
.value-card-blue { background: rgba(0,85,255,0.08); border-color: rgba(0,85,255,0.25); }
.value-icon {
  width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;
  background: rgba(0,85,255,0.12); border-radius: 2px; margin-bottom: 20px;
}
.value-icon svg { width: 22px; height: 22px; color: #0055ff; }
.value-card h3 {
  font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 0.1em;
  color: #e8eaf0; margin-bottom: 12px;
}
.value-card p {
  font-family: 'DM Mono', monospace; font-size: 12px; line-height: 1.8;
  color: rgba(255,255,255,0.4);
}

/* CTA STRIP */
.cta-strip { padding: 100px 5%; background: #0055ff; }
.cta-strip-inner { max-width: 600px; margin: 0 auto; text-align: center; }
.cta-strip h2 {
  font-family: 'Bebas Neue', sans-serif; font-size: clamp(48px, 6vw, 72px);
  letter-spacing: 0.05em; color: #fff; margin-bottom: 12px;
}
.cta-strip p {
  font-family: 'DM Mono', monospace; font-size: 12px; color: rgba(255,255,255,0.7);
  line-height: 1.8; margin-bottom: 32px;
}
.cta-btn {
  font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 0.2em;
  background: #fff; color: #0055ff; text-decoration: none; padding: 15px 40px;
  border-radius: 2px; display: inline-block; transition: all 0.2s;
}
.cta-btn:hover { background: #e8eaf0; transform: translateY(-2px); }

@media (max-width: 900px) {
  .two-col { grid-template-columns: 1fr; gap: 48px; }
  .values-grid { grid-template-columns: 1fr; }
}
</style>