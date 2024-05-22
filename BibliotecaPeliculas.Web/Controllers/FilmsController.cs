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
        private readonly DataContext _context; //Atributo de solo lectura de la clase manejadora DataContext
        private readonly IFilmsService _filmsService;
        private readonly INotyfService _notifyService;
        public FilmsController(DataContext context, IFilmsService filmsService, INotyfService notifyService) //Inyeccion de dependencia 
        {
            _context = context;
            _filmsService = filmsService;
            _notifyService = notifyService;
        }

        public async Task<IActionResult> Index()
        {
            Response<List<Film>> response = await _filmsService.GetListAsyc();

            return View(response.Result);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {

            return View();
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
                Response<FilmDTO> response = await _filmsService.CreateAsync(dto);
                
                if (response.IsSuccess)
                {
                    _notifyService.Success(response.Message);
                    return RedirectToAction(nameof(Index));
                }

                _notifyService.Error(response.Message);
                return View(dto); ;
            }



            catch (Exception ex)
            {
                _notifyService.Error(ex.Message);
                return View(dto);

            }

        }
    }
}
