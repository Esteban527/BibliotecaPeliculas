using LibraryFilms.Web.Data.Entities;

namespace LibraryFilms.Web.Data.Seeders
{
    public class PermissionSeeder
    {
        private readonly DataContext _context;

        public PermissionSeeder(DataContext context)
        {
            _context = context;
        }

        public async Task SeedAsync()
        {
            List<Permission> permissions = new List<Permission>();
            List<Permission> sectionsPermissions = Sections();
            List<Permission> usersPermissions = Users();
            permissions.AddRange(sectionsPermissions);
            permissions.AddRange(usersPermissions);

            foreach (Permission permission in permissions) 
            { 
                Permission? tmpPermission = _context.Permissions.Where(p => p.Name == permission.Name && p.Module == permission.Module)
                                                                .FirstOrDefault();
                if (tmpPermission is null) 
                { 
                    _context.Permissions.Add(permission);
                }
            }

            await _context.SaveChangesAsync();
        }

        private List<Permission> Users()
        {
            List<Permission> list = new List<Permission>();
            {
                new Permission { Name = "showUsers", Description = "Ver Usuarios", Module = "Usuarios" };
                new Permission { Name = "createUsers", Description = "Crear Usuarios", Module = "Usuarios" };
                new Permission { Name = "updateUsers", Description = "Editar Usuarios", Module = "Usuarios" };
                new Permission { Name = "deleteUsers", Description = "Eliminar Usuarios", Module = "Usuarios" };
            }

            return list;
        }

        private List<Permission> Sections()
        {
            List<Permission> list = new List<Permission>();
            {
                new Permission { Name = "showSecciones", Description = "Ver Secciones", Module = "Secciones" };
                new Permission { Name = "createSecciones", Description = "Crear Secciones", Module = "Secciones" };
                new Permission { Name = "updateSecciones", Description = "Editar Secciones", Module = "Secciones" };
                new Permission { Name = "deleteSecciones", Description = "Eliminar Secciones", Module = "Secciones" };
            }

            return list;
        }
    }
}
