package com.musicStore.service;

import java.util.ArrayList;

import com.musicStore.dao.MyDao;
import com.musicStore.pojo.Track;

public class MyService {

	MyDao myDao;

	public void setMyDao(MyDao myDao) {
		this.myDao = myDao;
	}

	public ArrayList<Track> getSong(String name) {
		return myDao.getSongs(name);
	}

}
