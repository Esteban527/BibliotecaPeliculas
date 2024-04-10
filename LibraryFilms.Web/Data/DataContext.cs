using LibraryFilms.Web.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        //public DbSet<Section> Sections { get; set; }
        public DbSet<Usser> Ussers { get; set; }
        public DbSet<Role> Roles { get; set; }
    }
}
