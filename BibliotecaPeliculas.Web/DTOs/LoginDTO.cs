using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.DTOs
{
    public class LoginDTO
    {
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [EmailAddress(ErrorMessage = "Debes ingresar un correo válido.")]
        public string Email { get; set; } = null!;

        [Display(Name = "Contraseña")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MinLength(6, ErrorMessage = "El campo {0} Ddebe tener al menos {1} carácteres")]
        public string Password { get; set; } = null!;

    }
}
