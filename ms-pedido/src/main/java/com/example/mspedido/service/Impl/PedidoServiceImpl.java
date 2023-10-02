package com.example.mspedido.service.impl;

import com.example.mspedido.dto.Cliente;
import com.example.mspedido.dto.Producto;
import com.example.mspedido.entity.Pedido;
import com.example.mspedido.entity.PedidoDetalle;
import com.example.mspedido.feign.ClienteFeign;
import com.example.mspedido.feign.ProductoFeign;
import com.example.mspedido.repository.PedidoRepository;
import com.example.mspedido.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PedidoServiceImpl implements PedidoService {
    @Autowired
    private PedidoRepository pedidoRepository;
    @Autowired
    private ClienteFeign clienteFeign;
    @Autowired
    private ProductoFeign productoFeign;

    @Override
    public List<Pedido> listar() {
        return pedidoRepository.findAll();
    }

    @Override
    public Pedido guardar(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @Override
    public Pedido actualizar(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @Override
    public Optional<Pedido> listarPorId(Integer id) {
        Pedido pedido = pedidoRepository.findById(id).get();
        Cliente cliente = clienteFeign.listById(pedido.getClienteId()).getBody();
        List<PedidoDetalle> pedidoDetalles = pedido.getPedidoDetalles().stream().map(pedidoDetalle -> {
            Producto producto = productoFeign.listById(pedidoDetalle.getProductoId()).getBody();
            pedidoDetalle.setProducto(producto);
            return pedidoDetalle;
        }).collect(Collectors.toList());
        pedido.setPedidoDetalles(pedidoDetalles);
        pedido.setCliente(cliente);
        return Optional.of(pedido);
    }

    @Override
    public void eliminarPorId(Integer id) {
        pedidoRepository.deleteById(id);
    }
}
