import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';
import Gallery from './Gallery.js'


class App extends Component {
  render() {
    return (
      <Router >
        <div className="page">
          <Route exact={true} path="/" component={Intro}/>
          <Route path="/p/stash"  render={props => <ProjectTemplate project="Stash" {...props} />} />
          <Route path="/p/speare"  render={props => <ProjectTemplate project="Speare" {...props} />} />
          <Route path="/p/pianopass"  render={props => <ProjectTemplate project="PianoPass" {...props} />} />
          <Route path="/p/mechanizedabstraction"  render={props => <ProjectTemplate project="MechanizedAbstraction" {...props} />} />
          <Route path="/p/logissue"  render={props => <ProjectTemplate project="LogIssue" {...props} />} />
          <Route path="/p/woodworking"  render={props => <ProjectTemplate project="Woodworking" {...props} />} />
          <Route path="/p/private/yelp"  render={props => <ProjectTemplate project="Yelp" {...props} />} />
        </div>
      </Router>
    );
  }
}

class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }
  render() {
    return null
  }
}

class Intro extends Component {
  render() {
    return(
      <div className="intro">
        <div className="page-header">
          <div className="main-title">Rahul Shah</div>
          <div className="main-subtitle">rahulshah.eth • @rahulushah</div>
        </div>
        <div className="page-content">
          <div className="content-section">
            <div className="content-header">Overview</div>
            <div className="content-text">Group product manager at Autodesk. Creating and contributing to web3 projects.</div>
          </div>
          <div className="content-section">
            <div className="content-header">Projects</div>
            <div className="project-option">
             <div onClick={() => {window.open('https://twitter.com/scottie_ai', '_blank')}} className="project-name white">🔔 Scottie.ai → Automated alerts for crypto assets (Creator)</div>
            </div>
            <div className="project-option">
              <div onClick={() => {window.open('https://twitter.com/meta_badge', '_blank')}} className="project-name white">🛡 Metabadge → Protocol for non-transferrable tokens (Creator)</div>
            </div>
            <div className="project-option">
              <Link to={'/p/stash'}><div className="project-name white">🦺 Autodesk → Real time collaboration for construction (Group Product Manager)</div></Link>
            </div>
            <div className="project-option">
              <div onClick={() => {window.open('https://twitter.com/EthereumPhone', '_blank')}} className="project-name white">📱 Ethereum Phone → An ethereum native operating system (Core Contributor)</div>
            </div>
            <div className="project-option">
              <Link to={'/p/stash'}><div className="project-name white">🌳 Treebot → A smart contract that plants trees IRL (Core Contributor)</div></Link>
            </div>
            <div className="project-option">
              <Link to={'/p/stash'}><div className="project-name white">🧊 Plangrid → Mobile 3D model viewer (Senior Product Manager)</div></Link>
            </div>
            <div className="project-option">
              <Link to={'/p/stash'}><div className="project-name white">💪 Powermove → AI powered home workouts (Creator)</div></Link>
            </div>
            <div className="project-option">
              <Link to={'/p/stash'}><div className="project-name white">🧠 Stash.ai → AI powered bookmarks (Co-founder)</div></Link>
            </div>
            <div className="project-option">
              <Link to={'/p/pianopass'}><div className="project-name white">🎹 PianoPass → iOS Password Manager (Co-founder)</div></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class ProjectTemplate extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = { project: this.props.project };
  }
  goBack() {
    document.location.href="/";
    return false;
  }
  render() {
    return(
      <div className="template-container">
        <ScrollToTopOnMount />
        <div className="back-button" onClick={this.goBack}>
          Home
        </div>
        { this.state.project === "Stash" ? <Stash /> : '' }
        { this.state.project === "Speare" ? <Speare /> : '' }
        { this.state.project === "PianoPass" ? <PianoPass /> : '' }
        { this.state.project === "MechanizedAbstraction" ? <MechanizedAbstraction /> : '' }
        { this.state.project === "LogIssue" ? <LogIssue /> : '' }
        { this.state.project === "Woodworking" ? <Woodworking /> : '' }

        { this.state.project === "Yelp" ? <Yelp /> : '' }
      </div>
    )
  }
}

class Stash extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="title"> 
          Stash
        </div>
        <br></br>
        <div className="content">
          <div className="description">
            <div className="description-header">Mission</div>
            The way we consume web content has drastically changed. We’re no longer looking at primarily articles, and it’s no longer just in our browser. We’re looking at restaurants in our Yelp app. Browsing weekend getaways on AirBnB. Scouring products on Amazon.<br/><br/>Stash allows you to store all of those links in one place, and keeps them organized using machine learning. 
            <div className="role">
              <br/><br/><div className="description-header">Responsibilities</div>
              Product Management 
              <br/>UI/UX Design (Sketch)
              <br/>User Acquisition, Marketing
              <br/>Videography
            </div><br/>
            <div className="links">
              <br/><div className="description-header">Accolades</div>
              <p><a className="description-link" target="_blank" href="https://techcrunch.com/2016/10/05/stashs-app-is-a-better-way-to-bookmark-the-web/">Stash's App is a Better Way to Bookmark the Web (TechCrunch)</a></p>
              <p><a className="description-link" target="_blank" href="http://fieldguide.gizmodo.com/this-app-is-way-better-than-pocket-or-instapaper-1787649102">This App is Way Better than Pocket or Instapaper (Gizmodo)</a></p>
              <p><a className="description-link" target="_blank" href="http://fastcodesign.com/3064632/this-ai-librarian-organizes-your-internet-bookmarks-with-machine-learning">This AI Librarian Organizes Your Internet Bookmarks with Machine Learning (FastCo Design)</a></p>
            </div>
          </div>
          <div className="media-wrapper">
            <div className="video-wrapper"><iframe className="youtube-embed"  src="https://www.youtube.com/embed/oqt1_GLNvRU?rel=0&amp;controls=0&amp;showinfo=0" allowfullscreen></iframe></div>
            <Gallery images={[{ src: require('./assets/images/stash/stash-1.png'), caption: '', video: true, videoLink: 'http://youtube.com/watch?v=oqt1_GLNvRU'}, { src: require('./assets/images/stash/stash-2.png') }, { src: require('./assets/images/stash/stash-3.png') }, { src: require('./assets/images/stash/stash-4.png') }]}/>
            <OtherContent project={["Speare", "PianoPass"]} />
          </div>
        </div>
      </div>
    )
  }
}

