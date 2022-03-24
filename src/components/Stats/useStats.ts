import * as Icons from 'components/Icons';
import { IStatsData, type StatsDataKey } from 'App';

const icons = {
  active_cases: Icons.IconMedicalDrip,
  beds_available: Icons.IconStretcher,
  corona_cases: Icons.IconVirus,
  deaths: Icons.IconHeartbeat,
  recovered: Icons.IconVirusSlash,
  testing_done: Icons.IconThermometer,
};

const makeStatsValue = (val: string | number = 0) => {
  const num = new Intl.NumberFormat().format(+val);
  const numArr = num.split(',');
  const result = `${numArr[0]}.${Math.round(+numArr[1] / 100)}`;
  switch (numArr.length) {
    case 1:
      return val;
    case 2:
      return result + 'k';
    case 3:
      return result + 'm';
    case 4:
      return result + 'b';
    default:
      return '(╯°□°)╯︵ ┻━━┻';
  };
};

const useStats = (key: StatsDataKey, statsData: IStatsData) => {
  const title = key.replaceAll('_', ' ');
  const value = makeStatsValue(statsData[key]);
  const Icon = icons[key];
  return { title, value, Icon };
};

export default useStats;
