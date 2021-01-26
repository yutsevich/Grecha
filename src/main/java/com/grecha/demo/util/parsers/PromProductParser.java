package com.grecha.demo.util.parsers;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PromProductParser {
    @JsonProperty("productId")
    private Long productId;

    @JsonProperty("name")
    private String name;

    @JsonProperty("manufacturer")
    private String manufacturer;

    @JsonProperty("shopLink")
    private String shopLink;

    @JsonProperty("photoLink")
    private String photoLink;

    @JsonIgnore
    private String shop;

    @JsonProperty("weight")
    private double weight;

    @JsonProperty("price")
    private double price;
}
