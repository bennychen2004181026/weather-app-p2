import MetaItem from './components/MetaItem';
import wind from './assets/wind.svg';
import humidity from './assets/humidity.svg';
import airQuality from './assets/PM2.5.svg';
import somatosensory from './assets/somatosensory.svg';

const Meta = () => (
  <div className='flex font-semibold justify-around bg-slate-50 rounded-2xl w-full py-2 px-5 min-h-[100px]  max-xl:px-1'>
    <MetaItem imageUrl={ wind } value='9km/h' alt='wind icon' />
    <MetaItem imageUrl={ humidity } value='85%' alt='wind icon' />
    <MetaItem imageUrl={ airQuality } value='75μg' alt='wind icon' />
    <MetaItem imageUrl={ somatosensory } value='26°' alt='wind icon' />
  </div>
);

export default Meta;
