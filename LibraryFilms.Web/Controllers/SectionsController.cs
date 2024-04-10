using Microsoft.AspNetCore.Mvc;

namespace LibraryFilms.Web.Controllers
{
    public class SectionsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
