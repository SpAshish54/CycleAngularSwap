package com.prodapt.learningnewspring.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Cycle {
    
    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public int getNumBorrowed() {
		return numBorrowed;
	}

	public void setNumBorrowed(int numBorrowed) {
		this.numBorrowed = numBorrowed;
	}

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    private String brand;
    private int stock;
    private int numBorrowed;

    public int getNumAvailable() {
        return stock - numBorrowed;
    }


}