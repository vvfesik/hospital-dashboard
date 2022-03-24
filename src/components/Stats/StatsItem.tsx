import { IStatsData, type StatsDataKey } from 'App';
import useStats from './useStats';
import styles from './index.module.scss';

interface IStatsItemProps {
  statsKey: StatsDataKey;
  statsData: IStatsData;
  className?: string;
}

const StatsItem = (props: IStatsItemProps) => {
  const { statsKey, statsData, className } = props;

  const { title, value, Icon } = useStats(statsKey, statsData);

  return (
    <div className={className || styles.statsItem}>
      <i><Icon /></i>
      <dl>
        <dd>{value}</dd>
        <dt>{title}</dt>
      </dl>
      <div className={styles.bg}>
        <Icon />
      </div>
    </div>
  )
}

export default StatsItem;
