using Humanizer;
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
                if (!ModelState.IsValid)
                {
                    return View(dto);
                }
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

        [HttpGet]
        public async Task<IActionResult> Edit([FromRoute] int id)
        {
            try
            {
                Director director = await _context.Directors.FirstOrDefaultAsync(d => d.Id == id);

                if (director is null)
                {
                    return RedirectToAction(nameof(Index));
                }

                DirectorDTO dto = new DirectorDTO
                {
                    FirstName = director.FirstName,
                    LastName = director.LastName,
                    Description = director.Description,
                };

                return View(dto);
            }
            catch (Exception ex)
            {
                return RedirectToAction(nameof(Index));
            }

        }

        [HttpPost]
        public async Task<IActionResult> Edit(DirectorDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(dto);
                }
                Director director = await _context.Directors.FirstOrDefaultAsync(d => d.Id == dto.Id);

                if (director is null)
                {
                    return NotFound();
                }
                director.FirstName = dto.FirstName;
                director.LastName = dto.LastName;
                director.Description = dto.Description;

                _context.Directors.Update(director);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            catch (Exception ex)
            {
                return RedirectToAction(nameof(Index));
            }



        }


		[HttpPost]
		public async Task<IActionResult> Delete([FromRoute] int id)
		{
			try
			{
				Director director = await _context.Directors.FirstOrDefaultAsync(d => d.Id == id);

				if (director is null)
				{
					return RedirectToAction(nameof(Index));
				}

                _context.Directors.Remove(director);
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
