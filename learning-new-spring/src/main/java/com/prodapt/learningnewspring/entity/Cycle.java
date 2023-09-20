package com.prodapt.learningnewspring.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


@Entity
@Data
public class Cycle {

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    private String brand;
    private int stock;
    private int numBorrowed;
	private int rent;

    public int getNumAvailable() {
        return stock;
    }


}