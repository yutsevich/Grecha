package com.grecha.demo.service.impl;

import com.grecha.demo.dao.ProductDao;
import com.grecha.demo.dto.PriceResponseDto;
import com.grecha.demo.dto.ProductDetailsResponseDto;
import com.grecha.demo.dto.ProductResponseDto;
import com.grecha.demo.model.Product;
import com.grecha.demo.service.ProductService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductDao productDao;

    @Autowired
    public ProductServiceImpl(ProductDao productDao) {
        this.productDao = productDao;
    }

    @Override
    public Product get(Long id) {
        return productDao.getOne(id);
    }

    @Override
    public void add(Product product) {
        productDao.save(product);
    }

    @Override
    public List<Product> getAll() {
        return productDao.findAll();
    }

    @Override
    public List<PriceResponseDto> getProductPriceChange(Long id) {
        return null;
    }
}
