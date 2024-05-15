using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.Services;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Data.Seeders
{
    public class UserRoleSeeder
    {
        private readonly IUsersService _usersService;
        private readonly DataContext _context;

        public UserRoleSeeder(IUsersService usersService, DataContext context)
        {
            _usersService = usersService;
            _context = context;
        }

        public async Task SeedAsync()
        {
            await CheckRolesAsync();
            await CheckUsers();
        }

        private async Task AdministradorRoleAsync()
        {
            LibraryFilmsRole? tmp = await _context.LibraryFilmsRoles.Where(ir => ir.Name == "Administrador").FirstOrDefaultAsync();
            if (tmp == null)
            {
                LibraryFilmsRole role = new LibraryFilmsRole { Name = "Administrador" };
                _context.LibraryFilmsRoles.Add(role);
                await _context.SaveChangesAsync();
            }
        }

        private async Task CheckUsers()
        {
            // Administrador
            User? user = await _usersService.GetUserAsync("nelsonp@yopmail.com");

            LibraryFilmsRole adminRole = _context.LibraryFilmsRoles.Where(r => r.Name == "Administrador")
                                                                   .First();
            if (user == null) 
            {
                user = new User
                {
                    Email = "nelsonp@yopmail.com",
                    FirstName = "Nelson",
                    LastName = "Pinzon",
                    PhoneNumber = "1234567890",
                    UserName = "nelsonp@yopmail.com",
                    Document = "7777",
                    LibraryFilmsRole = adminRole,
                };

                await _usersService.AddUserAsync(user, "1234");

                string token = await _usersService.GenerateEmailConfigurationTokenAsync(user);
                await _usersService.ConfirmEmailAsync(user, token);
            }

            // Creador de contenido
            user = await _usersService.GetUserAsync("kikep@yopmail.com");


            LibraryFilmsRole creadorDeContenidoRole = await _context.LibraryFilmsRoles.Where(pbr => pbr.Name == "Creador de contenido")
                                                                         .FirstAsync();

            if (user == null)
            {
                user = new User
                {
                    Email = "kikep@yopmail.com",
                    FirstName = "kike",
                    LastName = "Pinzon",
                    PhoneNumber = "0987654321",
                    UserName = "kikep@yopmail.com",
                    Document = "1111",
                    LibraryFilmsRole = creadorDeContenidoRole
                };

                await _usersService.AddUserAsync(user, "1234");

                string token = await _usersService.GenerateEmailConfigurationTokenAsync(user);
                await _usersService.ConfirmEmailAsync(user, token);
            }

            // Gestor de usuarios
            user = await _usersService.GetUserAsync("leidym@yopmail.com");


            LibraryFilmsRole gestorDeUsuarios = await _context.LibraryFilmsRoles.Where(pbr => pbr.Name == "Gestor de usuarios")
                                                                         .FirstAsync();

            if (user == null)
            {
                user = new User
                {
                    Email = "leidym@yopmail.com",
                    FirstName = "leidy",
                    LastName = "muñoz",
                    PhoneNumber = "33333333",
                    UserName = "leidym@yopmail.com",
                    Document = "9999",
                    LibraryFilmsRole = gestorDeUsuarios
                };

                await _usersService.AddUserAsync(user, "1234");

                string token = await _usersService.GenerateEmailConfigurationTokenAsync(user);
                await _usersService.ConfirmEmailAsync(user, token);
            }

        }

        private async Task CreadorDeContenidoRoleAsync()
        {
            LibraryFilmsRole? tmp = await _context.LibraryFilmsRoles.Where(pbr => pbr.Name == "Creador de contenido")
                                                                    .FirstOrDefaultAsync();

            if(tmp == null)
            {
                LibraryFilmsRole role = new LibraryFilmsRole { Name = "Creador de contenido" };

                _context.LibraryFilmsRoles.Add(role);

                List<Permission> permissions = await _context.Permissions.Where( p => p.Module == "Secciones").ToListAsync();

                foreach (Permission permission in permissions) 
                { 
                    _context.RolePermissions.Add(new RolePermission { Role = role, Permission = permission });
                }
            }

            await _context.SaveChangesAsync();
        }

        private async Task GestorDeUsuariosRoleAsync()
        {
            LibraryFilmsRole? tmp = await _context.LibraryFilmsRoles.Where(pbr => pbr.Name == "Gestor de usuarios")
                                                                    .FirstOrDefaultAsync();

            if (tmp == null)
            {
                LibraryFilmsRole role = new LibraryFilmsRole { Name = "Gestor de usuarios" };

                _context.LibraryFilmsRoles.Add(role);

                List<Permission> permissions = await _context.Permissions.Where(p => p.Module == "Usuarios").ToListAsync();

                foreach (Permission permission in permissions)
                {
                    _context.RolePermissions.Add(new RolePermission { Role = role, Permission = permission });
                }
            }

            await _context.SaveChangesAsync();
        }
        private async Task CheckRolesAsync()
        {
            await AdministradorRoleAsync();
            await CreadorDeContenidoRoleAsync();
            await GestorDeUsuariosRoleAsync();
        }

        
    }
}
