using LibraryFilms.Web.Data.Entities;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }

        [MaxLength(128, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]

        public string Name { get; set; }
        [MaxLength(32, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]

        public string Password { get; set; }

        public IEnumerable<SelectListItem>? Roles { get; set; }

        
        public int RoleId { get; set; }
    }
}
