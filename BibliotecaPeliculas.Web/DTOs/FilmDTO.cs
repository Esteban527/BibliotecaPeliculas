using LibraryFilms.Web.Data.Entities;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.DTOs
{
    public class FilmDTO
    {
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

        public IEnumerable<SelectListItem>? Directors { get; set; }


        [Range(1, int.MaxValue, ErrorMessage = "Debe seleccionar un Director.")]
        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        public int DirectorId { get; set; }


        [MaxLength(512, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Descripcion ")]
        public string Description { get; set; }
    }
}
