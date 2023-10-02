package com.example.mspedido.dto;

import lombok.Data;


@Data
public class Producto {
    private Integer id;
    private String nombre;
    private Categoria categoria;
}
