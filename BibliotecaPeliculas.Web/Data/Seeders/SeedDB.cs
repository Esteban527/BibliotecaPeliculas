using LibraryFilms.Web.Services;

namespace LibraryFilms.Web.Data.Seeders
{
    public class SeedDB
    {
        private readonly DataContext _context;
        private readonly IUsersService _usersService;

        public SeedDB(DataContext context, IUsersService usersService)
        {
            _context = context;
            _usersService = usersService;
        }

        public async Task SeedAsync()
        {
            //await new SectionSeeder(_context).SeedAsync();
            await new PermissionSeeder(_context).SeedAsync();
            await new UserRoleSeeder(_usersService, _context).SeedAsync();
            
        }
    }
}
