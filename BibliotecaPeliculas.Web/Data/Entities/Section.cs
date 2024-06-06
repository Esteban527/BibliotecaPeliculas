using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.Data.Entities
{
<<<<<<< HEAD
<<<<<<<< HEAD:BibliotecaPeliculas.Web/Data/Entities/Rol.cs
    public class Rol
========
    public class Section
>>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93:BibliotecaPeliculas.Web/Data/Entities/Section.cs
=======
    public class Section
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
    {
        public int Id { get; set; }

        [Display(Name = "Sección")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MaxLength(64, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        public string Name { get; set; }
        
        public bool IsHidden { get; set; }

        public ICollection<RoleSection> RoleSections { get; set; }
    }
}

