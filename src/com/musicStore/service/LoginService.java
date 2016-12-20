package com.musicStore.service;

import com.musicStore.dao.LoginDao;
import com.musicStore.pojo.RespPojo;
import com.musicStore.pojo.User;

public class LoginService {
	
	LoginDao loginDao;

	public void setLoginDao(LoginDao loginDao) {
		this.loginDao = loginDao;
	}
	
	public RespPojo login(User user) {
		return loginDao.login(user);
	}

}
