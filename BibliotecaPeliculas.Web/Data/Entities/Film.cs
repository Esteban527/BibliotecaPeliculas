using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.Data.Entities
{
    public class Film
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(32, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Titulo")]
        public string Title { get; set; }

        [MaxLength(24, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Genero")]
        public string Genre { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Fecha de estreno")]
        public DateTime PublishDate { get; set; }

        [MaxLength(24, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Director ")]
        public Director Director { get; set; } //relaciona la tabla de director con film


        [MaxLength(512, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Descripcion ")]
        public string Description { get; set; }


    }
}
