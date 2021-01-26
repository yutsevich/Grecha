package com.grecha.demo.exceptions;

public class WrongURIFormatException extends RuntimeException {

    public WrongURIFormatException(String message) {
        super(message);
    }
}
