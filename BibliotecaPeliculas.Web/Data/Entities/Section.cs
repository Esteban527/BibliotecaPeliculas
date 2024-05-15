using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.Data.Entities
{
    public class Section
    {
        public int Id { get; set; }

        [Display(Name = "Sección")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MaxLength(64, ErrorMessage = "El campo {0} debe tener maximo {1} caracteres")]
        public string Name { get; set; }
        
        public bool IsHidden { get; set; }
    }
}