class PianoPass extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="title"> 
          PianoPass
        </div>
        <br></br>
        <div className="content">
          <div className="description">
            <div className="description-header">Mission</div>
            PianoPass is a secure content application for storing Passwords, Notes, Pictures, and Contacts - with a twist: it's protected by a Piano. Play the right keys on the Piano and you unlock your content. Inspired by Bruce Wayne's east wing batcave entrance.
            <div className="role">
              <br/><div className="description-header">Responsibilities</div>
              Product Management 
              <br/>UI/UX Design (Sketch)
              <br/>User Acquisition / Marketing 
            </div>
            <div className="links">
              <br/><div className="description-header">Accolades</div>
              <p>750,000+ Downloads</p>
              <p>Featured on Apple App Store's "What's Hot" Category</p>
              <p>#1 Free App on iTuens App Store in 10 Countries</p>
              <p>Top 10 Free App in 49 Countries</p>
            </div>
          </div>
          <div className="media-wrapper">
            <Gallery images={[{ src: require('./assets/images/pianopass/pianopass-1.png'), caption: ''},{ src: require('./assets/images/pianopass/pianopass-2.png'), caption: ''}, { src: require('./assets/images/pianopass/pianopass-3.png'), caption: ''}, { src: require('./assets/images/pianopass/pianopass-4.png'), caption: ''}]}/>
            <OtherContent project={["Speare", "MechanizedAbstraction"]} />
          </div>
        </div>
      </div>
    )
  }  
}


