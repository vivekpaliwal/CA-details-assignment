import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import jsonData from '../ca_data.json'
import { AppFooter }  from './SiteComp.jsx';
import star from '../star.png';
var funcs = require('../utils.js');

var _ = require('lodash');

export default class CaListPageComp extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            location: {value :"",label:funcs.CA.localStorage.getItem("location") ? funcs.CA.localStorage.getItem("location"): "select location"},
            service: "",
			industry:""
        }
    }
    componentWillMount(){
		 funcs.CA.localStorage.removeItem("ca_name")
	}
	render(){
		const cityOptions = funcs.getAllCity();

		// get data from city name
		if(this.state.location.value){
			var cityName = this.state.location.value
		}else{
			var cityName = funcs.CA.localStorage.getItem("location")	
		}

		if(cityName){
			var filterDatafromCity = _.filter(jsonData.data, function(i,d) {
				if(i.location === cityName) return i;
			});
		}else{
			var filterDatafromCity = _.filter(jsonData.data, function(i,d) {
					return i;
			});
		}
		

		// Options for industry
		var allIndustrys = [];
		_.map(filterDatafromCity, (i,d)=>{
			_.map(i.industries,(l,d)=>{
				return allIndustrys.push({
					label:l,
					value:l
				})
			})				
		})
		var industryOptions = funcs.distinct_obj(allIndustrys,"value");

		// options for services
		var allServices = [];
		_.map(filterDatafromCity, (i,d)=>{
			_.map(i.services,(l,d)=>{
				return allServices.push({
					label:l,
					value:l
				})
			})				
		})
		var servicesOptions = funcs.distinct_obj(allServices,"value");


		// filter data from city
		var dataFromFilterCity = _.map(filterDatafromCity, (i,d)=>{
			return(
				<CaList data={i} key={d}/>
			)
		})
		var filteredServices = [];
		var filterdSerAndInd = [];

		// filter data from service
		if(this.state.service.value){
			filteredServices = funcs.getFilterData(filterDatafromCity,this.state.service.value,{"key":1})
			if(filteredServices.length > 0){
				dataFromFilterCity = _.map(filteredServices, (i,d)=>{
					return(
						<CaList data={i}/>
					)
				})
			}else{
				dataFromFilterCity = <div className="no-filter col-md-10 col-sm-12 text-center">No match found try different filter</div>
			}
		}

		// filter data from industry
		if(this.state.industry.value){
			if(filteredServices.length > 0){
				var filteredData = filteredServices
			}else{
				 filteredData = filterDatafromCity
			}
			filterdSerAndInd = funcs.getFilterData(filteredData,this.state.industry.value,{"key":2})
			if(filterdSerAndInd.length > 0){
				dataFromFilterCity = _.map(filterdSerAndInd, (i,d)=>{
					return(
						<CaList data={i}/>
					)
				})

			}else{
				dataFromFilterCity = <div className="no-filter col-md-10 col-sm-12 text-center">No match found try different filter</div>
			}
			
		}

		return(
		<div>
			<div className="ca-list-page">
				<div className="grid">
					<div className="row">
						<div className="col">
							<div className="breadcrumbs-container"><a className="breadcrumbs-links" href="/">Find a ProAdvisor</a> >  <a className="breadcrumbs-links" href=" ">{cityName}</a></div>

							<div className="filters">
								<div className="col-md-3 select-detail">
									<div className="label m-b-5">Location </div>
									<Select
										className="select"
										options={ cityOptions }
										value={ this.state.location }
										placeholder="Select location"
										clearable={false}
										onChange={(val) => this.setState({location: val})}
									/>

								</div>
								<div className="col-md-3 m-l-20 select-detail">
									<div className="label m-b-5">Service provided </div>
									<Select
										className="select"
										options={ servicesOptions }
										value={ this.state.service }
										placeholder="Select service"
										clearable={false}
										onChange={(val) => this.setState({service: val})}
									/>
								</div>
								<div  className="col-md-3 m-l-20 select-detail">
									<div className="label m-b-5	">Industry served </div>
									<Select
										className="select"
										options={ industryOptions }
										value={ this.state.industry }
										placeholder="Select industry"
										clearable={false}
										onChange={(val) => this.setState({industry: val})}
									/>
								</div>
							</div>
							<div className="profile-section">
								{dataFromFilterCity}
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
class CaList extends React.Component{
	click =(val)=>{
		funcs.CA.localStorage.setItem("ca_name",val)
	}
	render(){
		var serviceArr = []
		var services = this.props.data.services;
		for(var i in services){
			if(i == 5){
				break;
			}
			let comp = (
				<li key={i}>{services[i]}</li>
			)
			serviceArr.push(comp)
		}
		if(this.props.data.services.length > 5){
				var count = <p>+ {this.props.data.services.length - 5} more</p>
		}
		return(
			<Link to="/ca-details" >

			<div className="profile-container col-md-10 m-t-10 padding-20" onClick={(e)=>this.click(this.props.data.ca_name)}>
				<div className="avatar-saction col-md-4">
					<img src="https://intuitmarket.intuit.com/IMRestfulServices/IM.SimpleServices/api/v1/image?configid=504&clientid=1001&width=200&imageguid=3F3CA023-96F9-4902-8DB8-F307CE89835D" alt="avatar"/>
				</div>
				<div className="detail-saction col-md-5">
					<h2 className="name">
						{this.props.data.ca_name}
					</h2>
					<div className="starts">
						<div className="inline-block-v-middle m-r-10"><img src={star} alt="star"/><img src={star} alt="star"/><img src={star} alt="star"/><img src={star} alt="star"/><img src={star} alt="star"/></div><span>26 reviews</span>
					</div>
					<p className="text">Precision Counts</p>
					<div className="address m-t-5 m-b-20">
						<span>{this.props.data.location}</span>,<span>{this.props.data.pincode}</span><span>3 miles away</span>
					</div>
					<div className="description">We provide startups and small businesses with accounting, bookkeeping, and financial reporting services.</div>
				</div>
				<div className="services-saction col-md-3">
					<p className="tag">Services</p>
					<ul>
						{serviceArr}
					</ul>
					{count}
				</div>
			</div>
			</Link>
		)
	}
}