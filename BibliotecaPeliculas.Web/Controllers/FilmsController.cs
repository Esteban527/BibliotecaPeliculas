using AspNetCoreHero.ToastNotification.Abstractions;
using LibraryFilms.Web.Core;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using LibraryFilms.Web.Services;
using Microsoft.AspNetCore.Mvc;

namespace LibraryFilms.Web.Controllers
{
    public class FilmsController : Controller
    {
        private readonly IFilmsService _filmsService;
        private readonly IDirectorsService _directorsService;
        private readonly INotyfService _notifyService;

        public FilmsController(IFilmsService filmsService, IDirectorsService directorsService, INotyfService notifyService)
        {
            _filmsService = filmsService;
            _directorsService = directorsService;
            _notifyService = notifyService;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var response = await _filmsService.GetListAsync();
            if (response.IsSuccess)
            {
                return View(response.Result);
            }
            else
            {
                _notifyService.Error(response.Message);
                return View();
            }
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            try
            {
                var directors = await _filmsService.GetDirectorsSelectListAsync(); // Obtener la lista de directores
                var viewModel = new FilmDTO
                {
                    Directors = directors // Asignar la lista de directores al ViewModel
                };

                return View(viewModel); // Devolver la vista con el ViewModel
            }
            catch (Exception ex)
            {
                _notifyService.Error("Error al cargar la página de creación."); // Notificar cualquier error
                return RedirectToAction(nameof(Index)); // Redirigir a la página de índice en caso de error
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create(FilmDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    _notifyService.Error("Debe ajustar los errores de validación.");
                    return View(dto);
                }
                var response = await _filmsService.CreateAsync(dto);
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
        public async Task<IActionResult> Edit(int id)
        {
            var response = await _filmsService.GetOneAsync(id);
            if (response.IsSuccess)
            {
                return View(response.Result);
            }
            else
            {
                _notifyService.Error(response.Message);
                return RedirectToAction(nameof(Index));
            }
        }

        [HttpPost]
        public async Task<IActionResult> Edit(FilmDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    _notifyService.Error("Debe ajustar los errores de validación.");
                    return View(dto);
                }
                var response = await _filmsService.EditAsync(dto);
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

        [HttpPost]
        public async Task<IActionResult> Delete(int id)
        {
            var response = await _filmsService.DeleteAsync(id);
            if (response.IsSuccess)
            {
                _notifyService.Success(response.Message);
            }
            else
            {
                _notifyService.Error(response.Message);
            }
            return RedirectToAction(nameof(Index));
        }
    }
}
