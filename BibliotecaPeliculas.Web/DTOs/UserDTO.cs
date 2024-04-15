using LibraryFilms.Web.Data.Entities;
using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }

        [MaxLength(32, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]

        public string Name { get; set; }
        [MaxLength(32, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]

        public string Password { get; set; }

        public Role Role { get; set; }
    }
}
