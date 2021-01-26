package com.grecha.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponseDto {
    private Long productId;
    private String name;
    private String manufacturer;
    private double price;
    private double weight;
    private String shop;
}
