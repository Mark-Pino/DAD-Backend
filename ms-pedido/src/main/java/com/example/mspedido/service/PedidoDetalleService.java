package com.example.mspedido.service;

import com.example.mspedido.entity.PedidoDetalle;

import java.util.List;
import java.util.Optional;

public interface PedidoDetalleService {
    public List<PedidoDetalle> listar();

    public PedidoDetalle guardar(PedidoDetalle pedidoDetalle);

    public PedidoDetalle actualizar(PedidoDetalle pedidoDetalle);

    public Optional<PedidoDetalle> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
