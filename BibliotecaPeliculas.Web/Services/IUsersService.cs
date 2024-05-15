using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NuGet.Common;

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

        public UsersService(UserManager<User> userManager, DataContext context, SignInManager<User> singInManager)
        {
            _userManager = userManager;
            _context = context;
            _singInManager = singInManager;
            
        }

        public async Task<IdentityResult> AddUserAsync(User user, string password)
        {
            return await _userManager.CreateAsync(user, password);
        }

        public async Task<IdentityResult> ConfirmEmailAsync(User user, string token)
        {
            return await _userManager.ConfirmEmailAsync(user, token);
        }

        public async Task<bool> CurrentUserIsAuthorizedAsync(string permision, string module)
        {
            throw new NotImplementedException();
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
