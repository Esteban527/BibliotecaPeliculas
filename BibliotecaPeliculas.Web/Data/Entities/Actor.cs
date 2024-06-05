using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.Data.Entities
{
    public class Actor
    {
        public int Id { get; set; }

        [MaxLength(32, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string FirstName { get; set; }

        [MaxLength(32, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string LastName { get; set; }

        [MaxLength(512, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Description { get; set; }
        public bool IsHidden { get; internal set; }
    }
}