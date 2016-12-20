package com.musicStore.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.sql.DataSource;

import com.musicStore.pojo.RespPojo;
import com.musicStore.pojo.SqlQuery;
import com.musicStore.pojo.User;

public class LoginDao {

	private DataSource dataSource;
	Connection conn = null;
	PreparedStatement ps = null;

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	public RespPojo login(User user) {
		RespPojo response = new RespPojo();
		try {
			conn = dataSource.getConnection();
			ps = conn.prepareStatement(SqlQuery.login);

			Pattern VALID_PATTERN = Pattern.compile("([A-Za-z])+|[0-9]*");
			List<String> chunks = new ArrayList<String>();
			Matcher matcher = VALID_PATTERN.matcher(user.getPassword());
			while (matcher.find()) {
				chunks.add(matcher.group());
			}
			int id = Integer.parseInt(chunks.get(0));
			String lastName = chunks.get(1);

			ps.setString(1, user.getUsername());
			ps.setString(2, lastName);
			ps.setInt(3, id);

			ResultSet rs = ps.executeQuery();

			if (rs.next()) {
				response.setFirstName(rs.getString("FIRSTNAME"));
			} else {
				response.setStatus("Could not find user with given Username and Password!");
			}

			ps.close();

		} catch (SQLException e) {
			response.setStatus("Failed to update the user! : " + e.toString());
			throw new RuntimeException(e);
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
			}
		}
		return response;
	}

}
