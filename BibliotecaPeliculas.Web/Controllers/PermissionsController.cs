using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Controllers
{
    public class PermissionsController : Controller
    {
        private readonly DataContext _context;

        public PermissionsController(DataContext context)
        {
            _context = context;
        }
        // Video Clase 10 - 1:11:00 Creando View Permission index
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            IEnumerable<Permission> list = await _context.Permissions.ToListAsync();

            return View(list);
        }

        //[HttpGet]
        //public async Task<IActionResult> Create()
        //{
        //    return View();
        //}

        //[HttpPost]
        //public async Task<IActionResult> Create(PermissionDTO dto)
        //{
        //    try
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return View(dto);
        //        }

        //        Permission permission = new Permission
        //        {
        //            Name = dto.Name,
        //            Description = dto.Description,
        //        };

        //        await _context.Roles.AddAsync(permission);
        //        await _context.SaveChangesAsync();

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch (Exception ex)
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //}

        //[HttpGet]
        //public async Task<IActionResult> Edit([FromRoute] int id)
        //{
        //    try
        //    {
        //        Permission permission = await _context.Permission.FirstOrDefaultAsync(a => a.Id == id);

        //        if (permission is null)
        //        {
        //            return RedirectToAction(nameof(Index));
        //        }

        //        PermissionDTO dto = new PermissionDTO
        //        {
        //            Id = id,
        //            Name = permission.Name,
        //            Description = permission.Description,
        //        };

        //        return View(dto);
        //    }
        //    catch (Exception ex)
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //}

        //[HttpPost]
        //public async Task<IActionResult> Edit(PermissionDTO dto)
        //{
        //    try
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return View(dto);
        //        }

        //        Permission permission = await _context.Permission.FirstOrDefaultAsync(a => a.Id == dto.Id);

        //        if (Permission is null)
        //        {
        //            return NotFound();
        //        }

        //        Permission.Name = dto.Name;
        //        Permission.Description = dto.Description;

        //        _context.Description.Update(Description);
        //        await _context.SaveChangesAsync();

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch (Exception ex)
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //}

        //[HttpPost]
        //public async Task<IActionResult> Delete([FromRoute] int id)
        //{
        //    try
        //    {
        //        Description description = await _context.Description.FirstOrDefaultAsync(a => a.Id == id);

        //        if (description is null)
        //        {
        //            return RedirectToAction(nameof(Index));
        //        }

        //        _context.Description.Remove(description);
        //        await _context.SaveChangesAsync();

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch (Exception ex)
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //}
    }
}

