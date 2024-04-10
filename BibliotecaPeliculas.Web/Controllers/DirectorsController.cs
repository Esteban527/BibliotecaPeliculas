using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Controllers
{
    public class DirectorsController : Controller
    {
        private readonly DataContext _context;

        public DirectorsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            IEnumerable<Director> list = await _context.Directors.ToListAsync();
            
            return View(list);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(DirectorDTO dto)
        {
            try
            {
                Director director = new Director
                {
                    FirstName = dto.FirstName,
                    LastName = dto.LastName,
                    Description = dto.Description
                };
                await _context.Directors.AddAsync(director);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }



            catch (Exception ex)
            {
                return RedirectToAction(nameof(Index));

            }

    }
            


    }
}
