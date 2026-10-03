import React, { useState } from 'react';
import styles from './ReferEarnBanner.module.css';
import { VECoinIcon, GemIcon } from '../common/CurrencyTokens';
import { 
  Users, 
  ArrowRight, 
  Copy, 
  Check, 
  Zap, 
  Infinity as InfinityIcon, 
  TrendingUp, 
  ShieldCheck, 
  Gift 
} from 'lucide-react';

export const ReferEarnBanner = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = 'VELOOP123';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className={styles.banner} aria-label="Refer and Earn Banner">
      {/* Ambient Glows */}
      <div className={styles.ambientGoldGlow} />
      <div className={styles.ambientBlueGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        {/* Top Section: Left Content & Right Copy Card */}
        <div className={styles.topSection}>
          {/* Left Column: Heading, Split Rewards, CTA */}
          <div className={styles.contentCol}>
            <div className={styles.tagBadge}>
              <Users size={12} color="#f5d37d" />
              <span>Dual-Sided Referral Network</span>
            </div>

            <h2 className={styles.title}>
              Refer Friends, <span className={styles.titleHighlight}>Earn Rewards</span>
            </h2>

            <p className={styles.description}>
              Share your personal link to invite colleagues into the Veeloop rewards ecosystem. 
              Earn instant bonus tokens the moment they verify and execute their first micro-challenge.
            </p>

            {/* Split Rewards Row */}
            <div className={styles.splitRewardsRow}>
              <div className={styles.rewardCardYou}>
                <VECoinIcon size={28} glow={false} />
                <div className={styles.rewardMeta}>
                  <span className={styles.rewardLabel}>You Receive</span>
                  <span className={styles.rewardValueYou}>500 VEs</span>
                </div>
              </div>

              <span className={styles.rewardPlus}>+</span>

              <div className={styles.rewardCardFriend}>
                <Gift size={22} color="#70a4fc" />
                <div className={styles.rewardMeta}>
                  <span className={styles.rewardLabel}>Friend Receives</span>
                  <span className={styles.rewardValueFriend}>200 VEs</span>
                </div>
              </div>
            </div>

            <button type="button" className={styles.ctaButton}>
              <span>Invite Now</span>
              <ArrowRight size={15} className={styles.ctaIcon} />
            </button>
          </div>

          {/* Right Column: Referral Code Copy Card & Floating Assets */}
          <div className={styles.visualCol}>
            {/* Floating Coins / Gems */}
            <div className={styles.floatingCoinTop}>
              <VECoinIcon size={44} />
            </div>
            <div className={styles.floatingGemBottom}>
              <GemIcon size={38} />
            </div>

            {/* Code Copy Card */}
            <div className={styles.codeCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardHeaderTitle}>
                  <Gift size={14} color="#f5d37d" />
                  <span>Your Referral Code</span>
                </div>
                <span className={styles.tierPill}>Tier 1 Active</span>
              </div>

              <div className={styles.codeBox}>
                <span className={styles.codeText}>{referralCode}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`${styles.copyBtn} ${copied ? styles.copySuccess : ''}`}
                  aria-label="Copy Referral Code"
                >
                  {copied ? (
                    <>
                      <Check size={13} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className={styles.cardFooterText}>
                <span>Share link automatically applies code at sign-up</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Feature Benefit Strip */}
        <div className={styles.benefitStrip}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIconBox}>
              <Zap size={14} color="#e5b94c" />
            </div>
            <div className={styles.benefitTextGroup}>
              <span className={styles.benefitTitle}>Instant Payout</span>
              <span className={styles.benefitDesc}>Auto-credited to unified balance</span>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIconBox}>
              <InfinityIcon size={14} color="#70a4fc" />
            </div>
            <div className={styles.benefitTextGroup}>
              <span className={styles.benefitTitle}>No Referral Limit</span>
              <span className={styles.benefitDesc}>Invite unlimited partners</span>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIconBox}>
              <TrendingUp size={14} color="#10b981" />
            </div>
            <div className={styles.benefitTextGroup}>
              <span className={styles.benefitTitle}>Tier Multiplier</span>
              <span className={styles.benefitDesc}>Up to +25% bonus tier scaling</span>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIconBox}>
              <ShieldCheck size={14} color="#a855f7" />
            </div>
            <div className={styles.benefitTextGroup}>
              <span className={styles.benefitTitle}>Lifetime Cut</span>
              <span className={styles.benefitDesc}>5% perpetual friend task cut</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferEarnBanner;