class Speare extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="title"> 
          Speare
        </div>
        <br></br>
        <div className="content">
          <div className="description">
            <div className="description-header">Mission</div>
            An article online can tell you a lot about the person reading it such as their interests and background. Yet, all analytics engines for the news and media industry focused only on quantaitive metrics like pageviews. Speare using NLP combined with traditional analytics methods to create a user centric dashboard that not only answered what they read, but also who they are.
            <div className="role">
              <br/><div className="description-header">Responsibilities</div>
              Product Management 
              <br/>UI/UX Design (Sketch)
              <br/>Sales 
            </div>
            <div className="links">
              <br/><div className="description-header">Accolades</div>
              <p><a className="description-link" target="_blank" href="http://boston.tie.org/tye-boston-applications-closed-class-2015/">TiE Challenge Champions, Jit Saxena Award (2014)</a></p>
              <p><a className="description-link" target="_blank" href="http://bit.ly/S61v0n">2nd Place (Finalist) at NY State Business Plan Competition</a></p>
              <p><a className="description-link" target="_blank" href="http://boom.cornell.edu/">eBay's Innovator's Award - BOOM (2014)</a></p>
              <p><a className="description-link" target="_blank" href="http://www.brventurefund.com/cvc">3rd Place (Finalist) at Cornell Venture Challenge (2014)</a></p>
              <p><a className="description-link" target="_blank" href="http://www.elabstartup.com">Chosen as a eLab Satartup Incubator Company</a></p>
            </div>
          </div>
          <div className="media-wrapper">
            <Gallery images={[{ src: require('./assets/images/speare/speare-1.png'), caption: ''}, { src: require('./assets/images/speare/speare-2.png'), caption: ''}]}/>
            <OtherContent project={["LogIssue", "MechanizedAbstraction"]} />
          </div>
        </div>
      </div>
    )
  }
}

class MechanizedAbstraction extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="title"> 
          Mechanized Abstraction
        </div>
        <br></br>
        <div className="content">
          <div className="description">
            <div className="description-header">Mission</div>
            A graphic design project to represent complex computer science concepts with basic visual shapes.<br /><br />Selected as the artwork to decorate the halls of Cornell's new computer science building, Bill Gates Hall. 
            <div className="role">
              <br/><div className="description-header">Responsibilities</div>
              Creative Direction
              <br/>Art Direction
              <br/>Graphic Design
            </div>
          </div>
          <div className="media-wrapper">
            <Gallery images={[{ src: require('./assets/images/mechanizedabstractions/mechanizedabstractions-main.png')}, 
            { src: require('./assets/images/mechanizedabstractions/mechanizedabstractions-2.jpg')}, 
            { src: require('./assets/images/mechanizedabstractions/mechanizedabstractions-3.jpg')},
            { src: require('./assets/images/mechanizedabstractions/mechanizedabstractions-4.jpg')},
            { src: require('./assets/images/mechanizedabstractions/mechanizedabstractions-5.jpg')},
            { src: require('./assets/images/mechanizedabstractions/mechanizedabstractions-6.jpg')}   ]}/>
            <OtherContent project={["LogIssue", "Woodworking"]} />
          </div>
        </div>
      </div>
    )
  }
}

class LogIssue extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="title"> 
          Log Issue Assistant (Lia)
        </div>
        <br></br>
        <div className="content">
          <div className="description">
            <div className="description-header">Mission</div>
            Log Issue was a concept for an asset management service powered by a mobile app. Functionality included maintaining an active list of your assets along with a live assistant who will take care of any service or support calls, saving you time. <br /><br />
            Work included a concept design for a client on Sketch with Invision prototypes. 
            <div className="role">
              <br/><div className="description-header">Responsibilities</div>
              User Interface Design (Sketch)
              <br />User Experience Prototyping (Invision)
            </div>
          </div>
          <div className="media-wrapper">
            <Gallery images={[{ src: require('./assets/images/logissue/logissue-main.png')}, 
            {src: require('./assets/images/logissue/logissue-1.png')}  ]}/>
            <OtherContent project={["MechanizedAbstraction", "Woodworking"]} />
          </div>
        </div>
      </div>
    )
  }
}

class Woodworking extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="title"> 
          Woodworking (hobby)
        </div>
        <br></br>
        <div className="content">
          <div className="description">
            <div className="description-header">Mission</div>
           Projects include a natural sound amplication system for the iPhone using a trumpet that was runover by a car, and a customized cheese cutting board with a special compartment for crackers. 
            <div className="role">
              <br/><div className="description-header">Responsibilities</div>
              Conceptualization
              <br />Design
              <br />Implementation
            </div>
          </div>
          <div className="media-wrapper">
            <Gallery images={[{ src: require('./assets/images/woodworking/woodworking-1.png')}, { src: require('./assets/images/woodworking/woodworking-2.jpg')}, { src: require('./assets/images/woodworking/woodworking-3.jpg')}]}/>
            <OtherContent project={["Stash", "Speare"]} />
          </div>
        </div>
      </div>
    )
  }
}


