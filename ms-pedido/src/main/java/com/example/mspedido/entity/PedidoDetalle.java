package com.example.mspedido.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class PedidoDetalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double cantidad;
    private Double precio;
    private Integer productoId;

    public PedidoDetalle() {
        this.cantidad = (double) 0;
        this.precio = (double) 0;
    }
}
