package upeu.edu.example.mscatalogo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import upeu.edu.example.mscatalogo.entity.Producto;
import upeu.edu.example.mscatalogo.service.ProductoService;

import java.util.List;

@RestController
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @GetMapping()
    public ResponseEntity<List<Producto>> list() {
        return ResponseEntity.ok().body(productoService.listar());
    }

    @PostMapping()
    public ResponseEntity<Producto> save(@RequestBody Producto producto) {
        return ResponseEntity.ok(productoService.guardar(producto));
    }

    @PutMapping()
    public ResponseEntity<Producto> update(@RequestBody Producto producto) {
        return ResponseEntity.ok(productoService.actualizar(producto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(productoService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Integer id) {
        productoService.eliminarPorId(id);
        return "Eliminacion Correcta";
    }

}
