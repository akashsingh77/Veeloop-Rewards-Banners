import React, { useState } from 'react';
import './App.css';
import CaptchaTasksBanner from './components/CaptchaTasksBanner/CaptchaTasksBanner';
import BonusVEsBanner from './components/BonusVEsBanner/BonusVEsBanner';
import SwapCenterBanner from './components/SwapCenterBanner/SwapCenterBanner';
import ExchangeCenterBanner from './components/ExchangeCenterBanner/ExchangeCenterBanner';
import ReferEarnBanner from './components/ReferEarnBanner/ReferEarnBanner';
import { GemIcon, VECoinIcon, SVETokenIcon } from './components/common/CurrencyTokens';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToBanner = (id) => {
    setActiveFilter(id);
    if (id === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="appWrapper">
      {/* Top Header Bar */}
      <header className="appHeader">
        <div className="headerContainer">
          {/* Brand Identity */}
          <div className="brandGroup">
            <div className="brandLogo">V</div>
            <div className="brandText">
              <span className="brandName">VELOOP REWARDS</span>
              <span className="brandSubtitle">Fintech Banner Redesign System</span>
            </div>
          </div>

          {/* Live User Token Balances */}
          <div className="balancesGroup">
            <div className="balanceChip">
              <GemIcon size={18} glow={false} />
              <span className="balanceLabel">Gems:</span>
              <span className="balanceValPurple">450</span>
            </div>
            <div className="balanceChip">
              <VECoinIcon size={18} glow={false} />
              <span className="balanceLabel">VEs:</span>
              <span className="balanceValGold">12,450</span>
            </div>
            <div className="balanceChip">
              <SVETokenIcon size={18} glow={false} />
              <span className="balanceLabel">sVEs:</span>
              <span className="balanceValBlue">3,200</span>
            </div>
          </div>

          {/* Filter / Quick Jump Navigation */}
          <nav className="navPillsBar" aria-label="Banner Navigation">
            <button
              type="button"
              className={`navPillBtn ${activeFilter === 'all' ? 'navPillActive' : ''}`}
              onClick={() => scrollToBanner('all')}
            >
              All Banners (5)
            </button>
            <button
              type="button"
              className={`navPillBtn ${activeFilter === 'banner-captcha' ? 'navPillActive' : ''}`}
              onClick={() => scrollToBanner('banner-captcha')}
            >
              1. Captcha Tasks
            </button>
            <button
              type="button"
              className={`navPillBtn ${activeFilter === 'banner-bonus' ? 'navPillActive' : ''}`}
              onClick={() => scrollToBanner('banner-bonus')}
            >
              2. Bonus VEs
            </button>
            <button
              type="button"
              className={`navPillBtn ${activeFilter === 'banner-swap' ? 'navPillActive' : ''}`}
              onClick={() => scrollToBanner('banner-swap')}
            >
              3. Swap Center
            </button>
            <button
              type="button"
              className={`navPillBtn ${activeFilter === 'banner-exchange' ? 'navPillActive' : ''}`}
              onClick={() => scrollToBanner('banner-exchange')}
            >
              4. Exchange Center
            </button>
            <button
              type="button"
              className={`navPillBtn ${activeFilter === 'banner-refer' ? 'navPillActive' : ''}`}
              onClick={() => scrollToBanner('banner-refer')}
            >
              5. Refer &amp; Earn
            </button>
          </nav>
        </div>
      </header>

      {/* Main Vertical Stack showcasing all 5 banners */}
      <main className="bannersStack">
        {/* Banner 1: CaptchaTasksBanner */}
        {(activeFilter === 'all' || activeFilter === 'banner-captcha') && (
          <section id="banner-captcha" className="bannerCardWrapper">
            <div className="bannerMetaHeader">
              <span className="bannerNumber">01 / CAPTCHA TASKS</span>
              <span className="bannerDimsSpec">100% Width • H: Desktop 430px | Tablet 460px | Mobile 500px</span>
            </div>
            <CaptchaTasksBanner />
          </section>
        )}

        {/* Banner 2: BonusVEsBanner */}
        {(activeFilter === 'all' || activeFilter === 'banner-bonus') && (
          <section id="banner-bonus" className="bannerCardWrapper">
            <div className="bannerMetaHeader">
              <span className="bannerNumber">02 / BONUS VES</span>
              <span className="bannerDimsSpec">100% Width • H: Desktop 430px | Tablet 460px | Mobile 500px</span>
            </div>
            <BonusVEsBanner />
          </section>
        )}

        {/* Banner 3: SwapCenterBanner */}
        {(activeFilter === 'all' || activeFilter === 'banner-swap') && (
          <section id="banner-swap" className="bannerCardWrapper">
            <div className="bannerMetaHeader">
              <span className="bannerNumber">03 / SWAP CENTER</span>
              <span className="bannerDimsSpec">100% Width • H: Desktop 430px | Tablet 460px | Mobile 500px</span>
            </div>
            <SwapCenterBanner />
          </section>
        )}

        {/* Banner 4: ExchangeCenterBanner */}
        {(activeFilter === 'all' || activeFilter === 'banner-exchange') && (
          <section id="banner-exchange" className="bannerCardWrapper">
            <div className="bannerMetaHeader">
              <span className="bannerNumber">04 / EXCHANGE CENTER</span>
              <span className="bannerDimsSpec">100% Width • H: Desktop 430px | Tablet 460px | Mobile 500px</span>
            </div>
            <ExchangeCenterBanner />
          </section>
        )}

        {/* Banner 5: ReferEarnBanner */}
        {(activeFilter === 'all' || activeFilter === 'banner-refer') && (
          <section id="banner-refer" className="bannerCardWrapper">
            <div className="bannerMetaHeader">
              <span className="bannerNumber">05 / REFER &amp; EARN</span>
              <span className="bannerDimsSpec">100% Width • H: Desktop 440px | Tablet 470px | Mobile 510px</span>
            </div>
            <ReferEarnBanner />
          </section>
        )}
      </main>

      {/* Footer Design System Spec */}
      <footer className="appFooter">
        <div className="footerContainer">
          <div className="footerBrand">
            <span className="footerTitle">VELOOP Rewards Design System</span>
            <span className="footerSubtitle">
              Engineered with React 19, CSS Modules, and Lucide React Icons. Dark Fintech Theme.
            </span>
          </div>

          <div className="themePaletteRow">
            <div className="paletteChip">
              <span className="paletteColorDot" style={{ background: '#161827', border: '1px solid #333' }} />
              <span>Body #161827</span>
            </div>
            <div className="paletteChip">
              <span className="paletteColorDot" style={{ background: '#1a1d2e' }} />
              <span>Navy #1a1d2e</span>
            </div>
            <div className="paletteChip">
              <span className="paletteColorDot" style={{ background: '#e5b94c' }} />
              <span>Gold #e5b94c</span>
            </div>
            <div className="paletteChip">
              <span className="paletteColorDot" style={{ background: '#70a4fc' }} />
              <span>Soft Blue</span>
            </div>
            <div className="paletteChip">
              <span className="paletteColorDot" style={{ background: '#9b51e0' }} />
              <span>Purple Gems</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
