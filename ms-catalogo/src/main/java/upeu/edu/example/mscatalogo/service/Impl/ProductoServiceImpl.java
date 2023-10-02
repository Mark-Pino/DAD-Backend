package upeu.edu.example.mscatalogo.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import upeu.edu.example.mscatalogo.entity.Producto;
import upeu.edu.example.mscatalogo.repository.ProductoRepository;
import upeu.edu.example.mscatalogo.service.ProductoService;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoServiceImpl implements ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public List<Producto> listar() {
        return productoRepository.findAll();
    }

    @Override
    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Producto actualizar(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Optional<Producto> listarPorId(Integer id) {
        return productoRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        productoRepository.deleteById(id);
    }
}
