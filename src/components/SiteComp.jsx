import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export class AppHeader extends React.Component{
	render(){
		return(
			<div className="header-section">
				<div className="grid">
					<div className="row">
						<div className="col"> 
							<Link to="/" ><img className="inline-block-v-middle" src={logo} alt="logo"/></Link>
							<div className="find-proadvisor-link inline-block">
								Find a ProAdvisor
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export class AppFooter extends React.Component{
	render(){
		return(
			<footer>
				<p className="col-md-6 padding-20 m-b-20">© 2019 Intuit Inc. All rights reserved</p>
				<div className="col-md-6 padding-20 nav-links text-right">
					<a href="https://quickbooks.intuit.com/software-licenses/website_terms_of_service/"><span>Terms of service</span></a> | <a href="https://security.intuit.com/index.php/privacy"><span>Privacy statement</span></a> | <a href=" ">Send feedback</a>
				</div>
			</footer>
		)
	}
}
