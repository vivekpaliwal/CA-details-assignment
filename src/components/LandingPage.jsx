import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { AppFooter }  from './SiteComp.jsx';
var funcs = require('../utils.js');


export default class FindAccount extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            location: "",
			service: ""
        }
    }
    componentWillMount(){
		funcs.CA.localStorage.removeItem("service")
		funcs.CA.localStorage.removeItem("location")
	}

    saveService(val){
    	funcs.CA.localStorage.setItem("service",val.value)
    	this.setState({service: val})
    }
    saveLocation(val){
    	funcs.CA.localStorage.setItem("location",val.value)
    	this.setState({location: val})
    }
	render(){
		const cityOptions = funcs.getAllCity();
		const serviceOptions = funcs.getAllService();
		return(
		<div className="landing-page">
			<div className="first-section">
				<div className="grid">
					<div className="row">
						<div className="col"> 
							<h1 className="reset">Life is better with an accounting pro</h1>
							<p className="reset">Tell us what you need, and we'll find your perfect match</p>
							<div className="location-section bottom-inline-container">
								<div className=" select-detail">
									<div className="label m-b-5 text-left">Services </div>
									<Select
										className="select text-left"
										options={ serviceOptions }
										value={ this.state.service }
										placeholder="Select service"
										clearable={false}
										onChange={(val) => this.saveService(val)}/>
								</div>
								<div className=" m-l-20 select-detail">
									<div className="label m-b-5 text-left">Location </div>
									<Select
										placeholder="Select location"
										className="select text-left"
										options={ cityOptions }
										value={ this.state.location }
										clearable={false}
										onChange={(val) => this.saveLocation(val)}/>
								</div>
								<div className="find-button m-l-20">
									<Link to="/list" >Find an accountant</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img src="https://plugin.intuitcdn.net/qba-matchmaking-ui/3.71.0/images/e1ebd3b39641a174ec4cad9fac11983d.png" alt=" "/>
			</div>
			<div className="second-section">
				<div className="grid">
					<div className="row">
						<div className="col"> 
							<div className="header m-b-20">	
								<h1 className="">
									Partnership pays off <br></br> Discover all the accountant can do for you
								</h1>
							</div>
							<div className="top-inline-container text-center">
								<div className="content text-left">
									Leave your books to the expert Let your accountant do the bookkeeping so you can keep up with the rest of your business.
								</div>
								<div className="content text-left">
									Tax help is here Save time and stress less when your accountant handles personal and business tax planning, prep and filing.
								</div>
								<div className="content text-left">
									Plan your financial future It’s never too soon to look ahead. An accountant can help with both business and financial planning.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="third-section">
				<div className="grid">
					<div className="row">
						<div className="col"> 
							<h1 className="text-center">Get set up for success</h1>
							<div className="text-center">
								<img src="https://plugin.intuitcdn.net/qba-matchmaking-ui/3.71.0/images/c33e99dfc5ae79a11d78d50963de36df.png" alt=" "/>	
								<p>From consulting to QuickBooks training, your accountant’s got you covered right from the start.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AppFooter />
		</div>
		)
	}
}