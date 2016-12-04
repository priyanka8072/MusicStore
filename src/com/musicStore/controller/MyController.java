package com.musicStore.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.musicStore.service.MyService;

@Controller
@RequestMapping("/AccessRecords")
public class MyController {

	MyService myservice;

	public void setMyService(MyService myservice) {
		this.myservice = myservice;
	}

	@RequestMapping(value = "/searchSong", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody Map<Object, Object> searchSong(@RequestParam String name) {

		Map<Object, Object> result = new HashMap<Object, Object>();
		// result = myservice.getSong(name);
		result = myservice.getSong("Evil Walks");
		return result;

	}
}
