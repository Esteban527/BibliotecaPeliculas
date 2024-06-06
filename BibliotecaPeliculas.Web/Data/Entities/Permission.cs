using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.Data.Entities
{
    public class Permission
    {
        public int Id { get; set; }

        [Display(Name = "Permiso")]
        [MaxLength(64, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Name { get; set; }

        [Display(Name = "Descripción")]
        [MaxLength(512, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        public string Description { get; set; }

        [Display(Name = "Modulo")]
        [MaxLength(64, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Module { get; set; } = null;

        public ICollection<RolePermission> RolePermissions { get; set; }
    }
}
