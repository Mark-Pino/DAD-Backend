package com.example.mspedido.feign;

import com.example.mspedido.dto.Cliente;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
@FeignClient(name = "ms-cliente-service",path="/cliente")

public interface ClienteFeign {
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> listById(@PathVariable(required = true) Integer id);
}
