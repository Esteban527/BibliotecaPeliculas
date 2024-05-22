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
                    _notifyService.Error("Debe ajustar los errores de validación.");
                    return View(dto);
                }

                Response<DirectorDTO> response = await _directorsService.CreateAsync(dto);

                if (response.IsSuccess)
                {
                    _notifyService.Success(response.Message);
                    return RedirectToAction(nameof(Index));
                }

                _notifyService.Error(response.Message);
                return View(dto);

            }
            catch (Exception ex)
            {
                _notifyService.Error(ex.Message);
                return View(dto);

            }

        }

        [HttpGet]
        public async Task<IActionResult> Edit([FromRoute] int id)
        {
            Response<DirectorDTO> response = await _directorsService.GetOneAsync(id);

            if (!response.IsSuccess)
            {
                _notifyService.Error(response.Message);
                return RedirectToAction(nameof(Index));
            }

            return View(response.Result);

        }

        [HttpPost]
        public async Task<IActionResult> Edit(DirectorDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    _notifyService.Error("Debe ajustar los errores de validación.");
                    return View(dto);
                }
                Response<DirectorDTO> response = await _directorsService.EditAsync(dto);

                if (response.IsSuccess)
                {
                    _notifyService.Success(response.Message);
                    return RedirectToAction(nameof(Index));
                }

                _notifyService.Error(response.Errors.First());
                return View(dto);
            }
            catch (Exception ex)
            {
                _notifyService.Error(ex.Message);
                return View(dto);
            }

        }


		[HttpPost]
		public async Task<IActionResult> Delete([FromRoute] int id)
		{
            Response<DirectorDTO> response = await _directorsService.DeleteAsync(id);

            if (response.IsSuccess)
            {
                _notifyService.Success(response.Message);
                return RedirectToAction(nameof(Index));
            }

            _notifyService.Error(response.Errors.First());
            return RedirectToAction(nameof(Index));

        }
	}
}
