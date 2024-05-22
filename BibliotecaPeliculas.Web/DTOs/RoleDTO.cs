using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.DTOs
{
    public class RoleDTO
    {
        public int Id { get; set; }

        [MaxLength(32, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Name { get; set; }
    }
}
