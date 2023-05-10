import PropTypes from 'prop-types';
import { ReactComponent as ClearIcon } from '../../assets/weather-icons/clear-day.svg';
import { ReactComponent as CloudsIcon } from '../../assets/weather-icons/cloudy.svg';
import { ReactComponent as RainIcon } from '../../assets/weather-icons/rain.svg';
import { ReactComponent as DrizzleIcon } from '../../assets/weather-icons/drizzle.svg';
import { ReactComponent as ThunderstormIcon } from '../../assets/weather-icons/thunderstorm.svg';
import { ReactComponent as SnowIcon } from '../../assets/weather-icons/snow.svg';
import { ReactComponent as SquallIcon } from '../../assets/weather-icons/squall.svg';
import { ReactComponent as TornadoIcon } from '../../assets/weather-icons/tornado.svg';
import { ReactComponent as MistIcon } from '../../assets/weather-icons/mist.svg';
import { ReactComponent as SmokeIcon } from '../../assets/weather-icons/smoke.svg';
import { ReactComponent as HazeIcon } from '../../assets/weather-icons/haze.svg';
import { ReactComponent as FogIcon } from '../../assets/weather-icons/fog.svg';
import { ReactComponent as DustIcon } from '../../assets/weather-icons/dust.svg';
import s from '../../components/IconSelector/IconSelector.module.scss';

const IconSelector = ({ icon }) => {
  if (icon === 'Sand' || icon === 'Dust' || icon === 'Ash') {
    icon = 'DifferentDust';
  }

  switch (icon) {
    case 'Clear':
      return <ClearIcon className={s.weatherIcon} />;
    case 'Clouds':
      return <CloudsIcon className={s.weatherIcon} />;
    case 'Raining':
      return <RainIcon className={s.weatherIcon} />;
    case 'Drizzle':
      return <DrizzleIcon className={s.weatherIcon} />;
    case 'Thunderstorm':
      return <ThunderstormIcon className={s.weatherIcon} />;
    case 'Snow':
      return <SnowIcon className={s.weatherIcon} />;
    case 'Squall':
      return <SquallIcon className={s.weatherIcon} />;
    case 'Tornado':
      return <TornadoIcon className={s.weatherIcon} />;
    case 'Mist':
      return <MistIcon className={s.weatherIcon} />;
    case 'Smoke':
      return <SmokeIcon className={s.weatherIcon} />;
    case 'Haze':
      return <HazeIcon className={s.weatherIcon} />;
    case 'Fog':
      return <FogIcon className={s.weatherIcon} />;
    case 'DifferentDust':
      return <DustIcon className={s.weatherIcon} />;
    default:
      return null;
  }
};

export default IconSelector;

IconSelector.propTypes = {
  icon: PropTypes.string,
};
