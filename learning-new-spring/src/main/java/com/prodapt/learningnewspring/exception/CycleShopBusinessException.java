package com.prodapt.learningnewspring.exception;

public class CycleShopBusinessException extends RuntimeException{
    private static final long serialVersionUID = 1L;

	public CycleShopBusinessException(String message) {
        super(message);
    }
}
