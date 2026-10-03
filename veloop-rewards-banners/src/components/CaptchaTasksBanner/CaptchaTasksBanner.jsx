import React, { useState } from 'react';
import styles from './CaptchaTasksBanner.module.css';
import { GemIcon } from '../common/CurrencyTokens';
import { 
  ShieldCheck, 
  ArrowRight, 
  RefreshCw, 
  Sparkles, 
  CheckCircle2, 
  Clock,
  Zap
} from 'lucide-react';

const SAMPLE_CODES = ['7K9BX', '4M8PQ', '9W2ZT', '5R6HK', '3X9LY'];

export const CaptchaTasksBanner = () => {
  const [codeIndex, setCodeIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const currentCode = SAMPLE_CODES[codeIndex];

  const handleRefresh = () => {
    setIsRotating(true);
    setTimeout(() => {
      setCodeIndex((prev) => (prev + 1) % SAMPLE_CODES.length);
      setIsVerified(false);
      setInputValue('');
      setIsRotating(false);
    }, 250);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (inputValue.trim().toUpperCase() === currentCode) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
      alert('Verification code matched sample! Try typing: ' + currentCode);
    }
  };

  return (
    <section className={styles.banner} aria-label="Captcha Tasks Banner">
      {/* Ambient background glows and grid */}
      <div className={styles.ambientGlowPurple} />
      <div className={styles.ambientGlowGold} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        {/* Left Column: Headline, Copy, Metrics, CTA */}
        <div className={styles.contentCol}>
          <div className={styles.tagBadge}>
            <Sparkles size={13} color="#d8b4fe" />
            <span>Instant Micro-Tasks</span>
          </div>

          <h2 className={styles.title}>
            Solve Captchas. <span className={styles.titleHighlight}>Earn Gems.</span>
          </h2>

          <p className={styles.description}>
            Complete quick human verification challenges to mine premium Veeloop Gems. 
            Accumulate daily balances to unlock exclusive multipliers and instant token conversions.
          </p>

          <div className={styles.metricsStrip}>
            <div className={styles.metricItem}>
              <Zap size={14} color="#e5b94c" />
              <span>Reward: <strong className={styles.metricValue}>+25 Gems</strong></span>
            </div>
            <div className={styles.metricItem}>
              <Clock size={14} color="#4a88f7" />
              <span>Speed: <strong className={styles.metricValue}>&lt; 15 sec</strong></span>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricDot} />
              <span>Daily Limit: <strong className={styles.metricValue}>18/20</strong></span>
            </div>
          </div>

          <button 
            type="button" 
            className={styles.ctaButton}
            onClick={() => {
              const el = document.getElementById('captcha-input');
              if (el) el.focus();
            }}
          >
            <span>Start Task</span>
            <ArrowRight size={16} className={styles.ctaIcon} />
          </button>
        </div>

        {/* Right Column: Floating Gems & Interactive Captcha Card */}
        <div className={styles.visualCol}>
          {/* Floating Gems */}
          <div className={styles.floatingGemPrimary}>
            <GemIcon size={58} />
          </div>
          <div className={styles.floatingGemSecondary}>
            <GemIcon size={42} />
          </div>
          <div className={styles.floatingGemTertiary}>
            <GemIcon size={32} />
          </div>

          {/* Interactive Captcha Card */}
          <div className={styles.captchaCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderTitle}>
                <ShieldCheck size={16} color="#d8b4fe" />
                <span>Security Check #8392</span>
              </div>
              <div className={styles.statusPill}>
                <CheckCircle2 size={12} />
                <span>{isVerified ? 'Solved +25 💎' : 'Active'}</span>
              </div>
            </div>

            {/* Captcha Code Display */}
            <div className={styles.captchaBox}>
              <div className={styles.captchaNoiseGrid} />
              <div className={styles.captchaCode}>
                {currentCode.split('').map((char, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      '--rot': (i % 2 === 0 ? 5 : -5) * (i + 1),
                      display: 'inline-block',
                      marginRight: '2px'
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <button 
                type="button" 
                className={styles.refreshButton}
                onClick={handleRefresh}
                title="Refresh Captcha"
                aria-label="Refresh Captcha"
              >
                <RefreshCw size={14} style={{ transform: isRotating ? 'rotate(180deg)' : 'none' }} />
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleVerify} className={styles.inputGroup}>
              <input
                id="captcha-input"
                type="text"
                className={styles.captchaInput}
                placeholder={`Type "${currentCode}"`}
                value={inputValue}
                maxLength={6}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className={styles.verifyBtn}>
                Verify
              </button>
            </form>

            <div className={styles.cardFooter}>
              <span>Powered by Veeloop Protocol</span>
              <div className={styles.cardRewardPill}>
                <GemIcon size={14} glow={false} />
                <span>+25 Gems Instant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaptchaTasksBanner;
