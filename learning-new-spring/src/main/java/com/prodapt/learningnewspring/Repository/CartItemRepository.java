package com.prodapt.learningnewspring.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.prodapt.learningnewspring.entity.CartItem;
import com.prodapt.learningnewspring.entity.User;

public interface CartItemRepository extends CrudRepository<CartItem, Long>{
    List<CartItem> findAllByUser(User user);
}