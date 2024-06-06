using LibraryFilms.Web.Data.Entities;
using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.DTOs
{
    public class AccountUserDTO
    {
        public Guid Id { get; set; }

        [Display(Name = "Documento")]
        [MaxLength(32, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Document { get; set; } = null!;

        [Display(Name = "Nombres")]
        [MaxLength(64, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string FirstName { get; set; } = null!;

        [Display(Name = "Apellidos")]
        [MaxLength(64, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string LastName { get; set; } = null!;

        [Display(Name = "Teléfono")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string PhoneNumber { get; set; } = null!;

        public string Email { get; set; }
    }
}
