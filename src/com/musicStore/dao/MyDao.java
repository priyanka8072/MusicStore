package com.musicStore.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;

import javax.sql.DataSource;

import com.musicStore.pojo.Employee;
import com.musicStore.pojo.Invoice;
import com.musicStore.pojo.InvoiceLine;
import com.musicStore.pojo.RespPojo;
import com.musicStore.pojo.SqlQuery;
import com.musicStore.pojo.Track;

public class MyDao {

	private DataSource dataSource;
	Connection conn = null;
	PreparedStatement ps = null;

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	public ArrayList<Track> getSongs(String input) {
		int count = 0;
		ArrayList<Track> tracks = new ArrayList<Track>();
		try {
			conn = dataSource.getConnection();
			ps = conn.prepareStatement(SqlQuery.getSong);
			ps.setString(1, "%" + input + "%");
			ps.setString(2, "%" + input + "%");
			ps.setString(3, "%" + input + "%");
			Track track = null;
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				track = new Track();
				track.setTrackID(++count);
				track.setTrackName(rs.getString("TRACKNAME"));
				track.setAlbumTitle(rs.getString("ALBUMTITLE"));
				track.setArtistName(rs.getString("ARTISTNAME"));
				track.setGenreName(rs.getString("GENRENAME"));
				tracks.add(track);
			}
			rs.close();
			ps.close();

		} catch (SQLException e) {
			throw new RuntimeException(e);
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
			}
		}
		return tracks;
	}

	public RespPojo saveEmployee(Employee emp) {
		RespPojo response = new RespPojo();
		try {
			int id = getID(0);
			conn = dataSource.getConnection();
			ps = conn.prepareStatement(SqlQuery.saveEmp);
			ps.setInt(1, id);
			ps.setString(2, emp.getFirstName());
			ps.setString(3, emp.getLastName());
			ps.setDate(4, emp.getBirthday());
			ps.setDate(5, emp.getHireDate());
			ps.setString(6, emp.getTitle());
			ps.setInt(7, emp.getReportsTo());
			ps.setString(8, emp.getAddress());
			ps.setString(9, emp.getCity());
			ps.setString(10, emp.getState());
			ps.setString(11, emp.getCountry());
			ps.setString(12, emp.getPostalCode());
			ps.setString(13, emp.getPhone());
			ps.setString(14, emp.getEmail());
			ps.setString(15, emp.getFax());

			int rs = ps.executeUpdate();

			if (rs == 1) {
				response.setFirstName(emp.getFirstName());
				response.setId(id);
			} else
				response.setStatus("Failed to update the user!");
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

	public RespPojo saveCustomer(Employee emp) {
		RespPojo response = new RespPojo();
		try {
			int id = getID(1);
			conn = dataSource.getConnection();
			ps = conn.prepareStatement(SqlQuery.saveCust);
			ps.setInt(1, id);
			ps.setString(2, emp.getFirstName());
			ps.setString(3, emp.getLastName());
			ps.setString(4, emp.getAddress());
			ps.setString(5, emp.getCity());
			ps.setString(6, emp.getState());
			ps.setString(7, emp.getCountry());
			ps.setString(8, emp.getPostalCode());
			ps.setString(9, emp.getCompany());
			ps.setString(10, emp.getPhone());
			ps.setString(11, emp.getEmail());
			ps.setString(12, emp.getFax());
			ps.setInt(13, emp.getSupportRepID());

			int rs = ps.executeUpdate();

			if (rs == 1) {
				response.setFirstName(emp.getFirstName());
				response.setId(id);
			} else
				response.setStatus("Failed to update the user!");
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

	public String invoice(Invoice inv) {
		String response = "";
		try {
			int id = getID(2);
			conn = dataSource.getConnection();
			ps = conn.prepareStatement(SqlQuery.invoice);
			ps.setInt(1, id);
			ps.setInt(2, inv.getCustomerID());
			ps.setDate(3, inv.getInvoiceDate());
			ps.setString(4, inv.getBillingAddress());
			ps.setString(5, inv.getBillingCity());
			ps.setString(6, inv.getBillingState());
			ps.setString(7, inv.getBillingCountry());
			ps.setString(8, inv.getBillingPostalCode());
			ps.setFloat(9, inv.getTotal());

			int rs = ps.executeUpdate();

			if (rs == 1) {
				response = saveInvoiceLine(id, inv) + " and Invoice";
			} else
				response = "Failed to creat an Invoice!";
			ps.close();

		} catch (SQLException e) {
			response = "Failed to update the user! : " + e.toString();
			throw new RuntimeException(e);
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
			}
		}
		return response;
	}

	private String saveInvoiceLine(int invID, Invoice inv) {
		String response = "";
		try {
			Iterator<InvoiceLine> itr = inv.getInvoiceLine().iterator();
			while (itr.hasNext()) {
				int id = getID(3);
				InvoiceLine invoiceLine = itr.next();
				conn = dataSource.getConnection();
				ps = conn.prepareStatement(SqlQuery.invoiceLine);
				ps.setInt(1, id);
				ps.setInt(2, invID);
				ps.setInt(3, invoiceLine.getTrackID());
				ps.setFloat(4, invoiceLine.getUnitPrice());
				ps.setInt(5, invoiceLine.getQuantity());
				int rs = ps.executeUpdate();
			}
			response = "Successfully updated InvoiceLine";
			ps.close();

		} catch (SQLException e) {
			response = "Exception occured.. " + e.toString();
			throw new RuntimeException(e);
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
			}
		}
		return response;
	}

	private int getID(int flag) {
		int id = 0;
		try {
			conn = dataSource.getConnection();
			switch (flag) {
			case 0:
				ps = conn.prepareStatement(SqlQuery.getEmpID);
				break;
			case 1:
				ps = conn.prepareStatement(SqlQuery.getCustID);
				break;
			case 2:
				ps = conn.prepareStatement(SqlQuery.getInvoiceID);
				break;
			default:
				ps = conn.prepareStatement(SqlQuery.getInvoiceLineID);
				break;
			}
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				id = rs.getInt("ID");
			}
		} catch (SQLException e) {
			throw new RuntimeException(e);
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
			}
		}
		return ++id;
	}

	public RespPojo unitPrice(int trackID) {
		RespPojo result = new RespPojo();
		try {
			conn = dataSource.getConnection();
			ps = conn.prepareStatement(SqlQuery.unitPrice);
			ps.setInt(1, trackID);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				result.setUnitPrice(rs.getFloat("UNITPRICE"));
				result.setTrackName(rs.getString("NAME"));
			}
		} catch (SQLException e) {
			throw new RuntimeException(e);
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
			}
		}
		return result;
	}

	public Employee getCustomer(int customerID) {
		Employee emp = new Employee();
		try {
			conn = dataSource.getConnection();
			ps = conn.prepareStatement(SqlQuery.getCustomer);
			ps.setInt(1, customerID);

			ResultSet rs = ps.executeQuery();

			if (rs.next()) {
				emp.setFirstName(rs.getString("FIRSTNAME"));
				emp.setLastName(rs.getString("LASTNAME"));
				emp.setAddress(rs.getString("ADDRESS"));
				emp.setCity(rs.getString("CITY"));
				emp.setState(rs.getString("STATE"));
				emp.setCountry(rs.getString("COUNTRY"));
				emp.setPostalCode(rs.getString("POSTALCODE"));
				emp.setCompany(rs.getString("COMPANY"));
				emp.setPhone(rs.getString("PHONE"));
				emp.setEmail(rs.getString("EMAIL"));
				emp.setFax(rs.getString("FAX"));
				emp.setSupportRepID(rs.getInt("SUPPORTREPID"));
			} else
				emp.setStatus("Customer with this customerID does not exists");

			ps.close();

		} catch (SQLException e) {
			emp.setStatus("Failed to get the user! : " + e.toString());
			throw new RuntimeException(e);
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
			}
		}
		return emp;
	}

	public RespPojo updateCustomer(Employee emp) {
		RespPojo response = new RespPojo();
		try {
			conn = dataSource.getConnection();
			ps = conn.prepareStatement(SqlQuery.updateCustomer);
			ps.setString(1, emp.getFirstName());
			ps.setString(2, emp.getLastName());
			ps.setString(3, emp.getAddress());
			ps.setString(4, emp.getCity());
			ps.setString(5, emp.getState());
			ps.setString(6, emp.getCountry());
			ps.setString(7, emp.getPostalCode());
			ps.setString(8, emp.getCompany());
			ps.setString(9, emp.getPhone());
			ps.setString(10, emp.getEmail());
			ps.setString(11, emp.getFax());
			ps.setInt(12, emp.getSupportRepID());
			int id = emp.getCustID();
			ps.setInt(13, id);

			int rs = ps.executeUpdate();

			if (rs == 1) {
				response.setStatus("Customer with ID " + id + " updated successfully");
			} else
				response.setStatus("Customer with ID " + id + " could not be updated ");
			ps.close();

		} catch (SQLException e) {
			response.setStatus(response + e.toString());
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
