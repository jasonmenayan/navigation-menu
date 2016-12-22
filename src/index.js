import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Match, Link, Miss} from 'react-router'
// import Router from 'react-router/BrowserRouter'
// import Match from 'react-router/Match'
// import Link from 'react-router/Link'
import './styles.css'

const Home = () => (
	<div>
		<p>Selected: Home</p>
	</div>
)

const Services = () => (
	<div>
		<p>Selected: Services</p>
	</div>
)

const About = () => (
	<div>
		<p>Selected: About</p>
	</div>
)

const ContactUs = () => (
	<div>
		<p>Selected: Contact us</p>
	</div>
)

class Navigation extends React.Component {

	constructor() {
		super()
		this.state = {chosenIndex: 0, tabs: ['Home', 'Services', 'About', 'Contact us']}
		this.selectTab = this.selectTab.bind(this)
	}

	selectTab(e, i) {
		e.preventDefault()
		this.setState({chosenIndex: i})
	}

	render() {
		function nameToPath(name) {
			let path = '/'
			path += name.toLowerCase().split(' ').join('')
			return path
		}
		let buttons = this.state.tabs.map((tab, index) => {
			return (
				<li key={index} className={index === this.state.chosenIndex ? 'active' : 'inactive'} onClick={event => this.selectTab(event, index)}><Link to={nameToPath(tab)}>{tab}</Link></li>
			)
		})

		return (
			<BrowserRouter>
				<ul>
					{buttons}
				</ul>
				<Match exactly pattern="/" component={Home} />
	      <Match pattern="/services" component={Services} />
	      <Match pattern="/about" component={About} />
	      <Match pattern="/contactus" component={ContactUs} />
	      <Miss component={Home} />
			</BrowserRouter>
		)
	}
}


ReactDOM.render(
  <Navigation />,
  document.getElementById('root')
)
