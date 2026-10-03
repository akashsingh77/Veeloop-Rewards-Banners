import React, { useState } from 'react';
import styles from './BonusVEsBanner.module.css';
import { VECoinIcon } from '../common/CurrencyTokens';
import { 
  Award, 
  ArrowRight, 
  Check, 
  Flame, 
  TrendingUp 
} from 'lucide-react';

const INITIAL_TASKS = [
  { id: 1, title: 'Daily Check-in Streak (Day 5)', reward: '+50 VEs', completed: true },
  { id: 2, title: 'Complete 5 Security Tasks', reward: '+150 VEs', completed: true },
  { id: 3, title: 'Verify Recovery Email & 2FA', reward: '+250 VEs', completed: false, claimable: true },
  { id: 4, title: 'First Community Swap Volume', reward: '+500 VEs', completed: false, claimable: false },
];

export const BonusVEsBanner = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleClaim = (taskId) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        return { ...t, completed: true, claimable: false };
      }
      return t;
    }));
  };

  return (
    <section className={styles.banner} aria-label="Bonus VEs Banner">
      {/* Ambient glows and grid */}
      <div className={styles.ambientGoldGlow} />
      <div className={styles.ambientNavyGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        {/* Left Column: Heading, Task Checklist, CTA */}
        <div className={styles.contentCol}>
          <div className={styles.tagBadge}>
            <Award size={13} color="#f5d37d" />
            <span>Tier Rewards Vault</span>
          </div>

          <h2 className={styles.title}>
            Boost Your <span className={styles.titleHighlight}>VE Balance</span>
          </h2>

          <p className={styles.description}>
            Fulfill daily network milestones, maintain continuous activity streaks, 
            and stack extra VE multipliers to unlock elevated governance privileges.
          </p>

          {/* Interactive Task Checklist */}
          <div className={styles.checklistCard}>
            {tasks.map(task => (
              <div key={task.id} className={styles.checklistItem}>
                <div className={styles.itemLeft}>
                  {task.completed ? (
                    <span className={styles.checkIconSuccess} title="Completed">
                      <Check size={12} strokeWidth={3} />
                    </span>
                  ) : (
                    <span className={styles.checkIconPending} title="Pending">
                      <Flame size={12} />
                    </span>
                  )}
                  <span className={`${styles.taskTitle} ${task.completed ? styles.taskDone : ''}`}>
                    {task.title}
                  </span>
                </div>
                <div className={styles.itemRight}>
                  {task.claimable ? (
                    <button 
                      type="button" 
                      onClick={() => handleClaim(task.id)}
                      className={styles.rewardBadge}
                      style={{ cursor: 'pointer', background: 'rgba(229, 185, 76, 0.28)' }}
                    >
                      Claim {task.reward}
                    </button>
                  ) : (
                    <span className={`${styles.rewardBadge} ${task.completed ? styles.rewardClaimed : ''}`}>
                      {task.completed ? 'Claimed' : task.reward}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button type="button" className={styles.ctaButton}>
            <span>Explore Bonuses</span>
            <ArrowRight size={16} className={styles.ctaIcon} />
          </button>
        </div>

        {/* Right Column: Glowing Pedestal Visual */}
        <div className={styles.visualCol}>
          <div className={styles.vaultPill}>
            <TrendingUp size={13} />
            <span>+950 VEs Claimable</span>
          </div>

          <div className={styles.pedestalStage}>
            {/* Luminous upward beam */}
            <div className={styles.lightBeam} />

            {/* Satellite Floating Gold Coins */}
            <div className={styles.floatingCoinLeft}>
              <VECoinIcon size={44} />
            </div>
            <div className={styles.floatingCoinRight}>
              <VECoinIcon size={38} />
            </div>

            {/* Main Floating VE Emblem */}
            <div className={styles.floatingMedallion}>
              <div className={styles.medallionGlow} />
              <VECoinIcon size={96} />
            </div>

            {/* 3D Tiered Pedestal Platform */}
            <div className={styles.pedestalBase}>
              <div className={styles.pedestalTier1} />
              <div className={styles.pedestalTier2} />
              <div className={styles.pedestalTier3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusVEsBanner;
