package upeu.edu.example.mscatalogo.service;

import upeu.edu.example.mscatalogo.entity.Producto;

import java.util.List;
import java.util.Optional;

public interface ProductoService {
    public List<Producto> listar();

    public Producto guardar(Producto producto);

    public Producto actualizar(Producto producto);

    public Optional<Producto> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
