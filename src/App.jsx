import useWindowSize from '@rooks/use-window-size';

import './App.scss';

import Mercy from './components/Mercy';
import Top from './components/Top';

const Member = ({ name, image, link }) => (
  <a href={link} className='member' alt={name}>
    <img src={image} alt={name} />
    <span>{name}</span>
  </a>
);

const App = () => {
  const { innerWidth } = useWindowSize();

  return (
    <div className='app'>
      <div className='box'></div>
      <div className='bg'>
        <div className='top'>
          <Top innerWidth={innerWidth} />
        </div>
        <div className='mercy'>
          <Mercy innerWidth={innerWidth} />
        </div>
      </div>
      <div className='body'>
        <div className='body-top'>
          <div className='members'>
            <Member
              name={'SECOND'}
              image={
                'https://i1.sndcdn.com/avatars-N1mtwb0ZfCcvQLrL-yikp1g-t200x200.jpg'
              }
              link={'https://soundcloud.com/prodbysecond'}
            />
            <Member
              name={'OMENBEATS808'}
              image={
                'https://i1.sndcdn.com/avatars-Ly8FsfgakwQp2Sqh-S2RyZw-t200x200.jpg'
              }
              link={'https://soundcloud.com/omenbeats808'}
            />
            <Member
              name={'velvet'}
              image={
                'https://i1.sndcdn.com/avatars-8KVThYd7zI5xYjnK-55H8NA-t200x200.jpg'
              }
              link={'https://soundcloud.com/seeyouvelvet'}
            />
            <Member
              name={'Valak'}
              image={
                'https://i1.sndcdn.com/avatars-tqy8SkUhlMkbjixj-5ANcKA-t200x200.jpg'
              }
              link={'https://soundcloud.com/vvalak'}
            />
            <Member
              name={'KK Shi'}
              image={
                'https://i1.sndcdn.com/avatars-eYb5D8n8hbCIfpwK-yQxXrg-t200x200.jpg'
              }
              link={'https://soundcloud.com/kk_shi'}
            />
          </div>
          <div className='members'>
            <Member
              name={'W a r l o s s'}
              image={
                'https://i1.sndcdn.com/avatars-SoQPrNWQEJgqTgld-MJ7Cog-t200x200.jpg'
              }
              link={'https://soundcloud.com/warloss'}
            />
            <Member
              name={'ntg.'}
              image={
                'https://i1.sndcdn.com/avatars-ONbQ9Nw5tFv2wL1o-Wy3k5g-t200x200.jpg'
              }
              link={'https://soundcloud.com/nategxcrazy'}
            />
            <Member
              name={'merc.'}
              image={
                'https://i1.sndcdn.com/avatars-g0xdl5NBmX3BYdur-8RHeQQ-t200x200.jpg'
              }
              link={'https://soundcloud.com/mercxl'}
            />
            <Member
              name={'HEARTLSS'}
              image={
                'https://i1.sndcdn.com/avatars-z0XI070fyk5vPtyt-IKMI7w-t200x200.jpg'
              }
              link={'https://soundcloud.com/heartlss'}
            />
          </div>
        </div>
        <div className='body-bottom'>
          <p>official website for mercy collective</p>
          <div className='links'>
            <span>
              <a href='https://soundcloud.com/mxrcified'>SoundCloud</a>
            </span>
            <span className='space'></span>
            <span>
              <a href='https://discord.gg/Vg9VM5fdXz'>Discord</a>
            </span>
            <span className='space'></span>
            <span>
              <a href='https://payhip.com/b/8Or6I'>DrumKit</a>
            </span>
          </div>
          <p>Website created by <a href='https://soundcloud.com/alixsep'>Alixsep</a></p>
        </div>
      </div>
    </div>
  );
};

export default App;
