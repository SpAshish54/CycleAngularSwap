package com.prodapt.learningnewspring.Repository;

import org.springframework.data.repository.CrudRepository;
import com.prodapt.learningnewspring.entity.BorrowedCycle;

public interface BorrowedCycleRepository extends CrudRepository<BorrowedCycle, Long>{

}