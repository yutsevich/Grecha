package com.grecha.demo.dao;

import com.grecha.demo.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductDao extends JpaRepository<Product, Long> {

}
