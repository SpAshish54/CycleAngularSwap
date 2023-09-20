package com.prodapt.learningnewspring.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.prodapt.learningnewspring.entity.BorrowedCycle;
import com.prodapt.learningnewspring.entity.CartItem;
import com.prodapt.learningnewspring.entity.User;

public interface BorrowedCycleRepository extends CrudRepository<BorrowedCycle, Long>{
    List<BorrowedCycle> findAllByUser(User user);
}