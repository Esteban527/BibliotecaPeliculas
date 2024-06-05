using LibraryFilms.Web.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Data 
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Director> Directors { get; set; }
        public DbSet<Film> Films { get; set; }
    }
}
