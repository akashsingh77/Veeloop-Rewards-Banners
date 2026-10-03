import React, { useState } from 'react';
import styles from './SwapCenterBanner.module.css';
import { VECoinIcon, SVETokenIcon } from '../common/CurrencyTokens';
import { 
  ArrowDownUp, 
  ChevronRight, 
  Sparkles, 
  Percent, 
  ShieldCheck, 
  Zap,
  Repeat
} from 'lucide-react';

export const SwapCenterBanner = () => {
  const [isSwapped, setIsSwapped] = useState(false);
  const [payAmount, setPayAmount] = useState('1000');

  // Rate: 1 VE = 0.98 sVE
  const calculatedReceive = isSwapped
    ? (parseFloat(payAmount || 0) * 1.02).toFixed(2)
    : (parseFloat(payAmount || 0) * 0.98).toFixed(2);

  const handleToggleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <section className={styles.banner} aria-label="Swap Center Banner">
      {/* Ambient Glows */}
      <div className={styles.ambientBlueGlow} />
      <div className={styles.ambientGoldGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        {/* Left Column: Heading, Subtitle, Specs, CTA */}
        <div className={styles.contentCol}>
          <div className={styles.tagBadge}>
            <Repeat size={13} color="#70a4fc" />
            <span>Internal Currency Engine</span>
          </div>

          <h2 className={styles.title}>
            Swap <span className={styles.titleHighlight}>Center</span>
          </h2>

          <p className={styles.description}>
            Convert liquid VE points directly into staked sVEs without third-party gas fees. 
            Lock in an elevated 14.8% APY staking dividend and gain governance weight across the platform.
          </p>

          <div className={styles.specsStrip}>
            <div className={styles.specBadge}>
              <Zap size={14} color="#e5b94c" />
              <span>Gas Fee: <strong className={styles.specValue}>$0.00 (Zero)</strong></span>
            </div>
            <div className={styles.specBadge}>
              <Percent size={14} color="#70a4fc" />
              <span>Staking Yield: <strong className={styles.specValue}>+14.8% APY</strong></span>
            </div>
            <div className={styles.specBadge}>
              <ShieldCheck size={14} color="#10b981" />
              <span>Slippage: <strong className={styles.specValue}>&lt; 0.05%</strong></span>
            </div>
          </div>

          <button type="button" className={styles.ctaButton}>
            <span>Open Swap Center &gt;</span>
            <ChevronRight size={16} className={styles.ctaIcon} />
          </button>
        </div>

        {/* Right Column: Swap Widget with floating coins */}
        <div className={styles.visualCol}>
          {/* Floating Tokens */}
          <div className={styles.floatingTokenLeft}>
            <VECoinIcon size={46} />
          </div>
          <div className={styles.floatingTokenRight}>
            <SVETokenIcon size={46} />
          </div>

          {/* Interactive Swap Card */}
          <div className={styles.swapCard}>
            <div className={styles.swapHeader}>
              <div className={styles.swapTitle}>
                <Repeat size={15} color="#70a4fc" />
                <span>Instant Token Swap</span>
              </div>
              <span className={styles.ratePill}>
                {isSwapped ? '1 sVE ≈ 1.02 VE' : '1 VE ≈ 0.98 sVE'}
              </span>
            </div>

            {/* "From" Currency Row */}
            <div className={styles.tokenRow}>
              <div className={styles.tokenMeta}>
                {isSwapped ? <SVETokenIcon size={34} glow={false} /> : <VECoinIcon size={34} glow={false} />}
                <div className={styles.tokenInfo}>
                  <span className={styles.tokenSymbol}>{isSwapped ? 'sVE' : 'VE'}</span>
                  <span className={styles.tokenLabel}>{isSwapped ? 'Staked Veeloop' : 'Veeloop Energy'}</span>
                </div>
              </div>
              <div className={styles.amountCol}>
                <input
                  type="number"
                  className={styles.amountInput}
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  aria-label="Pay Amount"
                />
                <span className={styles.amountSubtext}>Balance: 12,450</span>
              </div>
            </div>

            {/* Middle Action / Swap Direction Toggle */}
            <div className={styles.swapActionDivider}>
              <div className={styles.swapDividerLine} />
              <button
                type="button"
                className={styles.swapButton}
                onClick={handleToggleSwap}
                title="Switch Swap Direction"
                aria-label="Switch Swap Direction"
              >
                <ArrowDownUp size={16} />
              </button>
            </div>

            {/* "To" Currency Row */}
            <div className={styles.tokenRow}>
              <div className={styles.tokenMeta}>
                {isSwapped ? <VECoinIcon size={34} glow={false} /> : <SVETokenIcon size={34} glow={false} />}
                <div className={styles.tokenInfo}>
                  <span className={styles.tokenSymbol}>{isSwapped ? 'VE' : 'sVE'}</span>
                  <span className={styles.tokenLabel}>{isSwapped ? 'Veeloop Energy' : 'Staked Veeloop'}</span>
                </div>
              </div>
              <div className={styles.amountCol}>
                <span className={styles.amountInput} style={{ pointerEvents: 'none' }}>
                  {calculatedReceive}
                </span>
                <span className={styles.amountSubtext}>≈ ${(parseFloat(calculatedReceive) * 0.01).toFixed(2)} USD</span>
              </div>
            </div>

            {/* Card Footer Details */}
            <div className={styles.swapDetails}>
              <span>Settlement: Instant On-Chain</span>
              <div className={styles.swapYieldTag}>
                <Sparkles size={12} />
                <span>+14.8% Tier APY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapCenterBanner;
