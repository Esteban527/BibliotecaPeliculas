using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Controllers
{
    public class UssersController : Controller
    {
        private readonly DataContext _context;

        public UssersController(DataContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            IEnumerable<Usser> list = await _context.Ussers.ToListAsync();

            return View(list);
        }
    }
}
