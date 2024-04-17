using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Controllers
{
    public class ActorsController : Controller
    {
        private readonly DataContext _context;

        public ActorsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            IEnumerable<Actor> list = await _context.Actors.ToListAsync();

            return View(list);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(ActorDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(dto);
                }

                Actor actor = new Actor
                {
                    FirstName = dto.FirstName,
                    LastName = dto.LastName,
                };

                await _context.Actors.AddAsync(actor);
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
                Actor actor = await _context.Actors.FirstOrDefaultAsync(a => a.Id == id);

                if (actor is null)
                {
                    return RedirectToAction(nameof(Index));
                }

                ActorDTO dto = new ActorDTO
                {
                    Id = id,
                    FirstName = actor.FirstName,
                    LastName = actor.LastName,
                };

                return View(dto);
            }
            catch (Exception ex)
            {
                return RedirectToAction(nameof(Index));
            }
        }

        [HttpPost]
        public async Task<IActionResult> Edit(ActorDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(dto);
                }

                Actor actor = await _context.Actors.FirstOrDefaultAsync(a => a.Id == dto.Id);

                if (actor is null)
                {
                    return NotFound();
                }

                actor.FirstName = dto.FirstName;
                actor.LastName = dto.LastName;

                await _context.Actors.AddAsync(actor);
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
                Actor actor = await _context.Actors.FirstOrDefaultAsync(a => a.Id == id);

                if (actor is null)
                {
                    return RedirectToAction(nameof(Index));
                }

                _context.Actors.Remove(actor);
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