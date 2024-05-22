using LibraryFilms.Web.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.IO;

namespace LibraryFilms.Web.Data
{
    public class DataContext : IdentityDbContext<User>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<LibraryFilmsRole> LibraryFilmsRoles { get; set; }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<RolePermission> RolePermissions { get; set; }
        public DbSet<RoleSection> RoleSections { get; set; }
        public DbSet<Section> Sections { get; set; }



        //public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            configureIndexes(modelBuilder);

            base.OnModelCreating(modelBuilder);
        }

        private void configureIndexes(ModelBuilder modelBuilder)
        {
            //Sections
            modelBuilder.Entity<Section>()
                        .HasIndex(s => s.Name)
                        .IsUnique();

            //Roles
            modelBuilder.Entity<LibraryFilmsRole>()
                        .HasIndex(s => s.Name)
                        .IsUnique();

            //Users
            modelBuilder.Entity<User>()
                        .HasIndex(s => s.Document)
                        .IsUnique();


            //Role Permission
            modelBuilder.Entity<RolePermission>()
                        .HasKey(rs => new { rs.RoleId, rs.PermissionId });

            modelBuilder.Entity<RolePermission>()
                        .HasOne(rs => rs.Role)
                        .WithMany(s => s.RolePermissions)
                        .HasForeignKey(rs => rs.RoleId);

            modelBuilder.Entity<RolePermission>()
                        .HasOne(rs => rs.Permission)
                        .WithMany(s => s.RolePermissions)
                        .HasForeignKey(rs => rs.PermissionId);

            //Role Section
            modelBuilder.Entity<RoleSection>()
                        .HasKey(rs => new { rs.RoleId, rs.SectionId });

            modelBuilder.Entity<RoleSection>()
                        .HasOne(rs => rs.Role)
                        .WithMany(s => s.RoleSections)
                        .HasForeignKey(rs => rs.RoleId);

            modelBuilder.Entity<RoleSection>()
                        .HasOne(rs => rs.Section)
                        .WithMany(s => s.RoleSections)
                        .HasForeignKey(rs => rs.SectionId);
        }
    }
}
