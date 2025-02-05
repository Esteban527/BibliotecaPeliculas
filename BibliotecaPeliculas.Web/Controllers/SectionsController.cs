﻿using AspNetCoreHero.ToastNotification.Abstractions;
using Humanizer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryFilms.Web.Core;
using LibraryFilms.Web.Core.Pagination;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.Requests;
using LibraryFilms.Web.Services;
using LibraryFilms.Web.Core.Attributes;



namespace LibraryFilms.Web.Controllers
{
    [Authorize]
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
        [CustomAuthorize(permission: "showSections", module: "Secciones")]
        public async Task<IActionResult> Index([FromQuery] int? RecordsPerPage,
                                               [FromQuery] int? page,
                                               [FromQuery] string? Filter)
        {
            PaginationRequest paginationRequest = new PaginationRequest
            {
                RecordsPerPage = RecordsPerPage ?? 15,
                Page = page ?? 1,
                Filter = Filter,
            };

            Response<PaginationResponse<Section>> response = await _sectionsService.GetListAsync(paginationRequest);

            return View(response.Result);
        }

        [HttpGet]
        [CustomAuthorize(permission: "showSections", module: "Secciones")]
        public IActionResult Create() 
        { 
            return View();
        }

        [HttpPost]
        [CustomAuthorize(permission: "createSecciones", module: "Secciones")]
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
        
        [HttpGet("{id}")]
        [CustomAuthorize(permission: "createSecciones", module: "Secciones")]
        public async Task<IActionResult> Edit([FromRoute] int id)
        {
            Response<Section> response = await _sectionsService.GetOneAsync(id);

            if (response.IsSuccess)
            {
                return View(response.Result);
            }

            _notify.Error(response.Errors.First());
            return RedirectToAction(nameof(Index));
        }

        [HttpPost]
        [CustomAuthorize(permission: "updateSections", module: "Secciones")]
        public async Task<IActionResult> Update(Section model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    _notify.Error("Debe ajustar los errores de validación.");
                    return View(model);
                }

                Response<Section> response = await _sectionsService.EditAsync(model);

                if (response.IsSuccess)
                {
                    _notify.Success(response.Message);
                    return RedirectToAction(nameof(Index));
                }

                _notify.Error(response.Errors.First());
                return View(model);
            }
            catch (Exception ex)
            {
                _notify.Error(ex.Message);
                return View(model);
            }
        }

        [HttpPost("{id}")]
        [CustomAuthorize(permission: "updateSections", module: "Secciones")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            Response<Section> response = await _sectionsService.DeleteAsync(id);

            if (response.IsSuccess)
            {
                _notify.Success(response.Message);
                return RedirectToAction(nameof(Index));
            }

            _notify.Error(response.Errors.First());
            return RedirectToAction(nameof(Index));
        }

        [HttpPost]
        [CustomAuthorize(permission: "updateSections", module: "Secciones")]
        public async Task<IActionResult> Toggle(int Id, bool Hide)
        {
            ToggleSectionRequest request = new ToggleSectionRequest { Id = Id, Hide = Hide };
            Response<Section> response = await _sectionsService.ToggleSectionAsync(request);

            _notify.Success("Sección actualizada con éxito");

            return RedirectToAction(nameof(Index));
        }
    }
}
