import { IStatsData } from 'App';
import StatsItem from './StatsItem';
import styles from './index.module.scss';

const Stats = (props: IStatsData) => {
  return (
    <section>
      <h2>Hospital Stats</h2>
      <div className={styles.stats}>
        <div className={styles.column}>
          <StatsItem statsKey='corona_cases' statsData={props} />
          <StatsItem statsKey='recovered' statsData={props} className={styles.statsItemDark} />
        </div>
        <StatsItem statsKey='active_cases' statsData={props} />
        <div className={styles.column}>
          <StatsItem statsKey='deaths' statsData={props} className={styles.statsItemLight} />
          <StatsItem statsKey='testing_done' statsData={props} />
        </div>
        <StatsItem statsKey='beds_available' statsData={props} />
      </div>
    </section>
  )
}

export default Stats;
