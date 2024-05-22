using System.ComponentModel.DataAnnotations;

namespace LibraryFilms.Web.Data.Entities
{
    public class Director
    {
        [Key] 
        public int Id { get; set; }
        
        [MaxLength(32, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")] //se llama data annotations o atributos de propiedades y sirven para aplicar reglas de validacion
        [Display(Name = "Nombres")]
        public string FirstName { get; set; }
        
        [MaxLength(32, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Apeliidos")]
        public string LastName { get; set; }
       
        [MaxLength(512, ErrorMessage = "El campo {0} debe tener minimo {1} carácteres")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Descripcion ")]
        public string Description { get; set; }
    }
}
