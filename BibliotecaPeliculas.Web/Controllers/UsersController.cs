using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Controllers
{
    public class UsersController : Controller
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            IEnumerable<User> list = await _context.Users.ToListAsync();

            return View(list);
        }
    }
}
