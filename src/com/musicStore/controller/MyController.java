package com.musicStore.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.musicStore.pojo.Employee;
import com.musicStore.pojo.Invoice;
import com.musicStore.pojo.RespPojo;
import com.musicStore.pojo.Track;
import com.musicStore.service.MyService;

@RestController
@RequestMapping("/AccessRecords")
public class MyController {

	MyService myservice;

	public void setMyService(MyService myservice) {
		this.myservice = myservice;
	}

	@RequestMapping(value = "/searchSong/{name}", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody ArrayList<Track> searchSong(@PathVariable String name) {
		ArrayList<Track> result = new ArrayList<Track>();
		result = myservice.getSong(name);
		return result;
	}

	@RequestMapping(value = "/saveEmp", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody RespPojo saveEmp(@RequestBody Employee emp) {
		return myservice.saveEmp(emp);
	}

	@RequestMapping(value = "/saveCust", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody RespPojo saveCust(@RequestBody Employee emp) {
		return myservice.saveCust(emp);
	}

	@RequestMapping(value = "/invoice", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody String invoivce(@RequestBody Invoice inv) {
		return myservice.invoice(inv);
	}

	@RequestMapping(value = "/unitPrice/{trackID}", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody RespPojo getUnitPrice(@PathVariable int trackID) {
		return myservice.getUnitPrice(trackID);
	}
	
	@RequestMapping(value = "/updateCustomer", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody RespPojo updateCustomer(@RequestBody Employee emp) {
		return myservice.updateCustomer(emp);
	}

	@RequestMapping(value = "/validateCustomer/{customerID}", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody Employee validateCustomer(@PathVariable int customerID) {
		return myservice.getCustomer(customerID);
	}
}
