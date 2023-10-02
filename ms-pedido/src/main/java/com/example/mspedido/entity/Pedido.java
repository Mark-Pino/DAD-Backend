package com.example.mspedido.entity;

import com.example.mspedido.dto.Cliente;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data

public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String serie;
    private String numero;
    private String descripcion;
    private Integer clienteId;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "pedido_id")
    private List<PedidoDetalle> pedidoDetalles;
    @Transient
    private Cliente cliente;

}
