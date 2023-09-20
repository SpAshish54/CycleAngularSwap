package com.prodapt.learningnewspring.controller;


import java.security.Principal;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Optional;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prodapt.learningnewspring.Repository.UserRepository;
import com.prodapt.learningnewspring.entity.CartItem;
import com.prodapt.learningnewspring.entity.Cycle;
import com.prodapt.learningnewspring.entity.User;
import com.prodapt.learningnewspring.service.CycleService;


 

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CycleRestController {

    @Autowired
    private CycleService cycleService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/health")
    public String checkhealth() {
        return "healthy";
    }

    @GetMapping("/cycle/list")
    public List<Cycle> all(Authentication authentication) {
        System.out.println("Here");
        return cycleService.listAvailableCycles();
    }
    
    
    @GetMapping("/{id}/borrow")
    public ResponseEntity<String> borrowCycle(@PathVariable long id, @RequestParam(required=false, defaultValue="1") int count) {
        cycleService.borrowCycle(id, count);
        return new ResponseEntity<>("Cycle borrowed successfully", HttpStatus.OK);
    }
    @GetMapping("/{id}/return")
    public ResponseEntity<String> returnCycle(@PathVariable long id, @RequestParam(required=false, defaultValue="1") int count) {
        cycleService.returnCycle(id, count); 
        return new ResponseEntity<>("Cycle returned successfully", HttpStatus.OK);
    }

    @PostMapping("/{id}/restock")
    public ResponseEntity<String> restockCycle(@PathVariable long id, @RequestParam(required=false, defaultValue="1") int count) {
        cycleService.restockBy(id, count);
        return new ResponseEntity<>("Cycles restocked successfully", HttpStatus.OK);
    }

    @PostMapping("/addToCart")
    public ResponseEntity<String> addToCart(@RequestBody Map<String, Integer> reqBody){
        int userId = reqBody.get("userId");
        int cycleId = reqBody.get("cycleId");
        int count = reqBody.get("count");
        cycleService.AddToCart(userId, cycleId, count);
        return new ResponseEntity<>("Added To Cart!", HttpStatus.OK);
    }

    @PostMapping("/checkout")
    public ResponseEntity<String> checkout(@RequestBody Map<String, Integer> reqBody){
        int userId = reqBody.get("userId");
        cycleService.borrowCyclesFromCart(userId);
        return new ResponseEntity<>("Checked Out!", HttpStatus.OK);
    }

    @GetMapping("/getCart/{userId}")
    public List<CartItem> getCart(@PathVariable Long userId){
        return cycleService.getCart(userId);
    }




    
    
    @GetMapping("/registration")
    public String registrationForm(Model model) {
       return "userRegistration";
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        System.out.println("Registering");
      try {
            if (userRepository.existsByName(user.getName())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
            }
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            return ResponseEntity.ok("User registered successfully");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed: " + e.getMessage());
        }
    }

    @GetMapping("/login")
    public String LoginForm(Model model) {
        return "userLogin";
    }

    @PostMapping("/login")
    public String LoginonSubmit(@RequestParam String username, @RequestParam String password, Model model) {
        Optional<User> user = userRepository.findByName(username);
        if (user != null && userMatchesPassword(user.get(), password)) {
            return "redirect:/restock";
        } else {
            model.addAttribute("error", "Invalid Crudentials");
            return "userLogin";
        }

    }

    private boolean userMatchesPassword(User user, String password) {
        return user.getPassword().equals(password);
    }
}