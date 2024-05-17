﻿using AspNetCoreHero.ToastNotification.Abstractions;
using LibraryFilms.Web.Core;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.Services;
using Microsoft.AspNetCore.Mvc;

namespace LibraryFilms.Web.Controllers
{
    public class SectionsController : Controller
    {
        private readonly ISectionsService _sectionsService;
        private readonly INotyfService _notify;


        public SectionsController(ISectionsService sectionsService, INotyfService notify)
        {
            _sectionsService = sectionsService;
            _notify = notify;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            Response<List<Section>> response = await _sectionsService.GetListAsync();

            return View(response.Result);
        }

        [HttpGet]
        public IActionResult Create() 
        { 
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Section model)
        {
            try 
            {
                if(!ModelState.IsValid) 
                {
                    _notify.Error("Debe ajustar los errores de validación.");
                    return View(model);
                }

                Response<Section> response = await _sectionsService.CreateAsync(model);

                if (response.IsSuccess)
                {
                    _notify.Success(response.Message);
                    return RedirectToAction(nameof(Index));
                }

                _notify.Error(response.Message);
                return View(model);
            }
            catch (Exception ex)
            {
                _notify.Error(ex.Message);
                return View(model);
            }

            return View();
        }
    }
}