class Yelp extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="title"> 
          Yelp Feature Proposal:<br />Shortlist
        </div>
        <br></br>
        <div className="content">
          <div className="description">
            <div className="description-header">Process</div>
            I watched a few people use the Yelp app as they looked for a restaurant. Most of the people were between 20-30 years old, and we were generally searching for a restaurant in a city, so my feature suggestions will apply to that demographic (though my intuition is that this makes up a large population of Yelp users).
            <br /><br /><div className="description-header">Problem</div>
            The problem I identified is users being unable to keep track of which options they liked, as a result of information overload. 
            <br /><br />
            I noticed that as users start browsing through options, they go through numerous pages of search results. In that process, they blurt out a few names that catch their eye. However, by the time they are on the next page, they forget which locations on the previous page they liked. 
            <br /><br />
            This gets worse when the user who is browsing is making a decision for a group; other people start blurting out options that they also like, and the decision maker starts operating under pressure, making it harder to remember the options. Overall, this seemed to lead to bad decisions where initial (potentially better) options were completely forgotten.
            <br /><br /><div className="description-header">Solution</div>
            Make a “Shortlist” where users can quickly add search results. This allows them to keep track of options that they thought they liked.
            <br /><br />The design opportunity here is to make use of tableview swipes, which the Yelp app currently does not use.
          </div>
          <div className="media-wrapper">
            <Gallery images={[{ src: require('./assets/images/yelp/yelp-1.png')}, { src: require('./assets/images/yelp/yelp-2.png')}, { src: require('./assets/images/yelp/yelp-3.png')}]}/>
            <OtherContent project={["Stash", "Speare"]} />
          </div>
        </div>
      </div>
    )
  }
}


class OtherContent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = { project: this.props.project };
  }
  render() {
    return (
       <div className="other-content-container">
       <div className="other-content-header">
        Other Projects
       </div>
        {this.state.project.indexOf("Stash") != -1 ? 
        <div className="other-content-object">
          <Link to={'/p/Stash'}><img className="homepage-image" src={require('./assets/images/stash/stash-main.png')}/></Link>
          <div><b>Stash.ai</b><br />Bookmarking meets artificial intelligence</div>
        </div> : ""}
        {this.state.project.indexOf("Speare") != -1 ? 
        <div className="other-content-object">
          <Link to={'/p/Speare'}><img className="homepage-image" src={require('./assets/images/speare/speare-main.png')}/></Link>
          <div><b>Speare Analytics</b><br />Smart analytics for the news industry</div>
        </div> : ""}
        {this.state.project.indexOf("PianoPass") != -1 ? 
        <div className="other-content-object">
          <Link to={'/p/PianoPass'}><img className="homepage-image" src={require('./assets/images/pianopass/pianopass-main.png')}/></Link>
          <div><b>PianoPass</b><br />Secure content iOS App</div>
        </div> : ""}
        {this.state.project.indexOf("MechanizedAbstraction") != -1 ? 
        <div className="other-content-object">
          <Link to={'/p/MechanizedAbstraction'}><img className="homepage-image" src={require('./assets/images/mechanizedabstractions/mechanizedabstractions-main.png')}/></Link>
          <div><b>Mechanized Abstraction</b><br />Complex CS concepts, simple art</div>
        </div> : ""}
        {this.state.project.indexOf("LogIssue") != -1 ? 
        <div className="other-content-object">
          <Link to={'/p/LogIssue'}><img className="homepage-image" src={require('./assets/images/logissue/logissue-main.png')}/></Link>
          <div><b>Log Issue</b><br />Asset management, solved</div>
        </div> : ""}
        {this.state.project.indexOf("Woodworking") != -1 ? 
        <div className="other-content-object">
          <Link to={'/p/Woodworking'}><img className="homepage-image" src={require('./assets/images/woodworking/woodworking-main.png')}/></Link>
          <div><b>Woodworking</b><br />A speaker and a cutting board</div>
        </div> : ""}

      </div>
    )
  }
}



export default App;
