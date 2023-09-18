package com.example.mspedido.controller;

import com.example.mspedido.entity.PedidoDetalle;
import com.example.mspedido.service.PedidoDetalleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/pedidoDetalle")
public class PedidoDetalleController {
    @Autowired
    private PedidoDetalleService pedidoDetalleService;

    @GetMapping()
    public ResponseEntity<List<PedidoDetalle>> list() {
        return ResponseEntity.ok().body(pedidoDetalleService.listar());
    }

    @PostMapping()
    public ResponseEntity<PedidoDetalle> save(@RequestBody PedidoDetalle pedidoDetalle) {
        return ResponseEntity.ok(pedidoDetalleService.guardar(pedidoDetalle));
    }

    @PutMapping()
    public ResponseEntity<PedidoDetalle> update(@RequestBody PedidoDetalle pedidoDetalle) {
        return ResponseEntity.ok(pedidoDetalleService.actualizar(pedidoDetalle));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PedidoDetalle> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(pedidoDetalleService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Integer id) {
        pedidoDetalleService.eliminarPorId(id);
        return "Eliminacion Correcta";
    }
}
