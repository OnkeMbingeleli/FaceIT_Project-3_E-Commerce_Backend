<template>
  <nav class="nav" :class="{ scrolled }">
    <div class="nav-inner">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <span class="logo-dot"></span>
        <span class="logo-text">FACE<span class="logo-accent">.IT</span></span>
      </router-link>

      <!-- Desktop links -->
      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
        <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        <router-link to="/product" class="nav-link" active-class="active">Product</router-link>
        <router-link to="/brands" class="nav-link" active-class="active">Brands</router-link>
        <router-link to="/brands" class="nav-link" active-class="active">Brands</router-link>
      </div>

      <!-- Desktop actions -->
      <div class="nav-actions">
        <router-link to="/login" class="btn-ghost">Sign In</router-link>
        <router-link to="/login" class="btn-solid">Get Started</router-link>
      </div>

      <!-- Hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="menu-drop">
      <div v-if="menuOpen" class="mobile-menu">
        <router-link to="/" class="mob-link" @click="menuOpen = false" exact>Home</router-link>
        <router-link to="/about" class="mob-link" @click="menuOpen = false">About</router-link>
        <router-link to="/product" class="mob-link" @click="menuOpen = false">Product</router-link>
        <router-link to="/brands" class="mob-link" @click="menuOpen = false">Brands</router-link>
        <router-link to="/brands" class="mob-link" @click="menuOpen = false">Brands</router-link>
        <div class="mob-divider"></div>
        <router-link to="/login" class="mob-ghost" @click="menuOpen = false">Sign In</router-link>
        <router-link to="/login" class="mob-solid" @click="menuOpen = false">Get Started</router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  padding: 0 5%;
  transition: background 0.4s, border-color 0.4s, box-shadow 0.4s;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(8, 11, 16, 0.96);
  border-color: rgba(0, 100, 255, 0.15);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(16px);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 72px;
  gap: 40px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}
.logo-dot {
  width: 8px; height: 8px;
  background: #0055ff;
  border-radius: 50%;
  box-shadow: 0 0 10px #0055ff, 0 0 20px rgba(0,85,255,0.4);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 10px #0055ff} 50%{opacity:0.5;box-shadow:0 0 4px #0055ff} }
.logo-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  letter-spacing: 0.15em;
  color: #fff;
}
.logo-accent { color: #0055ff; }

/* Nav links */
.nav-links {
  display: flex;
  gap: 4px;
}
.nav-link {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 2px;
  transition: color 0.2s, background 0.2s;
  position: relative;
}
.nav-link:hover { color: #fff; }
.nav-link.active {
  color: #fff;
  background: rgba(0,85,255,0.12);
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -1px; left: 14px; right: 14px;
  height: 2px;
  background: #0055ff;
  border-radius: 1px;
}

/* Actions */
.nav-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: auto;
}
.btn-ghost {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 2px;
  transition: all 0.2s;
}
.btn-ghost:hover { color: #fff; border-color: rgba(0,85,255,0.6); }
.btn-solid {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: #0055ff;
  color: #fff;
  text-decoration: none;
  padding: 9px 20px;
  border-radius: 2px;
  transition: background 0.2s, box-shadow 0.2s;
}
.btn-solid:hover { background: #0040cc; box-shadow: 0 0 20px rgba(0,85,255,0.4); }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px; height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
}
.hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  background: rgba(8,11,16,0.98);
  border-top: 1px solid rgba(0,85,255,0.15);
  display: flex;
  flex-direction: column;
  padding: 24px 5%;
  gap: 4px;
  backdrop-filter: blur(16px);
}
.mob-link {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: color 0.2s;
}
.mob-link:hover, .mob-link.router-link-active { color: #fff; }
.mob-divider { height: 1px; background: rgba(0,85,255,0.2); margin: 12px 0; }
.mob-ghost, .mob-solid {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 20px;
  border-radius: 2px;
  margin-top: 4px;
  text-align: center;
}
.mob-ghost { color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.15); }
.mob-solid { background: #0055ff; color: #fff; }

.menu-drop-enter-active, .menu-drop-leave-active { transition: all 0.25s ease; }
.menu-drop-enter-from, .menu-drop-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 768px) {
  .nav-links, .nav-actions { display: none; }
  .hamburger { display: flex; }
}
</style>