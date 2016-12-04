package com.musicStore.dao;

import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.SessionFactory;

public class MyDao {

	private SessionFactory sessionFactory;

	public MyDao(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Map<Object, Object> getSongs(String input) {
		Query query = sessionFactory.getCurrentSession().createQuery("from Track where name = :trackName");
		query.setParameter("trackName", input);
		List list = query.list();
		return null;
	}

}
