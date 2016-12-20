package com.musicStore.service;

import java.util.ArrayList;

import com.musicStore.dao.MyDao;
import com.musicStore.pojo.Employee;
import com.musicStore.pojo.Invoice;
import com.musicStore.pojo.RespPojo;
import com.musicStore.pojo.Track;

public class MyService {

	MyDao myDao;

	public void setMyDao(MyDao myDao) {
		this.myDao = myDao;
	}

	public ArrayList<Track> getSong(String name) {
		return myDao.getSongs(name);
	}

	public RespPojo saveEmp(Employee emp) {
		return myDao.saveEmployee(emp);
	}
	
	public RespPojo saveCust(Employee emp) {
		return myDao.saveCustomer(emp);
	}

	public RespPojo invoice(Invoice inv) {
		return  myDao.invoice(inv);
	}

	public RespPojo getUnitPrice(int trackID) {
		return myDao.unitPrice(trackID);
	}

	public RespPojo updateCustomer(Employee emp) {
		return myDao.updateCustomer(emp);
	}

	public Employee getCustomer(int customerID) {
		return myDao.getCustomer(customerID);
	}

}
