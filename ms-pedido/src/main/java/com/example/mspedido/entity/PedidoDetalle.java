package com.example.mspedido.entity;

import com.example.mspedido.dto.Producto;
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
    @Transient
    private Producto producto;

    public PedidoDetalle() {
        this.cantidad = (double) 0;
        this.precio = (double) 0;

    }
}
