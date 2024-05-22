using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Controllers
{
    public class RolesController : Controller
    {
        private readonly DataContext _context;

        public RolesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            IEnumerable<Role> list = await _context.Roles.ToListAsync();

            return View(list);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }

        [HttpPost   ]
        public async Task<IActionResult> Create(RoleDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(dto);
                }

                Role role = new Role
                {
                    Name = dto.Name,
                };

                await _context.Roles.AddAsync(role);
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
                Role role = await _context.Roles.FirstOrDefaultAsync(a => a.Id == id);

                if (role is null)
                {
                    return RedirectToAction(nameof(Index));
                }

                RoleDTO dto = new RoleDTO
                {
                    Id = id,
                    Name = role.Name,
                };

                return View(dto);
            }
            catch (Exception ex)
            {
                return RedirectToAction(nameof(Index));
            }
        }

        [HttpPost]
        public async Task<IActionResult> Edit(RoleDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(dto);
                }

                Role role = await _context.Roles.FirstOrDefaultAsync(a => a.Id == dto.Id);

                if (role is null)
                {
                    return NotFound();
                }

                role.Name = dto.Name;

                _context.Roles.Update(role);
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
                Role role = await _context.Roles.FirstOrDefaultAsync(a => a.Id == id);

                if (role is null)
                {
                    return RedirectToAction(nameof(Index));
                }

                _context.Roles.Remove(role);
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
