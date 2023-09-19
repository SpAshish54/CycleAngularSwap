package com.prodapt.learningnewspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class LearningNewSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningNewSpringApplication.class, args);
	}

}
