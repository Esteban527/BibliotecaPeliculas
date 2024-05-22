﻿using LibraryFilms.Web.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Data.Seeders
{
    public class SectionSeeder
    {
        private readonly DataContext _context;

        public SectionSeeder(DataContext context)
        {
            _context = context;
        }

        public async Task SeedAsync()
        {
            List<Section> sections = new List<Section>
            {
                new Section { Name = "General" },
                new Section { Name = "Telecomunicaciones" },
                new Section { Name = "Hacking" },
                new Section { Name = "Clases", IsHidden = true },
            };

            foreach (Section section in sections)
            {
                bool exists = await _context.Sections.AnyAsync(s => s.Name == section.Name);

                if (!exists)
                {
                    await _context.Sections.AddAsync(section);
                }
            }

            await _context.SaveChangesAsync();
        }
    }
}