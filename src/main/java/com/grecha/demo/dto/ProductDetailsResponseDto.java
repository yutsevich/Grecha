package com.grecha.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetailsResponseDto {
    private Long productId;
    private String manufacturer;
    private String shopLink;
    private double weight;
}
