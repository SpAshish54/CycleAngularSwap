package com.prodapt.learningnewspring;

import lombok.Data;

@Data
public class TokenDTO {
    private String token;
    private String username = null;
}
