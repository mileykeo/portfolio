import './Hero.css'
import blobLeft from '../assets/hero/blob-left.svg'
import blobRight from '../assets/hero/blob-right.svg'
import vector1 from '../assets/hero/vector-1.svg'
import vector2 from '../assets/hero/vector-2.svg'
import star from '../assets/hero/star.svg'
import polaroid from '../assets/hero/polaroid.png'
import flower from '../assets/hero/flower.png'
import poster from '../assets/hero/poster.png'

const leftDoodle = [
  '⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⡞⠉⠀⠉⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⢷⣀⢀⣆⣀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⣠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣦⡀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⢀⢣⡞⣡⡴⠖⠒⢶⣄⠀⠀⠀⠀⠀⠀⠙⢿⡆⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⡉⣿⠀⡏⠀⠀⠀⠀⠙⣇⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠁⢻⡄⣷⠀⠀⠀⢀⡀⡿⠆⠀⠀⠀⠀⠀⣸⠋⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠐⠶⠮⠻⣜⢧⡀⠀⡿⠟⠁⠀⠀⠀⠀⣠⣾⢵⣇⣤⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠼⢯⡳⣄⠀⠀⠀⠀⠀⢀⡾⠉⠀⠀⠈⢳⠛⠂⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠻⣷⣄⠀⠀⠀⣼⠁⠀⢠⠄⠀⢈⣟⡁⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⢀⡴⣒⣩⣭⣝⣒⠮⣝⣧⣄⠀⣯⠀⠀⠹⠧⢴⡿⠄⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⣎⣼⡋⠉⠈⠉⠙⠛⠶⣽⡻⣷⣿⡀⠀⠀⠀⢈⣁⣀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⡗⣂⠀⠀⣀⣇⠀⠀⠀⠀⠈⠉⠙⠿⣆⠀⢠⡏⢁⢈⡆⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠘⠳⠭⠯⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⡈⢧⡈⠉⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣆⠁⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⠛⠶⣄⠀⠀⢿⣆⣤⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⢠⠠⠀⡿⠀⠀⡸⣿⠰⠆⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣧⠀⠉⠉⠁⠀⡰⠃⣿⠀⠓⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠈⠙⠒⠒⠒⠋⠀⢰⢻⢀⣏⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⡴⠟⠁⠈⢙⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠋⣾⢰⡍⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠈⠻⠟⠀⠀⠀⠀⠀⠀⠀⠀⠐⠁⣼⢇⠷⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⢿⠀⠀⠀⠀⠀⢀⡆⠀⠀⠀⠀⠀⠀⠀⣀⣴⣟⡘⠁⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠘⢧⡀⠀⠀⠀⠙⠿⢷⣶⣤⣤⡴⠶⣫⣿⠟⡬⠁⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢦⣀⠀⠀⠀⠀⠀⠀⣀⣤⣾⡿⣇⠛⠂⠀⠀⠀⠀ ',
  '⠢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠒⠒⠛⢋⣽⡿⡫⠶⠉⠀⠀⠀⠀⠀⠀ ',
  '⠀⠃⠤⢀⡀⣀⡀⣠⡄⠠⣶⡆⣀⡤⠖⣫⣾⣿⠻⠌⠋⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠈⠀⠉⠁⠙⠁⣠⡴⠚⣁⣴⣿⠟⣥⠝⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⢀⡴⠞⠁⣠⣾⠿⣫⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⢀⡴⠋⠀⣠⣾⠟⢡⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⣰⠟⠀⣠⡾⠋⠀⠀⡿⡆⠀⢀⡶⠛⠛⢶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⣼⠃⠀⣴⠟⠀⠀⠀⢰⡇⡇⠀⠘⣇⣀⡔⠁⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⣸⠃⠀⣼⠃⠀⠀⠀⠀⢸⡇⠘⢦⣀⠀⠀⣀⡴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⢀⡏⠀⢰⠃⠀⠀⡰⠀⠀⠸⣷⡀⠀⠈⠉⠉⠉⠀⠀⠀⠀⣤⠚⠉⠙⢦⡀⠀ ',
  '⢸⠇⠀⢸⠀⢀⠆⡇⠀⠀⠀⢣⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣷⡄⠀⠀⠹⡄ ',
  '⢸⡆⠀⢸⠀⣼⠁⣷⠀⠀⠀⠈⢧⠈⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠀⠀⠀⡇ ',
  '⠀⡇⠀⠀⠀⠶⠆⠹⣷⣄⠀⠀⠈⠻⣖⢤⣀⡀⠀⠀⢀⣠⣴⡿⠀⠿⠆⣰⠇ ',
  '⠀⢸⠀⠀⠀⢶⡆⠀⠀⠉⣁⠀⠀⠀⠈⠳⣄⡉⢙⢛⢛⡏⣥⠘⢗⣠⠞⠁⠀ ',
  '⠀⠀⠃⠀⠀⠀⠀⠀⢀⠎⠀⠀⢀⣀⡀⠈⢦⠉⠓⠶⠶⠶⠒⠚⠉⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⡞⢉⡉⠙⣦⠈⢷⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠱⠴⠞⢀⡿⠂⢸⡇⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⠤⠤⠴⠞⠁⠀⣼⡇⣛⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⢡⡍⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀',
].join('\n')

