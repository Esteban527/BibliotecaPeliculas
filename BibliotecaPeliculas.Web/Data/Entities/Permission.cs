using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.Data.Entities
{
    public class Permission
    {
        public int Id { get; set; }

        [Display(Name="Permisos")]
        [MaxLength(64, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Name { get; set; }

        [MaxLength(128, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Description { get; set; }

        public bool IsHidden { get; set; } = false;

    }
}
