using LibraryFilms.Web.Services;
using System.Reflection.PortableExecutable;

namespace LibraryFilms.Web.Data.Seeders
{
    public class SeedDb
    {
        private readonly DataContext _context;
        private readonly IActorsService _actorsService;

        public SeedDb(DataContext context, IActorsService actorsService)
        {
            _context = context;
            _actorsService = actorsService;
        }

        public async Task SeedAsync()
        {
            await new ActorSeeder(/*_actorsService,*/ _context).SeedAsync();

        }
    }
}