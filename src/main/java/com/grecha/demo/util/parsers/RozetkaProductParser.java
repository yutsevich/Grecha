package com.grecha.demo.util.parsers;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

public class RozetkaProductParser {
    @JsonProperty("id")
    private Long productId;

    @JsonIgnore
    private String name;

    @JsonProperty("brand")
    private String manufacturer;

    @JsonProperty("href")
    private String shopLink;

    @JsonProperty("image_main")
    private String photoLink;

    @JsonIgnore
    private String shop;

    @JsonIgnore
    private double weight;

    @JsonProperty("price")
    private double price;
}
