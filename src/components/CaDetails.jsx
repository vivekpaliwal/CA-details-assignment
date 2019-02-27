import React from 'react';
import star from '../star.png';
import jsonData from '../ca_data.json'
import { AppFooter }  from './SiteComp.jsx';
var funcs = require('../utils.js');
var _ = require('lodash');

export default class CaDetailPageComp extends React.Component{
	render(){
		// var filterDataByName = []
		var ca_name = funcs.CA.localStorage.getItem("ca_name")
		var filterDataByName = _.find(jsonData.data,{ca_name:ca_name})
		var services = _.map(filterDataByName.services, (i,d)=>{
			return(
				<li>{i}</li>
			)
		})
		return(
		<div>
			<div className="ca-detail-page">
				<div className="grid">
					<div className="row">
						<div className="col">
						<div className="breadcrumbs-container"><a className="breadcrumbs-links" href="/">Find a ProAdvisor</a> >  <a className="breadcrumbs-links" href=" ">{filterDataByName.location}</a> >  <a className="breadcrumbs-links name" href=" ">{ca_name}</a></div>
							<a href="/list"className="back-button"> <span className="m-b-5 inline-block-v-middle">&#8592;</span> <span className="">Back to search results</span></a>
							<div className="profile-container col-md-12 m-t-10 padding-20">
								<div className="avatar-saction col-md-4">
									<img src="https://intuitmarket.intuit.com/IMRestfulServices/IM.SimpleServices/api/v1/image?configid=504&clientid=1001&width=200&imageguid=3F3CA023-96F9-4902-8DB8-F307CE89835D" alt="avatar"/>
									<p className="advisor">Advanced ProAdvisor</p>
								</div>
								<div className="detail-saction col-md-4">
									<h2 className="name m-b-10">
										{ca_name}
									</h2>
									<div className="starts">
										<div className="inline-block-v-middle m-r-10"><ComponentForStars /></div><span>26 reviews</span>
									</div>
									<p className="text">Precision Counts</p>
									<div className="address m-t-5 m-b-10">
										<span>{filterDataByName.location}</span>,<span className="m-l-5">{filterDataByName.pincode}</span>
									</div>
									<a href="http://www.precisioncounts.com"className="link">http://www.precisioncounts.com</a>
									<p className="phone-number">Phone number(s)</p>
								</div>
								<div className="services-saction col-md-4">
									<p>Services</p>
									<ul className="m-t-10">
										{services}
									</ul>
								</div>
								<div className="certification-section  col-md-12 m-t-20">
									<p className="header">Certified expert in</p>
									<div className="col-md-4">
										<img className="inline-block-v-middle" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHRpdGxlPjJfQmFkZ2VfQWR2YW5jZWRPbmxpbmVfc21hbGw8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPHBhdGggZD0ibTAuNSAyMS40NDZ2LTIwLjU1YzAtMC4yNTIgMC4xNDUtMC4zOTYgMC4zOTYtMC4zOTZoMjYuMjA4YzAuMjUxIDAgMC4zOTYgMC4xNDQgMC4zOTYgMC4zOTZ2MjAuNTUxbC0xMy40NDMgOC4yMjctMTMuNTU3LTguMjI4eiIgZmlsbD0iI0Y0RjVGOCIvPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDFlLTQpIiBmaWxsPSIjRDREN0RDIj4KPHBhdGggZD0ibTI3IDAuOTk5OXYyMC4xNjhsLTEyLjk0NSA3LjkyMS0xMy4wNTUtNy45MjQgMWUtMyAtMjAuMTY1aDI1Ljk5OW0wLjEwNC0xaC0yNi4yMDhjLTAuNTMgMC0wLjg5NiAwLjM2Ni0wLjg5NiAwLjg5NnYyMC44MzJsMTQuMDU4IDguNTMyIDEzLjk0Mi04LjUzMnYtMjAuODMyYzAtMC41My0wLjM2Ni0wLjg5Ni0wLjg5Ni0wLjg5NiIvPgo8L2c+CjxwYXRoIGQ9Im01LjA3MTIgMTMuMDM1YzAtNS4xMjMgNC4wMy05LjI3NSA5LTkuMjc1IDQuOTcxIDAgOSA0LjE1MiA5IDkuMjc1cy00LjAyOSA5LjI3NS05IDkuMjc1Yy00Ljk3IDAtOS00LjE1Mi05LTkuMjc1IiBmaWxsPSIjMkNBMDFDIi8+CjxwYXRoIGQ9Im0xNy4wNzIgOS40Mjc1aC0wLjV2MS4zNGgwLjVjMS4yMTMgMCAyLjIgMS4wMTcgMi4yIDIuMjY3IDAgMS4yNTEtMC45ODcgMi4yNjgtMi4yIDIuMjY4aC0xLjIwMnYtNy4wMDhjMC0wLjc0LTAuNTgyLTEuMzQtMS4zLTEuMzR2OS42ODhoMi41MDJjMS45MzMgMCAzLjUtMS42MTUgMy41LTMuNjA4IDAtMS45OTItMS41NjctMy42MDctMy41LTMuNjA3bS05LjUwMiAzLjYwN2MwIDEuOTkyIDEuNTY3IDMuNjA3IDMuNSAzLjYwN2gwLjV2LTEuMzRoLTAuNWMtMS4yMTMgMC0yLjItMS4wMTctMi4yLTIuMjY3czAuOTg3LTIuMjY3IDIuMi0yLjI2N2gxLjIwMnY3LjAwOGMwIDAuNzQgMC41ODIgMS4zNCAxLjMgMS4zNHYtOS42ODhoLTIuNTAyYy0xLjkzMyAwLTMuNSAxLjYxNS0zLjUgMy42MDciIGZpbGw9IiNmZmYiLz4KPHBhdGggZD0ibTI3LjgyOSAyMy43NzRsLTEzLjc3NiA4LjYyNC0wLjA3MyAwLjA0NSAwLjAyNSAwLjA4MiAxLjM3NCA0LjU0IDAuMDQyIDAuMTM4IDAuMTI0LTAuMDc1IDExLjUwNi03LjAwMyAzZS0zIC0zZS0zIDRlLTMgLTJlLTNjMC41OC0wLjQxNiAwLjk0Mi0xLjA4OCAwLjk0Mi0xLjgwMnYtNC40NDktMC4yMDVsLTAuMTcxIDAuMTF6IiBmaWxsPSIjMTA4MDAwIi8+Cjxwb2x5Z29uIHBvaW50cz0iMTUuNTYgMzEuNTYyIDE1LjQ5NyAzMS40OTUgMTUuNDE5IDMxLjU0NCAxNC4wNTMgMzIuMzk4IDEzLjk5NyAzMi40MzMgMTQgMzIuNDk5IDE0LjIzOCAzNy4zMjkgMTQuMjQ3IDM3LjUwMyAxNC40MDIgMzcuNDIzIDE4Ljc0NyAzNS4xNzggMTguNzg1IDM1LjE1NyIgZmlsbD0iIzA4NjMwMCIvPgo8cGF0aCBkPSJtMTguNjI2IDM1LjA2MWwtNC42MDMtMi43Ny0xMy44NTItOC41MTctMC4xNzEtMC4xMDYgMC4wMTUgNC42NDdjMCAwLjcxNCAwLjM0NyAxLjM4OSAwLjkyOCAxLjgwNWwzZS0zIDNlLTMgNGUtMyAyZS0zIDEzLjEwNCA3Ljg0IDAuMDU4IDAuMDM1IDAuMDU4LTAuMDM1IDQuNDU2LTIuNzEyIDAuMTU5LTAuMDk3LTAuMTU5LTAuMDk1eiIgZmlsbD0iIzJDQTAxQyIvPgo8L2c+Cjwvc3ZnPgo=" alt="" />
										<div className="certification-text inline-block-v-middle m-l-10">
											<div>QuickBooks</div>
											<div>
												<span>Online</span>
												<span> (ADVANCED)</span>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHRpdGxlPjRfQmFkZ2VfQWR2YW5jZWREZXNrdG9wX3NtYWxsPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CjxwYXRoIGQ9Im0wLjUgMjEuNDQ2di0yMC41NWMwLTAuMjUyIDAuMTQ1LTAuMzk2IDAuMzk2LTAuMzk2aDI2LjIwOGMwLjI1MSAwIDAuMzk2IDAuMTQ0IDAuMzk2IDAuMzk2djIwLjU1MWwtMTMuNDQzIDguMjI3LTEzLjU1Ny04LjIyOHoiIGZpbGw9IiNGNEY1RjgiLz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxZS00KSIgZmlsbD0iI0Q0RDdEQyI+CjxwYXRoIGQ9Im0yNyAwLjk5OTl2MjAuMTY4bC0xMi45NDUgNy45MjEtMTMuMDU1LTcuOTI0IDFlLTMgLTIwLjE2NWgyNS45OTltMC4xMDQtMWgtMjYuMjA4Yy0wLjUzIDAtMC44OTYgMC4zNjYtMC44OTYgMC44OTZ2MjAuODMybDE0LjA1OCA4LjUzMiAxMy45NDItOC41MzJ2LTIwLjgzMmMwLTAuNTMtMC4zNjYtMC44OTYtMC44OTYtMC44OTYiLz4KPC9nPgo8cGF0aCBkPSJtNS4wNzEyIDEzLjAzNWMwLTUuMTIzIDQuMDMtOS4yNzUgOS05LjI3NSA0Ljk3MSAwIDkgNC4xNTIgOSA5LjI3NXMtNC4wMjkgOS4yNzUtOSA5LjI3NWMtNC45NyAwLTktNC4xNTItOS05LjI3NSIgZmlsbD0iIzJDQTAxQyIvPgo8cGF0aCBkPSJtMTcuMDcyIDkuNDI3NWgtMC41djEuMzRoMC41YzEuMjEzIDAgMi4yIDEuMDE3IDIuMiAyLjI2NyAwIDEuMjUxLTAuOTg3IDIuMjY4LTIuMiAyLjI2OGgtMS4yMDJ2LTcuMDA4YzAtMC43NC0wLjU4Mi0xLjM0LTEuMy0xLjM0djkuNjg4aDIuNTAyYzEuOTMzIDAgMy41LTEuNjE1IDMuNS0zLjYwOCAwLTEuOTkyLTEuNTY3LTMuNjA3LTMuNS0zLjYwN20tOS41MDIgMy42MDdjMCAxLjk5MiAxLjU2NyAzLjYwNyAzLjUgMy42MDdoMC41di0xLjM0aC0wLjVjLTEuMjEzIDAtMi4yLTEuMDE3LTIuMi0yLjI2N3MwLjk4Ny0yLjI2NyAyLjItMi4yNjdoMS4yMDJ2Ny4wMDhjMCAwLjc0IDAuNTgyIDEuMzQgMS4zIDEuMzR2LTkuNjg4aC0yLjUwMmMtMS45MzMgMC0zLjUgMS42MTUtMy41IDMuNjA3IiBmaWxsPSIjZmZmIi8+CjxwYXRoIGQ9Im0yNy44MjkgMjMuNzc0bC0xMy43NzYgOC42MjQtMC4wNzMgMC4wNDUgMC4wMjUgMC4wODIgMS4zNzQgNC41NCAwLjA0MiAwLjEzOCAwLjEyNC0wLjA3NSAxMS41MDYtNy4wMDMgM2UtMyAtM2UtMyA0ZS0zIC0yZS0zYzAuNTgtMC40MTYgMC45NDItMS4wODggMC45NDItMS44MDJ2LTQuNDQ5LTAuMjA1bC0wLjE3MSAwLjExeiIgZmlsbD0iIzAzNjVBQyIvPgo8cG9seWdvbiBwb2ludHM9IjE1LjU2IDMxLjU2MiAxNS40OTcgMzEuNDk1IDE1LjQxOSAzMS41NDQgMTQuMDUzIDMyLjM5OCAxMy45OTcgMzIuNDMzIDE0IDMyLjQ5OSAxNC4yMzggMzcuMzI5IDE0LjI0NyAzNy41MDMgMTQuNDAyIDM3LjQyMyAxOC43NDcgMzUuMTc4IDE4Ljc4NSAzNS4xNTciIGZpbGw9IiMwMjUyOUIiLz4KPHBhdGggZD0ibTE4LjYyNiAzNS4wNjFsLTQuNjAzLTIuNzctMTMuODUyLTguNTE3LTAuMTcxLTAuMTA2IDAuMDE1IDQuNjQ3YzAgMC43MTQgMC4zNDcgMS4zODkgMC45MjggMS44MDVsM2UtMyAzZS0zIDRlLTMgMmUtMyAxMy4xMDQgNy44NCAwLjA1OCAwLjAzNSAwLjA1OC0wLjAzNSA0LjQ1Ni0yLjcxMiAwLjE1OS0wLjA5Ny0wLjE1OS0wLjA5NXoiIGZpbGw9IiMwMDc3QzUiLz4KPC9nPgo8L3N2Zz4K" alt=""/>
										<div className="certification-text m-l-10">										
											<div>QuickBooks</div>
											<div>
												<span>Desktop</span>
												<span> (ADVANCED)</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="detail-container">
								<div className="col-md-8 detail-saction">
									<div className="details col-md-12">
										<div className="about-section">
											<span>About me</span>
											<p>We provide startups and small businesses with accounting, bookkeeping, and financial reporting services.</p>
										</div>
										<div className="industries-section m-t-20">
											<span>Years in business</span>
											<p className="no-info">No information provided</p>
											<div className="tag">Industries served</div>
											<ul className="col-md-6">
												<li>Agriculture / Farming</li>
												<li>Computer / Software</li>
												<li>Consulting</li>
												<li>Financial Services</li>
												<li>Hospitality</li>
												<li>Lawn Care / Landscaping</li>
												<li>Manufacturing</li>
												<li>Non Profit</li>
												<li>Real Estate / Developer</li>
												<li>Retailelecommunications</li>
												<li>Telecommunications</li>
												<li>Wholesale Distribution</li>
											</ul>
											<ul className="col-md-6">
												<li>Automotive Sales / Repair</li>
												<li>Construction / Contractors</li>
												<li>Design / Architecture / Engineering</li>
												<li>Government Agency</li>
												<li>Insurance / Brokerage</li>
												<li>Legal</li>
												<li>Medical / Dental / Health Service</li>
												<li>Property Management</li>
												<li>Restaurant / Bar</li>
												<li>Salon / Beauty</li>
												<li>Transportation</li>
											</ul>
											<div className="social-link">
												<div className="col-md-6">	
													<span>Languages</span>	
													<p className="no-info">No information provided</p>
												</div>
												<div className="col-md-6">	
													<span>Social sites</span>	
													<p className="no-info">No information provided</p>
												</div>	
											</div>					
										</div>
									</div>
								</div>
								<div className="col-md-4 form-container">
									<div className="form-section padding-20 m-t-10">
										<span className="label">Send a message</span>
										<textarea placeholder="Send a message to introduce yourself to this advisor. Include details about yourself and the services you’re looking for." class="input-area"></textarea>
										<span className="label">Your name</span>
										<input name="name" type="text" value=""/>
										<span className="label">Your email</span>
										<input name="email" type="text" value=""/>
										<span className="label">Your phone number</span>
										<input name="phone" maxlength="26" type="text" value=""/>
										<a href=" " className="submit-button m-t-20 m-b-10">send message</a>
									</div>
								</div>
								<div className="col-md-8 detail-saction">
									<div className="col-md-12 details">
										<div className="about-section col-md-12">
											<div className="tag">Credentials</div>
											<ul className="col-md-6">
												<li>Accountant</li>
												<li>CPA (Certified Public Accountant)</li>
											</ul>
											<ul className="col-md-6">
												<li>Bookkeeper</li>
											</ul>
										</div>
										<div className="industries-section m-t-20 col-md-12">
											<div className="tag">Software expertise</div>
											<ul className="col-md-6">
												<li>3rd party applications integrated with QuickBooks</li>
												<li>QuickBooks Desktop Basic / Pro / Premie</li>
												<li>CQuickBooks Online Edition</li>
												<li>TurboTax</li>
											</ul>
											<ul className="col-md-6">
												<li>Intuit Payrol</li>
												<li>QuickBooks Desktop for Mac</li>
												<li>QuickBooks Payroll Products</li>
											</ul>			
										</div>
									</div>
								</div>
								<div className="col-md-8 client-review-container">
									<div className="col-md-12 client-review-section padding-20 m-t-10">
										<div className="tag">
											Client reviews(26)
										</div>
										<div className="reviews-tyle-container col-md-12">
											<div className="overall">
												<p className="tag overall-tag">
													OVERALL
												</p>
												<div>
													<span className="rating">5.0</span>
													<div className="inline-block"><ComponentForStars/></div>
												</div>
											</div>	
											<div className="reviews-type col-md-3 col-sm-6">
												<p className="m-b-5">Responsiveness</p>
												<ComponentForStars/>
											</div>
											<div className="reviews-type col-md-3 col-sm-6">
												<p className="m-b-5">Expertise</p>
												<ComponentForStars/>
											</div>
											<div className="reviews-type col-md-3 col-sm-6">
												<p className="m-b-5">Helpfulness</p>
												<ComponentForStars/>
											</div>
											<div className="reviews-type col-md-3 col-sm-6">
												<p className="m-b-5">Professionalism</p>
												<ComponentForStars/>
											</div>
										</div>
										<div className="comment-section col-md-12">
											<ComponentForStars/>
											<p className="tag m-b-5">Excellent to work with!!</p>
											<span className="date">pamalraj, February 12, 2019</span>
											<p className="comment">"The Precision Counts are excellent at understanding the needs and capabilities of a startup/small biz like us. They are particularly adept at providing the relevant knowledge/training, oversight and advice that has enabled us feel extremely comfortable with all the work that is required on an ongoing basis. Very precise and efficient!!"</p>
											<span className="col-md-3 tag">Services Received</span>
											<p className="col-md-8 services-received-detail">Accounting, Book cleanup, Bookkeeping, Consulting, Payroll, QuickBooks consulting, QuickBooks Payroll, QuickBooks setup, QuickBooks training</p>
										</div>
										<div className="comment-section col-md-12">
											<ComponentForStars/>
											<p className="tag m-b-5">Super helpful!</p>
											<span className="date">Edouard, February 8, 2019</span>
											<p className="comment">"Adora was very professional and really helpful! She helped us fixing our Quickbooks account very quickly. She is truly a kind and helpful person. Go for her without any hesitation!"</p>
											<span className="col-md-3 tag">Services Received</span>
											<p className="col-md-8 services-received-detail">Accounting, Book cleanup, Bookkeeping, Consulting, QuickBooks consulting</p>
										</div>
										<div className="comment-section col-md-12">
											<ComponentForStars/>
											<p className="tag m-b-5">Simply the Best!</p>
											<span className="date">SandHillLux, June 9, 2018</span>
											<p className="comment">""Adora went above and beyond for us. As a busy small business in San Francisco Adora really took the time to understand our needs and worked around my busy schedule. My follow through with action items was very poor by Adora was incredibly patient and genuinely concerned about our needs and budget as small business. Thank you so much for all the help, the pep talks, and guidance. Mike"</p>
											<span className="col-md-3 tag">Industry</span>
											<p className="col-md-8 industry-detail">Jewelry, Watch, Precious Stone, & Precious Metals</p>
											<span className="col-md-3 tag">Services Received</span>
											<p className="col-md-8 services-received-detail">Accounting, Book cleanup, Consulting, Personal financial planning, QuickBooks consulting</p>
										</div>	
									</div>
								</div>
							</div>
							<AppFooter />
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

class ComponentForStars extends React.Component{
	render(){
		return(
		<div>
			<img src={star} alt="star"/>
			<img src={star} alt="star"/>
			<img src={star} alt="star"/>
			<img src={star} alt="star"/>
			<img src={star} alt="star"/>
		</div>
		)
	}
}
