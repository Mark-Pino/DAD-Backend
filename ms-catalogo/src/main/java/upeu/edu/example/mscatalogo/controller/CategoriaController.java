package upeu.edu.example.mscatalogo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import upeu.edu.example.mscatalogo.entity.Categoria;
import upeu.edu.example.mscatalogo.service.CategoriaService;

import java.util.List;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;

    @GetMapping()
    public ResponseEntity<List<Categoria>> list() {
        return ResponseEntity.ok().body(categoriaService.listar());
    }

    @PostMapping()
    public ResponseEntity<Categoria> save(@RequestBody Categoria categoria) {
        return ResponseEntity.ok(categoriaService.guardar(categoria));
    }

    @PutMapping()
    public ResponseEntity<Categoria> update(@RequestBody Categoria categoria) {
        return ResponseEntity.ok(categoriaService.actualizar(categoria));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(categoriaService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Integer id) {
        categoriaService.eliminarPorId(id);
        return "Eliminacion Correcta";
    }

}
