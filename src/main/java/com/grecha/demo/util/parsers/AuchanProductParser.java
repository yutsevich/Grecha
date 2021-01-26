package com.grecha.demo.util.parsers;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public class AuchanProductParser {
    @JsonProperty("ean")
    private Long productId;

    @JsonProperty("trademark")
    private String name;

    private String manufacturer;

    @JsonProperty("producer")
    private void unpackManufacterFromNestedObject(Map<String, String> producer) {
        manufacturer = producer.get("trademark");
    }

    @JsonProperty("web_url")
    private String shopLink;

    private String photoLink;

    @JsonProperty("img")
    private void unpackImgFromNestedObject(Map<String, String> img) {
        photoLink = img.get("s150x150");
    }

    @JsonIgnore
    private String shop;

    @JsonProperty("weight")
    private double weight;

    @JsonProperty("price")
    private double price;
}
