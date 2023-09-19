package com.prodapt.learningnewspring.Repository;


import org.springframework.data.repository.CrudRepository;

import com.prodapt.learningnewspring.entity.Cycle;


public interface CycleRepository extends CrudRepository<Cycle, Long>{
    
}