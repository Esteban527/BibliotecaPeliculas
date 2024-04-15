using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Controllers
{
    public class UsersController : Controller
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            IEnumerable<User> list = await _context.Users.ToListAsync();

            return View(list);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(UserDTO dto)
        {
            try 
            {
                if (!ModelState.IsValid) 
                { 
                    return View(dto);
                }

                User user = new User
                {
                    Name = dto.Name,
                    Password = dto.Password,
                    Role = dto.Role,
                };

                await _context.Users.AddAsync(user);
                await _context.SaveChangesAsync();

                return RedirectToAction(nameof(Index));
            }
            catch (Exception ex) 
            {
                return RedirectToAction(nameof(Index));
            }
        }

        [HttpGet]
        public async Task<IActionResult> Edit([FromRoute]int id)
        {
            try
            {
                User user = await _context.Users.FirstOrDefaultAsync(a => a.Id == id);

                if (user is null) 
                {
                    return RedirectToAction(nameof(Index));
                }

                UserDTO dto = new UserDTO
                {
                    Id = id,
                    Name = user.Name,
                    Password = user.Password,
                    Role = user.Role,

                };

                return View(dto);
            }
            catch (Exception ex) 
            {
                return RedirectToAction(nameof(Index));
            }
        }

        [HttpPost]
        public async Task<IActionResult> Edit(UserDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(dto);
                }

                User user = await _context.Users.FirstOrDefaultAsync(a => a.Id == dto.Id);

                if (user is null) 
                {
                    return NotFound();
                }

                user.Name = dto.Name;
                user.Password = dto.Password;

                _context.Users.Update(user);
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
                User user = await _context.Users.FirstOrDefaultAsync(a => a.Id == id);

                if (user is null)
                {
                    return RedirectToAction(nameof(Index));
                }

                _context.Users.Remove(user);
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
