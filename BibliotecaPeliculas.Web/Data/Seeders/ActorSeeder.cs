using LibraryFilms.Web.Data.Entities;
using Microsoft.EntityFrameworkCore;
using static System.Collections.Specialized.BitVector32;

namespace LibraryFilms.Web.Data.Seeders
{
    public class ActorSeeder
    {
        private readonly DataContext _context;

        public ActorSeeder(DataContext context)
        {
            _context = context;
        }

        public async Task SeedAsync()
        {
            List<Actor> actors = new List<Actor>
            {
                new Actor { FirstName = "Ryan" },
                new Actor { FirstName = "Chris" },
                new Actor { FirstName = "Timothée" },

                new Actor { LastName = "Reynolds" },
                new Actor { LastName = "Pratt" },
                new Actor { LastName = "Chalamet" },
            };

            foreach (Actor actor in actors)
            {
                bool exists = await _context.Actors.AnyAsync(a => a.FirstName == actor.FirstName);

                if (!exists)
                {
                    await _context.Actors.AddAsync(actor);
                }

                await _context.SaveChangesAsync();
            }

            foreach (Actor actor in actors)
            {
                bool exists = await _context.Actors.AnyAsync(a => a.LastName == actor.LastName);

                if (!exists)
                {
                    await _context.Actors.AddAsync(actor);
                }

                await _context.SaveChangesAsync();
            }
        }
    }
}
