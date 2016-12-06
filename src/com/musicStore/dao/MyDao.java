package com.musicStore.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import com.musicStore.pojo.Track;

public class MyDao {

	private DataSource dataSource;

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	public ArrayList<Track> getSongs(String input) {
		int count = 0;
		ArrayList<Track> tracks = new ArrayList<Track>();
		String sql = "SELECT T.NAME AS TRACKNAME, AL.TITLE AS ALBUMTITLE, A.NAME AS ARTISTNAME, G.NAME AS GENRENAME "
				+ "FROM TRACK T, ALBUM AL, ARTIST A, GENRE G WHERE T.ALBUMID = AL.ALBUMID "
				+ "AND T.GENREID = G.GENREID " + "AND AL.ARTISTID = A.ARTISTID " + "AND (AL.TITLE LIKE ? "
				+ "OR T.NAME LIKE ? " + " OR A.NAME LIKE ?) ORDER BY T.NAME";

		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
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

}
