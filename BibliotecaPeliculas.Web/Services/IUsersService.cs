using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NuGet.Common;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;

using ClaimsUser = System.Security.Claims.ClaimsPrincipal;

namespace LibraryFilms.Web.Services
{
    public interface IUsersService
    {
        Task<IdentityResult> AddUserAsync(User user, string password);

        Task<IdentityResult> ConfirmEmailAsync(User user, string token);

        Task<bool> CurrentUserIsAuthorizedAsync(string permision, string module);

        Task<string> GenerateEmailConfigurationTokenAsync(User user);

        Task<User> GetUserAsync(string email);

        Task<SignInResult> LoginAsync(LoginDTO model);

        Task LogoutAsync();
    }

    public class UsersService : IUsersService
    {
        private readonly DataContext _context;
        private readonly SignInManager<User> _singInManager;
        private readonly UserManager<User> _userManager;
        private IHttpContextAccessor _httpContextAccessor;

        public UsersService(UserManager<User> userManager, DataContext context, SignInManager<User> singInManager, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _context = context;
            _singInManager = singInManager;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<IdentityResult> AddUserAsync(User user, string password)
        {
            return await _userManager.CreateAsync(user, password);
        }

        public async Task<IdentityResult> ConfirmEmailAsync(User user, string token)
        {
            return await _userManager.ConfirmEmailAsync(user, token);
        }

        public async Task<bool> CurrentUserIsAuthorizedAsync(string permission, string module)
        {
            ClaimsUser? claimUser = _httpContextAccessor.HttpContext?.User;

            //Valida si está logueado
            if (claimUser is null)
            {
                return false;
            }

            string? userName = claimUser.Identity.Name;

            User? user = await GetUserAsync(userName);

            //Valida si user existe
            if (user is null)
            {
                return false;
            }

            //Valida si es admin
            if (user.LibraryFilmsRole.Name == "Administrador")
            {
                return true;
            }

            //Si no es administrador, valida si tiene el permiso
            return await _context.Permissions.Include(p => p.RolePermissions)
                                             .AnyAsync(p => (p.Module == module && p.Name == permission)
                                                        && p.RolePermissions.Any(rp => rp.RoleId == user.LibraryFilmsRoleId)); 
        }

        public async Task<string> GenerateEmailConfigurationTokenAsync(User user)
        {
            return await _userManager.GenerateEmailConfirmationTokenAsync(user);
        }
        
        public async Task<User> GetUserAsync(string email)
        {
            User? user = await _context.Users.Include(u => u.LibraryFilmsRole)
                                        .FirstOrDefaultAsync(u => u.Email == email);

            return user;
        }

        public async Task<SignInResult> LoginAsync(LoginDTO model)
        {
            return await _singInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
        }

        public async Task LogoutAsync()
        {
            await _singInManager.SignOutAsync();
        }
    }
}
