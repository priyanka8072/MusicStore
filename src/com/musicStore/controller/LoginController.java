package com.musicStore.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.musicStore.pojo.RespPojo;
import com.musicStore.pojo.User;
import com.musicStore.service.LoginService;

@RestController
@RequestMapping("/LoginController")
public class LoginController {

	LoginService loginservice;

	public void setLoginService(LoginService loginservice) {
		this.loginservice = loginservice;
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody RespPojo login(@RequestBody User user) {
		return loginservice.login(user);
	}
}
