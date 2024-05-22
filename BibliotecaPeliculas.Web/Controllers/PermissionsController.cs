//using LibraryFilms.Web.Data.Entities;
//using LibraryFilms.Web.Data;
//using LibraryFilms.Web.DTOs;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
////using LibraryFilms.Web.Services;
//using LibraryFilms.Web.Core;
//using AspNetCoreHero.ToastNotification.Abstractions;

//namespace LibraryFilms.Web.Controllers
//{
//    public class PermissionsController : Controller
//    {
//        private readonly DataContext _context;

//        public PermissionsController(DataContext context)
//        {
//            _context = context;
//        }

//        [HttpGet]
//        public async Task<IActionResult> Index()
//        {
//            IEnumerable<User> list = await _context.Users.Include(b => b.Role)
//                                                         .ToListAsync();

//            return View(list);
//        }

//        [HttpGet]
//        public async Task<IActionResult> Create()
//        {
//            return View();
//        }
//        [HttpPost]
//        public async Task<IActionResult> Create(PermissionDTO dto)
//        {
//            try
//            {
//                if (!ModelState.IsValid)
//                {
//                    return View(dto);
//                }

//                Permission permission = new Permission
//                {
//                    Name = dto.Name,
//                    Description = dto.Description,
//                };

//                await _context.Permissions.AddAsync(permission);
//                await _context.SaveChangesAsync();

//                return RedirectToAction(nameof(Index));
//            }
//            catch (Exception ex)
//            {
//                return RedirectToAction(nameof(Index));
//            }
//        }

//        [HttpGet]
//        public async Task<IActionResult> Edit([FromRoute] int id)
//        {
//            try
//            {
//                Permission permission = await _context.Permissions.FirstOrDefaultAsync(a => a.Id == id);

//                if (permission is null)
//                {
//                    return RedirectToAction(nameof(Index));
//                }

//                PermissionDTO dto = new PermissionDTO
//                {
//                    Id = id,
//                    Name = permission.Name,
//                    Description = permission.Description,
//                };

//                return View(dto);
//            }
//            catch (Exception ex)
//            {
//                return RedirectToAction(nameof(Index));
//            }
//        }

//        [HttpPost]
//        public async Task<IActionResult> Edit(PermissionDTO dto)
//        {
//            try
//            {
//                if (!ModelState.IsValid)
//                {
//                    return View(dto);
//                }

//                Permission permission = await _context.Permissions.FirstOrDefaultAsync(a => a.Id == dto.Id);

//                if (permission is null)
//                {
//                    return NotFound();
//                }

//                permission.Name = dto.Name;
//                permission.Description = dto.Description;

//                _context.Permissions.Update(permission);
//                await _context.SaveChangesAsync();

//                return RedirectToAction(nameof(Index));
//            }
//            catch (Exception ex)
//            {
//                return RedirectToAction(nameof(Index));
//            }
//        }

//        [HttpPost]
//        public async Task<IActionResult> Delete([FromRoute] int id)
//        {
//            try
//            {
//                Permission description = await _context.Permissions.FirstOrDefaultAsync(a => a.Id == id);

//                if (description is null)
//                {
//                    return RedirectToAction(nameof(Index));
//                }

//                _context.Permissions.Remove(description);
//                await _context.SaveChangesAsync();

//                return RedirectToAction(nameof(Index));
//            }
//            catch (Exception ex)
//            {
//                return RedirectToAction(nameof(Index));
//            }
//        }
//    }
//}

