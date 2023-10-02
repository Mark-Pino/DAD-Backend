package upeu.edu.example.mscatalogo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import upeu.edu.example.mscatalogo.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria,Integer> {
}
