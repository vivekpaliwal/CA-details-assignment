import jsonData from './ca_data.json'
var _ = require('lodash');
export function getAllCity(d){
	var cityNames = _.map(jsonData.data, (i,d)=>{
		return({
			label:i.location,
			value:i.location
		})
	})
	return distinct_obj(cityNames,"value")
}
export function getAllService(d){
	var allService = [];
	_.map(jsonData.data, (i,d)=>{
		_.map(i.services,(l,d)=>{
			return allService.push({
				label:l,
				value:l
			})
		})
		
	})
	return distinct_obj(allService,"value")
}
export function getFilterData(data,state,key){
	var filterData = [];
	_.map(data, (i,d)=>{
			_.filter(key.key === 1 ? i.services : i.industries, function(j,d) {
				if(j === state) return filterData.push(i);
			});
		})
	return filterData
}
export function distinct_obj(items, prop) {
    var unique = [];
    var distinctItems = [];

    _.each(items, function(item) {
        if (unique[item[prop]] === undefined) {
            distinctItems.push(item);
        }

        unique[item[prop]] = 0;
    });

    return distinctItems;
}
export var CA = {
	localStorage:{
		setItem:function(key, value){
			var ca_storage = JSON.parse(localStorage.getItem('CA'));
			if(ca_storage){
					ca_storage[key] = value;
			}else{
					ca_storage = {}
					ca_storage[key] = value;
			}
			localStorage.setItem('CA', JSON.stringify(ca_storage));
		},
		getItem:function(key){
			var data = JSON.parse(localStorage.getItem('CA'));
			if(!data){
				return false;
			}else{
				if(data[key]){
					return data[key]
				}else{
					return false;
				}
			}
		},
		removeItem:function(key){
			var data = JSON.parse(localStorage.getItem('CA'));
			var keysArray = data ? Object.keys(data) : []; //if user wants to login from landing page
			for(var x in keysArray){
				if(keysArray[x] === key){
					delete(data[key]);
				}
			}
			localStorage.setItem('CA',JSON.stringify(data));
		}
	}
}