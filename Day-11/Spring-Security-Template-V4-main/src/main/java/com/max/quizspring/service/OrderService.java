package com.max.quizspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.quizspring.model.Orders;
import com.max.quizspring.model.Product;
import com.max.quizspring.model.Users;
import com.max.quizspring.repo.OrderRepo;
import com.max.quizspring.repo.ProductRepo;
import com.max.quizspring.repo.UsersRepo;

@Service
public class OrderService {
    @Autowired
    private UsersRepo ur;

    @Autowired
    private ProductRepo pr;

    @Autowired
    private OrderRepo or;
     public Orders createOrder(Long userId, Long productId, String userAddress, String payMethod) {
        Users user = ur.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Product product = pr.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        Orders order = new Orders();
        order.setUser(user);
        order.setProduct(product);
        order.setUser_address(userAddress);
        order.setPay_method(payMethod);
        order.setOrder_confirmed(false); // Default value for new orders

        return or.save(order);
    }
}


