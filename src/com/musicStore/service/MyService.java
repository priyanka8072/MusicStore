package com.musicStore.service;

import java.util.Map;

import com.musicStore.dao.MyDao;

public class MyService {

	MyDao myDao;

	public void setMyDao(MyDao myDao) {
		this.myDao = myDao;
	}

	public Map<Object, Object> getSong(String name) {
		return myDao.getSongs(name);
	}

}
