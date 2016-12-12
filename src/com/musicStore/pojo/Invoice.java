package com.musicStore.pojo;

import java.sql.Date;
import java.util.ArrayList;

public class Invoice {

	int customerID;
	Date invoiceDate;
	String billingAddress;
	String billingCity;
	String billingState;
	String billingCountry;
	String billingPostalCode;
	float total;
	ArrayList<InvoiceLine> invoiceLine;

	public int getCustomerID() {
		return customerID;
	}

	public void setCustomerID(int customerID) {
		this.customerID = customerID;
	}

	public Date getInvoiceDate() {
		return invoiceDate;
	}

	public void setInvoiceDate(Date invoiceDate) {
		this.invoiceDate = invoiceDate;
	}

	public String getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}

	public String getBillingCity() {
		return billingCity;
	}

	public void setBillingCity(String billingCity) {
		this.billingCity = billingCity;
	}

	public String getBillingState() {
		return billingState;
	}

	public void setBillingState(String billingState) {
		this.billingState = billingState;
	}

	public String getBillingCountry() {
		return billingCountry;
	}

	public void setBillingCountry(String billingCountry) {
		this.billingCountry = billingCountry;
	}

	public String getBillingPostalCode() {
		return billingPostalCode;
	}

	public void setBillingPostalCode(String billingPostalCode) {
		this.billingPostalCode = billingPostalCode;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public ArrayList<InvoiceLine> getInvoiceLine() {
		return invoiceLine;
	}

	public void setInvoiceLine(ArrayList<InvoiceLine> invoiceLine) {
		this.invoiceLine = invoiceLine;
	}

}