const rightDoodle = [
  '⠀⠀⠀⢸⣦⡀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⢸⣏⠻⣶⣤⡶⢾⡿⠁⠀⢠⣄⡀⢀⣴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⣀⣼⠷⠀⠀⠁⢀⣿⠃⠀⠀⢀⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ',
  '⠴⣾⣯⣅⣀⠀⠀⠀⠈⢻⣦⡀⠒⠻⠿⣿⡿⠿⠓⠂⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠉⢻⡇⣤⣾⣿⣷⣿⣿⣤⠀⠀⣿⠁⠀⠀⠀⢀⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠸⣿⡿⠏⠀⢀⠀⠀⠿⣶⣤⣤⣤⣄⣀⣴⣿⡿⢻⣿⡆⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠟⠁⠀⢀⣼⠀⠀⠀⠹⣿⣟⠿⠿⠿⡿⠋⠀⠘⣿⣇⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⢳⣶⣶⣿⣿⣇⣀⠀⠀⠙⣿⣆⠀⠀⠀⠀⠀⠀⠛⠿⣿⣦⣤⣀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⠿⠋⠁⠀⣹⣿⠳⠀⠀⠀⠀⠀⠀⢀⣠⣽⣿⡿⠟⠃ ',
  '⠀⠀⠀⠀⠀⢰⠿⠛⠻⢿⡇⠀⠀⠀⣰⣿⠏⠀⠀⢀⠀⠀⠀⣾⣿⠟⠋⠁⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⣰⣿⣿⣾⣿⠿⢿⣷⣀⢀⣿⡇⠁⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠉⠁⠀⠀⠀⠀⠙⢿⣿⣿⠇⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⠀⠀⠀⠀⠀⠀⠀ ',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀',
].join('\n')

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="blob blob-left" src={blobLeft} alt="" />
      <img className="swirl swirl-left" src={vector1} alt="" />
      <img className="swirl swirl-right" src={vector2} alt="" />
      <img className="blob blob-right" src={blobRight} alt="" />

      <pre className="doodle doodle-left" aria-hidden="true">
        {leftDoodle}
      </pre>
      <pre className="doodle doodle-right" aria-hidden="true">
        {rightDoodle}
      </pre>

      <h1 className="hero-title">
        <span>Miley</span>
        <span>Keovichith</span>
      </h1>

      <div className="panel panel-green panel-green-lg" />
      <div className="panel panel-green panel-green-sm" />
      <div className="panel panel-tan" />

      <nav className="hero-nav" aria-label="Primary">
        <a href="#top">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a
          href="https://www.figma.com/design/MkmBFuzJ14Tfh0BA5NFhnl?node-id=0-3"
          target="_blank"
          rel="noreferrer"
        >
          Contact me!
        </a>
      </nav>

      <article className="about-card" id="about">
        <h2>About</h2>
      </article>

      <img className="star" src={star} alt="" />

      <div className="polaroid">
        <img className="polaroid-frame" src={polaroid} alt="" />
        <div className="flower-window">
          <img src={flower} alt="Pink flower" />
        </div>
      </div>

      <img
        className="poster"
        id="portfolio"
        src={poster}
        alt="Dreamscape movie poster"
      />
    </section>
  )
}

export default Hero
