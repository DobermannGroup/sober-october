import Logo from '../src/assets/logo.svg'
import './App.css'

function App() {

  return (
    <div className="card-contain">
      <div className="lasHeader">
          <img src={Logo} className="logo" alt="Logo" />
      </div>
      <div className="card">
        <div className="section">
          <div className="HeaderHero"><i className="fa-kit fa-regular-beer-mug-circle-xmark"></i></div>
          <h1>Sober October Challenge</h1>
            <h2>Make a track in 31 days</h2>

            <p>Need to write some text here...</p>

            <div className="actionBar">
              <button>Get Started</button>
            </div>
         </div>
         <div className="section">
            <h1>The DAW</h1>
            <h2>Ableton Live 11 Suite</h2>

            <p>This is a 90 day free trial, giving you full access to the entire Live 11 tools that grant you endless capabilities. </p>
            <div className="actionBar">
              <button>Download Ableton Live 11 Trial</button>
            </div>
          </div>
          <div className="section">
            <h1>Plugins</h1>
            <h2>FREE TOOLS</h2>
            <p>Useful tools that you'll see being used in this course.</p>
            <div className="actionBar downloads">
              <button><i className="fa-duotone fa-download fa-beat-fade"></i> STING.ZIP (<i className="fa-duotone fa-music"></i> 0mb)</button>
              <button><i className="fa-duotone fa-download fa-beat-fade"></i> Podolski VST (<i className="fa-brands fa-windows"></i> 34.2mb)</button>
              <button><i className="fa-duotone fa-download fa-beat-fade"></i> Podolski VST (<i className="fa-brands fa-apple"></i> 56.6mb)</button>
            </div>
          </div>

          <div className="section">
            <h1>Sample Packs</h1>
            <h2>FREE SOUNDS</h2>
            <p>Sample Packs to get you started.</p>
            <div className="actionBar downloads">
              <button><i className="fa-duotone fa-download fa-beat-fade"></i> HOUSE ESSENTIALS (<i className="fa-duotone fa-cube"></i> 0mb)</button>
            </div>
          </div>

          <div className="section">
            <h1>The Podcast</h1>
            <h2>Stream latest episode</h2>
            <p></p>
            <div className="actionBar podcasts">
              <button><i className="fa-duotone fa-podcast"></i> Apple Podcasts</button>
              <button><i className="fa-brands fa-spotify"></i> Spotify</button>
              <button><i className="fa-brands fa-google"></i> Google Podcasts</button>
            </div>


     
          </div>
          <div className="section">
          <div className="schedule">
            <h1>Course Schedule</h1>
            <table>
              <tr><td className="schedule-date">Week 1</td><td className="schedule-task"><ul><li>Introduction and Basic Setup</li></ul></td></tr>
              <tr><td className="schedule-date">Day 1</td><td className="schedule-task"><ul><li>Introduction to Ableton Live 11 Suite</li><li>Overview of DAW (Digital Audio Workstation)</li></ul></td></tr>
              <tr><td className="schedule-date">Day 2</td><td className="schedule-task"><ul><li>Installation and Setup</li><li>Software installation and audio setup</li></ul></td></tr>
              <tr><td className="schedule-date">Day 3</td><td className="schedule-task"><ul><li>User Interface and Basic Tools</li><li>Understanding the UI elements</li></ul></td></tr>
              <tr><td className="schedule-date">Day 4</td><td className="schedule-task"><ul><li>Tracks and Clips</li><li>Introduction to audio and MIDI tracks, clips</li></ul></td></tr>
              <tr><td className="schedule-date">Day 5</td><td className="schedule-task"><ul><li>Basic Recording</li><li>Recording your first audio and MIDI clips</li></ul></td></tr>
              <tr><td className="schedule-date">Day 6</td><td className="schedule-task"><ul><li>Effects and Plugins</li><li>Adding basic effects like reverb and delay</li></ul></td></tr>
              <tr><td className="schedule-date">Day 7</td><td className="schedule-task"><ul><li>Overview of Week 1</li><li>Quick review and practice session</li></ul></td></tr>
              <tr><td className="schedule-date">Week 2</td><td className="schedule-task"><ul><li>Drums and Rhythm</li></ul></td></tr>
              <tr><td className="schedule-date">Day 8</td><td className="schedule-task"><ul><li>Introduction to Drum Rack</li><li>Loading and configuring Drum Rack</li></ul></td></tr>
              <tr><td className="schedule-date">Day 9</td><td className="schedule-task"><ul><li>Programming Drums</li><li>Creating a basic drum pattern</li></ul></td></tr>
              <tr><td className="schedule-date">Day 10</td><td className="schedule-task"><ul><li>Drum Mixing</li><li>Equalization, compression, and panning</li></ul></td></tr>
              <tr><td className="schedule-date">Day 11</td><td className="schedule-task"><ul><li>Groove and Swing</li><li>Adding groove to your drum patterns</li></ul></td></tr>
              <tr><td className="schedule-date">Day 12</td><td className="schedule-task"><ul><li>Sampling</li><li>Incorporating samples into your drum track</li></ul></td></tr>
              <tr><td className="schedule-date">Day 13</td><td className="schedule-task"><ul><li>Layering Drums</li><li>Using layering techniques for a fuller sound</li></ul></td></tr>
              <tr><td className="schedule-date">Day 14</td><td className="schedule-task"><ul><li>Overview of Week 2</li><li>Quick review and practice session</li></ul></td></tr>
              <tr><td className="schedule-date">Week 3</td><td className="schedule-task"><ul><li>Melody and Harmony</li></ul></td></tr>
              <tr><td className="schedule-date">Day 15</td><td className="schedule-task"><ul><li>Basic Music Theory</li><li>Scales, chords, and progressions</li></ul></td></tr>
              <tr><td className="schedule-date">Day 16</td><td className="schedule-task"><ul><li>MIDI Instruments</li><li>Loading and playing instruments via MIDI</li></ul></td></tr>
              <tr><td className="schedule-date">Day 17</td><td className="schedule-task"><ul><li>Creating Melodies</li><li>Composing a simple melody</li></ul></td></tr>
              <tr><td className="schedule-date">Day 18</td><td className="schedule-task"><ul><li>Adding Chords</li><li>Building a chord progression</li></ul></td></tr>
              <tr><td className="schedule-date">Day 19</td><td className="schedule-task"><ul><li>Bassline</li><li>Crafting a complementary bassline</li></ul></td></tr>
              <tr><td className="schedule-date">Day 20</td><td className="schedule-task"><ul><li>Arpeggiators</li><li>Introducing Ableton's Arpeggiator effect</li></ul></td></tr>
              <tr><td className="schedule-date">Day 21</td><td className="schedule-task"><ul><li>Overview of Week 3</li><li>Quick review and practice session</li></ul></td></tr>
              <tr><td className="schedule-date">Week 4</td><td className="schedule-task"><ul><li>Arrangement and Structure</li></ul></td></tr>
              <tr><td className="schedule-date">Day 22</td><td className="schedule-task"><ul><li>Song Structure</li><li>Understanding common song structures</li></ul></td></tr>
              <tr><td className="schedule-date">Day 23</td><td className="schedule-task"><ul><li>Arrangement View</li><li>Using Arrangement View for structuring</li></ul></td></tr>
              <tr><td className="schedule-date">Day 24</td><td className="schedule-task"><ul><li>Transitions</li><li>Creating smooth transitions between sections</li></ul></td></tr>
              <tr><td className="schedule-date">Day 25</td><td className="schedule-task"><ul><li>Automation</li><li>Automating volume, pan, and effects</li></ul></td></tr>
              <tr><td className="schedule-date">Day 26</td><td className="schedule-task"><ul><li>Final Mix</li><li>Preparing your track for mastering</li></ul></td></tr>
              <tr><td className="schedule-date">Day 27</td><td className="schedule-task"><ul><li>Exporting</li><li>Exporting your track for distribution</li></ul></td></tr>
              <tr><td className="schedule-date">Day 28</td><td className="schedule-task"><ul><li>Overview of Week 4</li><li>Final review and next steps</li></ul></td></tr>
            </table>

          </div>
          </div>
      </div>
    </div>
  )
}

export default App
