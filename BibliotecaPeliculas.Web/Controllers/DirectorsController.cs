using AspNetCoreHero.ToastNotification.Abstractions;
using Humanizer;
using LibraryFilms.Web.Core;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using LibraryFilms.Web.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Controllers
{
    public class DirectorsController : Controller
    {
        private readonly DataContext _context;
        private readonly IDirectorsService _directorsService;
        private readonly INotyfService _notifyService;

        public DirectorsController(DataContext context, IDirectorsService directorsService, INotyfService notifyService)
        {
            _context = context;
            _directorsService = directorsService;
            _notifyService = notifyService;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            Response<List<Director>> response = await _directorsService.GetListAsyc();

            if (!response.IsSucces)
            {
                _notifyService.Error(response.Message);
                return RedirectToAction("Index", "Home");
            }

            _notifyService.Success(response.Message);
            return View(response.Result);
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
                    Id=id,
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
