package com.prodapt.learningnewspring.service;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prodapt.learningnewspring.Repository.BorrowedCycleRepository;
import com.prodapt.learningnewspring.Repository.CartItemRepository;
import com.prodapt.learningnewspring.Repository.CycleRepository;
import com.prodapt.learningnewspring.Repository.UserRepository;
import com.prodapt.learningnewspring.entity.BorrowedCycle;
import com.prodapt.learningnewspring.entity.CartItem;
import com.prodapt.learningnewspring.entity.Cycle;
import com.prodapt.learningnewspring.entity.User;
import com.prodapt.learningnewspring.exception.CycleShopBusinessException;


@Service
public class CycleService {
    @Autowired
    private CycleRepository cycleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private BorrowedCycleRepository borrowedCycleRepository;

    public List<Cycle> listCycles() {
        var listFromDB = cycleRepository.findAll();
        var cycleList = new ArrayList<Cycle>();
        listFromDB.forEach(cycleList::add);
        return cycleList;
    }

    public List<Cycle> listAvailableCycles() {
        return listCycles()
        .stream()
        .filter(cycle -> cycle.getNumAvailable() > 0)
        .collect(Collectors.toList());
    }

    public Cycle findByIdOrThrow404(long id) {
        var optCycle = cycleRepository.findById(id);
        if (optCycle.isEmpty()) {
            throw new CycleShopBusinessException(
                String.format("Can't find the cycle with id %d in the DB",
                id));
        }
        return optCycle.get();
    }

    public void borrowCycle(long id, int count) {
        var cycle = findByIdOrThrow404(id);
        cycle.setNumBorrowed(cycle.getNumBorrowed() + count);
        cycleRepository.save(cycle);
    }

    public void returnCycle(long id, int count) {
        var cycle = findByIdOrThrow404(id);
        cycle.setNumBorrowed(cycle.getNumBorrowed() - count);
        cycleRepository.save(cycle);
    }

    public void borrowCycle(long id) {
        borrowCycle(id, 1);
    }

    public void returnCycle(long id) {
        returnCycle(id, 1);
    }

    public void restockBy(long id, int count) {
        var cycle = findByIdOrThrow404(id);
        cycle.setStock(cycle.getStock() + count);
        cycleRepository.save(cycle);
    }

    public void AddToCart(long userId, long cycleId, int quantity) {
        var cycle = findByIdOrThrow404(cycleId);
        var user = userRepository.findById(userId);

        if (user.isEmpty()) {
            throw new CycleShopBusinessException(String.format("Can't find the user with id %d in the DB", userId));
        }
        if( cycle.getStock() - quantity > 0) {
        CartItem cartItem = new CartItem();
        cartItem.setCycle(cycle);
        cartItem.setUser(user.get());
        cartItem.setQuantity(quantity);
        cartItem.setCheckedOut(false);
        cartItemRepository.save(cartItem);
        cycle.setStock(cycle.getStock() - quantity);
        cycleRepository.save(cycle);
        }
    }

    public void borrowCyclesFromCart(long userId) {

        User user = userRepository.findById(userId).get();
        List<CartItem> cartItems = cartItemRepository.findAllByUser(user);

        for (CartItem cartItem : cartItems) {
            Cycle cycle = cycleRepository.findById(cartItem.getCycle().getId()).get();
            if (cartItem.getQuantity() > 0 && cartItem.getQuantity() <= cycle.getNumAvailable() && !cartItem.isCheckedOut()) {
                borrowCycle(cartItem.getCycle().getId(), cartItem.getQuantity());
                cartItem.setCheckedOut(true);
                cartItemRepository.save(cartItem);

                BorrowedCycle borrowedCycle = new BorrowedCycle();
                borrowedCycle.setCycle(cartItem.getCycle());
                borrowedCycle.setUser(user);
                borrowedCycleRepository.save(borrowedCycle);
            }
        }
    }

    public List<CartItem> getCart(long userId) {
        var user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new CycleShopBusinessException(String.format("Can't find the user with id %d in the DB", userId));
        }
        List<CartItem> cartItems = cartItemRepository.findAllByUser(user.get());

        List<CartItem> nonChecked = new ArrayList<CartItem>();
        for(CartItem c: cartItems){
            if(!c.isCheckedOut()){
                nonChecked.add(c);
            }
        }
        return nonChecked;
    }

}