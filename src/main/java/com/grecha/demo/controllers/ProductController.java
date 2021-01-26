package com.grecha.demo.controllers;

import com.grecha.demo.dto.PriceResponseDto;
import com.grecha.demo.dto.ProductDetailsResponseDto;
import com.grecha.demo.dto.ProductRequestDto;
import com.grecha.demo.dto.ProductResponseDto;
import com.grecha.demo.model.Product;
import com.grecha.demo.service.ProductService;

import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {
    private final ProductService productService;
    private final ModelMapper modelMapper;

    @Autowired
    public ProductController(ProductService productService, ModelMapper modelMapper) {
        this.productService = productService;
        this.modelMapper = modelMapper;
    }

    //product/1
    @GetMapping()
    public ProductResponseDto getProduct(@PathVariable Long id) {
        Product product = productService.get(id);
        return modelMapper.map(product, ProductResponseDto.class);
    }

    //product/1/add
    @GetMapping("/add")
    public void addProduct(@RequestBody ProductRequestDto productRequestDto) {
        productService.add(modelMapper.map(productRequestDto, Product.class));
    }

    //product/details/1
    @GetMapping("/details")
    public ProductDetailsResponseDto getProductDetails(@PathVariable Long id) {
        return modelMapper.map(productService.get(id), ProductDetailsResponseDto.class);
    }

    //product/1/price-history
    @GetMapping("/price-history")
    public List<PriceResponseDto> getProductPriceChange(@PathVariable Long id) {
        return productService.getProductPriceChange(id).stream()
                .map(product -> modelMapper.map(product, PriceResponseDto.class))
                .collect(Collectors.toList());
    }

    //product/all
    @GetMapping("/all")
    public List<ProductResponseDto> getAllProducts() {
        return productService.getAll().stream()
                .map(product -> modelMapper.map(product, ProductResponseDto.class))
                .collect(Collectors.toList());
    }
}
