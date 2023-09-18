package com.example.mspedido.repository;

import com.example.mspedido.entity.PedidoDetalle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoDetalleRepository extends JpaRepository<PedidoDetalle,Integer> {
}
