package com.max.quizspring.controller;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class OrderRequest {
    private Long u_id;
    private Long product_id;
    private String user_address;
    private String pay_method;
}
