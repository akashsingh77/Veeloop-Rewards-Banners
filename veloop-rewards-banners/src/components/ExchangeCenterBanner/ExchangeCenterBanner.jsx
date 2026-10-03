import React, { useState } from 'react';
import styles from './ExchangeCenterBanner.module.css';
import { GemIcon, VECoinIcon } from '../common/CurrencyTokens';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Coins, 
  Layers
} from 'lucide-react';

export const ExchangeCenterBanner = () => {
  const [gemAmount, setGemAmount] = useState(100);

  // Conversion formula: 1 Gem = 50 VEs
  const veOutput = gemAmount * 50;

  return (
    <section className={styles.banner} aria-label="Exchange Center Banner">
      {/* Ambient Glows */}
      <div className={styles.ambientPurpleGlow} />
      <div className={styles.ambientGoldGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        {/* Left Column: Heading, Copy, Metrics, CTA */}
        <div className={styles.contentCol}>
          <div className={styles.tagBadge}>
            <Layers size={13} color="#d8b4fe" />
            <span>Liquidity Exchange Gate</span>
          </div>

          <h2 className={styles.title}>
            Convert Gems <span className={styles.titleHighlight}>to VEs</span>
          </h2>

          <p className={styles.description}>
            Transform your accumulated task gems into liquid Veeloop Energy. 
            Enjoy wholesale exchange rates, 100% zero gas fees, and immediate crediting into your unified balance.
          </p>

          <div className={styles.highlightsStrip}>
            <div className={styles.highlightPill}>
              <Zap size={14} color="#e5b94c" />
              <span>Rate: <strong className={styles.highlightValue}>1 Gem = 50 VEs</strong></span>
            </div>
            <div className={styles.highlightPill}>
              <Coins size={14} color="#a855f7" />
              <span>Gas Fee: <strong className={styles.highlightValue}>0% Overhead</strong></span>
            </div>
            <div className={styles.highlightPill}>
              <Sparkles size={14} color="#10b981" />
              <span>Speed: <strong className={styles.highlightValue}>Instant Credit</strong></span>
            </div>
          </div>

          <button type="button" className={styles.ctaButton}>
            <span>Open Exchange Center</span>
            <ArrowRight size={16} className={styles.ctaIcon} />
          </button>
        </div>

        {/* Right Column: Gem-to-VE Flow Pipeline & Floating Items */}
        <div className={styles.visualCol}>
          {/* Floating Gems & Coins */}
          <div className={styles.floatingGemTop}>
            <GemIcon size={46} />
          </div>
          <div className={styles.floatingCoinBottom}>
            <VECoinIcon size={44} />
          </div>

          {/* Exchange Flow Stage Card */}
          <div className={styles.exchangeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.headerTitle}>
                <Coins size={15} color="#e5b94c" />
                <span>Gem Liquidity Pipeline</span>
              </div>
              <span className={styles.badgeLive}>
                <Sparkles size={11} />
                <span>Live Peg</span>
              </span>
            </div>

            {/* Visual Flow Conduit */}
            <div className={styles.flowConduit}>
              {/* Source: Purple Gems */}
              <div className={styles.flowNode}>
                <div className={styles.nodeIconWrapper}>
                  <GemIcon size={32} glow={false} />
                </div>
                <span className={styles.nodeAmount}>{gemAmount} Gems</span>
                <span className={styles.nodeLabel}>Source</span>
              </div>

              {/* Transfer Bridge Pipeline */}
              <div className={styles.flowBridge}>
                <span className={styles.ratePill}>1 : 50 Ratio</span>
                <div className={styles.flowPipeline}>
                  <div className={styles.flowPulse} />
                </div>
                <ArrowRight size={14} className={styles.flowArrow} />
              </div>

              {/* Destination: Gold VE */}
              <div className={styles.flowNode}>
                <div className={styles.nodeIconWrapper}>
                  <VECoinIcon size={32} glow={false} />
                </div>
                <span className={styles.nodeAmount} style={{ color: '#f5d37d' }}>
                  {veOutput.toLocaleString()} VEs
                </span>
                <span className={styles.nodeLabel}>Output</span>
              </div>
            </div>

            {/* Interactive Amount Slider */}
            <div className={styles.sliderSection}>
              <div className={styles.sliderHeader}>
                <span>Select Gems to Convert:</span>
                <span className={styles.sliderValueText}>{gemAmount} Gems</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={gemAmount}
                onChange={(e) => setGemAmount(Number(e.target.value))}
                className={styles.sliderInput}
                aria-label="Select Gems to Convert"
              />
            </div>

            {/* Card Micro Footer */}
            <div className={styles.cardFooter}>
              <span>Unified Liquidity Pool #4</span>
              <div className={styles.instantTag}>
                <CheckCircle2 size={12} />
                <span>Guaranteed Zero Slippage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeCenterBanner;
