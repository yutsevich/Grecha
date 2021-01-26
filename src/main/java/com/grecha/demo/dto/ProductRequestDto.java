package com.grecha.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductRequestDto {
    private Long productId;
    private String name;
    private String manufacturer;
    private String shopLink;
    private String photoLink;
    private double price;
    private double priceDate;
    private double weight;
    private String shop;
}
