package com.grecha.demo.service;

import com.grecha.demo.dto.PriceResponseDto;
import com.grecha.demo.model.Product;

import java.util.List;

public interface ProductService {

    Product get(Long id);

    void add(Product product);

    List<Product> getAll();

    List<PriceResponseDto> getProductPriceChange(Long id);
}
