import OURS_Logo from './images/OURS_Logo.png';
import OURS from './images/OURS.png';
import bhagwatgita from './images/bhagwatgita.png';
import holistic from './images/non-duality.png'
import inquiry from './images/self-inquiry.png'
import Om from './images/3.jpg'
import Hatha_Yoga from './images/1.jpg'
import Med from './images/2.jpg'
import Yoga_Nidra from './images/4.jpg'
import I1 from './images/I1.png'
import mwellbeing from './images/mwellbeing.png'
import pwellbeing from './images/pwellbeing.png'
import swellbeing from './images/swellbeing.png'
import discord from './images/discord.png'
import insta from './images/insta.png'
import spotify from './images/spotify.png'
import './App.css';
import {Navbar, Container, Row, Col, Card, Button} from 'react-bootstrap'
function App() {
  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand href="#home">
        <img src={OURS_Logo} className="logo"/>
        <img src={OURS} className="logo-txt"/>
        </Navbar.Brand>
        {/* justify-content-end */}
        <Navbar.Collapse className="nav-links">
          <Navbar.Text>
            <button className="transparent">Log in</button>
            <button className="colored waitlist">Waitlist</button>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
      <main>
        <section className="section1">
            <img src={I1} />
            <h1>Live a Yogic Lifestyle</h1>
            <p>A Daily Practice consisting of Yoga, Meditation, Chanting and Relaxation Techniques, led by Traditional Indian Practitioners.</p>
            <button className="colored early-access">Get Early Access</button>
        </section>
        <section className="section2">
          <h1><hr/> Why OURS? <hr/></h1>
           <Row>
          <Col xs={12} md={4} className="Col-section2">
            <img src={bhagwatgita} />
            <Card style={{ width: '16rem' }} className="card">
            <Card.Body>
              <Card.Title className="card-title">Traditional</Card.Title>
              <Card.Text className="card-text">
                Designed by alumni of the oldest Yoga institutes in India.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4} className="Col-section2">
           <img src={holistic} />
           <Card style={{ width: '16rem' }} className="card">
            <Card.Body>
              <Card.Title className="card-title">Holistic</Card.Title>
              <Card.Text className="card-text">
                A set of daily practices for your mind, body and spirit.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4} className="Col-section2">
            <img src={inquiry} />
            <Card style={{ width: '16rem' }} className="card">
            <Card.Body>
              <Card.Title className="card-title">For Beginners</Card.Title>
              <Card.Text className="card-text"> 
                Master the basics, and unlock new techniques as you progress.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </section>
        <section className="section3">
          <div className="quote">
            <h2>“Yoga is the journey, of the self, through the self, to the self”</h2>
            <p>Bhagavad Gītā, Verse 6.20</p>
          </div>
            <hr/>
            <div className="desc">
              <p>Yoga is the ancient Indian science of healthy living - harmonizing the relationship between mind, body and environment. Much more than a physical exercise, it is a disciplined and holistic lifestyle that includes of a variety of practices.</p>
            <p>Traditional Yoga is a combination of Ethical Rules (Yamas), Personal Observances (Niyamas), Posture (Āsana), Breathing (Prāṇāyāma), Withdrawal (Pratyāhāra), Concentration (Dhāraṇā) and Meditation (Dhyāna).</p>
            <p>Our Sādhanā (Daily Practice) is designed for you to incorporate this Yogic lifestyle through short lessons, which can be viewed at your convenience.</p>
            </div>
        </section>
        <section className="section4">
          <div className="heading">
            <h1>Sādhāna</h1>
            <p>Your Daily Practice for Holistic Wellbeing</p>
          </div>
          <Container>
            <div class="timeline">
            <div class="containert right">
              <div className="daily-routine">
            <Row className="justify-content-md-center">
              <Col xs={12} sm={6} md={4}>
              {/* <span className="img-box img1"> */}
              <img src={Hatha_Yoga} />
              {/* </span> */}
              <div className="time">7:00 AM</div>
              </Col>
              <Col xs={12} sm={6} md={8}>
              <div className="content">
                <div className="heading">
                  <h4>Hatha Yoga </h4>
                <span className="light duration">
                  30min
                </span>
                </div>
                <p><span className="light">Led by </span><span>Harshvardhan Jhaveri</span></p>
                <p>
                  <span className="light">Alumni of </span><span>Kaivalyadham Yoga Institute</span>
                </p>
                <div className="light desc">Start your day with a combination of Postures (Āsana) and Breathwork (Prāṇāyāma) to balance the energy in your body and enhance meditation.</div>
              </div>
              </Col>
              </Row>
            </div>
            </div>
            </div>
             <div className="timeline"> 
             <div class="containert right">
              <div className="daily-routine">
            <Row className="justify-content-md-center">
              <Col xs={12} sm={6} md={4}>
               <span className="img-box img2">
                  <img src={Med} />
                  </span>
                  <div className="time">7:30 AM</div>
              </Col>
              <Col xs={12} sm={6} md={8}>
               <div className="content">
                <div className="heading">
                  <h4>Meditation</h4>
                <span className="light duration">
                  10 min
                </span>
                </div>
                <p><span className="light">Led by </span><span>Gunjan Sugandhi</span></p>
                <p>
                  <span className="light">Alumni of </span><span>The Yoga Institute</span>
                </p>
                <div className="light desc">A morning Meditation (Dhyāna) to calm the mind and detach from the senses. An ancient technique to help relieve stress and stay more present.</div>
              </div>
              </Col>
              </Row>
              </div>
            </div>
            </div>
            <div className="timeline">
              <div class="containert right">
              <div className="daily-routine">
            <Row className="justify-content-md-center">
              <Col xs={12} sm={6} md={4}>
              <span className="img-box img3">
                  <img src={Om} />
                  </span>
                  <div className="time">6:00 PM</div>
              </Col>
              <Col xs={12} sm={6} md={8}>
              <div className="content">
                <div className="heading">
                  <h4>Mantra Chanting</h4>
                <span className="light duration">
                  10min
                </span>
                </div>
                <p><span className="light">Led by </span><span>Anurag Dhoundeyal + Nrtya</span><span>Jahaan Shah + Srishti Biyani</span></p>
                <div className="light desc">Concentration (Dhāraṇā) through the repetitive chanting of sacred words in Sanskrit helps release positive energy, which leads to lasting inner peace.</div>
              </div>
              </Col>
              </Row>
              </div>
            </div>
            </div>
              <div className="timeline"> 
              <div class="containert right">
              <div className="daily-routine">
            <Row className="justify-content-md-center">
              <Col xs={12} sm={6} md={4}>
              <span className="img-box img4">
                  <img src={Yoga_Nidra} />
                  </span>
                  <div className="time">10:00 PM</div>
              </Col>
              <Col xs={12} sm={6} md={8}>
               <div className="content">
                <div className="heading">
                  <h4>Yoga Nidra</h4>
                <span className="light duration">
                  10min
                </span>
                </div>
                <p><span className="light">Led by </span><span>Gunjan Sugandhi</span></p>
                <p>
                  <span className="light">Alumni of </span><span>The Yoga Institute</span>
                </p>
                <div className="light desc">End the day with Yoga Nidra, an ancient relaxation tool for achieving Withdrawal (Pratyāhāra). It is a state of consciousness between the waking and dreaming.</div>
              </div>
              </Col>
              </Row>
              </div>
            </div>
            </div>
          {/* </div> */}
            </Container>
          <p>Please note:<span className="light">The above timings are recommendations only. These techniques can be practiced at any time in the day</span></p>
        </section>
        <section className="section5">
          <h1><hr/> Benefits <hr/></h1>
           <Row>
          <Col xs={12} md={4} className="Col-section5">
            <img src={pwellbeing} />
            <Card style={{ width: '16rem' }} className="card">
            <Card.Body>
              <Card.Title className="card-title">Physical Wellbeing</Card.Title>
              <Card.Text className="card-text">
                Increased flexibility, stamina and physical strength
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4} className="Col-section5">
           <img src={mwellbeing} />
           <Card style={{ width: '16rem' }} className="card">
            <Card.Body>
              <Card.Title className="card-title">Mental Wellbeing</Card.Title>
              <Card.Text className="card-text">
                Improved emotional stability and clarity of thought
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4} className="Col-section5">
            <img src={swellbeing} />
            <Card style={{ width: '16rem' }} className="card">
            <Card.Body>
              <Card.Title className="card-title">Spiritual Wellbeing</Card.Title>
              <Card.Text className="card-text"> 
                Enhanced sense of positivity, intuition and gratitude
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </section>
        <section className="section6">
          <div className="quote">
            <h3>Manifesto</h3>
            <p>Living through love, not fear</p>
            <p>.</p>
            <p>Learning the language of being human</p><p>.</p>
            <p>Transcending the ego by venturing into uncharted territory</p><p>.</p>
            <p>Returning to our roots to uncover lost truths</p><p>.</p>
            <p>Sharing knowledge to empower others</p><p>.</p>
            <p>Living in sync with nature</p><p>.</p>
            <p>Our vision is to share ancient Indian wisdom in an accessible and authentic manner, empowering people to cultivate inner peace and compassion in their everyday lives.</p>
          </div>
        </section>
        <section className="section7">
          <div className="heading">
            <h1>Programme Cost</h1>
            <p className="light">12 Weeks · 90 Days · 5400 Minutes</p>
            </div>
          <div className="quote">
            <Container>
            <Row>
              <Col xs={12} sm={6}>
              <button className="large-btn">$54</button>
              </Col>
              <Col className="detail" xs={12} sm={6}>
              <h5 className="offers">What’s included?</h5>
              <div className="offer">
              <p>
                <span class="checkmark">
                <div class="checkmark_stem"></div>
                <div class="checkmark_kick"></div>
              </span> 24 Hatha Yoga Lessons</p>
              <p>
                <span class="checkmark">
                <div class="checkmark_stem"></div>
                <div class="checkmark_kick"></div>
              </span> 12 Guided Meditation Lessons</p>
              <p>
                <span class="checkmark">
                <div class="checkmark_stem"></div>
                <div class="checkmark_kick"></div>
              </span> 12 Yoga Nidra Lessons</p>
              <p>
                <span class="checkmark">
                <div class="checkmark_stem"></div>
                <div class="checkmark_kick"></div>
              </span> 6 Mantra Chants</p>
              <p>
                <span class="checkmark">
                <div class="checkmark_stem"></div>
                <div class="checkmark_kick"></div>
              </span> Access to OURS for 180 Days</p>
              <p>
                <span class="checkmark">
                <div class="checkmark_stem"></div>
                <div class="checkmark_kick"></div>
              </span> Upcoming Features & Content</p>
              </div>
              </Col>
            </Row>
            </Container>
          </div>
          <div className="more-det">
            <button className="colored waitlist">Join Waitlist</button>
            <p className="light p1">7 Day Free Trial</p>
          <p className="extra-det p2">You won’t be charged anything today</p>
          <p className="light p3">Only after the free trial, on the 8th day of the programme.</p>
          </div>
        </section>
        <section className="section8">
          <h1><hr/> FAQs <hr/></h1>
           <div className="faqs">
             <p>How long is the programme? 
              <span class="dropdown">
              <div class="dropdown_left"></div>
              <div class="dropdown_right"></div>
             </span>
             </p>
           <hr/>
           <p>Do I need any prior experience to start the OURS programme?
             <span class="dropdown">
              <div class="dropdown_left"></div>
              <div class="dropdown_right"></div>
             </span>
           </p>
           <hr/>
           <p>Do I have to do all the daily practices? 
             <span class="dropdown">
              <div class="dropdown_left"></div>
              <div class="dropdown_right"></div>
             </span>
           </p>
           <hr/>
           <p>How much time do I have to commit each day? <span class="dropdown">
              <div class="dropdown_left"></div>
              <div class="dropdown_right"></div>
             </span>
             </p>
           <hr/>
           <p>When will I start seeing the benefits? <span class="dropdown">
              <div class="dropdown_left"></div>
              <div class="dropdown_right"></div>
             </span>
             </p>
           <hr/>
           <p>How long can I access the programme for? <span class="dropdown">
              <div class="dropdown_left"></div>
              <div class="dropdown_right"></div>
             </span>
             </p>
           <hr/>
           <hr/>
           <p>I can’t afford the programme. What should I do? 
             <span class="dropdown">
              <div class="dropdown_left"></div>
              <div class="dropdown_right"></div>
             </span>
           </p>
            <p>Will I need any equipment? 
             <span class="dropdown">
              <div class="dropdown_left"></div>
              <div class="dropdown_right"></div>
             </span>
           </p>
           <hr/>
           </div>
        </section>
      </main>
      <footer className="footer">
        <hr/>
        <Container>
        <Row>
          <Col xs={12} sm={4} md={4} className="socials">
          <img src={discord} />
          <img src={insta} />
          <img src={spotify} />
          </Col>
          <Col xs={12} sm={4} md={4} className="links">
            <a href="#">Privacy </a>
            <span>• </span>
            <a href="#">Terms</a>
            <span>• </span>
            <a href="#">Contact </a>
          </Col>
          <Col xs={12} sm={4} md={4} className="copyright">&copy; OURS Community Inc. 2021</Col>
        </Row>
      </Container>
      </footer>
    {/* </div> */}
    </>
  );
}

export default App;
