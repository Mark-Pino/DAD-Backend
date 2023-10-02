package com.example.mspedido.dto;

import lombok.Data;


@Data
public class Cliente {
    private Integer id;
    private String nombre;
    private String dni;
    private String direccion;
    private Integer telefono;
}
