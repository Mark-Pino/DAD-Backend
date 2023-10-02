package upeu.edu.example.mscatalogo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import upeu.edu.example.mscatalogo.entity.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {
}
